/* =========================================================
   Boom & Crash Scanner — Traducciones adicionales
   Clave: el texto en inglés. Cada idioma trae la lista en el mismo orden.
   ========================================================= */
window.MTS_PACKS = (function () {
  var K = [
    "Mirror Trade Pro logo", "Sign in", "Sign up", "Email", "Password", "at least 6 characters", "Show password",
    "Repeat password", "type it again", "Create account", "Forgot your password?", "Reset password",
    "Enter your email and we'll send you a link to create a new password.", "Send link", "← Back to sign in",
    "Access pending", "Access blocked", "Verify your email", "No connection", "Buy on Google Play", "Check again",
    "Sign out", "Version", "Privacy policy", "Enter a valid email.", "Password must be at least 6 characters.",
    "The two passwords don't match.", "Creating your account…", "Checking…", "Wrong email or password.", "Wrong password.",
    "That email has no account. Tap «Sign up».", "That email already has an account. Tap «Sign in».",
    "The email is not valid.", "Too many attempts. Please wait a few minutes.", "No internet. Check your connection.",
    "For security, sign out, sign in again and retry.",
    "Done. Check your email (also the spam folder) and open the link to create your new password.",
    "The sign-in system could not load. Check your internet and reopen the app.",
    "Your access could not be checked. Check your internet and tap «Check again».",
    "Your account is created, but to use the scanner you must buy and install the app from Google Play (on this same phone). If you already bought it, uninstall this copy, install it from Google Play and sign in again.",
    "Your account was blocked by the administrator. If you think this is a mistake, contact us on the Telegram channel.",
    "Your account was deleted.", "Connecting…", "Loading data…", "Live · Deriv", "Sound", "Muted", "Mute sound",
    "Turn sound on", "Last update:", "Refresh", "Refreshing…", "Refresh data", "Pull down to refresh", "Release to refresh",
    "✓ Data updated", "No response from Deriv. Check your internet.", "With data", "In zone ≥90%", "Strongest", "All",
    "Boom · buy", "Crash · sell", "Popularity", "Buy", "Sell", "loading…", "Green = Boom (buy) · Red = Crash (sell) · RSI",
    "No index in this category right now.", "Live prices", "SL and TP for each index", "INDEX", "PRICE", "BUY", "SELL",
    "SL and TP in pips set for each index", ". Tap an index to see its details.",
    "Technical analysis tool. Not financial advice and no guaranteed profits. Synthetic indices are high risk.",
    "Close", "Close chart", "EXTREME SIGNAL", "IN ENTRY ZONE", "WATCHING", "Entry price (now)", "In favor ✓", "Against",
    "View chart", "Copy signal", "Signal copied", "Could not copy", "▼▲ signal ≥90%", "Signals", "Clear history",
    "No signals yet.", "When an index reaches 90% or 95%, it will appear here with its entry price.", "Settings",
    "Alerts on this phone", "Scanner sound", "soft ping · fast alarm from 90%", "Vibration", "Language", "Automatic",
    "Account", "Session", "Signals channel", "Open", "Delete my account", "Delete permanently", "Deleting…",
    "Your account and data will be deleted. This cannot be undone. To confirm, enter your password.",
    "Enter your password.", "now", "Enter demo mode"
  ];

  var P = {};

  /* ---------- Português ---------- */
  P.pt = { locale: "pt-BR", name: "Português", words: { buy: "COMPRAR", sell: "VENDER", entry: "entrada", extreme: "EXTREMO", extremeSignal: "sinal extremo" },
    ago: function (n, u) { return "há " + n + " " + u; }, total: function (n) { return n + " no total"; },
    updated: function (a, b) { return "Atualizados " + a + " de " + b + " índices"; }, entryLbl: "Entrada",
    sent: function (e) { return "Enviamos um e-mail para " + e + ". Abra-o, toque no link de verificação (veja também o spam) e depois toque em «Verificar de novo»."; },
    created: "Conta criada! ",
    T: ["Logotipo Mirror Trade Pro", "Entrar", "Cadastrar", "E-mail", "Senha", "mínimo 6 caracteres", "Mostrar senha",
      "Repita a senha", "digite novamente", "Criar conta", "Esqueceu a senha?", "Recuperar senha",
      "Digite seu e-mail e enviaremos um link para criar uma nova senha.", "Enviar link", "← Voltar para entrar",
      "Acesso pendente", "Acesso bloqueado", "Verifique seu e-mail", "Sem conexão", "Comprar no Google Play", "Verificar de novo",
      "Sair", "Versão", "Política de privacidade", "Digite um e-mail válido.", "A senha deve ter no mínimo 6 caracteres.",
      "As duas senhas não são iguais.", "Criando sua conta…", "Verificando…", "E-mail ou senha incorretos.", "Senha incorreta.",
      "Esse e-mail não tem conta. Toque em «Cadastrar».", "Esse e-mail já tem conta. Toque em «Entrar».",
      "O e-mail não é válido.", "Muitas tentativas. Aguarde alguns minutos.", "Sem internet. Verifique sua conexão.",
      "Por segurança, saia, entre novamente e tente de novo.",
      "Pronto. Verifique seu e-mail (também o spam) e abra o link para criar sua nova senha.",
      "O sistema de acesso não carregou. Verifique sua internet e abra o app novamente.",
      "Não foi possível verificar seu acesso. Verifique sua internet e toque em «Verificar de novo».",
      "Sua conta foi criada, mas para usar o scanner você deve comprar e instalar o app pelo Google Play (neste mesmo celular). Se já comprou, desinstale esta cópia, instale pelo Google Play e entre novamente.",
      "Sua conta foi bloqueada pelo administrador. Se acha que é um erro, fale conosco no canal do Telegram.",
      "Sua conta foi excluída.", "Conectando…", "Carregando dados…", "Ao vivo · Deriv", "Som", "Mudo", "Silenciar som",
      "Ativar som", "Último dado:", "Atualizar", "Atualizando…", "Atualizar dados", "Puxe para baixo para atualizar", "Solte para atualizar",
      "✓ Dados atualizados", "Sem resposta da Deriv. Verifique sua internet.", "Com dados", "Na zona ≥90%", "Mais forte", "Todos",
      "Boom · comprar", "Crash · vender", "Popularidade", "Comprar", "Vender", "carregando…", "Verde = Boom (comprar) · Vermelho = Crash (vender) · RSI",
      "Nenhum índice nesta categoria agora.", "Preços ao vivo", "SL e TP de cada índice", "ÍNDICE", "PREÇO", "COMPRAR", "VENDER",
      "SL e TP em pips definidos para cada índice", ". Toque em um índice para ver os detalhes.",
      "Ferramenta de análise técnica. Não é consultoria financeira nem garante lucros. Índices sintéticos são de alto risco.",
      "Fechar", "Fechar gráfico", "SINAL EXTREMO", "NA ZONA DE ENTRADA", "EM OBSERVAÇÃO", "Preço de entrada (agora)", "A favor ✓", "Contra",
      "Ver gráfico", "Copiar sinal", "Sinal copiado", "Não foi possível copiar", "▼▲ sinal ≥90%", "Sinais", "Apagar histórico",
      "Ainda não há sinais.", "Quando um índice chegar a 90% ou 95%, aparecerá aqui com o preço de entrada.", "Ajustes",
      "Alertas neste celular", "Som do scanner", "ping suave · alarme rápido a partir de 90%", "Vibração", "Idioma", "Automático",
      "Conta", "Sessão", "Canal de sinais", "Abrir", "Excluir minha conta", "Excluir definitivamente", "Excluindo…",
      "Sua conta e seus dados serão excluídos. Isso não pode ser desfeito. Para confirmar, digite sua senha.",
      "Digite sua senha.", "agora", "Entrar no modo demo"] };

  /* ---------- Français ---------- */
  P.fr = { locale: "fr-FR", name: "Français", words: { buy: "ACHETER", sell: "VENDRE", entry: "entrée", extreme: "EXTRÊME", extremeSignal: "signal extrême" },
    ago: function (n, u) { return "il y a " + n + " " + u; }, total: function (n) { return n + " au total"; },
    updated: function (a, b) { return a + " indices sur " + b + " mis à jour"; }, entryLbl: "Entrée",
    sent: function (e) { return "Nous avons envoyé un e-mail à " + e + ". Ouvrez-le, touchez le lien de vérification (vérifiez aussi les spams), puis touchez «Vérifier à nouveau»."; },
    created: "Compte créé ! ",
    T: ["Logo Mirror Trade Pro", "Se connecter", "S'inscrire", "E-mail", "Mot de passe", "au moins 6 caractères", "Afficher le mot de passe",
      "Répétez le mot de passe", "saisissez-le à nouveau", "Créer un compte", "Mot de passe oublié ?", "Réinitialiser le mot de passe",
      "Saisissez votre e-mail et nous vous enverrons un lien pour créer un nouveau mot de passe.", "Envoyer le lien", "← Retour à la connexion",
      "Accès en attente", "Accès bloqué", "Vérifiez votre e-mail", "Pas de connexion", "Acheter sur Google Play", "Vérifier à nouveau",
      "Se déconnecter", "Version", "Politique de confidentialité", "Saisissez un e-mail valide.", "Le mot de passe doit contenir au moins 6 caractères.",
      "Les deux mots de passe ne correspondent pas.", "Création de votre compte…", "Vérification…", "E-mail ou mot de passe incorrect.", "Mot de passe incorrect.",
      "Cet e-mail n'a pas de compte. Touchez «S'inscrire».", "Cet e-mail a déjà un compte. Touchez «Se connecter».",
      "L'e-mail n'est pas valide.", "Trop de tentatives. Patientez quelques minutes.", "Pas d'internet. Vérifiez votre connexion.",
      "Par sécurité, déconnectez-vous, reconnectez-vous et réessayez.",
      "C'est fait. Consultez votre e-mail (et les spams) et ouvrez le lien pour créer votre nouveau mot de passe.",
      "Le système de connexion n'a pas pu se charger. Vérifiez votre internet et rouvrez l'application.",
      "Impossible de vérifier votre accès. Vérifiez votre internet et touchez «Vérifier à nouveau».",
      "Votre compte est créé, mais pour utiliser le scanner vous devez acheter et installer l'application depuis Google Play (sur ce même téléphone). Si vous l'avez déjà achetée, désinstallez cette copie, installez-la depuis Google Play et reconnectez-vous.",
      "Votre compte a été bloqué par l'administrateur. Si vous pensez que c'est une erreur, contactez-nous sur le canal Telegram.",
      "Votre compte a été supprimé.", "Connexion…", "Chargement des données…", "En direct · Deriv", "Son", "Muet", "Couper le son",
      "Activer le son", "Dernière donnée :", "Actualiser", "Actualisation…", "Actualiser les données", "Tirez vers le bas pour actualiser", "Relâchez pour actualiser",
      "✓ Données actualisées", "Pas de réponse de Deriv. Vérifiez votre internet.", "Avec données", "En zone ≥90%", "Le plus fort", "Tous",
      "Boom · acheter", "Crash · vendre", "Popularité", "Acheter", "Vendre", "chargement…", "Vert = Boom (acheter) · Rouge = Crash (vendre) · RSI",
      "Aucun indice dans cette catégorie pour l'instant.", "Prix en direct", "SL et TP de chaque indice", "INDICE", "PRIX", "ACHETER", "VENDRE",
      "SL et TP en pips définis pour chaque indice", ". Touchez un indice pour voir le détail.",
      "Outil d'analyse technique. Ce n'est pas un conseil financier et les gains ne sont pas garantis. Les indices synthétiques sont à haut risque.",
      "Fermer", "Fermer le graphique", "SIGNAL EXTRÊME", "EN ZONE D'ENTRÉE", "EN OBSERVATION", "Prix d'entrée (maintenant)", "Favorable ✓", "Défavorable",
      "Voir le graphique", "Copier le signal", "Signal copié", "Impossible de copier", "▼▲ signal ≥90%", "Signaux", "Effacer l'historique",
      "Aucun signal pour l'instant.", "Quand un indice atteindra 90 % ou 95 %, il apparaîtra ici avec son prix d'entrée.", "Réglages",
      "Alertes sur ce téléphone", "Son du scanner", "ping doux · alarme rapide dès 90 %", "Vibration", "Langue", "Automatique",
      "Compte", "Session", "Canal de signaux", "Ouvrir", "Supprimer mon compte", "Supprimer définitivement", "Suppression…",
      "Votre compte et vos données seront supprimés. Cette action est irréversible. Pour confirmer, saisissez votre mot de passe.",
      "Saisissez votre mot de passe.", "maintenant", "Entrer en mode démo"] };

  /* ---------- العربية ---------- */
  P.ar = { locale: "ar-EG-u-nu-latn", rtl: true, name: "العربية", words: { buy: "شراء", sell: "بيع", entry: "الدخول", extreme: "قصوى", extremeSignal: "إشارة قصوى" },
    ago: function (n, u) { return "منذ " + n + " " + (u === "s" ? "ث" : "د"); }, total: function (n) { return n + " إجمالًا"; },
    updated: function (a, b) { return "تم تحديث " + a + " من " + b + " مؤشرات"; }, entryLbl: "الدخول",
    sent: function (e) { return "أرسلنا رسالة إلى " + e + ". افتحها واضغط على رابط التحقق (تحقق من البريد المزعج أيضًا) ثم اضغط «التحقق مرة أخرى»."; },
    created: "تم إنشاء الحساب! ",
    T: ["شعار Mirror Trade Pro", "تسجيل الدخول", "إنشاء حساب", "البريد الإلكتروني", "كلمة المرور", "6 أحرف على الأقل", "إظهار كلمة المرور",
      "أعد كتابة كلمة المرور", "اكتبها مرة أخرى", "إنشاء حساب", "نسيت كلمة المرور؟", "استعادة كلمة المرور",
      "اكتب بريدك الإلكتروني وسنرسل لك رابطًا لإنشاء كلمة مرور جديدة.", "إرسال الرابط", "→ العودة لتسجيل الدخول",
      "الوصول قيد الانتظار", "الوصول محظور", "تحقق من بريدك الإلكتروني", "لا يوجد اتصال", "اشترِ من Google Play", "التحقق مرة أخرى",
      "تسجيل الخروج", "الإصدار", "سياسة الخصوصية", "اكتب بريدًا إلكترونيًا صحيحًا.", "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
      "كلمتا المرور غير متطابقتين.", "جارٍ إنشاء حسابك…", "جارٍ التحقق…", "البريد الإلكتروني أو كلمة المرور غير صحيحة.", "كلمة المرور غير صحيحة.",
      "هذا البريد ليس له حساب. اضغط «إنشاء حساب».", "هذا البريد لديه حساب بالفعل. اضغط «تسجيل الدخول».",
      "البريد الإلكتروني غير صالح.", "محاولات كثيرة. انتظر بضع دقائق.", "لا يوجد إنترنت. تحقق من اتصالك.",
      "للأمان، سجّل الخروج ثم ادخل مرة أخرى وأعد المحاولة.",
      "تم. تحقق من بريدك (والبريد المزعج أيضًا) وافتح الرابط لإنشاء كلمة مرور جديدة.",
      "تعذّر تحميل نظام الدخول. تحقق من الإنترنت وأعد فتح التطبيق.",
      "تعذّر التحقق من وصولك. تحقق من الإنترنت واضغط «التحقق مرة أخرى».",
      "تم إنشاء حسابك، لكن لاستخدام الماسح يجب شراء التطبيق وتثبيته من Google Play (على هذا الهاتف نفسه). إذا اشتريته بالفعل، احذف هذه النسخة وثبّته من Google Play ثم ادخل مرة أخرى.",
      "قام المسؤول بحظر حسابك. إذا كنت تعتقد أن هذا خطأ، تواصل معنا عبر قناة Telegram.",
      "تم حذف حسابك.", "جارٍ الاتصال…", "جارٍ تحميل البيانات…", "مباشر · Deriv", "الصوت", "صامت", "كتم الصوت",
      "تشغيل الصوت", "آخر تحديث:", "تحديث", "جارٍ التحديث…", "تحديث البيانات", "اسحب لأسفل للتحديث", "اترك للتحديث",
      "✓ تم تحديث البيانات", "لا يوجد رد من Deriv. تحقق من الإنترنت.", "ببيانات", "في المنطقة ≥90%", "الأقوى", "الكل",
      "Boom · شراء", "Crash · بيع", "الشعبية", "شراء", "بيع", "جارٍ التحميل…", "أخضر = Boom (شراء) · أحمر = Crash (بيع) · RSI",
      "لا يوجد مؤشر في هذه الفئة حاليًا.", "الأسعار المباشرة", "SL و TP لكل مؤشر", "المؤشر", "السعر", "شراء", "بيع",
      "SL و TP بالنقاط لكل مؤشر", ". اضغط على مؤشر لعرض التفاصيل.",
      "أداة تحليل فني. ليست نصيحة مالية ولا تضمن الأرباح. المؤشرات الاصطناعية عالية المخاطر.",
      "إغلاق", "إغلاق الرسم البياني", "إشارة قصوى", "في منطقة الدخول", "قيد المراقبة", "سعر الدخول (الآن)", "لصالح الصفقة ✓", "ضد الصفقة",
      "عرض الرسم البياني", "نسخ الإشارة", "تم نسخ الإشارة", "تعذّر النسخ", "▼▲ إشارة ≥90%", "الإشارات", "مسح السجل",
      "لا توجد إشارات بعد.", "عندما يصل مؤشر إلى 90% أو 95% سيظهر هنا مع سعر الدخول.", "الإعدادات",
      "التنبيهات على هذا الهاتف", "صوت الماسح", "تنبيه هادئ · إنذار سريع من 90%", "الاهتزاز", "اللغة", "تلقائي",
      "الحساب", "الجلسة", "قناة الإشارات", "فتح", "حذف حسابي", "حذف نهائي", "جارٍ الحذف…",
      "سيتم حذف حسابك وبياناتك. لا يمكن التراجع عن ذلك. للتأكيد، اكتب كلمة المرور.",
      "اكتب كلمة المرور.", "الآن", "الدخول في الوضع التجريبي"] };

  /* ---------- Bahasa Indonesia ---------- */
  P.id = { locale: "id-ID", name: "Bahasa Indonesia", words: { buy: "BELI", sell: "JUAL", entry: "entri", extreme: "EKSTREM", extremeSignal: "sinyal ekstrem" },
    ago: function (n, u) { return n + " " + (u === "s" ? "dtk" : "mnt") + " lalu"; }, total: function (n) { return n + " total"; },
    updated: function (a, b) { return a + " dari " + b + " indeks diperbarui"; }, entryLbl: "Entri",
    sent: function (e) { return "Kami mengirim email ke " + e + ". Buka, ketuk tautan verifikasi (cek juga folder spam), lalu ketuk «Periksa lagi»."; },
    created: "Akun dibuat! ",
    T: ["Logo Mirror Trade Pro", "Masuk", "Daftar", "Email", "Kata sandi", "minimal 6 karakter", "Tampilkan kata sandi",
      "Ulangi kata sandi", "ketik lagi", "Buat akun", "Lupa kata sandi?", "Atur ulang kata sandi",
      "Masukkan email Anda dan kami akan mengirim tautan untuk membuat kata sandi baru.", "Kirim tautan", "← Kembali ke masuk",
      "Akses tertunda", "Akses diblokir", "Verifikasi email Anda", "Tidak ada koneksi", "Beli di Google Play", "Periksa lagi",
      "Keluar", "Versi", "Kebijakan privasi", "Masukkan email yang valid.", "Kata sandi minimal 6 karakter.",
      "Kedua kata sandi tidak sama.", "Membuat akun Anda…", "Memeriksa…", "Email atau kata sandi salah.", "Kata sandi salah.",
      "Email itu belum punya akun. Ketuk «Daftar».", "Email itu sudah punya akun. Ketuk «Masuk».",
      "Email tidak valid.", "Terlalu banyak percobaan. Tunggu beberapa menit.", "Tidak ada internet. Periksa koneksi Anda.",
      "Demi keamanan, keluar, masuk lagi, lalu coba lagi.",
      "Selesai. Periksa email Anda (juga folder spam) dan buka tautan untuk membuat kata sandi baru.",
      "Sistem masuk gagal dimuat. Periksa internet dan buka ulang aplikasi.",
      "Akses Anda tidak dapat diperiksa. Periksa internet dan ketuk «Periksa lagi».",
      "Akun Anda sudah dibuat, tetapi untuk memakai scanner Anda harus membeli dan memasang aplikasi dari Google Play (di ponsel yang sama). Jika sudah membeli, hapus salinan ini, pasang dari Google Play, lalu masuk lagi.",
      "Akun Anda diblokir oleh administrator. Jika menurut Anda ini keliru, hubungi kami di kanal Telegram.",
      "Akun Anda telah dihapus.", "Menghubungkan…", "Memuat data…", "Langsung · Deriv", "Suara", "Senyap", "Matikan suara",
      "Nyalakan suara", "Data terakhir:", "Perbarui", "Memperbarui…", "Perbarui data", "Tarik ke bawah untuk memperbarui", "Lepaskan untuk memperbarui",
      "✓ Data diperbarui", "Tidak ada respons dari Deriv. Periksa internet Anda.", "Ada data", "Di zona ≥90%", "Terkuat", "Semua",
      "Boom · beli", "Crash · jual", "Popularitas", "Beli", "Jual", "memuat…", "Hijau = Boom (beli) · Merah = Crash (jual) · RSI",
      "Belum ada indeks di kategori ini.", "Harga langsung", "SL dan TP tiap indeks", "INDEKS", "HARGA", "BELI", "JUAL",
      "SL dan TP dalam pip untuk tiap indeks", ". Ketuk indeks untuk melihat detailnya.",
      "Alat analisis teknis. Bukan nasihat keuangan dan tidak menjamin keuntungan. Indeks sintetis berisiko tinggi.",
      "Tutup", "Tutup grafik", "SINYAL EKSTREM", "DI ZONA ENTRI", "DIPANTAU", "Harga entri (sekarang)", "Mendukung ✓", "Berlawanan",
      "Lihat grafik", "Salin sinyal", "Sinyal disalin", "Gagal menyalin", "▼▲ sinyal ≥90%", "Sinyal", "Hapus riwayat",
      "Belum ada sinyal.", "Saat indeks mencapai 90% atau 95%, akan muncul di sini dengan harga entrinya.", "Pengaturan",
      "Peringatan di ponsel ini", "Suara scanner", "ping lembut · alarm cepat mulai 90%", "Getar", "Bahasa", "Otomatis",
      "Akun", "Sesi", "Kanal sinyal", "Buka", "Hapus akun saya", "Hapus permanen", "Menghapus…",
      "Akun dan data Anda akan dihapus. Tindakan ini tidak dapat dibatalkan. Untuk konfirmasi, masukkan kata sandi Anda.",
      "Masukkan kata sandi Anda.", "sekarang", "Masuk mode demo"] };

  /* ---------- Tiếng Việt ---------- */
  P.vi = { locale: "vi-VN", name: "Tiếng Việt", words: { buy: "MUA", sell: "BÁN", entry: "giá vào", extreme: "CỰC MẠNH", extremeSignal: "tín hiệu cực mạnh" },
    ago: function (n, u) { return n + " " + (u === "s" ? "giây" : "phút") + " trước"; }, total: function (n) { return "Tổng " + n; },
    updated: function (a, b) { return "Đã cập nhật " + a + "/" + b + " chỉ số"; }, entryLbl: "Giá vào",
    sent: function (e) { return "Chúng tôi đã gửi email đến " + e + ". Hãy mở, nhấn liên kết xác minh (kiểm tra cả thư rác) rồi nhấn «Kiểm tra lại»."; },
    created: "Đã tạo tài khoản! ",
    T: ["Logo Mirror Trade Pro", "Đăng nhập", "Đăng ký", "Email", "Mật khẩu", "ít nhất 6 ký tự", "Hiện mật khẩu",
      "Nhập lại mật khẩu", "nhập lại lần nữa", "Tạo tài khoản", "Quên mật khẩu?", "Khôi phục mật khẩu",
      "Nhập email của bạn, chúng tôi sẽ gửi liên kết để tạo mật khẩu mới.", "Gửi liên kết", "← Quay lại đăng nhập",
      "Đang chờ cấp quyền", "Đã bị chặn", "Xác minh email của bạn", "Không có kết nối", "Mua trên Google Play", "Kiểm tra lại",
      "Đăng xuất", "Phiên bản", "Chính sách quyền riêng tư", "Nhập email hợp lệ.", "Mật khẩu phải có ít nhất 6 ký tự.",
      "Hai mật khẩu không khớp.", "Đang tạo tài khoản…", "Đang kiểm tra…", "Sai email hoặc mật khẩu.", "Sai mật khẩu.",
      "Email này chưa có tài khoản. Nhấn «Đăng ký».", "Email này đã có tài khoản. Nhấn «Đăng nhập».",
      "Email không hợp lệ.", "Quá nhiều lần thử. Vui lòng đợi vài phút.", "Không có internet. Kiểm tra kết nối.",
      "Vì an toàn, hãy đăng xuất, đăng nhập lại và thử lại.",
      "Xong. Kiểm tra email (cả thư rác) và mở liên kết để tạo mật khẩu mới.",
      "Không tải được hệ thống đăng nhập. Kiểm tra internet và mở lại ứng dụng.",
      "Không kiểm tra được quyền truy cập. Kiểm tra internet và nhấn «Kiểm tra lại».",
      "Tài khoản đã được tạo, nhưng để dùng scanner bạn phải mua và cài ứng dụng từ Google Play (trên chính điện thoại này). Nếu đã mua, hãy gỡ bản này, cài từ Google Play rồi đăng nhập lại.",
      "Tài khoản của bạn đã bị quản trị viên chặn. Nếu bạn nghĩ đây là nhầm lẫn, hãy liên hệ qua kênh Telegram.",
      "Tài khoản của bạn đã bị xóa.", "Đang kết nối…", "Đang tải dữ liệu…", "Trực tiếp · Deriv", "Âm thanh", "Tắt tiếng", "Tắt âm thanh",
      "Bật âm thanh", "Dữ liệu mới nhất:", "Làm mới", "Đang làm mới…", "Làm mới dữ liệu", "Kéo xuống để làm mới", "Thả ra để làm mới",
      "✓ Đã cập nhật dữ liệu", "Deriv không phản hồi. Kiểm tra internet.", "Có dữ liệu", "Trong vùng ≥90%", "Mạnh nhất", "Tất cả",
      "Boom · mua", "Crash · bán", "Độ phổ biến", "Mua", "Bán", "đang tải…", "Xanh = Boom (mua) · Đỏ = Crash (bán) · RSI",
      "Hiện chưa có chỉ số nào trong mục này.", "Giá trực tiếp", "SL và TP của từng chỉ số", "CHỈ SỐ", "GIÁ", "MUA", "BÁN",
      "SL và TP tính bằng pip cho từng chỉ số", ". Nhấn vào chỉ số để xem chi tiết.",
      "Công cụ phân tích kỹ thuật. Không phải lời khuyên tài chính và không đảm bảo lợi nhuận. Chỉ số tổng hợp có rủi ro cao.",
      "Đóng", "Đóng biểu đồ", "TÍN HIỆU CỰC MẠNH", "TRONG VÙNG VÀO LỆNH", "ĐANG THEO DÕI", "Giá vào lệnh (hiện tại)", "Thuận ✓", "Ngược",
      "Xem biểu đồ", "Sao chép tín hiệu", "Đã sao chép tín hiệu", "Không sao chép được", "▼▲ tín hiệu ≥90%", "Tín hiệu", "Xóa lịch sử",
      "Chưa có tín hiệu.", "Khi một chỉ số đạt 90% hoặc 95%, nó sẽ hiện ở đây kèm giá vào lệnh.", "Cài đặt",
      "Cảnh báo trên điện thoại này", "Âm thanh scanner", "tiếng ping nhẹ · báo động nhanh từ 90%", "Rung", "Ngôn ngữ", "Tự động",
      "Tài khoản", "Phiên", "Kênh tín hiệu", "Mở", "Xóa tài khoản của tôi", "Xóa vĩnh viễn", "Đang xóa…",
      "Tài khoản và dữ liệu của bạn sẽ bị xóa. Không thể hoàn tác. Để xác nhận, hãy nhập mật khẩu.",
      "Nhập mật khẩu của bạn.", "vừa xong", "Vào chế độ dùng thử"] };

  /* ---------- Русский ---------- */
  P.ru = { locale: "ru-RU", name: "Русский", words: { buy: "ПОКУПКА", sell: "ПРОДАЖА", entry: "вход", extreme: "ЭКСТРЕМУМ", extremeSignal: "экстремальный сигнал" },
    ago: function (n, u) { return n + " " + (u === "s" ? "с" : "мин") + " назад"; }, total: function (n) { return "Всего: " + n; },
    updated: function (a, b) { return "Обновлено " + a + " из " + b + " индексов"; }, entryLbl: "Вход",
    sent: function (e) { return "Мы отправили письмо на " + e + ". Откройте его, нажмите ссылку подтверждения (проверьте и спам), затем нажмите «Проверить снова»."; },
    created: "Аккаунт создан! ",
    T: ["Логотип Mirror Trade Pro", "Войти", "Регистрация", "Эл. почта", "Пароль", "минимум 6 символов", "Показать пароль",
      "Повторите пароль", "введите ещё раз", "Создать аккаунт", "Забыли пароль?", "Восстановить пароль",
      "Введите эл. почту, и мы пришлём ссылку для создания нового пароля.", "Отправить ссылку", "← Назад ко входу",
      "Доступ ожидает", "Доступ заблокирован", "Подтвердите эл. почту", "Нет соединения", "Купить в Google Play", "Проверить снова",
      "Выйти", "Версия", "Политика конфиденциальности", "Введите корректную эл. почту.", "Пароль должен содержать минимум 6 символов.",
      "Пароли не совпадают.", "Создаём ваш аккаунт…", "Проверка…", "Неверная почта или пароль.", "Неверный пароль.",
      "Для этой почты нет аккаунта. Нажмите «Регистрация».", "Для этой почты уже есть аккаунт. Нажмите «Войти».",
      "Некорректная эл. почта.", "Слишком много попыток. Подождите несколько минут.", "Нет интернета. Проверьте соединение.",
      "Для безопасности выйдите, войдите снова и повторите.",
      "Готово. Проверьте почту (и папку спам) и откройте ссылку, чтобы создать новый пароль.",
      "Не удалось загрузить систему входа. Проверьте интернет и откройте приложение снова.",
      "Не удалось проверить доступ. Проверьте интернет и нажмите «Проверить снова».",
      "Аккаунт создан, но чтобы пользоваться сканером, нужно купить и установить приложение из Google Play (на этом же телефоне). Если вы уже купили его, удалите эту копию, установите из Google Play и войдите снова.",
      "Администратор заблокировал ваш аккаунт. Если это ошибка, напишите нам в Telegram-канале.",
      "Ваш аккаунт удалён.", "Подключение…", "Загрузка данных…", "Онлайн · Deriv", "Звук", "Без звука", "Выключить звук",
      "Включить звук", "Последние данные:", "Обновить", "Обновление…", "Обновить данные", "Потяните вниз для обновления", "Отпустите для обновления",
      "✓ Данные обновлены", "Нет ответа от Deriv. Проверьте интернет.", "С данными", "В зоне ≥90%", "Сильнейший", "Все",
      "Boom · покупка", "Crash · продажа", "Популярность", "Покупка", "Продажа", "загрузка…", "Зелёный = Boom (покупка) · Красный = Crash (продажа) · RSI",
      "Сейчас в этой категории нет индексов.", "Цены онлайн", "SL и TP каждого индекса", "ИНДЕКС", "ЦЕНА", "ПОКУПКА", "ПРОДАЖА",
      "SL и TP в пипсах для каждого индекса", ". Нажмите на индекс, чтобы увидеть детали.",
      "Инструмент технического анализа. Не является финансовой рекомендацией и не гарантирует прибыль. Синтетические индексы — высокий риск.",
      "Закрыть", "Закрыть график", "ЭКСТРЕМАЛЬНЫЙ СИГНАЛ", "В ЗОНЕ ВХОДА", "НАБЛЮДЕНИЕ", "Цена входа (сейчас)", "По тренду ✓", "Против тренда",
      "Открыть график", "Скопировать сигнал", "Сигнал скопирован", "Не удалось скопировать", "▼▲ сигнал ≥90%", "Сигналы", "Очистить историю",
      "Сигналов пока нет.", "Когда индекс достигнет 90% или 95%, он появится здесь с ценой входа.", "Настройки",
      "Оповещения на этом телефоне", "Звук сканера", "мягкий сигнал · быстрая тревога от 90%", "Вибрация", "Язык", "Автоматически",
      "Аккаунт", "Сеанс", "Канал сигналов", "Открыть", "Удалить мой аккаунт", "Удалить навсегда", "Удаление…",
      "Ваш аккаунт и данные будут удалены. Это нельзя отменить. Для подтверждения введите пароль.",
      "Введите пароль.", "сейчас", "Войти в демо-режим"] };

  // Textos adicionales (verificación de correo)
  var EXTRA_K = ["Resend email", "Wait a minute before resending.", "Email resent. It may take a few minutes; check Spam and Promotions.", "Also check the", "Spam", "and", "Promotions", " folders. The email comes from", "and may take a few minutes. If it doesn't arrive, message us on the Telegram channel and we'll activate you manually."];
  var EXTRA = {"pt": ["Reenviar e-mail", "Aguarde um minuto antes de reenviar.", "E-mail reenviado. Pode levar alguns minutos; veja Spam e Promoções.", "Veja também as pastas", "Spam", "e", "Promoções", ". O e-mail vem de", "e pode levar alguns minutos. Se não chegar, fale conosco no canal do Telegram e ativamos manualmente."], "fr": ["Renvoyer l'e-mail", "Attendez une minute avant de renvoyer.", "E-mail renvoyé. Cela peut prendre quelques minutes ; vérifiez Spam et Promotions.", "Vérifiez aussi les dossiers", "Spam", "et", "Promotions", ". L'e-mail provient de", "et peut prendre quelques minutes. S'il n'arrive pas, écrivez-nous sur le canal Telegram et nous vous activerons manuellement."], "ar": ["إعادة إرسال البريد", "انتظر دقيقة قبل إعادة الإرسال.", "تمت إعادة الإرسال. قد يستغرق بضع دقائق؛ تحقق من البريد المزعج والعروض.", "تحقق أيضًا من مجلدي", "البريد المزعج", "و", "العروض", ". تصل الرسالة من", "وقد تستغرق بضع دقائق. إذا لم تصل، راسلنا عبر قناة Telegram وسنفعّل حسابك يدويًا."], "id": ["Kirim ulang email", "Tunggu satu menit sebelum mengirim ulang.", "Email dikirim ulang. Mungkin perlu beberapa menit; cek Spam dan Promosi.", "Cek juga folder", "Spam", "dan", "Promosi", ". Email dikirim dari", "dan mungkin perlu beberapa menit. Jika tidak masuk, hubungi kami di kanal Telegram dan kami aktifkan manual."], "vi": ["Gửi lại email", "Vui lòng đợi một phút trước khi gửi lại.", "Đã gửi lại email. Có thể mất vài phút; hãy kiểm tra Thư rác và Quảng cáo.", "Hãy kiểm tra cả thư mục", "Thư rác", "và", "Quảng cáo", ". Email được gửi từ", "và có thể mất vài phút. Nếu không nhận được, hãy nhắn cho chúng tôi qua kênh Telegram để kích hoạt thủ công."], "ru": ["Отправить письмо снова", "Подождите минуту перед повторной отправкой.", "Письмо отправлено снова. Это может занять несколько минут; проверьте «Спам» и «Промоакции».", "Проверьте также папки", "Спам", "и", "Промоакции", ". Письмо приходит от", "и может прийти через несколько минут. Если оно не пришло, напишите нам в Telegram-канале, и мы активируем вас вручную."]};
  Object.keys(EXTRA).forEach(function (k) { if (!P[k]) return; var m = {}; EXTRA_K.forEach(function (key, i) { m[key] = EXTRA[k][i]; }); P[k].extra = m; });

  // Textos adicionales (alertas técnicas)
  var EXTRA2_K = ["EXTREME RSI", "IN ALERT ZONE", "Current price", "Price"];
  var EXTRA2 = {"pt": ["RSI EXTREMO", "NA ZONA DE ALERTA", "Preço atual", "Preço"], "fr": ["RSI EXTRÊME", "EN ZONE D'ALERTE", "Prix actuel", "Prix"], "ar": ["RSI متطرف", "في منطقة التنبيه", "السعر الحالي", "السعر"], "id": ["RSI EKSTREM", "DI ZONA PERINGATAN", "Harga saat ini", "Harga"], "vi": ["RSI CỰC TRỊ", "TRONG VÙNG CẢNH BÁO", "Giá hiện tại", "Giá"], "ru": ["ЭКСТРЕМАЛЬНЫЙ RSI", "В ЗОНЕ СИГНАЛА", "Текущая цена", "Цена"]};
  Object.keys(EXTRA2).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA2_K.forEach(function (key, i) { P[k].extra[key] = EXTRA2[k][i]; }); });

  // Textos adicionales (tabla sin SL/TP)
  var EXTRA3_K = ["Price, RSI and level of each index", "LEVEL", "Level = how close the RSI is to the extreme zone (90% or more = alert). Tap an index to see its details."];
  var EXTRA3 = {"pt": ["Preço, RSI e nível de cada índice", "NÍVEL", "Nível = quão perto o RSI está da zona extrema (90% ou mais = alerta). Toque em um índice para ver os detalhes."], "fr": ["Prix, RSI et niveau de chaque indice", "NIVEAU", "Niveau = à quel point le RSI est proche de la zone extrême (90 % ou plus = alerte). Touchez un indice pour voir le détail."], "ar": ["السعر وRSI والمستوى لكل مؤشر", "المستوى", "المستوى = مدى قرب RSI من المنطقة القصوى (90% أو أكثر = تنبيه). اضغط على مؤشر لعرض التفاصيل."], "id": ["Harga, RSI, dan level tiap indeks", "LEVEL", "Level = seberapa dekat RSI ke zona ekstrem (90% ke atas = peringatan). Ketuk indeks untuk melihat detailnya."], "vi": ["Giá, RSI và mức của từng chỉ số", "MỨC", "Mức = RSI gần vùng cực trị đến đâu (từ 90% = cảnh báo). Nhấn vào chỉ số để xem chi tiết."], "ru": ["Цена, RSI и уровень каждого индекса", "УРОВЕНЬ", "Уровень = насколько RSI близок к экстремальной зоне (90% и выше = сигнал). Нажмите на индекс, чтобы увидеть детали."]};
  Object.keys(EXTRA3).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA3_K.forEach(function (key, i) { P[k].extra[key] = EXTRA3[k][i]; }); });

  // Advertencia de riesgo
  var EXTRA4_K = ["Before you start", "Boom & Crash Scanner is a monitoring tool: it shows the live RSI of the Boom and Crash indices and alerts you when they reach extreme zones.", "Alerts are informational. They are not buy or sell recommendations and do not predict the price.", "In tests with historical data, the alerts showed no advantage over random entries.", "Trading synthetic indices is high risk: you can lose all your money. Only trade with money you can afford to lose.", "For adults 18+ only. This app is not affiliated with any broker.", "I understand and accept", "Risk warning", "Monitoring tool. Alerts are informational: they are not recommendations and do not predict the price. Synthetic indices are high risk."];
  var EXTRA4 = {"pt": ["Antes de começar", "O Boom & Crash Scanner é uma ferramenta de monitoramento: mostra ao vivo o RSI dos índices Boom e Crash e avisa quando chegam a zonas extremas.", "Os alertas são informativos. Não são recomendações de compra ou venda nem preveem o preço.", "Em testes com dados históricos, os alertas não mostraram vantagem em relação a entradas aleatórias.", "Operar índices sintéticos tem alto risco: você pode perder todo o seu dinheiro. Opere apenas com dinheiro que pode perder.", "Somente para maiores de 18 anos. Este app não é afiliado a nenhuma corretora.", "Entendo e aceito", "Aviso de risco", "Ferramenta de monitoramento. Os alertas são informativos: não são recomendações nem preveem o preço. Índices sintéticos são de alto risco."], "fr": ["Avant de commencer", "Boom & Crash Scanner est un outil de surveillance : il affiche en direct le RSI des indices Boom et Crash et vous alerte lorsqu'ils atteignent des zones extrêmes.", "Les alertes sont informatives. Ce ne sont pas des recommandations d'achat ou de vente et elles ne prédisent pas le prix.", "Lors de tests sur des données historiques, les alertes n'ont montré aucun avantage par rapport à des entrées au hasard.", "Le trading d'indices synthétiques est à haut risque : vous pouvez perdre tout votre argent. Ne tradez qu'avec de l'argent que vous pouvez vous permettre de perdre.", "Réservé aux plus de 18 ans. Cette application n'est affiliée à aucun courtier.", "Je comprends et j'accepte", "Avertissement sur les risques", "Outil de surveillance. Les alertes sont informatives : ce ne sont pas des recommandations et elles ne prédisent pas le prix. Les indices synthétiques sont à haut risque."], "ar": ["قبل أن تبدأ", "Boom & Crash Scanner أداة مراقبة: تعرض مؤشر RSI لمؤشرات Boom و Crash مباشرةً وتنبّهك عندما تصل إلى مناطق قصوى.", "التنبيهات معلوماتية فقط. ليست توصيات بالشراء أو البيع ولا تتنبأ بالسعر.", "في اختبارات على بيانات تاريخية، لم تُظهر التنبيهات أي أفضلية مقارنةً بالدخول العشوائي.", "تداول المؤشرات الاصطناعية عالي المخاطر: قد تخسر كل أموالك. تداول فقط بأموال يمكنك تحمّل خسارتها.", "للبالغين 18 عامًا فأكثر فقط. هذا التطبيق غير تابع لأي وسيط.", "أفهم وأوافق", "تحذير المخاطر", "أداة مراقبة. التنبيهات معلوماتية: ليست توصيات ولا تتنبأ بالسعر. المؤشرات الاصطناعية عالية المخاطر."], "id": ["Sebelum mulai", "Boom & Crash Scanner adalah alat pemantauan: menampilkan RSI indeks Boom dan Crash secara langsung dan memberi peringatan saat mencapai zona ekstrem.", "Peringatan bersifat informatif. Bukan rekomendasi beli atau jual dan tidak memprediksi harga.", "Dalam pengujian dengan data historis, peringatan tidak menunjukkan keunggulan dibanding entri acak.", "Trading indeks sintetis berisiko tinggi: Anda bisa kehilangan seluruh uang Anda. Trading hanya dengan uang yang siap Anda relakan.", "Hanya untuk usia 18+. Aplikasi ini tidak berafiliasi dengan broker mana pun.", "Saya mengerti dan setuju", "Peringatan risiko", "Alat pemantauan. Peringatan bersifat informatif: bukan rekomendasi dan tidak memprediksi harga. Indeks sintetis berisiko tinggi."], "vi": ["Trước khi bắt đầu", "Boom & Crash Scanner là công cụ theo dõi: hiển thị trực tiếp RSI của các chỉ số Boom và Crash và cảnh báo khi chúng chạm vùng cực trị.", "Cảnh báo chỉ mang tính thông tin. Không phải khuyến nghị mua hay bán và không dự đoán giá.", "Trong các thử nghiệm với dữ liệu lịch sử, cảnh báo không cho thấy lợi thế so với vào lệnh ngẫu nhiên.", "Giao dịch chỉ số tổng hợp có rủi ro cao: bạn có thể mất toàn bộ tiền. Chỉ giao dịch bằng số tiền bạn có thể chấp nhận mất.", "Chỉ dành cho người từ 18 tuổi. Ứng dụng không liên kết với bất kỳ nhà môi giới nào.", "Tôi hiểu và đồng ý", "Cảnh báo rủi ro", "Công cụ theo dõi. Cảnh báo chỉ mang tính thông tin: không phải khuyến nghị và không dự đoán giá. Chỉ số tổng hợp có rủi ro cao."], "ru": ["Прежде чем начать", "Boom & Crash Scanner — инструмент мониторинга: он показывает RSI индексов Boom и Crash в реальном времени и предупреждает, когда они достигают экстремальных зон.", "Оповещения носят информационный характер. Это не рекомендации покупать или продавать, и они не предсказывают цену.", "В тестах на исторических данных оповещения не показали преимущества перед случайными входами.", "Торговля синтетическими индексами связана с высоким риском: вы можете потерять все свои деньги. Торгуйте только теми деньгами, которые готовы потерять.", "Только для лиц старше 18 лет. Приложение не связано ни с одним брокером.", "Понимаю и принимаю", "Предупреждение о рисках", "Инструмент мониторинга. Оповещения носят информационный характер: это не рекомендации, и они не предсказывают цену. Синтетические индексы — высокий риск."]};
  Object.keys(EXTRA4).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA4_K.forEach(function (key, i) { P[k].extra[key] = EXTRA4[k][i]; }); });

  // Aviso de riesgo corto
  var EXTRA5 = {"pt": "Operar índices sintéticos tem alto risco.", "fr": "Le trading d'indices synthétiques est à haut risque.", "ar": "تداول المؤشرات الاصطناعية عالي المخاطر.", "id": "Trading indeks sintetis berisiko tinggi.", "vi": "Giao dịch chỉ số tổng hợp có rủi ro cao.", "ru": "Торговля синтетическими индексами связана с высоким риском."};
  Object.keys(EXTRA5).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; P[k].extra["Trading synthetic indices is high risk."] = EXTRA5[k]; });

  // Suscripciones
  var EXTRA6_K = ["Choose your plan", "Full access to the scanner, alerts and charts.", "3 days free.", "You won't be charged during the trial. You can cancel anytime from Google Play.", "Yearly", "/ year", "Monthly", "/ month", "Billed monthly", "Equals", "per month", "SAVE", "Start 3-day free trial", "Subscribe", "After the 3-day trial, Google Play automatically charges the chosen plan and renews it each period until you cancel. You can cancel anytime in Google Play → Payments & subscriptions → Subscriptions.", "I already have a subscription", "To subscribe, install the app from Google Play.", "Checking your subscription…", "Opening Google Play…", "Done! Your subscription is active.", "Welcome!", "Your payment is pending. When Google Play confirms it, tap «I already have a subscription».", "The subscription could not be completed.", "We couldn't find an active subscription on this Google Play account.", "This Google Play account already has a subscription linked to another app email. Sign in with that email, or use another Google Play account.", "Your subscription could not be checked with Google Play. Check your internet and tap «Check again».", "Subscription", "Manage", "Free access granted by the administrator", "Yearly plan", "Monthly plan"];
  var EXTRA6 = {"pt": ["Escolha seu plano", "Acesso completo ao scanner, alertas e gráficos.", "3 dias grátis.", "Você não paga nada durante o teste. Pode cancelar quando quiser no Google Play.", "Anual", "/ ano", "Mensal", "/ mês", "Cobrança mensal", "Equivale a", "por mês", "ECONOMIZE", "Começar 3 dias grátis", "Assinar", "Após os 3 dias de teste, o Google Play cobra automaticamente o plano escolhido e o renova a cada período, até você cancelar. Você pode cancelar a qualquer momento em Google Play → Pagamentos e assinaturas → Assinaturas.", "Já tenho uma assinatura", "Para assinar, instale o app pelo Google Play.", "Verificando sua assinatura…", "Abrindo o Google Play…", "Pronto! Sua assinatura está ativa.", "Bem-vindo!", "Seu pagamento está pendente. Quando o Google Play confirmar, toque em «Já tenho uma assinatura».", "Não foi possível concluir a assinatura.", "Não encontramos uma assinatura ativa nesta conta do Google Play.", "Esta conta do Google Play já tem uma assinatura vinculada a outro e-mail do app. Entre com esse e-mail ou use outra conta do Google Play.", "Não foi possível verificar sua assinatura no Google Play. Verifique sua internet e toque em «Verificar de novo».", "Assinatura", "Gerenciar", "Acesso gratuito concedido pelo administrador", "Plano anual", "Plano mensal"], "fr": ["Choisissez votre formule", "Accès complet au scanner, aux alertes et aux graphiques.", "3 jours gratuits.", "Rien ne vous est facturé pendant l'essai. Vous pouvez annuler à tout moment depuis Google Play.", "Annuel", "/ an", "Mensuel", "/ mois", "Facturé chaque mois", "Soit", "par mois", "ÉCONOMISEZ", "Commencer l'essai gratuit de 3 jours", "S'abonner", "Après les 3 jours d'essai, Google Play facture automatiquement la formule choisie et la renouvelle à chaque période jusqu'à ce que vous annuliez. Vous pouvez annuler à tout moment dans Google Play → Paiements et abonnements → Abonnements.", "J'ai déjà un abonnement", "Pour vous abonner, installez l'application depuis Google Play.", "Vérification de votre abonnement…", "Ouverture de Google Play…", "C'est fait ! Votre abonnement est actif.", "Bienvenue !", "Votre paiement est en attente. Quand Google Play le confirmera, touchez «J'ai déjà un abonnement».", "L'abonnement n'a pas pu être finalisé.", "Aucun abonnement actif trouvé sur ce compte Google Play.", "Ce compte Google Play a déjà un abonnement lié à un autre e-mail de l'application. Connectez-vous avec cet e-mail ou utilisez un autre compte Google Play.", "Impossible de vérifier votre abonnement avec Google Play. Vérifiez votre internet et touchez «Vérifier à nouveau».", "Abonnement", "Gérer", "Accès gratuit accordé par l'administrateur", "Formule annuelle", "Formule mensuelle"], "ar": ["اختر خطتك", "وصول كامل إلى الماسح والتنبيهات والرسوم البيانية.", "3 أيام مجانًا.", "لن يتم تحصيل أي مبلغ خلال الفترة التجريبية. يمكنك الإلغاء في أي وقت من Google Play.", "سنوي", "/ سنة", "شهري", "/ شهر", "الدفع شهريًا", "ما يعادل", "شهريًا", "وفّر", "ابدأ 3 أيام مجانًا", "اشترك", "بعد 3 أيام التجربة، يحصّل Google Play تلقائيًا رسوم الخطة المختارة ويجددها كل فترة حتى تلغيها. يمكنك الإلغاء في أي وقت من Google Play ← المدفوعات والاشتراكات ← الاشتراكات.", "لدي اشتراك بالفعل", "للاشتراك، ثبّت التطبيق من Google Play.", "جارٍ التحقق من اشتراكك…", "جارٍ فتح Google Play…", "تم! اشتراكك نشط.", "مرحبًا!", "دفعتك قيد الانتظار. عندما يؤكدها Google Play اضغط «لدي اشتراك بالفعل».", "تعذّر إتمام الاشتراك.", "لم نجد اشتراكًا نشطًا في حساب Google Play هذا.", "حساب Google Play هذا لديه اشتراك مرتبط ببريد آخر في التطبيق. ادخل بذلك البريد أو استخدم حساب Google Play آخر.", "تعذّر التحقق من اشتراكك مع Google Play. تحقق من الإنترنت واضغط «التحقق مرة أخرى».", "الاشتراك", "إدارة", "وصول مجاني منحه المسؤول", "الخطة السنوية", "الخطة الشهرية"], "id": ["Pilih paket Anda", "Akses penuh ke scanner, peringatan, dan grafik.", "Gratis 3 hari.", "Anda tidak dikenai biaya selama uji coba. Bisa dibatalkan kapan saja dari Google Play.", "Tahunan", "/ tahun", "Bulanan", "/ bulan", "Ditagih bulanan", "Setara", "per bulan", "HEMAT", "Mulai gratis 3 hari", "Berlangganan", "Setelah 3 hari uji coba, Google Play otomatis menagih paket yang dipilih dan memperpanjangnya setiap periode sampai Anda membatalkan. Bisa dibatalkan kapan saja di Google Play → Pembayaran & langganan → Langganan.", "Saya sudah berlangganan", "Untuk berlangganan, pasang aplikasi dari Google Play.", "Memeriksa langganan Anda…", "Membuka Google Play…", "Selesai! Langganan Anda aktif.", "Selamat datang!", "Pembayaran Anda tertunda. Setelah Google Play mengonfirmasi, ketuk «Saya sudah berlangganan».", "Langganan tidak dapat diselesaikan.", "Kami tidak menemukan langganan aktif di akun Google Play ini.", "Akun Google Play ini sudah memiliki langganan yang terhubung ke email aplikasi lain. Masuk dengan email itu, atau gunakan akun Google Play lain.", "Langganan tidak dapat diperiksa dengan Google Play. Periksa internet dan ketuk «Periksa lagi».", "Langganan", "Kelola", "Akses gratis dari administrator", "Paket tahunan", "Paket bulanan"], "vi": ["Chọn gói của bạn", "Truy cập đầy đủ scanner, cảnh báo và biểu đồ.", "Miễn phí 3 ngày.", "Bạn không bị tính phí trong thời gian dùng thử. Có thể hủy bất cứ lúc nào trong Google Play.", "Hằng năm", "/ năm", "Hằng tháng", "/ tháng", "Thanh toán hằng tháng", "Tương đương", "mỗi tháng", "TIẾT KIỆM", "Bắt đầu 3 ngày miễn phí", "Đăng ký", "Sau 3 ngày dùng thử, Google Play tự động tính phí gói đã chọn và gia hạn mỗi kỳ cho đến khi bạn hủy. Có thể hủy bất cứ lúc nào trong Google Play → Thanh toán và gói thuê bao → Gói thuê bao.", "Tôi đã có gói đăng ký", "Để đăng ký, hãy cài ứng dụng từ Google Play.", "Đang kiểm tra gói đăng ký…", "Đang mở Google Play…", "Xong! Gói đăng ký của bạn đã hoạt động.", "Chào mừng!", "Thanh toán đang chờ xử lý. Khi Google Play xác nhận, hãy nhấn «Tôi đã có gói đăng ký».", "Không thể hoàn tất đăng ký.", "Không tìm thấy gói đăng ký đang hoạt động trong tài khoản Google Play này.", "Tài khoản Google Play này đã có gói đăng ký gắn với email khác của ứng dụng. Hãy đăng nhập bằng email đó hoặc dùng tài khoản Google Play khác.", "Không thể kiểm tra gói đăng ký với Google Play. Kiểm tra internet và nhấn «Kiểm tra lại».", "Gói đăng ký", "Quản lý", "Quyền truy cập miễn phí do quản trị viên cấp", "Gói năm", "Gói tháng"], "ru": ["Выберите план", "Полный доступ к сканеру, оповещениям и графикам.", "3 дня бесплатно.", "Во время пробного периода плата не взимается. Отменить можно в любой момент в Google Play.", "Годовой", "/ год", "Месячный", "/ мес.", "Оплата каждый месяц", "Это", "в месяц", "ЭКОНОМИЯ", "Начать 3 дня бесплатно", "Подписаться", "После 3 дней пробного периода Google Play автоматически списывает оплату за выбранный план и продлевает его каждый период, пока вы не отмените. Отменить можно в любой момент: Google Play → Платежи и подписки → Подписки.", "У меня уже есть подписка", "Чтобы оформить подписку, установите приложение из Google Play.", "Проверяем вашу подписку…", "Открываем Google Play…", "Готово! Ваша подписка активна.", "Добро пожаловать!", "Ваш платёж обрабатывается. Когда Google Play подтвердит его, нажмите «У меня уже есть подписка».", "Не удалось оформить подписку.", "В этом аккаунте Google Play нет активной подписки.", "Этот аккаунт Google Play уже имеет подписку, привязанную к другой почте приложения. Войдите с этой почтой или используйте другой аккаунт Google Play.", "Не удалось проверить подписку в Google Play. Проверьте интернет и нажмите «Проверить снова».", "Подписка", "Управлять", "Бесплатный доступ от администратора", "Годовой план", "Месячный план"]};
  Object.keys(EXTRA6).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA6_K.forEach(function (key, i) { P[k].extra[key] = EXTRA6[k][i]; }); });

  // Prueba gratis de la app (sin tarjeta)
  var EXTRA7_K = ["Free trial: {t} left.", "See plans", "day", "days", "hour", "hours", "minutes", "Your 3-day free trial has ended", "To keep using the scanner, alerts and charts, choose a plan.", "You are still on your free trial. If you subscribe now, the first charge is made today.", "Google Play charges the chosen plan and renews it each period until you cancel. You can cancel anytime in Google Play → Payments & subscriptions → Subscriptions.", "Back to the app", "Welcome! You have 3 free days to try the app, no card needed.", "Free trial", "ends on {f}"];
  var EXTRA7 = {"pt": ["Teste grátis: restam {t}.", "Ver planos", "dia", "dias", "hora", "horas", "minutos", "Seu teste grátis de 3 dias terminou", "Para continuar usando o scanner, os alertas e os gráficos, escolha um plano.", "Você ainda está no teste grátis. Se assinar agora, a primeira cobrança é feita hoje.", "O Google Play cobra o plano escolhido e o renova a cada período, até você cancelar. Você pode cancelar a qualquer momento em Google Play → Pagamentos e assinaturas → Assinaturas.", "Voltar ao app", "Bem-vindo! Você tem 3 dias grátis para testar o app, sem cartão.", "Teste grátis", "termina em {f}"], "fr": ["Essai gratuit : il reste {t}.", "Voir les formules", "jour", "jours", "heure", "heures", "minutes", "Votre essai gratuit de 3 jours est terminé", "Pour continuer à utiliser le scanner, les alertes et les graphiques, choisissez une formule.", "Vous êtes encore en essai gratuit. Si vous vous abonnez maintenant, le premier prélèvement a lieu aujourd'hui.", "Google Play facture la formule choisie et la renouvelle à chaque période jusqu'à ce que vous annuliez. Vous pouvez annuler à tout moment dans Google Play → Paiements et abonnements → Abonnements.", "Retour à l'application", "Bienvenue ! Vous avez 3 jours gratuits pour essayer l'application, sans carte.", "Essai gratuit", "se termine le {f}"], "ar": ["التجربة المجانية: متبقٍ {t}.", "عرض الخطط", "يوم", "أيام", "ساعة", "ساعات", "دقائق", "انتهت تجربتك المجانية لمدة 3 أيام", "لمواصلة استخدام الماسح والتنبيهات والرسوم البيانية، اختر خطة.", "ما زلت في فترتك التجريبية المجانية. إذا اشتركت الآن، يتم الخصم الأول اليوم.", "يحصّل Google Play رسوم الخطة المختارة ويجددها كل فترة حتى تلغيها. يمكنك الإلغاء في أي وقت من Google Play ← المدفوعات والاشتراكات ← الاشتراكات.", "العودة إلى التطبيق", "مرحبًا! لديك 3 أيام مجانية لتجربة التطبيق، بدون بطاقة.", "تجربة مجانية", "تنتهي في {f}"], "id": ["Uji coba gratis: sisa {t}.", "Lihat paket", "hari", "hari", "jam", "jam", "menit", "Uji coba gratis 3 hari Anda telah berakhir", "Untuk terus menggunakan scanner, peringatan, dan grafik, pilih paket.", "Anda masih dalam uji coba gratis. Jika berlangganan sekarang, tagihan pertama dibuat hari ini.", "Google Play menagih paket yang dipilih dan memperpanjangnya setiap periode sampai Anda membatalkan. Bisa dibatalkan kapan saja di Google Play → Pembayaran & langganan → Langganan.", "Kembali ke aplikasi", "Selamat datang! Anda punya 3 hari gratis untuk mencoba aplikasi, tanpa kartu.", "Uji coba gratis", "berakhir pada {f}"], "vi": ["Dùng thử miễn phí: còn {t}.", "Xem các gói", "ngày", "ngày", "giờ", "giờ", "phút", "Thời gian dùng thử miễn phí 3 ngày đã kết thúc", "Để tiếp tục dùng scanner, cảnh báo và biểu đồ, hãy chọn một gói.", "Bạn vẫn đang dùng thử miễn phí. Nếu đăng ký bây giờ, lần thanh toán đầu tiên sẽ diễn ra hôm nay.", "Google Play tính phí gói đã chọn và gia hạn mỗi kỳ cho đến khi bạn hủy. Có thể hủy bất cứ lúc nào trong Google Play → Thanh toán và gói thuê bao → Gói thuê bao.", "Quay lại ứng dụng", "Chào mừng! Bạn có 3 ngày miễn phí để dùng thử ứng dụng, không cần thẻ.", "Dùng thử miễn phí", "kết thúc vào {f}"], "ru": ["Бесплатный период: осталось {t}.", "Тарифы", "дн.", "дн.", "ч", "ч", "мин", "Ваш бесплатный 3-дневный период закончился", "Чтобы продолжить пользоваться сканером, оповещениями и графиками, выберите план.", "У вас ещё идёт бесплатный период. Если оформить подписку сейчас, первое списание будет сегодня.", "Google Play списывает оплату за выбранный план и продлевает его каждый период, пока вы не отмените. Отменить можно в любой момент: Google Play → Платежи и подписки → Подписки.", "Вернуться в приложение", "Добро пожаловать! У вас 3 бесплатных дня, чтобы попробовать приложение, без карты.", "Бесплатный период", "заканчивается {f}"]};
  Object.keys(EXTRA7).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA7_K.forEach(function (key, i) { P[k].extra[key] = EXTRA7[k][i]; }); });

  // iPhone (App Store)
  var EXTRA8_K = ["Payment is charged to your Apple account when you confirm the purchase. The subscription renews automatically unless you cancel it at least 24 hours before the end of the period. You can manage or cancel it in Settings → your name → Subscriptions.", "Terms of Use (EULA)"];
  var EXTRA8 = {"pt": ["O pagamento é cobrado na sua conta Apple ao confirmar a compra. A assinatura é renovada automaticamente, a menos que você a cancele pelo menos 24 horas antes do fim do período. Você pode gerenciá-la ou cancelá-la em Ajustes → seu nome → Assinaturas.", "Termos de uso (EULA)"], "fr": ["Le paiement est débité de votre compte Apple à la confirmation de l'achat. L'abonnement se renouvelle automatiquement, sauf si vous l'annulez au moins 24 heures avant la fin de la période. Vous pouvez le gérer ou l'annuler dans Réglages → votre nom → Abonnements.", "Conditions d'utilisation (CLUF)"], "ar": ["يتم خصم المبلغ من حساب Apple الخاص بك عند تأكيد الشراء. يتجدد الاشتراك تلقائيًا ما لم تلغه قبل 24 ساعة على الأقل من نهاية الفترة. يمكنك إدارته أو إلغاؤه من الإعدادات ← اسمك ← الاشتراكات.", "شروط الاستخدام (EULA)"], "id": ["Pembayaran ditagihkan ke akun Apple Anda saat pembelian dikonfirmasi. Langganan diperpanjang otomatis kecuali dibatalkan setidaknya 24 jam sebelum periode berakhir. Anda dapat mengelola atau membatalkannya di Pengaturan → nama Anda → Langganan.", "Ketentuan Penggunaan (EULA)"], "vi": ["Khoản thanh toán được tính vào tài khoản Apple của bạn khi xác nhận mua. Gói đăng ký tự động gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi hết kỳ. Bạn có thể quản lý hoặc hủy trong Cài đặt → tên của bạn → Đăng ký.", "Điều khoản sử dụng (EULA)"], "ru": ["Оплата списывается с вашей учётной записи Apple при подтверждении покупки. Подписка продлевается автоматически, если не отменить её не позднее чем за 24 часа до конца периода. Управлять подпиской или отменить её можно в Настройках → ваше имя → Подписки.", "Условия использования (EULA)"]};
  Object.keys(EXTRA8).forEach(function (k) { if (!P[k]) return; P[k].extra = P[k].extra || {}; EXTRA8_K.forEach(function (key, i) { P[k].extra[key] = EXTRA8[k][i]; }); });

  // Verificación: cada idioma debe tener exactamente los mismos textos
  Object.keys(P).forEach(function (k) {
    if (P[k].T.length !== K.length) console.error("Traducción incompleta:", k, P[k].T.length, "de", K.length);
    var m = {}; for (var i = 0; i < K.length; i++) m[K[i]] = P[k].T[i]; P[k].map = m;
  });
  return { keys: K, langs: P };
})();
