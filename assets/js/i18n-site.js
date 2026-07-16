/**
 * Full-page translations for static HTML without data-key attributes.
 * Loaded after main.js — called from translatePage().
 */
(function (global) {
  'use strict';

  function pageId() {
    const file = global.location.pathname.split('/').pop() || 'index.html';
    return file.replace(/\.html$/, '') || 'index';
  }

  function pick(lang, block) {
    return block[lang] || block.en || block.tr || {};
  }

  function setText(sel, text) {
    const el = document.querySelector(sel);
    if (el && text != null && text !== '') el.textContent = text;
  }

  function setHTML(sel, html) {
    const el = document.querySelector(sel);
    if (el && html != null && html !== '') el.innerHTML = html;
  }

  function setAll(sel, texts) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      if (texts[i] != null) el.textContent = texts[i];
    });
  }

  /* ─── INDEX ─── */
  const index = {
    tr: {
      services: [
        ['Villa İnşaatı', 'Lüks villa, malikane ve özel konut projelerinde anahtar teslim uygulama.'],
        ['Havuz & Peyzaj', 'Özel havuz, dış mekan ve villa yaşamına entegre çevre düzeni.'],
        ['Toplu Konut', 'Planlı yerleşim, güçlü altyapı ve modern cephe dili.'],
        ['Otel & Mimari', 'Konseptten teslime otel, mimari tasarım, mühendislik ve görselleştirme.']
      ],
      aboutKicker: '— Kurumsal',
      regionsKicker: '— Yerel Hizmet Ağı',
      regionsTitle: 'Fethiye ve çevre bölgelerde inşaat',
      regionsText: 'Ölüdeniz, Çalış, Göcek, Hisarönü, Kayaköy, Seydikemer, Dalaman ve Karaçulha/Çiftlik dahil Fethiye çevresinde villa, havuz ve anahtar teslim projeler uygularız.',
      regionsBtnAreas: 'Bölgeler',
      regionsBtnFaq: 'Sıkça Sorulan Sorular',
      regionsBtnQuote: 'Teklif Al'
    },
    en: {
      services: [
        ['Villa Construction', 'Turnkey delivery for luxury villas, mansions and bespoke homes.'],
        ['Pool & Landscape', 'Private pools, outdoor living and environments integrated with villa life.'],
        ['Mass Housing', 'Planned settlements, strong infrastructure and modern facade language.'],
        ['Hotel & Architecture', 'Hotels, architectural design, engineering and visualisation from concept to handover.']
      ],
      aboutKicker: '— Corporate',
      regionsKicker: '— Local Service Network',
      regionsTitle: 'Construction across Fethiye and nearby districts',
      regionsText: 'We deliver villa, pool and turnkey projects across Fethiye including Oludeniz, Calis, Gocek, Hisaronu, Kayakoy, Seydikemer, Dalaman and Karaculha/Ciftlik.',
      regionsBtnAreas: 'Areas',
      regionsBtnFaq: 'FAQ',
      regionsBtnQuote: 'Get a Quote'
    },
    de: {
      services: [
        ['Villenbau', 'Schlüsselfertige Umsetzung für Luxusvillen, Anwesen und individuelle Wohnhäuser.'],
        ['Pool & Landschaft', 'Private Pools, Außenbereiche und Umgebungen integriert in das Villenleben.'],
        ['Wohnanlagen', 'Geplante Siedlungen, starke Infrastruktur und moderne Fassadensprache.'],
        ['Hotel & Architektur', 'Hotels, Architektur, Ingenieurwesen und Visualisierung von der Idee bis zur Übergabe.']
      ],
      aboutKicker: '— Unternehmen',
      regionsKicker: '— Regionales Netzwerk',
      regionsTitle: 'Bau in Fethiye und der Umgebung',
      regionsText: 'Wir realisieren Villen-, Pool- und schlüsselfertige Projekte in Fethiye, Ölüdeniz, Calis, Göcek, Hisarönü, Kayaköy, Seydikemer, Dalaman und Karaçulha/Çiftlik.',
      regionsBtnAreas: 'Regionen',
      regionsBtnFaq: 'FAQ',
      regionsBtnQuote: 'Angebot'
    },
    ru: {
      services: [
        ['Строительство вилл', 'Проекты «под ключ» для люксовых вилл, особняков и индивидуальных домов.'],
        ['Бассейн и ландшафт', 'Частные бассейны, открытые зоны и среда, интегрированная с жизнью на вилле.'],
        ['Массовое жильё', 'Планируемая застройка, сильная инфраструктура и современный фасад.'],
        ['Отель и архитектура', 'Отели, архитектурный дизайн, инженерия и визуализация от концепции до сдачи.']
      ],
      aboutKicker: '— Компания',
      regionsKicker: '— Региональная сеть',
      regionsTitle: 'Строительство в Фетхие и окрестностях',
      regionsText: 'Мы реализуем виллы, бассейны и проекты «под ключ» в Фетхие, Олюдениз, Чалыш, Гёджек, Хисарону, Каякёй, Сейдикемер, Даламан и Карачулха/Чифтлик.',
      regionsBtnAreas: 'Регионы',
      regionsBtnFaq: 'Вопросы',
      regionsBtnQuote: 'Запросить смету'
    },
    ar: {
      services: [
        ['بناء الفلل', 'تسليم مفتاحي للفلل الفاخرة والقصور والمنازل المخصصة.'],
        ['المسبح والمناظر', 'مسابح خاصة ومساحات خارجية متكاملة مع حياة الفيلا.'],
        ['الإسكان الجماعي', 'تخطيط عمراني منظم وبنية تحتية قوية وواجهات حديثة.'],
        ['الفندق والعمارة', 'فنادق وتصميم معماري وهندسة وتصور من الفكرة حتى التسليم.']
      ],
      aboutKicker: '— الشركة',
      regionsKicker: '— شبكة الخدمة المحلية',
      regionsTitle: 'البناء في فتحية والمناطق المجاورة',
      regionsText: 'ننفذ مشاريع الفلل والمسابح والتسليم المفتاحي في فتحية بما في ذلك أولودينيز وشاليس وجوكيك وحصارونو وكاياكوي وسيديكيمر ودالامان وكاراجولها/تشيفتلك.',
      regionsBtnAreas: 'المناطق',
      regionsBtnFaq: 'الأسئلة الشائعة',
      regionsBtnQuote: 'اطلب عرض سعر'
    }
  };

  function applyIndex(lang) {
    const t = pick(lang, index);
    document.querySelectorAll('.hc-services__col').forEach(function (col, i) {
      const copy = col.querySelector('.hc-services__col-copy');
      if (!copy || !t.services[i]) return;
      const h3 = copy.querySelector('h3');
      const p = copy.querySelector('p');
      if (h3) h3.textContent = t.services[i][0];
      if (p) p.textContent = t.services[i][1];
    });
    const aboutKick = document.querySelector('.hc-about .hc-about__kicker');
    if (aboutKick) aboutKick.textContent = t.aboutKicker;
    const regionsSec = document.querySelector('.hc-about[aria-label="Hizmet verilen bölgeler"]');
    if (regionsSec) {
      const kick = regionsSec.querySelector('.hc-about__kicker');
      const h2 = regionsSec.querySelector('h2');
      const p = regionsSec.querySelector('p');
      const btns = regionsSec.querySelectorAll('.hc-btn');
      if (kick) kick.textContent = t.regionsKicker;
      if (h2) h2.textContent = t.regionsTitle;
      if (p) p.textContent = t.regionsText;
      if (btns[0]) btns[0].textContent = t.regionsBtnAreas;
      if (btns[1]) btns[1].textContent = t.regionsBtnFaq;
      if (btns[2]) btns[2].textContent = t.regionsBtnQuote;
    }
  }

  /* ─── HİZMETLER ─── */
  const hizmetler = {
    tr: {
      hero: 'projenizi<span class="sd-shift">biz</span><span class="sd-accent">inşa ederiz</span>',
      stats: ['+90 yıl inşaat disiplini', 'örnek villa plan dili', 'uluslararası destek'],
      btnPortfolio: 'portföyü incele',
      btnRequest: 'proje talep et',
      chips: ['Villa', 'Havuz', 'Konut', 'Mimari'],
      benefitsTitle: 'Hizmet Avantajlarımız',
      benefits: [
        ['Proaktif Planlama ve Saha Koordinasyonu', 'Araziden teslimata kadar mimari, statik ve uygulama süreçlerini tek merkezden yönetir; sürprizleri azaltırız.'],
        ['Teknik Çizimden Anahtar Teslime', 'Plan, görselleştirme ve uygulama aynı dilde ilerler. Villa, havuz ve konut projelerinde ölçülebilir kalite.']
      ],
      mosaicTitle: 'Ne Yapıyoruz?',
      services: [
        ['Villa İnşaatı', 'Özel tasarım, havuzlu lüks villa ve anahtar teslim uygulama.'],
        ['Havuz & Peyzaj', 'Villa yaşamına entegre özel havuz ve dış mekan düzeni.'],
        ['Toplu Konut', 'Planlı yerleşim, güçlü altyapı ve modern cephe dili.'],
        ['Ticari Yapılar', 'Ofis, iş merkezi ve ticari projelerde mühendislik çözümleri.'],
        ['Fabrika & Sanayi', 'Düzce ve Sakarya’da endüstriyel tesis ve depo inşaatı.'],
        ['Proje Planlama', 'Mimari tasarım, statik proje ve uygulama planlaması.'],
        ['Arsa Değerleme', 'Stratejik konum ve yatırım potansiyeli analizi.'],
        ['Anahtar Teslim', 'Temelden çatıya tek ekip, şeffaf süreç, net teslim.'],
        ['Referans Projeler', 'Teslim edilen villa, havuz ve konut portföyünü inceleyin.']
      ],
      ctaTitle: 'Birlikte bir şeyler inşa edelim',
      ctaText: 'Fethiye ve Muğla’da villa, havuz, konut ve ticari projeler için uzman ekibimizle iletişime geçin.',
      ctaEmail: 'e-posta gönder'
    },
    en: {
      hero: 'your project<span class="sd-shift">we</span><span class="sd-accent">build it</span>',
      stats: ['+90 years of build discipline', 'sample villa plan language', 'international support'],
      btnPortfolio: 'view portfolio',
      btnRequest: 'request a project',
      chips: ['Villa', 'Pool', 'Housing', 'Architecture'],
      benefitsTitle: 'Our Service Advantages',
      benefits: [
        ['Proactive Planning & Site Coordination', 'We manage architecture, structure and site execution from land to handover — reducing surprises.'],
        ['From Technical Drawings to Turnkey', 'Plans, visuals and build progress in one language. Measurable quality for villa, pool and housing projects.']
      ],
      mosaicTitle: 'What We Do',
      services: [
        ['Villa Construction', 'Bespoke design, luxury pool villas and turnkey delivery.'],
        ['Pool & Landscape', 'Private pools and outdoor living integrated with villa life.'],
        ['Mass Housing', 'Planned settlements, strong infrastructure and modern facades.'],
        ['Commercial Buildings', 'Engineering solutions for offices, business centres and commercial projects.'],
        ['Factory & Industrial', 'Industrial facilities and warehouses in Duzce and Sakarya.'],
        ['Project Planning', 'Architectural design, structural engineering and execution planning.'],
        ['Land Valuation', 'Strategic location and investment potential analysis.'],
        ['Turnkey Delivery', 'One team from foundation to roof — transparent process, clear handover.'],
        ['Reference Projects', 'Explore our delivered villa, pool and housing portfolio.']
      ],
      ctaTitle: "Let's build something together",
      ctaText: 'Contact our expert team for villa, pool, housing and commercial projects in Fethiye and Mugla.',
      ctaEmail: 'send email'
    },
    de: {
      hero: 'ihr projekt<span class="sd-shift">wir</span><span class="sd-accent">bauen es</span>',
      stats: ['+90 Jahre Baudisziplin', 'Beispiel-Villenplanung', 'internationale Betreuung'],
      btnPortfolio: 'portfolio ansehen',
      btnRequest: 'projekt anfragen',
      chips: ['Villa', 'Pool', 'Wohnen', 'Architektur'],
      benefitsTitle: 'Unsere Servicevorteile',
      benefits: [
        ['Proaktive Planung & Baustellenkoordination', 'Architektur, Statik und Ausführung vom Grundstück bis zur Übergabe aus einer Hand.'],
        ['Vom Plan bis schlüsselfertig', 'Plan, Visualisierung und Bau in einer Sprache. Messbare Qualität bei Villen, Pools und Wohnprojekten.']
      ],
      mosaicTitle: 'Was wir tun',
      services: [
        ['Villenbau', 'Individuelles Design, Luxusvillen mit Pool und schlüsselfertige Übergabe.'],
        ['Pool & Landschaft', 'Private Pools und Außenbereiche für das Villenleben.'],
        ['Wohnanlagen', 'Geplante Siedlungen, starke Infrastruktur und moderne Fassaden.'],
        ['Gewerbebau', 'Schlüsselfertige Lösungen für Hotels, Büros und Gewerbe.'],
        ['Fabrik & Industrie', 'Industrieanlagen und Lager in Düzce und Sakarya.'],
        ['Projektplanung', 'Architektur, Statik und Ausführungsplanung.'],
        ['Grundstücksbewertung', 'Standort- und Investitionspotenzialanalyse.'],
        ['Schlüsselfertig', 'Ein Team vom Fundament bis zum Dach — transparenter Prozess.'],
        ['Referenzprojekte', 'Unser Portfolio fertiggestellter Villen, Pools und Wohnungen.']
      ],
      ctaTitle: 'Lassen Sie uns gemeinsam bauen',
      ctaText: 'Kontaktieren Sie unser Team für Villen-, Pool-, Wohn- und Gewerbeprojekte in Fethiye und Muğla.',
      ctaEmail: 'e-mail senden'
    },
    ru: {
      hero: 'ваш проект<span class="sd-shift">мы</span><span class="sd-accent">строим</span>',
      stats: ['+90 лет строительной дисциплины', 'язык планировки вилл', 'международная поддержка'],
      btnPortfolio: 'смотреть портфолио',
      btnRequest: 'запросить проект',
      chips: ['Вилла', 'Бассейн', 'Жильё', 'Архитектура'],
      benefitsTitle: 'Преимущества нашего сервиса',
      benefits: [
        ['Проактивное планирование и координация', 'Управляем архитектурой, конструкциями и стройкой от участка до сдачи.'],
        ['От чертежей до «под ключ»', 'План, визуализация и стройка в одном языке. Измеримое качество для вилл, бассейнов и жилья.']
      ],
      mosaicTitle: 'Что мы делаем',
      services: [
        ['Строительство вилл', 'Индивидуальный дизайн, люксовые виллы с бассейном и сдача «под ключ».'],
        ['Бассейн и ландшафт', 'Частные бассейны и открытые зоны для жизни на вилле.'],
        ['Массовое жильё', 'Планируемая застройка, инфраструктура и современные фасады.'],
        ['Коммерческие здания', 'Решения «под ключ» для отелей, офисов и коммерции.'],
        ['Заводы и промышленность', 'Промышленные объекты и склады в Дюздже и Сакарье.'],
        ['Планирование проектов', 'Архитектура, конструкции и планирование строительства.'],
        ['Оценка участков', 'Анализ расположения и инвестиционного потенциала.'],
        ['Под ключ', 'Одна команда от фундамента до крыши — прозрачный процесс.'],
        ['Референсные проекты', 'Портфолио сданных вилл, бассейнов и жилых объектов.']
      ],
      ctaTitle: 'Давайте построим вместе',
      ctaText: 'Свяжитесь с нашей командой по виллам, бассейнам, жилью и коммерции в Фетхие и Мугле.',
      ctaEmail: 'написать e-mail'
    },
    ar: {
      hero: 'مشروعكم<span class="sd-shift">نحن</span><span class="sd-accent">نبنيه</span>',
      stats: ['+90 عاماً من انضباط البناء', 'لغة تخطيط الفلل', 'دعم دولي'],
      btnPortfolio: 'عرض المحفظة',
      btnRequest: 'اطلب مشروعاً',
      chips: ['فيلا', 'مسبح', 'سكن', 'عمارة'],
      benefitsTitle: 'مزايا خدماتنا',
      benefits: [
        ['تخطيط استباقي وتنسيق موقع', 'ندير العمارة والإنشاء والتنفيذ من الأرض حتى التسليم.'],
        ['من الرسومات إلى التسليم المفتاحي', 'الخطة والتصور والبناء بلغة واحدة. جودة قابلة للقياس في الفلل والمسابح والسكن.']
      ],
      mosaicTitle: 'ماذا نفعل',
      services: [
        ['بناء الفلل', 'تصميم مخصص وفلل فاخرة بمسبح وتسليم مفتاحي.'],
        ['المسبح والمناظر', 'مسابح خاصة ومساحات خارجية متكاملة مع حياة الفيلا.'],
        ['الإسكان الجماعي', 'تخطيط عمراني وبنية تحتية وواجهات حديثة.'],
        ['المباني التجارية', 'حلول مفتاحية للفنادق والمكاتب والتجارة.'],
        ['المصانع والصناعة', 'منشآت صناعية ومستودعات في دوزجة وسكاريا.'],
        ['تخطيط المشاريع', 'تصميم معماري وإنشائي وتخطيط التنفيذ.'],
        ['تقييم الأراضي', 'تحليل الموقع وإمكانات الاستثمار.'],
        ['تسليم مفتاحي', 'فريق واحد من الأساس حتى السقف — عملية شفافة.'],
        ['مشاريع مرجعية', 'محفظة الفلل والمسابح والسكن المُسلّمة.']
      ],
      ctaTitle: 'لنبنِ معاً',
      ctaText: 'تواصل مع فريقنا لمشاريع الفلل والمسابح والسكن والتجارة في فتحية وموغلا.',
      ctaEmail: 'إرسال بريد'
    }
  };

  function applyHizmetler(lang) {
    const t = pick(lang, hizmetler);
    setHTML('.sd-hero__copy h1', t.hero);
    const statSpans = document.querySelectorAll('.sd-stat span');
    t.stats.forEach(function (txt, i) {
      if (statSpans[i]) statSpans[i].textContent = txt;
    });
    const actions = document.querySelectorAll('.sd-hero__actions .sd-btn');
    if (actions[0]) actions[0].textContent = t.btnPortfolio;
    if (actions[1]) actions[1].textContent = t.btnRequest;
    setAll('.sd-chip', t.chips);
    setText('.sd-benefits h2', t.benefitsTitle);
    document.querySelectorAll('.sd-benefits .sd-card:not(.sd-card--visual)').forEach(function (card, i) {
      if (!t.benefits[i]) return;
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h3) h3.textContent = t.benefits[i][0];
      if (p) p.textContent = t.benefits[i][1];
    });
    setText('.sd-mosaic h2', t.mosaicTitle);
    document.querySelectorAll('.sd-mosaic .sd-service').forEach(function (svc, i) {
      if (!t.services[i]) return;
      const h3 = svc.querySelector('h3');
      const p = svc.querySelector('p');
      if (h3) h3.textContent = t.services[i][0];
      if (p) p.textContent = t.services[i][1];
    });
    setText('.sd-cta h2', t.ctaTitle);
    setText('.sd-cta p', t.ctaText);
    const ctaBtns = document.querySelectorAll('.sd-cta .sd-btn');
    if (ctaBtns[1]) ctaBtns[1].textContent = t.ctaEmail;
  }

  /* ─── PROJELER ─── */
  const projeler = {
    tr: {
      railL: 'Architecture · Fethiye',
      railR: 'Since 1935',
      kicker: 'Portfolio',
      heroLead: 'Fethiye’de teslim edilen ve planlanan villa, havuz, toplu konut ve malikane işleri. Modern mimari, sağlam mühendislik ve detay odaklı işçilik.',
      ctaSale: 'Satılık Villa',
      ctaDelivered: 'Teslim Edilenler',
      chips: [['Satılık', '180 m² · Havuzlu'], ['Villa', 'Completed'], ['Havuz', 'Outdoor living'], ['Konut', 'Mass housing'], ['Malikane', 'Signature']],
      tabs: ['Tümü', 'Villa', 'Havuz', 'Konut', 'Malikane'],
      sections: [
        ['Featured', 'Satılık Villa', 'Aralık 2026 teslim — 180 m² kullanım, havuzlu, 2.5 kat, 485 m² arsa payı.'],
        ['Delivered', 'Teslim Edilen Projeler', 'Tamamlanmış villa, havuz ve konut referansları — detay, malzeme ve oran odaklı.'],
        ['Upcoming', 'Teslim Edilecek Projeler', 'Planlama ve uygulama sürecindeki konut geliştirmeleri.'],
        ['Signature', 'Malikane Projeleri', 'Premium ölçekte lüks detay, özel işçilik ve mimari mükemmellik.']
      ],
      featured: {
        badge: 'For Sale',
        title: 'Aralık 2026 Teslim · Havuzlu Villa',
        desc: 'Özel villa satış projesi. Geniş yaşam alanı, modern cephe dili ve entegre havuz ile Fethiye’de yatırım ve yaşam için hazırlanan prestij konut.',
        specs: ['m² Alan', 'm² Arsa', 'Kat'],
        btns: ['Teklif Al', 'WhatsApp']
      },
      rows: [
        { label: 'Architecture', title: 'Villa Project_01', desc: 'Fethiye’de modern mimari yaklaşım ile tasarlanan özel villa. Malzeme, ışık ve oran odaklı tamamlanmış işçilik.' },
        { label: 'Residence', title: 'Tamamlanan Villa', desc: 'Akdeniz yaşamına uygun cephe, geniş açıklıklar ve yüksek kalite detaylarla teslim edilen konut ölçeği.' },
        { label: 'Outdoor', title: 'Havuz Projeleri', desc: 'Villa yaşamına entegre özel havuz uygulamaları. Kaplama, aydınlatma ve çevre düzeni ile bütünleşik dış mekan.' },
        { label: 'Housing', title: 'Toplu Konut', desc: 'Planlı yerleşim, güçlü altyapı ve modern cephe dili ile teslim edilen konut projeleri.' }
      ],
      upcoming: { label: 'In Progress', title: 'Gelecek Toplu Konut', desc: 'Yeni nesil konut yerleşimi — güçlü mühendislik, modern cephe ve uzun ömürlü yapı standardı.' },
      mansion: { title: 'Malikane Koleksiyonu', desc: 'Geniş arsa, prestij cephe ve premium detaylarla biçimlenen malikane ölçeği. Hasanağaoğlu imza işler.', btn: 'Proje Görüşmesi' },
      cta: { kicker: 'Contact', title: 'Bir sonraki projenizi konuşalım', text: 'Arsa, villa, havuz veya yatırım projeniz için Fethiye ofisimizle iletişime geçin.', btns: ['İletişim', 'English', 'WhatsApp'] }
    },
    en: {
      railL: 'Architecture · Fethiye',
      railR: 'Since 1935',
      kicker: 'Portfolio',
      heroLead: 'Delivered and planned villa, pool, housing and mansion projects in Fethiye. Modern architecture, strong engineering and detail-driven craftsmanship.',
      ctaSale: 'Villa for Sale',
      ctaDelivered: 'Delivered',
      chips: [['For Sale', '180 m² · Pool'], ['Villa', 'Completed'], ['Pool', 'Outdoor living'], ['Housing', 'Mass housing'], ['Mansion', 'Signature']],
      tabs: ['All', 'Villa', 'Pool', 'Housing', 'Mansion'],
      sections: [
        ['Featured', 'Villa for Sale', 'December 2026 delivery — 180 m² living, pool, 2.5 floors, 485 m² plot share.'],
        ['Delivered', 'Delivered Projects', 'Completed villa, pool and housing references — detail, material and proportion focused.'],
        ['Upcoming', 'Upcoming Projects', 'Housing developments in planning and execution.'],
        ['Signature', 'Mansion Projects', 'Luxury detail, bespoke craftsmanship and architectural excellence at premium scale.']
      ],
      featured: {
        badge: 'For Sale',
        title: 'December 2026 Delivery · Villa with Pool',
        desc: 'Private villa sales project. A prestige residence prepared for investment and living in Fethiye with generous living space, modern facade language and integrated pool.',
        specs: ['m² Area', 'm² Plot', 'Floors'],
        btns: ['Get Quote', 'WhatsApp']
      },
      rows: [
        { label: 'Architecture', title: 'Villa Project_01', desc: 'A bespoke villa designed with a modern architectural approach in Fethiye. Completed craftsmanship focused on material, light and proportion.' },
        { label: 'Residence', title: 'Completed Villa', desc: 'Residential scale delivered with Mediterranean-friendly facades, generous openings and high-quality details.' },
        { label: 'Outdoor', title: 'Pool Projects', desc: 'Private pool applications integrated with villa life. Outdoor living unified with cladding, lighting and landscape.' },
        { label: 'Housing', title: 'Mass Housing', desc: 'Housing projects delivered with planned settlement, strong infrastructure and modern facade language.' }
      ],
      upcoming: { label: 'In Progress', title: 'Upcoming Mass Housing', desc: 'New-generation housing settlement — strong engineering, modern facade and long-life building standard.' },
      mansion: { title: 'Mansion Collection', desc: 'Mansion scale shaped by generous plots, prestige facades and premium details. Signature Hasanağaoğlu works.', btn: 'Project Meeting' },
      cta: { kicker: 'Contact', title: "Let's discuss your next project", text: 'Contact our Fethiye office for your land, villa, pool or investment project.', btns: ['Contact', 'English', 'WhatsApp'] }
    },
    de: {
      railL: 'Architektur · Fethiye',
      railR: 'Seit 1935',
      kicker: 'Portfolio',
      heroLead: 'Fertiggestellte und geplante Villen-, Pool-, Wohn- und Anwesenprojekte in Fethiye. Moderne Architektur, starke Technik und detailverliebte Ausführung.',
      ctaSale: 'Villa zum Verkauf',
      ctaDelivered: 'Fertiggestellt',
      chips: [['Verkauf', '180 m² · Pool'], ['Villa', 'Fertig'], ['Pool', 'Außenleben'], ['Wohnen', 'Wohnanlage'], ['Anwesen', 'Signature']],
      tabs: ['Alle', 'Villa', 'Pool', 'Wohnen', 'Anwesen'],
      sections: [
        ['Highlight', 'Villa zum Verkauf', 'Lieferung Dez. 2026 — 180 m² Wohnfläche, Pool, 2,5 Etagen, 485 m² Grundstücksanteil.'],
        ['Fertig', 'Fertiggestellte Projekte', 'Fertiggestellte Villa-, Pool- und Wohnreferenzen — Fokus auf Detail, Material und Proportion.'],
        ['Geplant', 'Kommende Projekte', 'Wohnentwicklungen in Planung und Umsetzung.'],
        ['Signature', 'Anwesenprojekte', 'Luxusdetails, handwerkliche Exzellenz und architektonische Perfektion im Premium-Maßstab.']
      ],
      featured: {
        badge: 'Zu verkaufen',
        title: 'Lieferung Dez. 2026 · Villa mit Pool',
        desc: 'Privates Villenverkaufsprojekt. Prestigewohnung für Investition und Leben in Fethiye mit großzügiger Wohnfläche, moderner Fassade und integriertem Pool.',
        specs: ['m² Fläche', 'm² Grundstück', 'Etagen'],
        btns: ['Angebot', 'WhatsApp']
      },
      rows: [
        { label: 'Architektur', title: 'Villa Projekt_01', desc: 'Individuelle Villa mit modernem architektonischem Ansatz in Fethiye. Fertiggestellte Handwerksqualität mit Fokus auf Material, Licht und Proportion.' },
        { label: 'Residenz', title: 'Fertiggestellte Villa', desc: 'Wohnmaßstab mit mediterranen Fassaden, großzügigen Öffnungen und hochwertigen Details.' },
        { label: 'Außenbereich', title: 'Poolprojekte', desc: 'Private Pools integriert in das Villenleben. Außenbereich mit Verkleidung, Beleuchtung und Landschaft.' },
        { label: 'Wohnen', title: 'Wohnanlagen', desc: 'Wohnprojekte mit geplanter Siedlung, starker Infrastruktur und moderner Fassadensprache.' }
      ],
      upcoming: { label: 'In Arbeit', title: 'Kommende Wohnanlage', desc: 'Wohnsiedlung der neuen Generation — starke Technik, moderne Fassade und langlebiger Baustandard.' },
      mansion: { title: 'Anwesen-Kollektion', desc: 'Anwesenmaßstab mit großzügigen Grundstücken, Prestigefassaden und Premiumdetails. Hasanağaoğlu Signaturwerke.', btn: 'Projektgespräch' },
      cta: { kicker: 'Kontakt', title: 'Sprechen wir über Ihr nächstes Projekt', text: 'Kontaktieren Sie unser Büro in Fethiye für Grundstück, Villa, Pool oder Investment.', btns: ['Kontakt', 'Englisch', 'WhatsApp'] }
    },
    ru: {
      railL: 'Архитектура · Фетхие',
      railR: 'С 1935',
      kicker: 'Портфолио',
      heroLead: 'Сданные и планируемые проекты вилл, бассейнов, жилья и особняков в Фетхие. Современная архитектура, сильная инженерия и детальная отделка.',
      ctaSale: 'Вилла на продажу',
      ctaDelivered: 'Сданные',
      chips: [['Продажа', '180 m² · Бассейн'], ['Вилла', 'Сдано'], ['Бассейн', 'Открытая жизнь'], ['Жильё', 'Массовое'], ['Особняк', 'Signature']],
      tabs: ['Все', 'Вилла', 'Бассейн', 'Жильё', 'Особняк'],
      sections: [
        ['Избранное', 'Вилла на продажу', 'Сдача дек. 2026 — 180 m² жилой площади, бассейн, 2,5 этажа, 485 m² участка.'],
        ['Сданные', 'Сданные проекты', 'Завершённые виллы, бассейны и жильё — акцент на детали, материалы и пропорции.'],
        ['Планируемые', 'Будущие проекты', 'Жилые проекты на стадии планирования и реализации.'],
        ['Signature', 'Проекты особняков', 'Люксовые детали, авторская отделка и архитектурное совершенство премиум-класса.']
      ],
      featured: {
        badge: 'В продаже',
        title: 'Сдача дек. 2026 · Вилла с бассейном',
        desc: 'Проект продажи частной виллы. Престижная резиденция для инвестиций и жизни в Фетхие с просторными зонами, современным фасадом и интегрированным бассейном.',
        specs: ['m² площадь', 'm² участок', 'Этажи'],
        btns: ['Запросить смету', 'WhatsApp']
      },
      rows: [
        { label: 'Архитектура', title: 'Villa Project_01', desc: 'Индивидуальная вилла с современным архитектурным подходом в Фетхие. Завершённая отделка с акцентом на материалы, свет и пропорции.' },
        { label: 'Резиденция', title: 'Завершённая вилла', desc: 'Жилой масштаб с фасадами в средиземноморском стиле, широкими проёмами и высококачественными деталями.' },
        { label: 'Открытые зоны', title: 'Проекты бассейнов', desc: 'Частные бассейны, интегрированные в жизнь на вилле. Открытые зоны с облицовкой, подсветкой и ландшафтом.' },
        { label: 'Жильё', title: 'Массовое жильё', desc: 'Жилые проекты с планируемой застройкой, сильной инфраструктурой и современным фасадом.' }
      ],
      upcoming: { label: 'В работе', title: 'Будущее массовое жильё', desc: 'Жилой комплекс нового поколения — сильная инженерия, современный фасад и долговечные стандарты.' },
      mansion: { title: 'Коллекция особняков', desc: 'Особняки с большими участками, престижными фасадами и премиальными деталями. Фирменные работы Hasanağaoğlu.', btn: 'Встреча по проекту' },
      cta: { kicker: 'Контакт', title: 'Обсудим ваш следующий проект', text: 'Свяжитесь с офисом в Фетхие по участку, вилле, бассейну или инвестиционному проекту.', btns: ['Контакты', 'English', 'WhatsApp'] }
    },
    ar: {
      railL: 'العمارة · فتحية',
      railR: 'منذ 1935',
      kicker: 'المحفظة',
      heroLead: 'مشاريع الفلل والمسابح والسكن والقصور المُسلّمة والمخططة في فتحية. عمارة حديثة وهندسة قوية وحرفية دقيقة.',
      ctaSale: 'فيلا للبيع',
      ctaDelivered: 'المُسلّمة',
      chips: [['للبيع', '180 m² · مسبح'], ['فيلا', 'مكتمل'], ['مسبح', 'حياة خارجية'], ['سكن', 'جماعي'], ['قصر', 'مميز']],
      tabs: ['الكل', 'فيلا', 'مسبح', 'سكن', 'قصر'],
      sections: [
        ['مميز', 'فيلا للبيع', 'تسليم ديسمبر 2026 — 180 m² سكن، مسبح، 2.5 طابق، 485 m² أرض.'],
        ['مُسلّمة', 'المشاريع المُسلّمة', 'مراجع الفلل والمسابح والسكن المكتملة — تركيز على التفاصيل والمواد والنسب.'],
        ['قادمة', 'المشاريع القادمة', 'تطويرات سكنية في مرحلة التخطيط والتنفيذ.'],
        ['مميز', 'مشاريع القصور', 'تفاصيل فاخرة وحرفية مخصصة وتميز معماري بمقياس فاخر.']
      ],
      featured: {
        badge: 'للبيع',
        title: 'تسليم ديسمبر 2026 · فيلا بمسبح',
        desc: 'مشروع بيع فيلا خاصة. مسكن فاخر للاستثمار والعيش في فتحية بمساحات واسعة وواجهة حديثة ومسبح متكامل.',
        specs: ['m² مساحة', 'm² أرض', 'طوابق'],
        btns: ['اطلب عرض سعر', 'واتساب']
      },
      rows: [
        { label: 'عمارة', title: 'Villa Project_01', desc: 'فيلا مخصصة بتصميم معماري حديث في فتحية. حرفية مكتملة تركز على المواد والإضاءة والنسب.' },
        { label: 'سكن', title: 'فيلا مكتملة', desc: 'مقياس سكني بواجهات متوسطية وفتحات واسعة وتفاصيل عالية الجودة.' },
        { label: 'خارجي', title: 'مشاريع المسابح', desc: 'مسابح خاصة متكاملة مع حياة الفيلا. مساحات خارجية مع تكسية وإضاءة ومناظر طبيعية.' },
        { label: 'إسكان', title: 'إسكان جماعي', desc: 'مشاريع سكنية بتخطيط منظم وبنية تحتية قوية وواجهات حديثة.' }
      ],
      upcoming: { label: 'قيد التنفيذ', title: 'إسكان جماعي قادم', desc: 'تجمع سكني من الجيل الجديد — هندسة قوية وواجهة حديثة ومعايير بناء طويلة العمر.' },
      mansion: { title: 'مجموعة القصور', desc: 'قصور بمساحات واسعة وواجهات فاخرة وتفاصيل مميزة. أعمال Hasanağaoğlu المميزة.', btn: 'اجتماع مشروع' },
      cta: { kicker: 'تواصل', title: 'لنتحدث عن مشروعكم القادم', text: 'تواصل مع مكتبنا في فتحية لمشروع الأرض أو الفيلا أو المسبح أو الاستثمار.', btns: ['تواصل', 'English', 'واتساب'] }
    }
  };

  function applyProjeler(lang) {
    const t = pick(lang, projeler);
    setText('.pm-hero__rail--left', t.railL);
    setText('.pm-hero__rail--right', t.railR);
    setText('.pm-hero .pm-kicker', t.kicker);
    setText('.pm-hero__lead', t.heroLead);
    const heroCta = document.querySelectorAll('.pm-hero__cta .pm-btn');
    if (heroCta[0]) heroCta[0].textContent = t.ctaSale;
    if (heroCta[1]) heroCta[1].textContent = t.ctaDelivered;
    document.querySelectorAll('.pm-chip').forEach(function (chip, i) {
      if (!t.chips[i]) return;
      const name = chip.querySelector('.pm-chip__name');
      const meta = chip.querySelector('.pm-chip__meta');
      if (name) name.textContent = t.chips[i][0];
      if (meta) meta.textContent = t.chips[i][1];
    });
    setAll('.pm-tab', t.tabs);
    document.querySelectorAll('.pm-section__head').forEach(function (head, i) {
      if (!t.sections[i]) return;
      const kick = head.querySelector('.pm-kicker');
      const h2 = head.querySelector('h2');
      const p = head.querySelector('p');
      if (kick) kick.textContent = t.sections[i][0];
      if (h2) h2.textContent = t.sections[i][1];
      if (p && t.sections[i][2]) p.textContent = t.sections[i][2];
    });

    const feat = document.querySelector('#satilik .pm-feature__copy');
    if (feat && t.featured) {
      const badge = document.querySelector('#satilik .pm-feature__badge');
      if (badge) badge.textContent = t.featured.badge;
      const h3 = feat.querySelector('h3');
      const p = feat.querySelector('p');
      if (h3) h3.textContent = t.featured.title;
      if (p) p.textContent = t.featured.desc;
      feat.querySelectorAll('.pm-specs span').forEach(function (el, i) {
        if (t.featured.specs[i]) el.textContent = t.featured.specs[i];
      });
      const featBtns = feat.querySelectorAll('.pm-btn');
      if (featBtns[0] && t.featured.btns[0]) featBtns[0].textContent = t.featured.btns[0];
      if (featBtns[1] && t.featured.btns[1]) featBtns[1].textContent = t.featured.btns[1];
    }

    document.querySelectorAll('#teslim .pm-row').forEach(function (row, i) {
      if (!t.rows[i]) return;
      const label = row.querySelector('.pm-label');
      const h3 = row.querySelector('h3');
      const p = row.querySelector('p');
      if (label) label.textContent = t.rows[i].label;
      if (h3) h3.textContent = t.rows[i].title;
      if (p) p.textContent = t.rows[i].desc;
    });

    const upcoming = document.querySelector('#gelecek .pm-row');
    if (upcoming && t.upcoming) {
      const label = upcoming.querySelector('.pm-label');
      const h3 = upcoming.querySelector('h3');
      const p = upcoming.querySelector('p');
      if (label) label.textContent = t.upcoming.label;
      if (h3) h3.textContent = t.upcoming.title;
      if (p) p.textContent = t.upcoming.desc;
    }

    const mansion = document.querySelector('#malikane .pm-feature__copy');
    if (mansion && t.mansion) {
      const h3 = mansion.querySelector('h3');
      const p = mansion.querySelector('p');
      const btn = mansion.querySelector('.pm-btn');
      if (h3) h3.textContent = t.mansion.title;
      if (p) p.textContent = t.mansion.desc;
      if (btn) btn.textContent = t.mansion.btn;
    }

    if (t.cta) {
      setText('.pm-cta .pm-kicker', t.cta.kicker);
      setText('.pm-cta h2', t.cta.title);
      setText('.pm-cta p', t.cta.text);
      document.querySelectorAll('.pm-cta .pm-btn').forEach(function (btn, i) {
        if (t.cta.btns[i]) btn.textContent = t.cta.btns[i];
      });
    }
  }

  /* ─── İLETİŞİM ─── */
  const iletisim = {
    tr: {
      side: 'İLETİŞİM',
      labels: ['Telefon', 'E-posta', 'Adres'],
      office: 'Ofis',
      hoursTitle: 'Çalışma Saatleri',
      hoursLead: 'Fethiye ofisimiz haftanın her günü hizmetinizde.',
      days: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    },
    en: {
      side: 'CONTACT',
      labels: ['Phone', 'Email', 'Address'],
      office: 'Office',
      hoursTitle: 'Working Hours',
      hoursLead: 'Our Fethiye office is at your service every day of the week.',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    de: {
      side: 'KONTAKT',
      labels: ['Telefon', 'E-Mail', 'Adresse'],
      office: 'Büro',
      hoursTitle: 'Öffnungszeiten',
      hoursLead: 'Unser Büro in Fethiye ist an jedem Wochentag für Sie da.',
      days: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
    },
    ru: {
      side: 'КОНТАКТ',
      labels: ['Телефон', 'E-mail', 'Адрес'],
      office: 'Офис',
      hoursTitle: 'Часы работы',
      hoursLead: 'Наш офис в Фетхие работает для вас каждый день недели.',
      days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    },
    ar: {
      side: 'تواصل',
      labels: ['هاتف', 'بريد', 'عنوان'],
      office: 'المكتب',
      hoursTitle: 'ساعات العمل',
      hoursLead: 'مكتبنا في فتحية في خدمتكم كل أيام الأسبوع.',
      days: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد']
    }
  };

  function applyIletisim(lang) {
    const t = pick(lang, iletisim);
    setText('.contact-arch-card__side', t.side);
    document.querySelectorAll('.contact-arch-row .label').forEach(function (el, i) {
      if (t.labels[i]) el.textContent = t.labels[i];
    });
    setText('.contact-hours-lux__eyebrow', t.office);
    setText('.contact-hours-lux__title', t.hoursTitle);
    setText('.contact-hours-lux__lead', t.hoursLead);
    document.querySelectorAll('.contact-hours-lux__card .day').forEach(function (el, i) {
      if (t.days[i]) el.textContent = t.days[i];
    });
  }

  /* ─── LUX SERVICE PAGES (villa / havuz / toplu-konut) ─── */
  const luxPages = {
    'villa-projeleri': {
      tr: { kicker: 'VILLA', title: 'Lüks Villa Projeleri', lead: 'Akdeniz’e özgü mimari dil, geniş yaşam alanları ve anahtar teslim uygulama.', featured: [[ 'Mimari Özgünlük, Anahtar Teslim Netlik', 'Arsa analizinden cephe diline, iç mekân akışından akıllı sistemlere kadar tüm süreci tek ekiple yönetiyoruz. Yerli ve yabancı yatırımcılar için şeffaf program, mühendislik disiplini ve Fethiye iklimine uygun malzeme seçimi.', 'Villa teklifi al →' ], [ 'Prestij Ölçeğinde Villa & Malikane', 'Geniş arsa payı, manzara eksenli konumlanma, havuz-peyzaj entegrasyonu ve yüksek kalite detaylarla yaşamı yükselten projeler üretiyoruz.', 'Portföyü incele →' ]] },
      en: { kicker: 'VILLA', title: 'Luxury Villa Projects', lead: 'Mediterranean architectural language, generous living spaces and turnkey delivery.', featured: [[ 'Distinctive Architecture, Clear Turnkey Delivery', 'From land analysis to facade language, interior flow and smart systems — one coordinated team. Transparent programme, engineering discipline and materials suited to Fethiye climate for local and international investors.', 'Get villa quote →' ], [ 'Villa & Mansion at Prestige Scale', 'We create projects that elevate living through generous plots, view-led positioning, pool-landscape integration and high-quality details.', 'View portfolio →' ]] },
      de: { kicker: 'VILLA', title: 'Luxusvillenprojekte', lead: 'Mediterrane Architektursprache, großzügige Wohnräume und schlüsselfertige Umsetzung.', featured: [[ 'Eigenständige Architektur, klare Schlüsselübergabe', 'Vom Grundstück bis zur Fassade, Innenraum und Smart Home — ein Team. Transparentes Programm und Materialien für das Fethiye-Klima.', 'Villa-Angebot →' ], [ 'Villa & Anwesen im Prestige-Maßstab', 'Projekte mit großzügigen Grundstücken, Meerblick, Pool-Landschaft und hochwertigen Details.', 'Portfolio ansehen →' ]] },
      ru: { kicker: 'ВИЛЛА', title: 'Проекты люксовых вилл', lead: 'Средиземноморская архитектура, просторные зоны и сдача «под ключ».', featured: [[ 'Уникальная архитектура, чёткая сдача', 'От анализа участка до фасада, планировки и умных систем — одна команда. Прозрачный график и материалы для климата Фетхие.', 'Запросить смету →' ], [ 'Виллы и особняки престижного масштаба', 'Проекты с большими участками, видом, бассейном и ландшафтом и высоким качеством деталей.', 'Смотреть портфолио →' ]] },
      ar: { kicker: 'فيلا', title: 'مشاريع الفلل الفاخرة', lead: 'لغة معمارية متوسطية ومساحات معيشة واسعة وتسليم مفتاحي.', featured: [[ 'عمارة مميزة وتسليم واضح', 'من تحليل الأرض إلى الواجهة والتدفق الداخلي والأنظمة الذكية — فريق واحد. برنامج شفاف ومواد مناسبة لمناخ فتحية.', 'اطلب عرض فيلا →' ], [ 'فلل وقصور بمقياس فاخر', 'مشاريع ترفع جودة الحياة بمساحات واسعة وإطلالة وتكامل المسبح والمناظر.', 'عرض المحفظة →' ]] }
    },
    'havuz-yapimi': {
      tr: { kicker: 'HAVUZ', title: 'Özel Havuz & Dış Mekan', lead: 'Estetik, dayanıklı ve iklim uygun havuz mimarisi — Fethiye villa yaşamına değer katar.', featured: [[ 'Özel Havuz Mimarisinde İnce İşçilik', 'Infinity, taş kaplama, gece aydınlatması ve villa terasıyla bütünleşen dış mekan çözümleri. Statik, tesisat ve su yalıtımında uzun ömürlü detaylar.', 'Havuz teklifi al →' ], [ 'Teslim Edilmiş Havuz Referansları', 'Fethiye iklimine uygun malzeme, filtre ve ısıtma sistemleriyle tamamlanan havuz projelerimizi inceleyin.', 'Projeleri incele →' ]] },
      en: { kicker: 'POOL', title: 'Private Pool & Outdoor Living', lead: 'Aesthetic, durable, climate-ready pool architecture that adds value to villa life in Fethiye.', featured: [[ 'Fine Craft in Private Pool Design', 'Infinity edges, stone cladding, night lighting and outdoor solutions integrated with villa terraces. Long-life structural, MEP and waterproofing details.', 'Get pool quote →' ], [ 'Delivered Pool References', 'Explore completed pool projects with materials and systems suited to the Fethiye climate.', 'View projects →' ]] },
      de: { kicker: 'POOL', title: 'Privater Pool & Außenbereich', lead: 'Ästhetische, langlebige Poolarchitektur für das Villenleben in Fethiye.', featured: [[ 'Feine Ausführung im Pooldesign', 'Infinity-Kanten, Steinverkleidung, Nachtbeleuchtung und Außenlösungen an der Villa-Terrasse.', 'Pool-Angebot →' ], [ 'Fertiggestellte Pool-Referenzen', 'Abgeschlossene Poolprojekte mit Systemen für das Fethiye-Klima.', 'Projekte ansehen →' ]] },
      ru: { kicker: 'БАССЕЙН', title: 'Частный бассейн и открытые зоны', lead: 'Эстетичная и долговечная архитектура бассейнов для жизни на вилле в Фетхие.', featured: [[ 'Тонкая работа в дизайне бассейнов', 'Infinity, каменная облицовка, подсветка и решения для террасы виллы. Долговечные конструкции и гидроизоляция.', 'Запросить смету →' ], [ 'Референсы сданных бассейнов', 'Завершённые проекты с системами для климата Фетхие.', 'Смотреть проекты →' ]] },
      ar: { kicker: 'مسبح', title: 'مسبح خاص ومساحات خارجية', lead: 'عمارة مسابح جمالية ومتينة تناسب مناخ فتحية وحياة الفيلا.', featured: [[ 'حرفية دقيقة في تصميم المسابح', 'حواف إنفينيتي وتكسية حجرية وإضاءة ليلية وحلول خارجية متكاملة مع التراس.', 'اطلب عرض مسبح →' ], [ 'مراجع مسابح مُسلّمة', 'مشاريع مسابح مكتملة بأنظمة مناسبة لمناخ فتحية.', 'عرض المشاريع →' ]] }
    },
    'toplu-konut': {
      tr: { kicker: 'KONUT', title: 'Toplu Konut Projeleri', lead: 'Planlı yerleşim, güçlü mühendislik ve uzun ömürlü yapı standardı.', featured: [[ 'Planlı Yerleşim, Güçlü Yapı', 'Altyapı, cephe dili, ortak alan ve daire planlarını birlikte ele alarak değer üreten konut yerleşimleri tasarlıyor ve inşa ediyoruz.', 'Proje görüşmesi →' ], [ 'Teslim Standartında Konut', 'Deprem yönetmeliğine uyum, uzun ömürlü malzeme ve şeffaf süreç yönetimi ile güvenilir konut üretimi.', 'Projeleri incele →' ]] },
      en: { kicker: 'HOUSING', title: 'Mass Housing Projects', lead: 'Planned settlements, strong engineering and long-life building standards.', featured: [[ 'Planned Settlement, Strong Structure', 'We design and build housing that creates value by aligning infrastructure, facades, shared spaces and apartment plans.', 'Project meeting →' ], [ 'Housing at Delivery Standard', 'Reliable housing production with seismic compliance, durable materials and transparent process management.', 'View projects →' ]] },
      de: { kicker: 'WOHNEN', title: 'Wohnanlagenprojekte', lead: 'Geplante Siedlungen, starke Technik und langlebige Bauqualität.', featured: [[ 'Geplante Siedlung, starke Struktur', 'Wir verbinden Infrastruktur, Fassade, Gemeinschaftsflächen und Wohnungspläne zu wertvollen Wohnanlagen.', 'Projektgespräch →' ], [ 'Wohnen auf Übergabeniveau', 'Zuverlässiger Wohnungsbau mit Erdbebennormen, langlebigen Materialien und transparentem Prozess.', 'Projekte ansehen →' ]] },
      ru: { kicker: 'ЖИЛЬЁ', title: 'Проекты массового жилья', lead: 'Планируемая застройка, сильная инженерия и долговечные стандарты.', featured: [[ 'Планируемая застройка, прочная конструкция', 'Создаём жилые комплексы, объединяя инфраструктуру, фасады, общие зоны и планировки квартир.', 'Встреча по проекту →' ], [ 'Жильё уровня сдачи', 'Надёжное строительство с сейсмическими нормами, долговечными материалами и прозрачным процессом.', 'Смотреть проекты →' ]] },
      ar: { kicker: 'سكن', title: 'مشاريع الإسكان الجماعي', lead: 'تخطيط عمراني منظم وهندسة قوية ومعايير بناء طويلة العمر.', featured: [[ 'تخطيط منظم وبناء قوي', 'نصمم ونبني مجمعات سكنية تجمع البنية التحتية والواجهات والمساحات المشتركة ومخططات الشقق.', 'اجتماع مشروع →' ], [ 'سكن بمعيار التسليم', 'إنتاج سكني موثوق مع الامتثال الزلزالي ومواد متينة وإدارة شفافة للعملية.', 'عرض المشاريع →' ]] }
    }
  };

  function applyLuxPage(pageKey, lang) {
    const block = luxPages[pageKey];
    if (!block) return;
    const t = pick(lang, block);
    setText('.lux-page-hero__kicker', t.kicker);
    setText('.lux-page-hero h1', t.title);
    setText('.lux-page-hero p', t.lead);
    document.querySelectorAll('.featured-projects .fp-row').forEach(function (row, i) {
      if (!t.featured[i]) return;
      const h2 = row.querySelector('h2');
      const p = row.querySelector('p');
      const a = row.querySelector('.fp-link');
      if (h2) h2.textContent = t.featured[i][0];
      if (p) p.textContent = t.featured[i][1];
      if (a) a.textContent = t.featured[i][2];
    });
  }

  /* ─── SSS breadcrumb ─── */
  function applySssCrumb(lang) {
    const crumb = document.querySelector('.area-hero__crumb');
    if (!crumb) return;
    const faqLabel = lang === 'tr' ? 'SSS' : (lang === 'de' ? 'FAQ' : lang === 'ru' ? 'Вопросы' : lang === 'ar' ? 'الأسئلة' : 'FAQ');
    const home = (typeof translationValue === 'function' && translationValue(lang, 'nav.home')) || (lang === 'tr' ? 'Ana Sayfa' : 'Home');
    crumb.innerHTML = '<a href="index.html">' + home + '</a> / ' + faqLabel;
  }

  const handlers = {
    index: applyIndex,
    hizmetler: applyHizmetler,
    projeler: applyProjeler,
    iletisim: applyIletisim,
    'villa-projeleri': function (lang) { applyLuxPage('villa-projeleri', lang); },
    'havuz-yapimi': function (lang) { applyLuxPage('havuz-yapimi', lang); },
    'toplu-konut': function (lang) { applyLuxPage('toplu-konut', lang); },
    sss: applySssCrumb
  };

  const phraseMap = {
    en: {
      'Ana Sayfa': 'Home',
      'Kurumsal': 'About',
      'Hizmetler': 'Services',
      'Bölgeler': 'Areas',
      'Projeler': 'Projects',
      'İletişim': 'Contact',
      'Hemen Ara': 'Call Now',
      'Teklif Al': 'Get Quote',
      'Portföyü incele': 'View Portfolio',
      'Proje Talep Et': 'Request a Project',
      'İletişime Geçiniz': 'Contact Us',
      'Sıkça Sorulan Sorular': 'Frequently Asked Questions',
      'WhatsApp': 'WhatsApp'
    },
    de: {
      'Ana Sayfa': 'Startseite',
      'Kurumsal': 'Unternehmen',
      'Hizmetler': 'Leistungen',
      'Bölgeler': 'Regionen',
      'Projeler': 'Projekte',
      'İletişim': 'Kontakt',
      'Hemen Ara': 'Jetzt anrufen',
      'Teklif Al': 'Angebot',
      'Portföyü incele': 'Portfolio ansehen',
      'Proje Talep Et': 'Projekt anfragen',
      'İletişime Geçiniz': 'Kontakt aufnehmen',
      'Sıkça Sorulan Sorular': 'FAQ',
      'WhatsApp': 'WhatsApp'
    },
    ru: {
      'Ana Sayfa': 'Главная',
      'Kurumsal': 'О компании',
      'Hizmetler': 'Услуги',
      'Bölgeler': 'Регионы',
      'Projeler': 'Проекты',
      'İletişim': 'Контакты',
      'Hemen Ara': 'Позвонить',
      'Teklif Al': 'Запросить смету',
      'Portföyü incele': 'Смотреть портфолио',
      'Proje Talep Et': 'Запросить проект',
      'İletişime Geçiniz': 'Связаться',
      'Sıkça Sorulan Sorular': 'Частые вопросы',
      'WhatsApp': 'WhatsApp'
    },
    ar: {
      'Ana Sayfa': 'الرئيسية',
      'Kurumsal': 'الشركة',
      'Hizmetler': 'الخدمات',
      'Bölgeler': 'المناطق',
      'Projeler': 'المشاريع',
      'İletişim': 'تواصل',
      'Hemen Ara': 'اتصل الآن',
      'Teklif Al': 'اطلب عرض سعر',
      'Portföyü incele': 'عرض الأعمال',
      'Proje Talep Et': 'اطلب مشروعاً',
      'İletişime Geçiniz': 'تواصل معنا',
      'Sıkça Sorulan Sorular': 'الأسئلة الشائعة',
      'WhatsApp': 'واتساب'
    }
  };

  const trToEnFallback = {
    'Satılık Villa': 'Villa for Sale',
    'Teslim Edilenler': 'Delivered',
    'Tümü': 'All',
    'Satılık': 'For Sale',
    'Tamamlanan Villa': 'Completed Villa',
    'Havuz Projeleri': 'Pool Projects',
    'Toplu Konut': 'Mass Housing',
    'Teslim Edilen Projeler': 'Delivered Projects',
    'Teslim Edilecek Projeler': 'Upcoming Projects',
    'Malikane Projeleri': 'Mansion Projects',
    'Bir sonraki projenizi konuşalım': "Let's discuss your next project",
    'Aralık 2026 Teslim · Havuzlu Villa': 'December 2026 Delivery · Villa with Pool',
    'Gelecek Toplu Konut': 'Upcoming Mass Housing',
    'Malikane Koleksiyonu': 'Mansion Collection',
    'Proje Görüşmesi': 'Project Meeting',
    'Projeleri incele': 'View Projects',
    'e-posta gönder': 'Send Email',
    'Villa teklifi al →': 'Get Villa Quote →',
    'Havuz teklifi al →': 'Get Pool Quote →',
    'Proje görüşmesi →': 'Project Meeting →',
    'Mimari Özgünlük, Anahtar Teslim Netlik': 'Distinctive Architecture, Clear Turnkey Delivery',
    'Prestij Ölçeğinde Villa & Malikane': 'Villa & Mansion at Prestige Scale',
    'Özel Havuz Mimarisinde İnce İşçilik': 'Fine Craft in Private Pool Architecture',
    'Planlı Yerleşim, Güçlü Yapı': 'Planned Settlement, Strong Structure',
    'Teslim Standartında Konut': 'Housing at Delivery Standard',
    'Hizmet Avantajlarımız': 'Our Service Advantages',
    'Ne Yapıyoruz?': 'What We Do',
    'Birlikte bir şeyler inşa edelim': "Let's build something together"
  };

  function applyPhraseFallback(lang) {
    if (lang === 'tr') return;
    const dict = phraseMap[lang] || phraseMap.en;
    if (!dict) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      const raw = node.nodeValue;
      const text = raw && raw.trim();
      if (!text) return;
      const replaced = dict[text] || (lang === 'en' ? trToEnFallback[text] : null);
      if (!replaced) return;
      node.nodeValue = raw.replace(text, replaced);
    });
  }

  global.applyFullSiteTranslations = function (lang) {
    lang = lang || 'tr';
    const id = pageId();
    const fn = handlers[id];
    if (fn) fn(lang);
    applyPhraseFallback(lang);
  };
})(window);
