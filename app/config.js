/* =========================================================
   MIRROR TRADE SCANNER — CONFIGURACIÓN
   Este es el ÚNICO archivo que usted necesita editar.
   ========================================================= */
window.MTS_CONFIG = {
  // 1) Datos de Firebase (se copian desde la consola de Firebase).
  //    Si los deja vacíos, la app funciona en "modo prueba" sin registro.
  firebase: {
    apiKey: "AIzaSyB3KsZ194ThW_gdbSJhD7QlCgDbrnz3OdE",
    authDomain: "mirror-trade-pro.firebaseapp.com",
    projectId: "mirror-trade-pro",
    storageBucket: "mirror-trade-pro.firebasestorage.app",
    messagingSenderId: "1044652449740",
    appId: "1:1044652449740:web:f382f647301b1ca92c8769"
  },

  // 2) Correo(s) del administrador (usted). Solo estos ven el Panel, Telegram y la conexión.
  adminEmails: ["sergiote28@gmail.com"],

  // Clave para desbloquear las opciones de administrador en "modo ensayo" (sin Firebase).
  // Cuando conecte Firebase, el administrador se reconoce por su correo y esta clave ya no se usa.
  adminPin: "2026",

  // 3) App ID de Deriv. 1089 es el de prueba. Registre el suyo en developers.deriv.com
  derivAppId: 1089,

  // 4) Reglas del scanner
  rsiPeriod: 7,          // periodo del RSI (el radar del video usa RSI 7)
  rsiCrash: 90,          // Crash: sobrecompra en 90  -> 90%
  rsiBoom: 10,           // Boom : sobreventa  en 10  -> 90%
  alertLevels: [90, 95], // niveles de alerta
  atrMultiplier: 1.5,    // distancia de SL/TP = ATR(14) x este número
  defaultTimeframe: 300, // 300 = M5, 3600 = H1, 14400 = H4

  // 5) Enlaces (también se pueden cambiar desde el panel de administración)
  buyLink: "https://t.me/mirrortradepro",
  telegramLink: "https://t.me/mirrortradepro",

  // SL y TP de fábrica de cada índice (en pips; 1 pip = 1,00 de precio).
  // El administrador puede cambiarlos desde Ajustes sin publicar otra versión.
  sltpDefault: {
    "Boom 1000":  { sl: 30, tp: 30 },
    "Boom 900":   { sl: 15, tp: 15 },
    "Boom 600":   { sl: 15, tp: 15 },
    "Boom 500":   { sl: 15, tp: 15 },
    "Boom 300":   { sl: 15, tp: 15 },
    "Crash 1000": { sl: 15, tp: 15 },
    "Crash 900":  { sl: 30, tp: 30 },
    "Crash 600":  { sl: 50, tp: 50 },
    "Crash 500":  { sl: 15, tp: 15 },
    "Crash 300":  { sl: 15, tp: 15 }
  },
  contactEmail: "mirrortradeproadmin@gmail.com",

  // Identificador de la app en Google Play (no se puede cambiar después de publicar)
  packageName: "com.mirrortradepro.scanner",

  appVersion: "1.2.0"
};
