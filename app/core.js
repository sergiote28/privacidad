/* Mirror Trade Scanner — cálculos (sirve en el navegador y en el bot de Node.js) */
(function (root) {
  const INDICES = [
    { name: "Crash 1000", kind: "crash", fallback: "CRASH1000", minLot: 0.2 },
    { name: "Crash 900",  kind: "crash", fallback: "CRASH900",  minLot: 0.2 },
    { name: "Crash 600",  kind: "crash", fallback: "CRASH600",  minLot: 0.2 },
    { name: "Crash 500",  kind: "crash", fallback: "CRASH500",  minLot: 0.2 },
    { name: "Crash 300",  kind: "crash", fallback: "CRASH300N", minLot: 1.0 },
    { name: "Boom 1000",  kind: "boom",  fallback: "BOOM1000",  minLot: 0.2 },
    { name: "Boom 900",   kind: "boom",  fallback: "BOOM900",   minLot: 0.2 },
    { name: "Boom 600",   kind: "boom",  fallback: "BOOM600",   minLot: 0.2 },
    { name: "Boom 500",   kind: "boom",  fallback: "BOOM500",   minLot: 0.2 },
    { name: "Boom 300",   kind: "boom",  fallback: "BOOM300N",  minLot: 1.0 }
  ];

  // Busca el código real de cada índice en la lista "active_symbols" de Deriv
  function resolveSymbols(activeSymbols) {
    const list = (activeSymbols || []).map(s => ({
      symbol: s.symbol || s.underlying_symbol,
      name: String(s.display_name || s.underlying_symbol_name || "").trim().toLowerCase()
    }));
    return INDICES.map(ix => {
      const n = ix.name.toLowerCase();
      const hit = list.find(s => s.name === n + " index") || list.find(s => s.name.startsWith(n + " "));
      return Object.assign({}, ix, { symbol: hit ? hit.symbol : ix.fallback });
    });
  }

  function ema(values, period) {
    const out = new Array(values.length).fill(null);
    if (values.length < period) return out;
    const k = 2 / (period + 1);
    let prev = values.slice(0, period).reduce((a, b) => a + b, 0) / period;
    out[period - 1] = prev;
    for (let i = period; i < values.length; i++) { prev = values[i] * k + prev * (1 - k); out[i] = prev; }
    return out;
  }

  // RSI de Wilder (el mismo que usan TradingView y MetaTrader)
  function rsiSeries(closes, period) {
    const out = new Array(closes.length).fill(null);
    if (closes.length <= period) return out;
    let gain = 0, loss = 0;
    for (let i = 1; i <= period; i++) {
      const d = closes[i] - closes[i - 1];
      if (d >= 0) gain += d; else loss -= d;
    }
    let ag = gain / period, al = loss / period;
    out[period] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
    for (let i = period + 1; i < closes.length; i++) {
      const d = closes[i] - closes[i - 1];
      ag = (ag * (period - 1) + Math.max(d, 0)) / period;
      al = (al * (period - 1) + Math.max(-d, 0)) / period;
      out[i] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
    }
    return out;
  }

  function atr(candles, period) {
    if (candles.length <= period) return null;
    const tr = [];
    for (let i = 1; i < candles.length; i++) {
      const c = candles[i], p = candles[i - 1];
      tr.push(Math.max(c.high - c.low, Math.abs(c.high - p.close), Math.abs(c.low - p.close)));
    }
    let a = tr.slice(0, period).reduce((x, y) => x + y, 0) / period;
    for (let i = period; i < tr.length; i++) a = (a * (period - 1) + tr[i]) / period;
    return a;
  }

  /* Convierte el RSI en un porcentaje de 1 a 100.
     Crash: RSI 80 = 90%,  RSI 90 = 95%,  RSI 100 = 100%
     Boom : RSI 20 = 90%,  RSI 10 = 95%,  RSI 0   = 100%  */
  function rsiToPct(rsi, kind, cfg) {
    if (rsi == null) return null;
    const level = kind === "crash" ? (cfg.rsiCrash || 80) : 100 - (cfg.rsiBoom || 20);
    const x = kind === "crash" ? rsi : 100 - rsi;
    const pct = x <= level ? (x / level) * 90 : 90 + ((x - level) / (100 - level)) * 10;
    return Math.max(1, Math.min(100, Math.round(pct)));
  }

  function round2(n) { return Math.floor(n * 100 + 1e-9) / 100; }

  // Analiza un índice completo a partir de sus velas
  function analyze(ix, candles, cfg, capital, riskPct) {
    if (!candles || candles.length < 30) return null;
    const closes = candles.map(c => c.close);
    const rsis = rsiSeries(closes, cfg.rsiPeriod || 7);
    const rsi = rsis[rsis.length - 1];
    const pct = rsiToPct(rsi, ix.kind, cfg);
    const price = closes[closes.length - 1];
    const e20 = ema(closes, 20), e50 = ema(closes, 50), e200 = ema(closes, 200);
    const ema200 = e200[e200.length - 1];
    const a = atr(candles, 14) || price * 0.001;
    const dist = a * (cfg.atrMultiplier || 1.5);          // distancia automática (según volatilidad)
    const ov = (cfg.sltp && cfg.sltp[ix.name]) || {};     // puntos fijos que puso el administrador
    const slD = +ov.sl > 0 ? +ov.sl : dist;
    const tpD = +ov.tp > 0 ? +ov.tp : dist;
    const sell = ix.kind === "crash";
    const sl = sell ? price + slD : price - slD;
    const tp = sell ? price - tpD : price + tpD;
    // Lote: arriesgar "riskPct" % del capital. En Boom/Crash (MT5) 1 lote ≈ 1 USD por punto.
    const riskUsd = (capital || 0) * (riskPct || 2) / 100;
    const lot = Math.max(ix.minLot, round2(riskUsd / slD));
    let l90 = round2(lot * 0.4), l95 = round2(lot - l90);
    if (l90 < ix.minLot || l95 < ix.minLot) { l90 = lot; l95 = 0; }
    // Filtro EMA200: Crash por encima de la EMA200, Boom por debajo = precio estirado
    const emaOk = ema200 == null ? null : (sell ? price > ema200 : price < ema200);
    return {
      symbol: ix.symbol, name: ix.name, kind: ix.kind, price, rsi, pct,
      side: sell ? "VENDER" : "COMPRAR", sl, tp, slD, tpD, autoDist: dist, fixedSl: +ov.sl > 0, fixedTp: +ov.tp > 0, lot, l90, l95, emaOk,
      ema20: e20[e20.length - 1], ema50: e50[e50.length - 1], ema200,
      zone: pct >= 95 ? "extrema" : pct >= 90 ? "zona" : pct >= 75 ? "cerca" : "normal",
      spark: closes.slice(-40)
    };
  }

  function decimals(price) { return price >= 1000 ? 2 : price >= 100 ? 2 : 3; }

  const api = { INDICES, resolveSymbols, ema, rsiSeries, atr, rsiToPct, analyze, decimals };
  root.MTCore = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof self !== "undefined" ? self : globalThis);
