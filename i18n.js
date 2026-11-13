/**
 * i18n.js — Système de traduction dynamique
 * Mont-Saint-Michel — Patrimoine UNESCO
 *
 * Utilisation :
 *   data-i18n="clé"            → remplace textContent
 *   data-i18n-html="clé"       → remplace innerHTML
 *   data-i18n-attr="attr:clé"  → remplace un attribut (ex: placeholder:clé)
 *   data-i18n-page="histoire"  → identifie la page pour le menu langue
 *
 * Pour les sections de contenu long :
 *   <div data-lang="fr">…</div>
 *   <div data-lang="en" hidden>…</div>
 *   <div data-lang="ar" hidden>…</div>
 */

const TRANSLATIONS = {

  /* ================================================================
     COMMUN — Header / Nav / Footer (toutes les pages)
  ================================================================ */
  fr: {
    // Header
    'site.title'          : 'Le Mont-Saint-Michel',
    'site.subtitle'       : "Patrimoine mondial de l'humanité",
    'theme.normal'        : 'Normal',
    'theme.colorblind'    : 'Daltoniens',
    'lang.label'          : 'Français',

    // Nav
    'nav.home'            : 'Accueil',
    'nav.history'         : 'Histoire',
    'nav.architecture'    : 'Architecture',
    'nav.practical'       : 'Infos Pratiques',
    'nav.route'           : 'Parcours',

    // Footer
    'footer.about'        : 'À PROPOS',
    'footer.about.text'   : 'Site web créé à des fins éducatives uniquement.',
    'footer.copyright'    : '© 2025 Projet scolaire Mont-Saint-Michel.',
    'footer.contact.head' : 'CONTACT',
    'footer.faq'          : 'FAQ',
    'footer.contact.link' : 'CONTACT',
    'footer.legal'        : 'MENTIONS LÉGALES',
    'footer.privacy'      : 'POLITIQUE DE CONFIDENTIALITÉ',
    'footer.follow'       : 'NOUS SUIVRE',
    'footer.partners'     : 'PARTENAIRES',
    'footer.bottom'       : '© 2026 Patrimoine Mondial',

    /* ── INDEX ─────────────────────────────────────────────────── */
    'hero.tag'            : 'Patrimoine mondial · UNESCO',
    'hero.heading1'       : 'Le Mont',
    'hero.heading2'       : 'Saint-Michel',
    'hero.sub'            : "Survolez le Mont, explorez ses lieux emblématiques et planifiez votre visite en quelques clics.",
    'hero.cta1'           : '▶ Visiter en 360°',
    'hero.cta2'           : '→ Mon parcours',

    'alaune.title'        : 'À LA UNE',
    'alaune.badge'        : 'Historique',
    'alaune.card1'        : "Représentation ancienne du Mont-Saint-Michel, fondé en 708.",
    'alaune.card2'        : "Édifiée du XIᵉ au XVIᵉ siècle, l'abbaye illustre l'ingéniosité médiévale.",
    'alaune.card3'        : "Les ruelles animées accueillaient autrefois les pèlerins venus de toute l'Europe.",
    'alaune.more'         : 'Voir plus',

    'historique.title'    : "Un monument chargé d'histoire",
    'historique.text'     : "Depuis plus de treize siècles, le Mont-Saint-Michel s'impose comme un lieu spirituel, stratégique et architectural unique. Entre légende fondatrice, prouesses médiévales et paysages exceptionnels, il est devenu un symbole majeur du patrimoine mondial.",

    'quiz.q1'             : "Le Mont fut menacé de destruction pendant la Première Guerre Mondiale ?",
    'quiz.q1.a'           : 'Vrai',
    'quiz.q1.b'           : 'Faux',
    'quiz.q1.correct'     : "Faux, la plupart des combats destructeurs de la Première Guerre Mondiale avaient lieu à l'Est du pays, bien loin du Mont.",
    'quiz.q1.wrong'       : "Incorrect ! La plupart des combats de la Première Guerre Mondiale avaient lieu à l'Est du pays, bien loin du Mont.",

    'quiz.q2'             : "Qu'est-ce qui rend la viande des agneaux salée ?",
    'quiz.q2.a'           : 'Leur alimentation en moules',
    'quiz.q2.b'           : 'Leur alimentation en algues',
    'quiz.q2.c'           : 'Le sable',
    'quiz.q2.d'           : "C'est leur espace qui donne ce goût salé",
    'quiz.q2.correct'     : "Correct ! C'est l'espace salé de la baie où paissent les agneaux qui donne ce goût unique à leur viande.",
    'quiz.q2.wrong'       : "Incorrect ! C'est l'espace salé de la baie où paissent les agneaux qui donne ce goût unique à leur viande.",

    'quiz.q3'             : "L'abbaye du Mont-Saint-Michel a été construite en moins de 50 ans ?",
    'quiz.q3.a'           : 'Vrai',
    'quiz.q3.b'           : 'Faux',
    'quiz.q3.correct'     : "Faux ! La construction de l'abbaye s'est étalée sur plusieurs siècles, du XIᵉ au XVIᵉ siècle.",
    'quiz.q3.wrong'       : "Incorrect ! La construction de l'abbaye a pris plusieurs siècles, du XIᵉ au XVIᵉ siècle.",

    'quiz.q4'             : "Le Mont-Saint-Michel a servi de prison pendant la Révolution française ?",
    'quiz.q4.a'           : 'Vrai',
    'quiz.q4.b'           : 'Faux',
    'quiz.q4.correct'     : "Vrai ! Pendant la Révolution française et jusqu'en 1863, le Mont-Saint-Michel a été transformé en prison d'État.",
    'quiz.q4.wrong'       : "Incorrect ! Le Mont a bien été utilisé comme prison d'État pendant la Révolution française jusqu'en 1863.",

    'quiz.q5'             : "Les marées autour du Mont peuvent atteindre 15 mètres de hauteur ?",
    'quiz.q5.a'           : 'Vrai',
    'quiz.q5.b'           : 'Faux',
    'quiz.q5.correct'     : "Vrai ! La baie du Mont-Saint-Michel connaît les plus grandes marées d'Europe continentale.",
    'quiz.q5.wrong'       : "Incorrect ! Les marées peuvent effectivement atteindre 15 mètres de hauteur.",

    'quiz.next'           : 'Question suivante',
    'quiz.restart'        : 'Recommencer le quiz',

    'carousel.title'      : 'Les grandes époques du Mont-Saint-Michel',
    'carousel.more'       : 'En savoir plus',
    'carousel.label1'     : 'Forteresse imprenable',
    'carousel.period1'    : '(Guerre de Cent Ans)',
    'carousel.label2'     : 'La fondation',
    'carousel.period2'    : '(VIIIᵉ siècle)',
    'carousel.label3'     : 'Mont médiéval',
    'carousel.period3'    : '(XIᵉ-XVIᵉ siècles)',

    /* ── HISTOIRE ───────────────────────────────────────────────── */
    'histoire.page.title' : 'Histoire — Mont-Saint-Michel',
    'histoire.hero.tag'   : 'Depuis 708 · UNESCO',
    'histoire.hero.title' : 'Histoire',
    'histoire.hero.sub'   : "Treize siècles d'histoire : de la vision de l'archange à la reconnaissance mondiale.",

    /* ── ARCHITECTURE ───────────────────────────────────────────── */
    'archi.page.title'    : 'Architecture — Mont-Saint-Michel',
    'archi.hero.tag'      : 'Chef-d\'œuvre · Médiéval',
    'archi.hero.title'    : 'Architecture',
    'archi.hero.sub'      : "Un chef-d'œuvre de l'architecture médiévale, du roman au gothique flamboyant.",

    /* ── INFOS PRATIQUES ────────────────────────────────────────── */
    'infos.page.title'    : 'Infos Pratiques — Mont-Saint-Michel',
    'infos.hero.tag'      : 'Préparer sa visite',
    'infos.hero.title'    : 'Infos Pratiques',
    'infos.hero.sub'      : "Tout ce qu'il faut pour organiser votre visite : accès, horaires, tarifs et conseils.",

    /* ── PARCOURS ───────────────────────────────────────────────── */
    'parcours.page.title' : 'Parcours — Mont-Saint-Michel',
    'parcours.step.eyebrow': 'Planifier ma visite',
    'parcours.step.title' : 'Combien de temps avez-vous <span>devant vous ?</span>',
    'parcours.step.sub'   : 'Choisissez une durée et nous construisons un parcours optimisé selon les incontournables du Mont.',
    'parcours.gen.btn'    : '→ Générer mon parcours',
    'parcours.itin.eyebrow': 'Votre parcours',
    'parcours.itin.reset' : '↺ Modifier',
    'parcours.itin.time'  : 'de visite',
    'parcours.itin.stops' : 'étapes',
    'parcours.prog.label' : 'Temps utilisé',

    /* ── VISITE VIRTUELLE ───────────────────────────────────────── */
    'vv.page.title'       : 'Visite Virtuelle — Mont-Saint-Michel',
    'vv.hero.tag'         : 'Visite virtuelle · UNESCO',
    'vv.hero.title'       : 'Survolez le <span>Mont-Saint-Michel</span>',
    'vv.hero.sub'         : "Explorez 11 lieux emblématiques à travers panoramas 360° et anecdotes historiques.",
    'vv.section.title'    : 'Les <span>lieux</span> à visiter',
    'vv.section.count'    : '11 ÉTAPES',
    'vv.card.btn'         : 'Explorer →',
    'vv.modal.prev'       : '←',
    'vv.modal.next'       : '→',
    'vv.modal.sv'         : '📷 Street View',
    'vv.modal.wiki'       : 'En savoir +',
    'vv.sv.close'         : '✕ Fermer',
    'vv.footer.copy'      : '© Images Google Earth Studio · Landsat / Copernicus',
    'vv.footer.back'      : '← Retour à l\'accueil',
  },

  /* ================================================================
     ENGLISH
  ================================================================ */
  en: {
    'site.title'          : 'Mont-Saint-Michel',
    'site.subtitle'       : 'World Heritage Site',
    'theme.normal'        : 'Normal',
    'theme.colorblind'    : 'Color-blind',
    'lang.label'          : 'English',

    'nav.home'            : 'Home',
    'nav.history'         : 'History',
    'nav.architecture'    : 'Architecture',
    'nav.practical'       : 'Visitor Info',
    'nav.route'           : 'Route',

    'footer.about'        : 'ABOUT',
    'footer.about.text'   : 'Website created for educational purposes only.',
    'footer.copyright'    : '© 2025 Mont-Saint-Michel school project.',
    'footer.contact.head' : 'CONTACT',
    'footer.faq'          : 'FAQ',
    'footer.contact.link' : 'CONTACT',
    'footer.legal'        : 'LEGAL NOTICE',
    'footer.privacy'      : 'PRIVACY POLICY',
    'footer.follow'       : 'FOLLOW US',
    'footer.partners'     : 'PARTNERS',
    'footer.bottom'       : '© 2026 World Heritage',

    'hero.tag'            : 'World Heritage · UNESCO',
    'hero.heading1'       : 'Mont',
    'hero.heading2'       : 'Saint-Michel',
    'hero.sub'            : 'Fly over the Mont, explore its iconic sites and plan your visit in just a few clicks.',
    'hero.cta1'           : '▶ Visit in 360°',
    'hero.cta2'           : '→ My route',

    'alaune.title'        : 'HIGHLIGHTS',
    'alaune.badge'        : 'Historic',
    'alaune.card1'        : 'Historic depiction of Mont-Saint-Michel, founded in 708.',
    'alaune.card2'        : 'Built from the 11th to the 16th century, the abbey showcases medieval ingenuity.',
    'alaune.card3'        : 'Lively streets once welcomed pilgrims from all over Europe.',
    'alaune.more'         : 'Learn more',

    'historique.title'    : 'A monument steeped in history',
    'historique.text'     : 'For over thirteen centuries, Mont-Saint-Michel has stood as a unique spiritual, strategic and architectural landmark. Between its founding legend, medieval achievements and exceptional landscapes, it has become a major symbol of world heritage.',

    'quiz.q1'             : 'Was Mont-Saint-Michel threatened with destruction during World War I?',
    'quiz.q1.a'           : 'True',
    'quiz.q1.b'           : 'False',
    'quiz.q1.correct'     : 'False — most of the destructive fighting in World War I took place in the east of France, far from the Mont.',
    'quiz.q1.wrong'       : 'Incorrect! Most of the fighting in World War I took place in the east of France, far from the Mont.',

    'quiz.q2'             : 'What makes the lamb meat taste salty?',
    'quiz.q2.a'           : 'Their diet of mussels',
    'quiz.q2.b'           : 'Their diet of seaweed',
    'quiz.q2.c'           : 'The sand',
    'quiz.q2.d'           : 'Their grazing environment gives this salty flavour',
    'quiz.q2.correct'     : "Correct! It's the salt-marshes of the bay where the lambs graze that gives their meat its unique flavour.",
    'quiz.q2.wrong'       : "Incorrect! It's the salt-marshes of the bay where the lambs graze that gives their meat its unique flavour.",

    'quiz.q3'             : 'Was Mont-Saint-Michel abbey built in less than 50 years?',
    'quiz.q3.a'           : 'True',
    'quiz.q3.b'           : 'False',
    'quiz.q3.correct'     : 'False! The abbey was built over several centuries, from the 11th to the 16th century.',
    'quiz.q3.wrong'       : 'Incorrect! The abbey took several centuries to build, from the 11th to the 16th century.',

    'quiz.q4'             : 'Did Mont-Saint-Michel serve as a prison during the French Revolution?',
    'quiz.q4.a'           : 'True',
    'quiz.q4.b'           : 'False',
    'quiz.q4.correct'     : 'True! During the French Revolution and until 1863, Mont-Saint-Michel was transformed into a state prison.',
    'quiz.q4.wrong'       : 'Incorrect! The Mont was indeed used as a state prison during the French Revolution until 1863.',

    'quiz.q5'             : 'Can the tides around the Mont reach 15 metres in height?',
    'quiz.q5.a'           : 'True',
    'quiz.q5.b'           : 'False',
    'quiz.q5.correct'     : "True! The Bay of Mont-Saint-Michel has the highest tides in continental Europe.",
    'quiz.q5.wrong'       : 'Incorrect! The tides can indeed reach 15 metres in height.',

    'quiz.next'           : 'Next question',
    'quiz.restart'        : 'Restart the quiz',

    'carousel.title'      : 'The great eras of Mont-Saint-Michel',
    'carousel.more'       : 'Learn more',
    'carousel.label1'     : 'An impregnable fortress',
    'carousel.period1'    : '(Hundred Years\' War)',
    'carousel.label2'     : 'The foundation',
    'carousel.period2'    : '(8th century)',
    'carousel.label3'     : 'Medieval Mont',
    'carousel.period3'    : '(11th–16th centuries)',

    'histoire.page.title' : 'History — Mont-Saint-Michel',
    'histoire.hero.tag'   : 'Since 708 · UNESCO',
    'histoire.hero.title' : 'History',
    'histoire.hero.sub'   : 'Thirteen centuries of history: from the archangel\'s vision to worldwide recognition.',

    'archi.page.title'    : 'Architecture — Mont-Saint-Michel',
    'archi.hero.tag'      : 'Masterpiece · Medieval',
    'archi.hero.title'    : 'Architecture',
    'archi.hero.sub'      : 'A masterpiece of medieval architecture, from Romanesque to Flamboyant Gothic.',

    'infos.page.title'    : 'Visitor Info — Mont-Saint-Michel',
    'infos.hero.tag'      : 'Plan your visit',
    'infos.hero.title'    : 'Visitor Info',
    'infos.hero.sub'      : 'Everything you need to organise your visit: access, opening hours, prices and tips.',

    'parcours.page.title' : 'Route — Mont-Saint-Michel',
    'parcours.step.eyebrow': 'Plan my visit',
    'parcours.step.title' : 'How much time do you <span>have?</span>',
    'parcours.step.sub'   : 'Choose a duration and we will build an optimised route based on the Mont\'s must-sees.',
    'parcours.gen.btn'    : '→ Generate my route',
    'parcours.itin.eyebrow': 'Your route',
    'parcours.itin.reset' : '↺ Edit',
    'parcours.itin.time'  : 'of visit',
    'parcours.itin.stops' : 'stops',
    'parcours.prog.label' : 'Time used',

    'vv.page.title'       : 'Virtual Tour — Mont-Saint-Michel',
    'vv.hero.tag'         : 'Virtual tour · UNESCO',
    'vv.hero.title'       : 'Fly over <span>Mont-Saint-Michel</span>',
    'vv.hero.sub'         : 'Explore 11 iconic sites through 360° panoramas and historical anecdotes.',
    'vv.section.title'    : 'Places <span>to visit</span>',
    'vv.section.count'    : '11 STOPS',
    'vv.card.btn'         : 'Explore →',
    'vv.modal.prev'       : '←',
    'vv.modal.next'       : '→',
    'vv.modal.sv'         : '📷 Street View',
    'vv.modal.wiki'       : 'Learn more',
    'vv.sv.close'         : '✕ Close',
    'vv.footer.copy'      : '© Images Google Earth Studio · Landsat / Copernicus',
    'vv.footer.back'      : '← Back to home',
  },

  /* ================================================================
     ARABIC
  ================================================================ */
  ar: {
    'site.title'          : 'مون سان ميشيل',
    'site.subtitle'       : 'موقع تراث عالمي',
    'theme.normal'        : 'عادي',
    'theme.colorblind'    : 'عمى الألوان',
    'lang.label'          : 'العربية',

    'nav.home'            : 'الرئيسية',
    'nav.history'         : 'التاريخ',
    'nav.architecture'    : 'العمارة',
    'nav.practical'       : 'معلومات عملية',
    'nav.route'           : 'المسار',

    'footer.about'        : 'حول',
    'footer.about.text'   : 'تم إنشاء الموقع لأغراض تعليمية فقط.',
    'footer.copyright'    : '© 2025 مشروع مدرسي مون سان ميشيل.',
    'footer.contact.head' : 'اتصال',
    'footer.faq'          : 'FAQ',
    'footer.contact.link' : 'اتصل بنا',
    'footer.legal'        : 'الإشعار القانوني',
    'footer.privacy'      : 'سياسة الخصوصية',
    'footer.follow'       : 'تابعونا',
    'footer.partners'     : 'شركاء',
    'footer.bottom'       : '© 2026 التراث العالمي',

    'hero.tag'            : 'تراث عالمي · يونسكو',
    'hero.heading1'       : 'مون',
    'hero.heading2'       : 'سان ميشيل',
    'hero.sub'            : 'حلّق فوق الجبل، استكشف أماكنه الأيقونية وخطط لزيارتك في بضع نقرات.',
    'hero.cta1'           : '▶ زيارة بـ 360°',
    'hero.cta2'           : '→ مساري',

    'alaune.title'        : 'الأبرز',
    'alaune.badge'        : 'تاريخي',
    'alaune.card1'        : 'تصوير تاريخي لمون سان ميشيل، الذي تأسس عام 708.',
    'alaune.card2'        : 'شُيّدت الأبادية بين القرن 11 والقرن 16 وتُظهر براعة العمارة في العصور الوسطى.',
    'alaune.card3'        : 'أزقة نابضة بالحياة كانت تستقبل الحجاج من مختلف أنحاء أوروبا.',
    'alaune.more'         : 'المزيد',

    'historique.title'    : 'معلَم زاخر بالتاريخ',
    'historique.text'     : 'منذ أكثر من ثلاثة عشر قرناً، يُشكّل مون سان ميشيل موقعاً روحياً واستراتيجياً ومعمارياً فريداً. بين أسطورته التأسيسية والإنجازات المعمارية في العصور الوسطى والمناظر الطبيعية الاستثنائية، أصبح رمزاً بارزاً للتراث العالمي.',

    'quiz.q1'             : 'هل تعرّض مون سان ميشيل لتهديد بالتدمير خلال الحرب العالمية الأولى؟',
    'quiz.q1.a'           : 'صحيح',
    'quiz.q1.b'           : 'خطأ',
    'quiz.q1.correct'     : 'خطأ — دارت معظم المعارك المدمرة في الحرب العالمية الأولى في شرق فرنسا، بعيداً عن الجبل.',
    'quiz.q1.wrong'       : 'إجابة خاطئة! دارت معظم معارك الحرب العالمية الأولى في شرق فرنسا، بعيداً عن الجبل.',

    'quiz.q2'             : 'ما الذي يجعل لحم الحملان مالحاً؟',
    'quiz.q2.a'           : 'تغذيتها على بلح البحر',
    'quiz.q2.b'           : 'تغذيتها على الأعشاب البحرية',
    'quiz.q2.c'           : 'الرمل',
    'quiz.q2.d'           : 'بيئة رعيها المالحة هي ما يمنحها هذا الطعم',
    'quiz.q2.correct'     : 'صحيح! إنها المراعي المالحة في الخليج حيث ترعى الحملان التي تمنح لحمها طعمه الفريد.',
    'quiz.q2.wrong'       : 'إجابة خاطئة! إنها المراعي المالحة في الخليج التي تمنح لحم الحملان طعمه الفريد.',

    'quiz.q3'             : 'هل شُيّدت أبادية مون سان ميشيل في أقل من 50 عاماً؟',
    'quiz.q3.a'           : 'صحيح',
    'quiz.q3.b'           : 'خطأ',
    'quiz.q3.correct'     : 'خطأ! امتد بناء الأبادية على عدة قرون، من القرن الحادي عشر حتى القرن السادس عشر.',
    'quiz.q3.wrong'       : 'إجابة خاطئة! استغرق بناء الأبادية عدة قرون من القرن الحادي عشر حتى القرن السادس عشر.',

    'quiz.q4'             : 'هل استُخدم مون سان ميشيل سجناً خلال الثورة الفرنسية؟',
    'quiz.q4.a'           : 'صحيح',
    'quiz.q4.b'           : 'خطأ',
    'quiz.q4.correct'     : 'صحيح! خلال الثورة الفرنسية وحتى عام 1863، تحوّل مون سان ميشيل إلى سجن دولة.',
    'quiz.q4.wrong'       : 'إجابة خاطئة! استُخدم الجبل فعلاً سجناً للدولة خلال الثورة الفرنسية حتى عام 1863.',

    'quiz.q5'             : 'هل يمكن أن تبلغ المد والجزر حول الجبل 15 متراً؟',
    'quiz.q5.a'           : 'صحيح',
    'quiz.q5.b'           : 'خطأ',
    'quiz.q5.correct'     : 'صحيح! يشهد خليج مون سان ميشيل أعلى مد وجزر في أوروبا القارية.',
    'quiz.q5.wrong'       : 'إجابة خاطئة! يمكن للمد والجزر أن يبلغا فعلاً 15 متراً ارتفاعاً.',

    'quiz.next'           : 'السؤال التالي',
    'quiz.restart'        : 'إعادة الاختبار',

    'carousel.title'      : 'الحقب الكبرى لمون سان ميشيل',
    'carousel.more'       : 'اكتشف المزيد',
    'carousel.label1'     : 'حصن لا يُقهر',
    'carousel.period1'    : '(حرب المئة عام)',
    'carousel.label2'     : 'التأسيس',
    'carousel.period2'    : '(القرن الثامن)',
    'carousel.label3'     : 'مون في العصور الوسطى',
    'carousel.period3'    : '(القرن 11–16)',

    'histoire.page.title' : 'التاريخ — مون سان ميشيل',
    'histoire.hero.tag'   : 'منذ عام 708 · يونسكو',
    'histoire.hero.title' : 'التاريخ',
    'histoire.hero.sub'   : 'ثلاثة عشر قرناً من التاريخ: من رؤية الملاك إلى الاعتراف العالمي.',

    'archi.page.title'    : 'العمارة — مون سان ميشيل',
    'archi.hero.tag'      : 'تحفة معمارية · العصور الوسطى',
    'archi.hero.title'    : 'العمارة',
    'archi.hero.sub'      : 'تحفة معمارية من العصور الوسطى، من الطراز الروماني إلى القوطي المشعل.',

    'infos.page.title'    : 'معلومات عملية — مون سان ميشيل',
    'infos.hero.tag'      : 'تخطيط الزيارة',
    'infos.hero.title'    : 'معلومات عملية',
    'infos.hero.sub'      : 'كل ما تحتاجه لتنظيم زيارتك: الوصول، أوقات العمل، الأسعار والنصائح.',

    'parcours.page.title' : 'المسار — مون سان ميشيل',
    'parcours.step.eyebrow': 'تخطيط زيارتي',
    'parcours.step.title' : 'كم من الوقت لديك <span>أمامك؟</span>',
    'parcours.step.sub'   : 'اختر مدة وسنبني لك مساراً مُحسَّناً وفق أبرز معالم الجبل.',
    'parcours.gen.btn'    : '← توليد مساري',
    'parcours.itin.eyebrow': 'مسارك',
    'parcours.itin.reset' : '↺ تعديل',
    'parcours.itin.time'  : 'من الزيارة',
    'parcours.itin.stops' : 'محطات',
    'parcours.prog.label' : 'الوقت المستخدم',

    'vv.page.title'       : 'جولة افتراضية — مون سان ميشيل',
    'vv.hero.tag'         : 'جولة افتراضية · يونسكو',
    'vv.hero.title'       : 'حلّق فوق <span>مون سان ميشيل</span>',
    'vv.hero.sub'         : 'استكشف 11 موقعاً أيقونياً عبر بانوراما 360° وحقائق تاريخية.',
    'vv.section.title'    : 'الأماكن <span>الجديرة بالزيارة</span>',
    'vv.section.count'    : '11 محطة',
    'vv.card.btn'         : 'استكشف ←',
    'vv.modal.prev'       : '→',
    'vv.modal.next'       : '←',
    'vv.modal.sv'         : '📷 Street View',
    'vv.modal.wiki'       : 'اعرف أكثر',
    'vv.sv.close'         : '✕ إغلاق',
    'vv.footer.copy'      : '© صور Google Earth Studio · Landsat / Copernicus',
    'vv.footer.back'      : 'العودة للرئيسية →',
  },
};

/* ================================================================
   MOTEUR i18n
================================================================ */

const I18N = (() => {
  const STORAGE_KEY = 'msm_lang';
  const RTL_LANGS   = ['ar'];

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'fr';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function t(key, lang) {
    lang = lang || getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
           (TRANSLATIONS['fr']  && TRANSLATIONS['fr'][key])  ||
           key;
  }

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['fr'];

    /* Direction */
    document.documentElement.lang = lang;
    document.documentElement.dir  = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

    /* Titre de la page */
    const pageKey = document.body.dataset.page;
    if (pageKey && dict[pageKey + '.page.title'])
      document.title = dict[pageKey + '.page.title'];

    /* data-i18n → textContent */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* data-i18n-html → innerHTML */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* data-i18n-attr → attribut */
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });

    /* data-lang → afficher/masquer les blocs de contenu long */
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.hidden = (el.dataset.lang !== lang);
    });

    /* Indicateur de langue dans le bouton */
    document.querySelectorAll('.lang-current').forEach(el => {
      el.textContent = dict['lang.label'] || lang.toUpperCase();
    });

    /* Liens de navigation : mettre à jour href selon la langue */
    updateNavLinks(lang);
  }

  /* Correspondance page → clé de navigation */
  const NAV_PAGES = {
    'index'     : { fr: 'index.html',            en: 'index.html',            ar: 'index.html'            },
    'histoire'  : { fr: 'histoire.html',          en: 'histoire.html',          ar: 'histoire.html'          },
    'archi'     : { fr: 'architecture.html',      en: 'architecture.html',      ar: 'architecture.html'      },
    'infos'     : { fr: 'infos-pratiques.html',   en: 'infos-pratiques.html',   ar: 'infos-pratiques.html'   },
    'parcours'  : { fr: 'parcours.html',          en: 'parcours.html',          ar: 'parcours.html'          },
    'vv'        : { fr: 'visite-virtuelle.html',  en: 'visite-virtuelle.html',  ar: 'visite-virtuelle.html'  },
  };

  function updateNavLinks(lang) {
    document.querySelectorAll('[data-nav]').forEach(el => {
      const page = el.dataset.nav;
      if (NAV_PAGES[page] && NAV_PAGES[page][lang]) {
        el.href = NAV_PAGES[page][lang];
      }
    });
    /* Liens du menu langue */
    document.querySelectorAll('[data-lang-link]').forEach(el => {
      const targetLang = el.dataset.langLink;
      const page = document.body.dataset.page || 'index';
      if (NAV_PAGES[page] && NAV_PAGES[page][targetLang]) {
        el.href = NAV_PAGES[page][targetLang];
      }
    });
  }

  function init() {
    /* Boutons de changement de langue */
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        setLang(btn.dataset.setLang);
        /* Fermer le menu langue */
        document.querySelectorAll('.lang-toggle').forEach(cb => cb.checked = false);
      });
    });

    /* Appliquer la langue sauvegardée */
    applyLang(getLang());
  }

  return { init, setLang, getLang, t, applyLang };
})();

/* Lancer dès que le DOM est prêt */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', I18N.init);
} else {
  I18N.init();
}
