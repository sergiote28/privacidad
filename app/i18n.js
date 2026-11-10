/* =========================================================
   Boom & Crash Scanner — Idiomas
   La app se escribe en español. Si el celular no está en español,
   este archivo la muestra en inglés automáticamente.
   El usuario puede elegir el idioma en Ajustes.
   ========================================================= */
(function () {
  var PACKS = (window.MTS_PACKS && window.MTS_PACKS.langs) || {};
  var SUPPORTED = ["es", "en"].concat(Object.keys(PACKS));
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem("mts_lang")); } catch (e) {}
  // Idioma del celular (ej.: "pt-BR" -> "pt"). Si no está disponible, inglés.
  var device = ((navigator.languages && navigator.languages[0]) || navigator.language || "es").toLowerCase().split("-")[0];
  var LANG = SUPPORTED.indexOf(saved) >= 0 ? saved : (SUPPORTED.indexOf(device) >= 0 ? device : "en");
  var PK = PACKS[LANG] || null;
  window.MTS_LANG = LANG;
  window.MTS_LANG_CHOICE = saved || "auto";
  window.MTS_LANGS = [["es", "Español"], ["en", "English"]].concat(Object.keys(PACKS).map(function (k) { return [k, PACKS[k].name]; }));
  window.MTS_LOCALE = LANG === "es" ? "es-CO" : PK ? PK.locale : "en-US";
  document.documentElement.lang = LANG;
  if (PK && PK.rtl) document.documentElement.dir = "rtl";
  if (LANG === "es") { window.MTS_T = function (s) { return s; }; return; }

  /* ---------- Textos exactos ---------- */
  var D = {
    // Inicio y acceso
    "BOOM & CRASH SCANNER": "BOOM & CRASH SCANNER",
    "Logo de Mirror Trade Pro": "Mirror Trade Pro logo",
    "Ingresar": "Sign in", "Registrarse": "Sign up", "Correo electrónico": "Email",
    "Contraseña": "Password", "mínimo 6 caracteres": "at least 6 characters", "Mostrar contraseña": "Show password",
    "Repita la contraseña": "Repeat password", "escríbala otra vez": "type it again", "sucorreo@gmail.com": "you@gmail.com",
    "Crear cuenta": "Create account", "¿Olvidó su contraseña?": "Forgot your password?",
    "Recuperar contraseña": "Reset password",
    "Escriba su correo y le enviaremos un enlace para crear una contraseña nueva.": "Enter your email and we'll send you a link to create a new password.",
    "Enviar enlace": "Send link", "← Volver a ingresar": "← Back to sign in",
    "Acceso pendiente": "Access pending", "Acceso bloqueado": "Access blocked", "Verifique su correo": "Verify your email", "Sin conexión": "No connection",
    "Comprar en Google Play": "Buy on Google Play", "Revisar de nuevo": "Check again", "Cerrar sesión": "Sign out",
    "Entrar en modo ensayo": "Enter demo mode",
    "El registro de usuarios se activa al conectar la base de datos (Firebase).": "User sign-up is enabled once the database (Firebase) is connected.",
    "Versión": "Version", "Política de privacidad": "Privacy policy",
    "Escriba un correo válido.": "Enter a valid email.",
    "La contraseña debe tener mínimo 6 caracteres.": "Password must be at least 6 characters.",
    "Las dos contraseñas no son iguales.": "The two passwords don't match.",
    "Creando su cuenta…": "Creating your account…", "Validando…": "Checking…", "Revisando…": "Checking…",
    "Correo o contraseña incorrectos.": "Wrong email or password.", "Contraseña incorrecta.": "Wrong password.",
    "Ese correo no tiene cuenta. Toque «Registrarse».": "That email has no account. Tap «Sign up».",
    "Ese correo ya tiene cuenta. Toque «Ingresar».": "That email already has an account. Tap «Sign in».",
    "El correo no es válido.": "The email is not valid.", "Demasiados intentos. Espere unos minutos.": "Too many attempts. Please wait a few minutes.",
    "Sin internet. Revise su conexión.": "No internet. Check your connection.",
    "Reenviar correo": "Resend email", "Espere un minuto antes de reenviar.": "Wait a minute before resending.",
    "Correo reenviado. Puede tardar unos minutos; revise Spam y Promociones.": "Email resent. It may take a few minutes; check Spam and Promotions.",
    "Revise también las carpetas": "Also check the", "Spam": "Spam", "y": "and", "Promociones": "Promotions",
    ". El correo llega de": " folders. The email comes from", "noreply@mirror-trade-pro.firebaseapp.com": "noreply@mirror-trade-pro.firebaseapp.com",
    "y puede tardar unos minutos. Si no le llega, escríbanos por el canal de Telegram y lo activamos manualmente.": "and may take a few minutes. If it doesn't arrive, message us on the Telegram channel and we'll activate you manually.",
    "Por seguridad, cierre sesión, vuelva a entrar e intente de nuevo.": "For security, sign out, sign in again and retry.",
    "Listo. Revise su correo (también la carpeta de spam) y abra el enlace para crear su contraseña nueva.": "Done. Check your email (also the spam folder) and open the link to create your new password.",
    "El registro todavía no está activado: falta conectar la base de usuarios (Firebase). Mientras tanto use «Entrar en modo ensayo».": "Sign-up is not enabled yet: the user database (Firebase) is not connected. Meanwhile use «Enter demo mode».",
    "No se pudo cargar el sistema de acceso. Revise su internet y vuelva a abrir la app.": "The sign-in system could not load. Check your internet and reopen the app.",
    "No se pudo comprobar su acceso. Revise su internet y toque «Revisar de nuevo».": "Your access could not be checked. Check your internet and tap «Check again».",
    "Su cuenta está creada, pero para usar el scanner debe comprar e instalar Mirror Trade Pro desde Google Play (con este mismo celular). Si ya la compró, desinstale esta copia, instálela desde Google Play y vuelva a entrar.": "Your account is created, but to use the scanner you must buy and install the app from Google Play (on this same phone). If you already bought it, uninstall this copy, install it from Google Play and sign in again.",
    "Su cuenta fue bloqueada por el administrador. Si cree que es un error, escríbanos por el canal de Telegram.": "Your account was blocked by the administrator. If you think this is a mistake, contact us on the Telegram channel.",
    "Su cuenta fue eliminada.": "Your account was deleted.",

    // Encabezado y scanner
    "MIRROR TRADE": "MIRROR TRADE", "Conectando…": "Connecting…", "Cargando datos…": "Loading data…", "En vivo · Deriv": "Live · Deriv",
    "Sonido": "Sound", "Silencio": "Muted", "Silenciar sonido": "Mute sound", "Activar sonido": "Turn sound on",
    "Último dato:": "Last update:", "Actualizar": "Refresh", "Actualizando…": "Refreshing…", "Actualizar los datos": "Refresh data",
    "Deslice hacia abajo para actualizar": "Pull down to refresh", "Suelte para actualizar": "Release to refresh",
    "✓ Datos actualizados": "✓ Data updated", "Sin respuesta de Deriv. Revise su internet.": "No response from Deriv. Check your internet.",
    "Con datos": "With data", "En zona ≥90%": "In zone ≥90%", "Más fuerte": "Strongest",
    "Todos": "All", "Boom · comprar": "Boom · buy", "Crash · vender": "Crash · sell",
    "Popularidad": "Popularity", "Comprar": "Buy", "Vender": "Sell", "cargando…": "loading…",
    "Verde = Boom (comprar) · Rojo = Crash (vender) · RSI": "Green = Boom (buy) · Red = Crash (sell) · RSI",
    "Ningún índice en esta categoría por ahora.": "No index in this category right now.",
    "Precios en vivo": "Live prices", "SL y TP de cada índice": "SL and TP for each index",
    "ÍNDICE": "INDEX", "PRECIO": "PRICE", "COMPRAR": "BUY", "VENDER": "SELL",
    "SL y TP en pips definidos para cada índice": "SL and TP in pips set for each index",
    ". Toque un índice para ver su detalle.": ". Tap an index to see its details.",
    "Herramienta de análisis técnico. No es asesoría financiera ni garantiza ganancias. Los índices sintéticos son de alto riesgo.": "Technical analysis tool. Not financial advice and no guaranteed profits. Synthetic indices are high risk.",

    // Detalle y gráfico
    "Cerrar": "Close", "Cerrar gráfico": "Close chart", "SEÑAL EXTREMA": "EXTREME SIGNAL", "EN ZONA DE ENTRADA": "IN ENTRY ZONE", "EN OBSERVACIÓN": "WATCHING", "RSI EXTREMO": "EXTREME RSI",
    "Elija su plan": "Choose your plan", "Acceso completo al scanner, alertas y gráficos.": "Full access to the scanner, alerts and charts.", "3 días gratis.": "3 days free.", "No se le cobra nada durante la prueba. Puede cancelar cuando quiera desde Google Play.": "You won't be charged during the trial. You can cancel anytime from Google Play.", "Anual": "Yearly", "/ año": "/ year", "Mensual": "Monthly", "/ mes": "/ month", "Pago mes a mes": "Billed monthly", "Equivale a": "Equals", "al mes": "per month", "AHORRA": "SAVE", "Empezar 3 días gratis": "Start 3-day free trial", "Suscribirme": "Subscribe", "Después de los 3 días de prueba, Google Play cobra automáticamente el plan elegido y lo renueva en cada periodo, hasta que lo cancele. Puede cancelar en cualquier momento en Google Play → Pagos y suscripciones → Suscripciones.": "After the 3-day trial, Google Play automatically charges the chosen plan and renews it each period until you cancel. You can cancel anytime in Google Play → Payments & subscriptions → Subscriptions.", "Ya tengo una suscripción": "I already have a subscription", "Para suscribirse, instale la app desde Google Play.": "To subscribe, install the app from Google Play.", "Comprobando su suscripción…": "Checking your subscription…", "Abriendo Google Play…": "Opening Google Play…", "¡Listo! Su suscripción está activa.": "Done! Your subscription is active.", "¡Bienvenido!": "Welcome!", "Su pago está pendiente. Cuando Google Play lo confirme, toque «Ya tengo una suscripción».": "Your payment is pending. When Google Play confirms it, tap «I already have a subscription».", "No se pudo completar la suscripción.": "The subscription could not be completed.", "No encontramos una suscripción activa en esta cuenta de Google Play.": "We couldn't find an active subscription on this Google Play account.", "Esta cuenta de Google Play ya tiene una suscripción vinculada a otro correo de la app. Entre con ese correo, o use otra cuenta de Google Play.": "This Google Play account already has a subscription linked to another app email. Sign in with that email, or use another Google Play account.", "No se pudo comprobar su suscripción con Google Play. Revise su internet y toque «Revisar de nuevo».": "Your subscription could not be checked with Google Play. Check your internet and tap «Check again».", "Suscripción": "Subscription", "Gestionar": "Manage", "Acceso gratis otorgado por el administrador": "Free access granted by the administrator", "Plan anual": "Yearly plan", "Plan mensual": "Monthly plan", "se renueva automáticamente": "renews automatically", "cancelada, activa hasta el fin del periodo": "canceled, active until the end of the period", "Dar acceso gratis": "Give free access", "Quitar acceso gratis": "Remove free access", "Con acceso": "With access", "Sin suscripción activa": "No active subscription", "Acceso gratis otorgado": "Free access granted", "Acceso gratis retirado": "Free access removed",
    "Operar índices sintéticos tiene alto riesgo.": "Trading synthetic indices is high risk.",
    "Descargar en Google Play": "Get it on Google Play", "Muy pronto en el App Store": "Coming soon to the App Store", "La suscripción se hace desde la app. La versión para iPhone estará muy pronto en el App Store.": "Subscriptions are made in the app. The iPhone version is coming soon to the App Store.", "La suscripción se hace desde la app de Google Play. Entre con el mismo correo y su cuenta se mantiene.": "Subscriptions are made in the Google Play app. Sign in with the same email and your account stays the same.",
    "El pago se cobra a su cuenta de Apple al confirmar la compra. La suscripción se renueva automáticamente, salvo que la cancele al menos 24 horas antes de que termine el periodo. Puede gestionarla o cancelarla en Ajustes → su nombre → Suscripciones.": "Payment is charged to your Apple account when you confirm the purchase. The subscription renews automatically unless you cancel it at least 24 hours before the end of the period. You can manage or cancel it in Settings → your name → Subscriptions.", "Términos de uso (EULA)": "Terms of Use (EULA)",
    "Prueba gratis: le quedan {t}.": "Free trial: {t} left.", "Ver planes": "See plans", "día": "day", "días": "days", "hora": "hour", "horas": "hours", "minutos": "minutes", "Su prueba gratis de 3 días terminó": "Your 3-day free trial has ended", "Para seguir usando el scanner, las alertas y los gráficos, elija un plan.": "To keep using the scanner, alerts and charts, choose a plan.", "Todavía está en su prueba gratis. Si se suscribe ahora, el primer cobro se hace hoy.": "You are still on your free trial. If you subscribe now, the first charge is made today.", "Google Play cobra el plan elegido y lo renueva en cada periodo, hasta que lo cancele. Puede cancelar en cualquier momento en Google Play → Pagos y suscripciones → Suscripciones.": "Google Play charges the chosen plan and renews it each period until you cancel. You can cancel anytime in Google Play → Payments & subscriptions → Subscriptions.", "Volver a la app": "Back to the app", "¡Bienvenido! Tiene 3 días gratis para probar la app, sin tarjeta.": "Welcome! You have 3 free days to try the app, no card needed.", "Prueba gratis": "Free trial", "termina el {f}": "ends on {f}",
    "Antes de empezar": "Before you start", "Boom & Crash Scanner es una herramienta de monitoreo: muestra en vivo el RSI de los índices Boom y Crash y avisa cuando llegan a zonas extremas.": "Boom & Crash Scanner is a monitoring tool: it shows the live RSI of the Boom and Crash indices and alerts you when they reach extreme zones.", "Las alertas son informativas. No son recomendaciones de compra o venta ni predicen el precio.": "Alerts are informational. They are not buy or sell recommendations and do not predict the price.", "En pruebas con datos históricos, las alertas no mostraron ventaja frente a entradas al azar.": "In tests with historical data, the alerts showed no advantage over random entries.", "Operar índices sintéticos tiene alto riesgo: puede perder todo su dinero. Opere solo con dinero que pueda perder.": "Trading synthetic indices is high risk: you can lose all your money. Only trade with money you can afford to lose.", "Solo para mayores de 18 años. Esta app no está afiliada a ningún bróker.": "For adults 18+ only. This app is not affiliated with any broker.", "Entiendo y acepto": "I understand and accept", "Aviso de riesgo": "Risk warning", "Herramienta de monitoreo. Las alertas son informativas: no son recomendaciones ni predicen el precio. Los índices sintéticos son de alto riesgo.": "Monitoring tool. Alerts are informational: they are not recommendations and do not predict the price. Synthetic indices are high risk.", "Precio, RSI y nivel de cada índice": "Price, RSI and level of each index", "NIVEL": "LEVEL",
    "Nivel = qué tan cerca está el RSI de la zona extrema (90% o más = alerta). Toque un índice para ver su detalle.": "Level = how close the RSI is to the extreme zone (90% or more = alert). Tap an index to see its details.", "EN ZONA DE ALERTA": "IN ALERT ZONE", "Precio actual": "Current price", "Precio": "Price",
    "Precio de entrada (ahora)": "Entry price (now)", "Entrada": "Entry", "Stop loss": "Stop loss", "Take profit": "Take profit",
    "A favor ✓": "In favor ✓", "En contra": "Against", "Ver gráfico": "View chart", "Copiar señal": "Copy signal",
    "Señal copiada": "Signal copied", "No se pudo copiar": "Could not copy", "▼▲ señal ≥90%": "▼▲ signal ≥90%",

    // Señales
    "Señales": "Signals", "Borrar historial": "Clear history", "Aún no hay señales.": "No signals yet.",
    "Cuando un índice llegue al 90% o al 95%, aparecerá aquí con su precio de entrada.": "When an index reaches 90% or 95%, it will appear here with its entry price.",
    "Telegram ✓": "Telegram ✓", "Telegram ✗": "Telegram ✗",

    // Ajustes
    "Scanner": "Scanner", "Ajustes": "Settings", "Panel": "Panel",
    "Alertas en este celular": "Alerts on this phone", "Sonido del scanner": "Scanner sound",
    "ping suave · alarma rápida desde 90%": "soft ping · fast alarm from 90%", "Vibración": "Vibration",
    "Idioma": "Language", "Automático": "Automatic",
    "Cuenta": "Account", "Sesión": "Session", "Canal de señales": "Signals channel", "Abrir": "Open",
    "Modo ensayo": "Demo mode", "Modo ensayo · administrador": "Demo mode · admin",
    "Eliminar mi cuenta": "Delete my account", "Eliminar definitivamente": "Delete permanently", "Eliminando…": "Deleting…",
    "Se borrará su cuenta y sus datos. Esta acción no se puede deshacer. Para confirmar, escriba su contraseña.": "Your account and data will be deleted. This cannot be undone. To confirm, enter your password.",
    "Escriba su contraseña.": "Enter your password.",
    "Administrador": "Administrator", "ADMINISTRADOR": "ADMIN", "Clave de administrador": "Admin key", "Desbloquear": "Unlock", "Clave incorrecta.": "Wrong key.",
    "Telegram": "Telegram", "Enviar señales al canal": "Send signals to channel", "90% y 95%, con precio de entrada": "90% and 95%, with entry price",
    "Enviar a Telegram": "Send to Telegram", "1. Token del bot (de @BotFather)": "1. Bot token (from @BotFather)",
    "2. Canal (@usuario del canal, no el del bot)": "2. Channel (@channel username, not the bot's)",
    "Buscar mi canal automáticamente": "Find my channel automatically", "Revisar configuración": "Check setup",
    "Enviar mensaje de prueba": "Send test message", "Enviar señal de ejemplo": "Send sample signal",
    "● Envío automático APAGADO": "● Auto-send OFF", "● Falta token o canal": "● Token or channel missing",
    "Enviando…": "Sending…", "Buscando sus canales…": "Searching your channels…", "Toque su canal para elegirlo:": "Tap your channel to select it:",
    "Todavía no encuentro ningún canal.": "No channel found yet.",
    "1) Agregue el bot como administrador del canal (con «Publicar mensajes»).": "1) Add the bot as channel admin (with «Post messages»).",
    "2) Escriba cualquier mensaje en el canal, por ejemplo «hola».": "2) Post any message in the channel, e.g. «hello».",
    "3) Vuelva aquí y toque de nuevo «Buscar mi canal automáticamente».": "3) Come back and tap «Find my channel automatically» again.",
    "Falta el token.": "Token missing.", "Péguelo en la casilla 1.": "Paste it in box 1.", "El token parece incompleto.": "The token looks incomplete.",
    "Debe verse así: 7123456789:AAH4kX9… Cópielo de nuevo desde @BotFather.": "It should look like: 7123456789:AAH4kX9… Copy it again from @BotFather.",
    "Falta el canal.": "Channel missing.", "Toque «Buscar mi canal automáticamente».": "Tap «Find my channel automatically».",
    "Pegó un enlace de invitación privado.": "You pasted a private invite link.",
    "En «Canal» puso el nombre de su BOT.": "You entered your BOT's name in «Channel».",
    "Ahí va el @usuario del CANAL. Toque «Buscar mi canal automáticamente».": "It needs the CHANNEL's @username. Tap «Find my channel automatically».",
    "Si es un canal privado o el nombre no es exacto, toque «Buscar mi canal automáticamente».": "If the channel is private or the name isn't exact, tap «Find my channel automatically».",
    "El bot NO es administrador del canal.": "The bot is NOT a channel admin.",
    "El bot es administrador pero sin permiso de «Publicar mensajes».": "The bot is admin but lacks «Post messages» permission.",
    "El bot es administrador y puede publicar.": "The bot is admin and can post.",
    "Todo listo.": "All set.", "Toque «Enviar mensaje de prueba».": "Tap «Send test message».",
    "Mensaje enviado y envío automático ACTIVADO.": "Message sent and auto-send turned ON.",
    "Ejemplo enviado. Así se verán las señales en su canal.": "Sample sent. This is how signals will look in your channel.",
    "Espere a que carguen los datos.": "Wait for the data to load.", "Primero pegue el token en la casilla 1.": "First paste the token in box 1.",
    "No hay conexión con Telegram. Revise el internet del celular.": "No connection to Telegram. Check the phone's internet.",
    "El token no es válido. Cópielo de nuevo completo desde @BotFather (incluye los dos puntos « : »).": "The token is not valid. Copy it again in full from @BotFather (including the colon « : »).",
    "No encuentro ese canal. Toque «Buscar mi canal automáticamente».": "Channel not found. Tap «Find my channel automatically».",
    "El bot no es administrador del canal o no tiene permiso de «Publicar mensajes».": "The bot is not a channel admin or lacks «Post messages» permission.",
    "Puso el nombre del bot en la casilla del canal. Ahí va el @usuario del canal.": "You put the bot's name in the channel box. It needs the channel's @username.",
    "SL y TP por índice": "SL and TP per index", "Índice": "Index", "SL (pips)": "SL (pips)", "TP (pips)": "TP (pips)",
    "Escriba los": "Enter the", "pips": "pips",
    "de distancia desde el precio de entrada (1 pip = 1,00 de precio). Si deja una casilla vacía, ese valor se calcula solo según la volatilidad. Se aplica a todos los usuarios y a las alertas de Telegram.": "distance from the entry price (1 pip = 1.00 in price). If you leave a box empty, that value is calculated automatically from volatility. Applies to all users and Telegram alerts.",
    "Guardar SL y TP": "Save SL and TP", "Restablecer valores de fábrica": "Restore factory values",
    "Guardando…": "Saving…", "Guardado. Ya se aplica en la app y en las alertas.": "Saved. Now applied in the app and alerts.",
    "Se restablecieron los valores de fábrica.": "Factory values restored.",
    "Revise los valores en rojo: deben ser números mayores que 0.": "Check the values in red: they must be numbers greater than 0.",
    "Conexión con Deriv": "Connection to Deriv", "Estado": "Status", "Servidor": "Server", "Último dato": "Last data",
    "En vivo": "Live", "Esperando datos": "Waiting for data", "Buscando servidor": "Searching server", "Reconectar ahora": "Reconnect now",
    "ahora": "now",

    // Panel del administrador
    "Usuarios registrados": "Registered users", "Activos": "Active", "Pendientes": "Pending", "Bloqueados": "Blocked",
    "Buscar por correo": "Search by email", "Actualizar lista": "Refresh list", "Cargando usuarios…": "Loading users…",
    "No hay usuarios en esta categoría.": "No users in this category.",
    "El panel funciona cuando Firebase está conectado.": "The panel works when Firebase is connected.",
    "Aprobar": "Approve", "✉ Correo sin verificar": "✉ Email not verified", "Bloquear": "Block", "ACTIVO": "ACTIVE", "PENDIENTE": "PENDING", "BLOQUEADO": "BLOCKED",
    "Usuario aprobado": "User approved", "Usuario bloqueado": "User blocked",
    "Aviso para todos los usuarios": "Notice for all users",
    "Aparece arriba del scanner (déjelo vacío para ocultarlo)": "Shown above the scanner (leave empty to hide it)",
    "Ej.: Hoy 8 p. m. clase en vivo por Telegram": "E.g.: Live class today 8 p.m. on Telegram",
    "Enlace del canal de Telegram para los usuarios": "Telegram channel link for users",
    "Guardar": "Save", "Guardado. Todos los usuarios lo verán al abrir la app.": "Saved. All users will see it when they open the app.",
    "Requiere Firebase conectado.": "Requires Firebase connected.", "(sin correo)": "(no email)"
  };

  /* ---------- Textos con partes que cambian ---------- */
  var diag = [
    [/^Conectando a (.+)…$/, "Connecting to $1…"], [/^Conectado a (.+)$/, "Connected to $1"],
    [/^(.+) no respondió\.$/, "$1 did not respond."], [/^Error de red con (.+)$/, "Network error with $1"],
    [/^No se pudo abrir (.+)$/, "Could not open $1"], [/^Lista de índices recibida\.$/, "Index list received."],
    [/^Reconexión manual\.$/, "Manual reconnect."], [/^Conexión cerrada\. Reintentando…$/, "Connection closed. Retrying…"],
    [/^Los datos se detuvieron\. Reconectando…$/, "Data stopped. Reconnecting…"], [/^Telegram: (.*)$/, "Telegram: $1"]
  ];
  var R = [
    [/^(\d\d:\d\d)  (.+)$/, function (m, h, rest) { return h + "  " + tr(rest, diag); }],
    [/^(Boom|Crash) (\d+), (COMPRAR|VENDER) (\d+)%$/, function (m, a, b, c, d) { return a + " " + b + ", " + (c === "COMPRAR" ? "BUY" : "SELL") + " " + d + "%"; }],
    [/^([▼▲]) (VENDER|COMPRAR) (.*)$/, function (m, a, b, c) { return a + " " + (b === "VENDER" ? "SELL" : "BUY") + " " + c.replace("· entrada", "· entry").replace("· precio", "· price").replace("· RSI EXTREMO", "· EXTREME RSI").replace("· EXTREMA", "· EXTREME").replace("· señal extrema", "· extreme signal"); }],
    [/^(COMPRAR|VENDER) (Boom|Crash) (\d+)$/, function (m, a, b, c) { return (a === "COMPRAR" ? "BUY" : "SELL") + " " + b + " " + c; }],
    [/^(COMPRAR|VENDER) (\d+)%$/, function (m, a, b) { return (a === "COMPRAR" ? "BUY" : "SELL") + " " + b + "%"; }],
    [/^Precio (\d.*)$/, "Price $1"],
    [/^hace (\d+) s$/, "$1 s ago"], [/^hace (\d+) min$/, "$1 min ago"],
    [/^(\d+) en total$/, "$1 total"],
    [/^Actualizados (\d+) de (\d+) índices$/, "Updated $1 of $2 indices"],
    [/^Entrada (.+)$/, function (m, a) { return "Entry " + a; }],
    [/^Registro: (.+) · Último acceso: (.+)$/, "Signed up: $1 · Last access: $2"],
    [/^Origen: (.*)$/, function (m, a) { return "Source: " + a.replace("Google Play ✓", "Google Play ✓").replace(/^otro/, "other").replace("aprobado a mano", "manually approved"); }],
    [/^(.+) · administrador$/, "$1 · admin"],
    [/^Token correcto\. Su bot es (.+)$/, "Token OK. Your bot is $1"],
    [/^Canal encontrado: «(.*)»$/, "Channel found: «$1»"],
    [/^No encuentro el canal (.+)\.$/, "Channel $1 not found."],
    [/^Canal → Administradores → Agregar administrador → (.+) → active «Publicar mensajes» → Guardar\.$/, "Channel → Administrators → Add admin → $1 → enable «Post messages» → Save."],
    [/^Canal → Administradores → (.+) → active «Publicar mensajes»\.$/, "Channel → Administrators → $1 → enable «Post messages»."],
    [/^● Envío automático ACTIVADO → (.+)$/, "● Auto-send ON → $1"],
    [/^¡Cuenta creada! Le enviamos un correo a (.+)\. Ábralo, toque el enlace de verificación \(revise también spam\) y luego toque «Revisar de nuevo»\.$/, "Account created! We sent an email to $1. Open it, tap the verification link (check spam too) and then tap «Check again»."],
    [/^Le enviamos un correo a (.+)\. Ábralo, toque el enlace de verificación \(revise también spam\) y luego toque «Revisar de nuevo»\.$/, "We sent an email to $1. Open it, tap the verification link (check spam too) and then tap «Check again»."],
    [/^Su acceso venció el (.+)\. Renueve para seguir usando el scanner\.$/, "Your access expired on $1. Renew to keep using the scanner."],
    [/^Telegram respondió: (.*)$/, "Telegram replied: $1"],
    [/^No se pudo cargar: (.*)$/, "Could not load: $1"],
    [/^✗ (.+)$/, function (m, a) { return "✗ " + tr(a); }], [/^✓ (.+)$/, function (m, a) { return "✓ " + tr(a); }]
  ];
  function trEN(t, rules) {
    if (Object.prototype.hasOwnProperty.call(D, t)) return D[t];
    rules = rules || R;
    for (var i = 0; i < rules.length; i++) {
      if (rules[i][0].test(t)) return t.replace(rules[i][0], rules[i][1]);
    }
    return t;
  }
  /* Segundo paso: del inglés al idioma del celular (portugués, francés, árabe…) */
  var R2 = !PK ? [] : [
    [/^(\d+) s ago$/, function (m, n) { return PK.ago(n, "s"); }],
    [/^(\d+) min ago$/, function (m, n) { return PK.ago(n, "min"); }],
    [/^(Boom|Crash) (\d+), (BUY|SELL) (\d+)%$/, function (m, a, b, c, d) { return a + " " + b + ", " + (c === "BUY" ? PK.words.buy : PK.words.sell) + " " + d + "%"; }],
    [/^([▼▲]) (SELL|BUY) (.*)$/, function (m, a, b, c) {
      return a + " " + (b === "BUY" ? PK.words.buy : PK.words.sell) + " " +
        c.replace("· entry", "· " + PK.words.entry).replace("· price", "· " + ((PK.extra && PK.extra["Price"]) || "price").toLowerCase()).replace("· EXTREME RSI", "· " + ((PK.extra && PK.extra["EXTREME RSI"]) || "EXTREME RSI")).replace("· EXTREME", "· " + PK.words.extreme).replace("· extreme signal", "· " + PK.words.extremeSignal); }],
    [/^Entry (.+)$/, function (m, a) { return PK.entryLbl + " " + a; }],
    [/^Entry$/, function () { return PK.entryLbl; }],
    [/^Price (\d.*)$/, function (m, a) { return ((PK.extra && PK.extra["Price"]) || "Price") + " " + a; }],
    [/^(BUY|SELL) (Boom|Crash) (\d+)$/, function (m, a, b, c) { return (a === "BUY" ? PK.words.buy : PK.words.sell) + " " + b + " " + c; }],
    [/^(BUY|SELL) (\d+)%$/, function (m, a, b) { return (a === "BUY" ? PK.words.buy : PK.words.sell) + " " + b + "%"; }],
    [/^(\d+) total$/, function (m, n) { return PK.total(n); }],
    [/^Updated (\d+) of (\d+) indices$/, function (m, a, b) { return PK.updated(a, b); }],
    [/^Account created! We sent an email to (.+)\. Open it.*$/, function (m, e) { return PK.created + PK.sent(e); }],
    [/^We sent an email to (.+)\. Open it.*$/, function (m, e) { return PK.sent(e); }]
  ];
  function tr(t, rules) {
    var en = trEN(t, rules);
    if (!PK || rules) return en;
    if (Object.prototype.hasOwnProperty.call(PK.map, en)) return PK.map[en];
    if (PK.extra && Object.prototype.hasOwnProperty.call(PK.extra, en)) return PK.extra[en];
    for (var i = 0; i < R2.length; i++) if (R2[i][0].test(en)) return en.replace(R2[i][0], R2[i][1]);
    return en;
  }
  function trKeep(v) {                         // conserva los espacios de los lados
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(v);
    if (!m[2]) return v;
    var out = tr(m[2]);
    return out === m[2] ? v : m[1] + out + m[3];
  }
  window.MTS_T = tr;

  var ATTRS = ["placeholder", "aria-label", "alt", "title"];
  function walk(root) {
    if (root.nodeType === 3) { var nv = trKeep(root.nodeValue); if (nv !== root.nodeValue) root.nodeValue = nv; return; }
    if (root.nodeType !== 1 || root.tagName === "SCRIPT" || root.tagName === "STYLE") return;
    for (var a = 0; a < ATTRS.length; a++) {
      var v = root.getAttribute && root.getAttribute(ATTRS[a]);
      if (v) { var t = tr(v); if (t !== v) root.setAttribute(ATTRS[a], t); }
    }
    for (var c = root.firstChild; c; c = c.nextSibling) walk(c);
  }
  function start() {
    document.title = "Boom & Crash Scanner · Mirror Trade Pro";
    walk(document.body);
    new MutationObserver(function (list) {
      list.forEach(function (m) {
        if (m.type === "characterData") walk(m.target);
        else if (m.type === "attributes") walk(m.target);
        else for (var i = 0; i < m.addedNodes.length; i++) walk(m.addedNodes[i]);
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
