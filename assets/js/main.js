const cta = document.getElementById('ctaPopup');
if (cta) { // CTA Popup güvenli kapatma
  cta.remove();
}

// Dil çevirileri
const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Kurumsal',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.contact': 'İletişim',
    'header.call': 'Hemen Ara',
    'hero.title': 'Fethiye Bölgesinde Temelden Çatıya Anahtar Teslim',
    'hero.description': 'Köklü Şirketimizin hizmetleriyle sizlere temelden çatıya konut, villa, özel hastane, peyzaj, havuz ve daha birçok yapı projelerimiz ile anahtar teslim fırsatları sunuyoruz.',
    'hero.viewProjects': 'Projeleri Gör',
    'hero.getQuote': 'Teklif Al',
    'hero.youtube.title': 'Modern Yaşamın Adresi',
    'hero.youtube.cta': 'İletişim',
    'services.title': 'Hizmetlerimiz',
    'services.housing.title': 'Toplu Konut Projeleri',
    'services.housing.desc': 'Yaşam kalitesi yüksek, modern toplu konut projelerinin planlanması ve inşası.',
    'services.floorExchange.title': 'Kat Karşılığı İnşaat',
    'services.floorExchange.desc': 'Arsa sahipleriyle şeffaf ve güvenilir sözleşme süreçleri ile kat karşılığı inşaat.',
    'services.seaViewLand.title': 'Deniz Manzaralı Arsa Alımı',
    'services.seaViewLand.desc': 'Deniz manzaralı veya denize yakın arazilerin peşin satın alımı ve proje geliştirme.',
    'services.villa.title': 'Villa Tasarımı & İnşası',
    'services.villa.desc': 'Özel tasarım, havuzlu ve peyzajlı premium villa projeleri.',
    'services.poolLandscape.title': 'Havuz & Peyzaj',
    'services.poolLandscape.desc': 'Estetik ve fonksiyonel açık alan çözümleri ile yaşam alanlarını tamamlıyoruz.',
    'services.commercial.title': 'Ticari Yapılar',
    'services.commercial.desc': 'Ofis, mağaza, iş merkezi gibi ticari projelerde mimari ve mühendislik çözümleri.',
    'services.turnkey.title': 'Anahtar Teslim İnşaat',
    'services.turnkey.desc': 'Temelden çatıya kadar tüm sürecin yönetildiği anahtar teslim projeler.',
    'services.largeScale.title': 'Büyük Ölçekli Yapılar',
    'services.largeScale.desc': 'Özel hastane, kamu yapıları ve kompleks projelerde güçlü mühendislik.',
    'projects.title': 'Öne Çıkan Projeler',
    'home.section.title': 'Fethiye İnşaat & Lüks Villa Projeleri',
    'home.seo.title': 'Fethiye\'de Modern & Lüks Villa Projeleri ve İnşaat Süreçlerimiz',
    'home.seo_text': 'Fethiye\'de Modern & Lüks Villa Projeleri ve İnşaat Süreçlerimiz',
    'home.seo.p1': 'Hasanağaoğlu İnşaat olarak Fethiye\'nin eşsiz doğasına uyumlu, modern mimari ve güçlü mühendislik altyapısıyla lüks villa, toplu konut, havuz ve ticari projeler geliştiriyoruz. 1935 yılından bu yana edindiğimiz tecrübeyi Fethiye\'ye taşıyarak, sahil şeridinde ve deniz manzaralı bölgelerde konumlanan projelerimizle güven ve konforu bir araya getiriyoruz.',
    'home.seo.p2': 'Fethiye villa ve lüks villa projelerinde, geniş yaşam alanları, akıllı ev sistemleri, enerji verimliliği ve estetik mimariyi bir arada sunuyoruz. Toplu konut, özel hastane, otel ve ticari yapı projelerinde ise planlı yerleşim, güçlü altyapı, deprem yönetmeliğine tam uyum ve uzun ömürlü yapı standartlarını esas alıyoruz.',
    'home.seo.p3': 'Her projemizi zemin etüdünden anahtar teslim sürecine kadar kendi ekibimizle yönetiyor; Fethiye\'de kaliteli, sürdürülebilir ve değer kazanan yapılar inşa ediyoruz. Fethiye havuz yapımı, özel mülk geliştirme ve deniz manzaralı arsa projeleriyle, yatırımcılar ve bölge sakinleri için uzun vadeli kazanç sağlayan çözümler üretiyoruz.',
    'home.projects.title': 'Projelerimiz',
    'home.projects.villa.title': 'Villa Projeleri',
    'home.projects.villa.desc': 'Modern mimari, geniş yaşam alanları, yüksek kalite malzeme ve Fethiye\'ye uygun tasarımlar.',
    'home.projects.pool.title': 'Havuz & Dış Mekan',
    'home.projects.pool.desc': 'Modern havuz tasarımları, dayanıklı zemin çözümleri ve konfor odaklı dış mekan uygulamaları ile projelerimize estetik ve değer katıyoruz.',
    'home.projects.housing.title': 'Toplu Konut Projeleri',
    'home.projects.housing.desc': 'Planlı yerleşim, güçlü altyapı, modern cephe ve uzun ömürlü yapı standartları.',
    'home.projects.landscape.title': 'Peyzaj & Çevre Düzenleme',
    'home.projects.landscape.desc': 'Yeşil alan planlama, modern bahçe çizgileri ve bakımı kolay çevre çözümleri.',
    'home.projects.hotel.title': 'Otel Projeleri',
    'home.projects.hotel.desc': 'Prestijli cephe, güçlü aydınlatma dili ve konaklama odaklı fonksiyonel planlama.',
    'home.projects.seaView.title': 'Deniz Manzaralı Arsa',
    'home.projects.seaView.desc': 'Arsa analizi, proje fizibilitesi ve manzarayı maksimum kullanan yerleşim çözümleri.',
    'home.projects.hospital.title': 'Özel Hastane Projeleri',
    'home.projects.hospital.desc': 'Modern sağlık altyapısı, güçlü mühendislik çözümleri ve hasta odaklı tasarım ile özel hastane projelerinde uzman hizmet.',
    'home.projects.viewProjects': 'Projeleri Gör →',
    'footer.workingHours.title': 'Çalışma Saatleri',
    'footer.workingHours.weekdays': 'Pazartesi - Cumartesi',
    'footer.workingHours.weekdaysTime': '09:00 - 18:00',
    'footer.workingHours.sunday': 'Pazar',
    'footer.workingHours.closed': 'Kapalı',
    'footer.location': 'Fethiye, Muğla, Türkiye',
    'footer.navigation.title': 'Navigasyon',
    'footer.quickLinks.title': 'Hızlı Bağlantılar',
    'footer.services.title': 'Hizmetler',
    'footer.services.villa': 'Villa İnşaatı',
    'footer.services.housing': 'Toplu Konut',
    'footer.services.turnkey': 'Anahtar Teslim',
    'footer.services.landscape': 'Peyzaj & Havuz',
    'footer.quickLinks.contact': 'İletişim',
    'footer.quickLinks.projects': 'Projelerimiz',
    'footer.quickLinks.services': 'Hizmetlerimiz',
    'footer.quickLinks.quote': 'Teklif Al',
    'footer.copyright': '© 2025 Hasanağaoğlu İnşaat Fethiye (1935\'ten beri) | Tüm Hakları Saklıdır',
    'footer.website': 'www.hasanagaogluinsaat.com',
    'about.title': 'Hakkımızda',
    'about.description.p1': 'Hasanağaoğlu İnşaat, sektördeki köklü geçmişini Sakarya\'da attığı sağlam temeller üzerine inşa etmiş; günümüzde ise birikimini ve uzmanlığını Fethiye coğrafyasına taşıyarak hizmet kapsamını genişletmiştir.',
    'about.description.p2': 'Fethiye ve çevresinde faaliyet gösteren, bölgenin sosyo-ekonomik dinamiklerini ve pazar ihtiyaçlarını derinlemesine analiz eden bir kurum olarak; güvenilirlik, estetik değer ve sürdürülebilirlik odaklı projeler geliştirmeyi misyon edinmiş bulunmaktayız.',
    'about.description.p3': 'Toplu konut projelerinden kat karşılığı inşaat uygulamalarına, deniz manzaralı yaşam alanlarından ticari yapılara uzanan geniş hizmet yelpazemiz kapsamında faaliyet göstermekteyiz. Deniz manzarasına sahip veya denize erişim mesafesinde bulunan araziler, yüksek yatırım potansiyeline sahip bölgeler ve gelişime açık lokasyonlar, stratejik çalışma alanlarımızı oluşturmaktadır.',
    'about.description.p4': 'Uygun teknik ve hukuki niteliklere sahip araziler, peşin ödeme veya proje bazlı satın alma modelleri ile kurumsal değerlendirme sürecimizden geçirilerek portföyümüze kazandırılmaktadır.',
    'about.description.p5': 'Projelerimizde yalnızca bina inşaatı ile sınırlı kalmayarak; havuz, peyzaj tasarımı, villa mimarisi, ortak kullanım alanları düzenlemeleri ve yaşam alanının tamamını kapsayan entegre çözümler sunmaktayız.',
    'about.description.p6': 'Özel hastane, iş merkezi ve diğer büyük ölçekli yapılar için de temelden çatıya kadar tüm yapım süreçlerini kurumsal standartlarda profesyonel bir yaklaşımla yönetmekteyiz.',
    'about.description.p7': 'Tüm projelerimizde:',
    'about.list.item1': 'Temelden çatıya anahtar teslim hizmet garantisi,',
    'about.list.item2': 'Statik, mimari ve mekanik mühendislik danışmanlığı,',
    'about.list.item3': 'Havuz ve peyzaj tasarım uygulamaları,',
    'about.list.item4': 'Şeffaflık ve güvenilirlik prensipleri',
    'about.description.p8': 'doğrultusunda ilerlemekteyiz.',
    'about.description.p9': 'Doğru lokasyon analizi ve doğru proje konsepti odaklı yaklaşımımızla; Fethiye\'nin değer önerisine katkı sağlayan, yatırımcı ve yaşam kalitesi açısından avantaj sunan projeler geliştirmeye devam etmekteyiz.',
    'about.vision.title': 'Vizyonumuz',
    'about.vision.text': 'Fethiye başta olmak üzere bölgemizde inşaat sektörünün öncü ve güvenilir markası olmak; yenilikçi projelerimiz ve kalite odaklı yaklaşımımızla ulusal düzeyde referans gösterilen bir firma konumuna ulaşmak.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.text': 'Modern hayatın ihtiyaçlarına uygun, sürdürülebilir ve yüksek dayanım standartlarına sahip yapılar üreterek müşterilerimizin güvenle yatırım yapabilecekleri yaşam alanları oluşturmak.',
    'contact.title': 'İletişim & Konum',
    'contact.officeInfo': 'Ofis Bilgilerimiz',
    'contact.company': 'Firma',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    'contact.whatsappQuick': 'WhatsApp ile Hızlı İletişim',
    'contact.formTitle': 'Bilgi ve Teklif Formu',
    'contact.formName': 'Ad Soyad',
    'contact.formNamePlaceholder': 'Adınızı Soyadınızı Yazın',
    'contact.formPhone': 'Telefon',
    'contact.formPhonePlaceholder': '+90 ___ ___ __ __',
    'contact.formMessage': 'Mesajınız',
    'contact.formMessagePlaceholder': 'Projeniz ya da araziniz ile ilgili kısaca bilgi verin',
    'contact.formSubmit': 'Gönder',
    'contact.mapTitle': 'Ofis Konumu',
    'footer.rights': 'Tüm Hakları Saklıdır',
    'home.projects.title': 'Projelerimiz',
    'home.projects.villa.title': 'Villa Projeleri',
    'home.projects.villa.desc': 'Modern mimari, geniş yaşam alanları, yüksek kalite malzeme ve Fethiye\'ye uygun tasarımlar.',
    'home.projects.pool.title': 'Havuz & Dış Mekan',
    'home.projects.pool.desc': 'Modern havuz tasarımları, dayanıklı zemin çözümleri ve konfor odaklı dış mekan uygulamaları ile projelerimize estetik ve değer katıyoruz.',
    'home.projects.housing.title': 'Toplu Konut Projeleri',
    'home.projects.housing.desc': 'Planlı yerleşim, güçlü altyapı, modern cephe ve uzun ömürlü yapı standartları.',
    'home.projects.landscape.title': 'Peyzaj & Çevre Düzenleme',
    'home.projects.landscape.desc': 'Yeşil alan planlama, modern bahçe çizgileri ve bakımı kolay çevre çözümleri.',
    'home.projects.hotel.title': 'Otel Projeleri',
    'home.projects.hotel.desc': 'Prestijli cephe, güçlü aydınlatma dili ve konaklama odaklı fonksiyonel planlama.',
    'home.projects.seaView.title': 'Deniz Manzaralı Arsa',
    'home.projects.seaView.desc': 'Arsa analizi, proje fizibilitesi ve manzarayı maksimum kullanan yerleşim çözümleri.',
    'home.projects.hospital.title': 'Özel Hastane Projeleri',
    'home.projects.hospital.desc': 'Modern sağlık altyapısı, güçlü mühendislik çözümleri ve hasta odaklı tasarım ile özel hastane projelerinde uzman hizmet.',
    'home.projects.viewProjects': 'Projeleri Gör →',
    'footer.workingHours.title': 'Çalışma Saatleri',
    'footer.workingHours.weekdays': 'Pazartesi - Cumartesi',
    'footer.workingHours.weekdaysTime': '09:00 - 18:00',
    'footer.workingHours.sunday': 'Pazar',
    'footer.workingHours.closed': 'Kapalı',
    'footer.location': 'Fethiye, Muğla, Türkiye',
    'footer.navigation.title': 'Navigasyon',
    'footer.quickLinks.title': 'Hızlı Bağlantılar',
    'footer.services.title': 'Hizmetler',
    'footer.services.villa': 'Villa İnşaatı',
    'footer.services.housing': 'Toplu Konut',
    'footer.services.turnkey': 'Anahtar Teslim',
    'footer.services.landscape': 'Peyzaj & Havuz',
    'footer.quickLinks.contact': 'İletişim',
    'footer.quickLinks.projects': 'Projelerimiz',
    'footer.quickLinks.services': 'Hizmetlerimiz',
    'footer.quickLinks.quote': 'Teklif Al',
    'footer.copyright': '© 2025 Hasanağaoğlu İnşaat Fethiye (1935\'ten beri) | Tüm Hakları Saklıdır',
    'footer.website': 'www.hasanagaogluinsaat.com',
    // About page
    'about.title.split.left': 'İnşaat',
    'about.title.split.right': 'Hizmetleri',
    'about.copy.p1': 'Hasanağoğlu İnşaat, Fethiye ve çevresinde konut ve yapı projelerinde güvenilir, planlı ve uzun ömürlü çözümler üretir. Modern mimari anlayışını güçlü mühendislik, doğru iş planı ve şeffaf iletişimle birleştirir; her projede kaliteyi standart hâline getiririz.',
    'about.copy.p2': 'Amacımız; teslim sonrası da değerini koruyan, konforlu ve sağlam yaşam alanları inşa etmektir. Mühendislik standartlarından ödün vermeden, doğru planlama ve şeffaf iletişimle müşterilerimizin beklentilerini güvenle hayata geçiriyoruz.',
    'about.tag': 'Kalıcı Değer',
    'about.vision.title.short': 'Vizyonumuz',
    'about.vision.text.short': 'Yaşanabilir, estetik ve sürdürülebilir yapılar üreterek bulunduğumuz bölgede güven duyulan, uzun vadeli bir yapı markası olmak.',
    'about.mission.title.short': 'Misyonumuz',
    'about.mission.text.short': 'Mühendislik standartlarından ödün vermeden, doğru planlama ve şeffaf iletişimle müşterilerimizin beklentilerini güvenle hayata geçirmek.',
    // Services page
    'services.kicker': 'NE YAPIYORUZ',
    'services.hero.title': 'Fethiye İnşaat Hizmetleri | Anahtar Teslim Projeler',
    'services.hero.text.p1': 'Hasanağaoğlu İnşaat, Fethiye ve Muğla bölgesinde temelden çatıya anahtar teslim inşaat hizmetleri sunmaktadır. Modern mimari tasarım ve güçlü mühendislik altyapısı ile kaliteli, sürdürülebilir yapılar inşa ediyoruz.',
    'services.hero.text.p2': 'Villa, toplu konut, ticari yapılar ve özel projelerde uzman ekibimizle hizmet veriyoruz. Müşteri memnuniyeti odaklı çalışma prensibi ile şeffaf iletişim ve profesyonel yaklaşım sergiliyoruz.',
    'services.hero.btn': 'PROJELERİMİZ',
    'services.section.kicker': 'HİZMETLER',
    'services.card.planning.title': 'Proje Planlama',
    'services.card.planning.desc': 'Araziden teslimata kadar tüm sürecin profesyonel planlaması ve koordinasyonu. Mimari tasarım, statik proje ve uygulama planlaması.',
    'services.card.housing.title': 'Konut İnşaatı',
    'services.card.housing.desc': 'Toplu konut projeleri ve özel konut inşaatı. Modern yaşam alanları, güvenli ve kaliteli yapılar.',
    'services.card.villa.title': 'Villa İnşaatı',
    'services.card.villa.desc': 'Özel tasarım villa projeleri. Havuzlu, peyzajlı ve lüks yaşam alanları. Anahtar teslim villa inşaatı.',
    'services.card.commercial.title': 'Ticari Yapılar',
    'services.card.commercial.desc': 'Ofis, mağaza, iş merkezi ve ticari yapılar. Modern iş alanları ve ticari projelerde uzman çözümler.',
    'services.card.land.title': 'Arsa Değerleme',
    'services.card.land.desc': 'Deniz manzaralı ve stratejik konumlu arsa değerleme. Yatırım potansiyeli analizi ve proje geliştirme.',
    'services.card.turnkey.title': 'Anahtar Teslim',
    'services.card.turnkey.desc': 'Temelden çatıya kadar tüm sürecin yönetildiği anahtar teslim projeler. Tek merkezden tüm hizmetler.',
    'services.card.detail': '— DETAYLI BİLGİ',
    'services.contact.title': 'Birlikte Bir Şeyler İnşa Edelim',
    'services.contact.subtitle': 'Fethiye ve Muğla bölgesinde profesyonel inşaat hizmetleri için bizimle iletişime geçin.',
    'services.contact.phone.title': 'Telefon',
    'services.contact.phone.text': 'Hemen arayın, projeleriniz için detaylı bilgi alın. Uzman ekibimiz size yardımcı olmaya hazır.',
    'services.contact.email.title': 'E-posta',
    'services.contact.email.text': 'Projeleriniz hakkında detaylı bilgi almak için e-posta gönderin. En kısa sürede size dönüş yapacağız.',
    // Projects page
    'projects.hero.vertical': 'Hasanağaoğlu İnşaat\'ın teslim edilen ve planlanan projeleri.',
    'projects.hero.title': 'Portfolio',
    'projects.hero.details.title': 'Details :',
    'projects.hero.details.item1': 'Modern mimari yaklaşım ve detay odaklı tasarım',
    'projects.hero.details.item2': 'Sağlam mühendislik ve kaliteli malzeme kullanımı',
    'projects.hero.details.item3': '1935\'te Sakarya\'da başlayıp Fethiye\'ye uzanan güvenilir inşaat hizmetleri',
    'projects.hero.desc': 'Hasanağaoğlu İnşaat olarak, 1935\'te Sakarya\'da başlayıp Fethiye\'ye uzanan bir öykü ile kaliteli inşaat hizmetleri sunuyoruz. Modern mimari yaklaşımlar, sağlam mühendislik çözümleri ve özenli işçilik ile hayata geçirdiğimiz projelerimiz, müşterilerimize konforlu ve güvenli yaşam alanları sağlamaktadır. Villa, toplu konut, havuz ve malikane projelerimizde, her detayı titizlikle planlayarak, estetik ve fonksiyonelliği bir araya getiriyoruz. Sürdürülebilir mimari anlayışımız ve çevreye saygılı yaklaşımımız ile gelecek nesillere değer katacak eserler inşa ediyoruz.',
    'projects.section.delivered': 'Teslim Edilen Projeler',
    'projects.section.upcoming': 'Teslim Edilecek Projeler',
    'projects.section.malikane': 'Malikane Projeleri',
    'projects.subsection.villa': 'Villa',
    'projects.subsection.pool': 'Havuz Projeleri',
    'projects.subsection.housing': 'Toplu Konut',
    'projects.kicker': 'ARCHITECTURE',
    'projects.project01.title': 'Project_01',
    'projects.project01.desc': 'Fethiye\'de modern mimari yaklaşım ile tasarlanan özel villa projesi. Malzeme, ışık ve oran odaklı.',
    'projects.project02.title': 'Project_02',
    'projects.project02.desc': 'Dış cephe oranları ve detay işçilik odaklı modern villa uygulaması. Malzeme sürekliliği ve ışık dengesi.',
    'projects.project03.title': 'Project_03',
    'projects.project03.desc': 'Fethiye havuz projelerimizde modern havuz uygulaması: çevre düzeni, kaplama detayları ve çizgisel mimari uyum. Fethiye\'de profesyonel havuz yapımı ve havuz tasarımı hizmetleri.',
    'projects.project04.title': 'Project_04',
    'projects.project04.desc': 'Toplu konut projelerinde planlama, ölçek ve sürdürülebilir mimari yaklaşım.',
    'projects.project05.title': 'Project_05',
    'projects.project05.desc': 'Devam eden villa projelerinde modern mimari ve detay odaklı yaklaşım.',
    'projects.project06.title': 'Project_06',
    'projects.project06.desc': 'Devam eden toplu konut projelerinde planlama, ölçek ve sürdürülebilir mimari yaklaşım.',
    'projects.project07.title': 'Project_07',
    'projects.project07.desc': 'Premium malikane projelerinde lüks detaylar, özel işçilik ve mimari mükemmellik.',
    'projects.villa01.title': 'Villa_01',
    // Contact page
    'contact.hero.title': 'İletişim',
    'contact.hero.subtitle': 'HASANAĞAOĞLU İNŞAAT OFİSLERİ',
    'contact.region.turkey': 'TÜRKİYE',
    'contact.city.fethiye': 'Fethiye',
    'contact.detail.address': 'ADRES:',
    'contact.detail.phone': 'TELEFON:',
    'contact.detail.email': 'E-POSTA:',
    'contact.form.label': 'BİZE ULAŞIN',
    'contact.form.question': 'İnşaat projeniz için teklif almak veya danışmanlık hizmeti ister misiniz?',
    'contact.form.name.label': 'Ad Soyad',
    'contact.form.email.label': 'E-posta',
    'contact.form.message.label': 'Mesajınız',
    'contact.form.privacy': 'Bu formu göndererek <a href="#" target="_blank">Gizlilik Politikası</a>\'nı okuduğumu ve kabul ettiğimi onaylıyorum.',
    'contact.form.submit': 'Gönder',
    // Slider captions
    'hero.slide.turnkey': 'Fethiye Temelden Çatıya Anahtar Teslim',
    'hero.slide.villa': 'Fethiye Villa Projeleri',
    'hero.slide.housing': 'Fethiye Toplu Konut Projeleri',
    'hero.slide.pool': 'Fethiye Havuz Projeleri'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.call': 'Call Now',
    'hero.title': 'Turnkey Services from Foundation to Roof in Fethiye Region',
    'hero.description': 'With our established company\'s services, we offer you turnkey opportunities with our residential, villa, private hospital, landscaping, pool, and many other structure projects from foundation to roof.',
    'hero.viewProjects': 'View Projects',
    'hero.getQuote': 'Get Quote',
    'hero.youtube.title': 'The Address of Modern Living',
    'hero.youtube.cta': 'Contact',
    'services.title': 'Our Services',
    'services.housing.title': 'Mass Housing Projects',
    'services.housing.desc': 'Planning and construction of modern mass housing projects with high quality of life.',
    'services.floorExchange.title': 'Floor Exchange Construction',
    'services.floorExchange.desc': 'Floor exchange construction with transparent and reliable contract processes with landowners.',
    'services.seaViewLand.title': 'Sea View Land Purchase',
    'services.seaViewLand.desc': 'Cash purchase and project development of sea view or sea-close lands.',
    'services.villa.title': 'Villa Design & Construction',
    'services.villa.desc': 'Custom design, pool and landscape premium villa projects.',
    'services.poolLandscape.title': 'Pool & Landscape',
    'services.poolLandscape.desc': 'We complete living spaces with aesthetic and functional open space solutions.',
    'services.commercial.title': 'Commercial Buildings',
    'services.commercial.desc': 'Architectural and engineering solutions in commercial projects such as offices, stores, and business centers.',
    'services.turnkey.title': 'Turnkey Construction',
    'services.turnkey.desc': 'Turnkey projects where the entire process from foundation to roof is managed.',
    'services.largeScale.title': 'Large-Scale Structures',
    'services.largeScale.desc': 'Strong engineering in private hospitals, public buildings, and complex projects.',
    'projects.title': 'Featured Projects',
    'home.section.title': 'Fethiye Construction & Luxury Villa Projects',
    'home.seo.title': 'Our Modern & Luxury Villa Projects and Construction Processes in Fethiye',
    'home.seo_text': 'Our Modern & Luxury Villa Projects and Construction Processes in Fethiye',
    'home.seo.p1': 'As Hasanağaoğlu Construction, we develop luxury villa, mass housing, pool and commercial projects aligned with Fethiye\'s unique nature, supported by modern architecture and strong engineering infrastructure. Bringing our experience since 1935 to Fethiye, we combine trust and comfort through projects located along the coastline and in sea-view areas.',
    'home.seo.p2': 'In Fethiye villa and luxury villa projects, we offer spacious living areas, smart home systems, energy efficiency, and aesthetic architecture together. In mass housing, private hospital, hotel, and commercial building projects, we base our work on planned settlements, strong infrastructure, full compliance with earthquake regulations, and long-lasting building standards.',
    'home.seo.p3': 'We manage every project with our own team from soil survey to turnkey delivery; we build quality, sustainable, value-appreciating structures in Fethiye. With Fethiye pool construction, private property development, and sea-view land projects, we produce solutions that deliver long-term gains for investors and local residents.',
    'home.projects.title': 'Our Projects',
    'home.projects.villa.title': 'Villa Projects',
    'home.projects.villa.desc': 'Modern architecture, spacious living areas, high-quality materials, and designs suited to Fethiye.',
    'home.projects.pool.title': 'Pool & Outdoor',
    'home.projects.pool.desc': 'We add aesthetic value to our projects with modern pool designs, durable ground solutions, and comfort-focused outdoor applications.',
    'home.projects.housing.title': 'Mass Housing Projects',
    'home.projects.housing.desc': 'Planned settlement, strong infrastructure, modern facades, and long-lasting building standards.',
    'home.projects.landscape.title': 'Landscape & Environmental Design',
    'home.projects.landscape.desc': 'Green area planning, modern garden lines, and low-maintenance environmental solutions.',
    'home.projects.hotel.title': 'Hotel Projects',
    'home.projects.hotel.desc': 'Prestigious facade, strong lighting language, and accommodation-focused functional planning.',
    'home.projects.seaView.title': 'Sea View Land',
    'home.projects.seaView.desc': 'Land analysis, project feasibility, and settlement solutions that maximize the view.',
    'home.projects.hospital.title': 'Private Hospital Projects',
    'home.projects.hospital.desc': 'Expert service in private hospital projects with modern healthcare infrastructure, strong engineering solutions, and patient-focused design.',
    'home.projects.viewProjects': 'View Projects →',
    'about.title': 'About Us',
    'about.description.p1': 'Hasanağaoğlu Construction has built its established history in the sector with solid foundations laid in Sakarya; today, it has expanded its service area by bringing its experience and expertise to Fethiye.',
    'about.description.p2': 'As a company operating in Fethiye and its surroundings, closely familiar with the dynamics and needs of the region, we aim to produce projects that inspire trust, are aesthetic and long-lasting.',
    'about.description.p3': 'We offer a wide range of services from mass housing projects to construction in exchange for apartments, from sea-view living spaces to commercial buildings. Lands with sea views or within walking distance to the sea, high investment value areas, and locations open to development are among our priority working areas.',
    'about.description.p4': 'Suitable lands are evaluated and purchased by us either in cash or on a project basis.',
    'about.description.p5': 'In our projects, we don\'t just build buildings; we offer solutions covering the entire living space such as pools, landscaping, villa design, and common area arrangements.',
    'about.description.p6': 'When needed, we also undertake the entire process from foundation to roof for large-scale structures such as private hospitals and business centers.',
    'about.description.p7': 'In every project:',
    'about.list.item1': 'Turnkey delivery from foundation to roof,',
    'about.list.item2': 'Static, architectural and mechanical engineering solutions,',
    'about.list.item3': 'Pool and garden arrangements,',
    'about.list.item4': 'Principle of trust and transparency',
    'about.description.p8': 'we proceed with.',
    'about.description.p9': 'With our right location – right project focused approach; we continue to develop projects that add value to Fethiye\'s value and offer investment and living advantages.',
    'about.vision.title': 'Our Vision',
    'about.vision.text': 'To be the leading construction company in the Fethiye region and add value to future generations with quality, sustainable structures.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To build reliable, modern and aesthetic structures by providing our customers with the highest quality construction services. To set an example in the industry by aiming for excellence in every project.',
    'contact.title': 'Contact & Location',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.location': 'Location',
    'contact.officeInfo': 'Our Office Information',
    'contact.company': 'Company',
    'contact.email': 'Email',
    'contact.whatsappQuick': 'Quick Contact via WhatsApp',
    'contact.formTitle': 'Information and Quote Form',
    'contact.formName': 'Full Name',
    'contact.formNamePlaceholder': 'Enter Your Name and Surname',
    'contact.formPhone': 'Phone',
    'contact.formPhonePlaceholder': '+90 ___ ___ __ __',
    'contact.formMessage': 'Your Message',
    'contact.formMessagePlaceholder': 'Please provide brief information about your project or land',
    'contact.formSubmit': 'Send',
    'contact.mapTitle': 'Office Location',
    'footer.workingHours.title': 'Working Hours',
    'footer.workingHours.weekdays': 'Monday - Saturday',
    'footer.workingHours.weekdaysTime': '09:00 - 18:00',
    'footer.workingHours.sunday': 'Sunday',
    'footer.workingHours.closed': 'Closed',
    'footer.location': 'Fethiye, Muğla, Türkiye',
    'footer.navigation.title': 'Navigation',
    'footer.quickLinks.title': 'Quick Links',
    'footer.quickLinks.contact': 'Contact',
    'footer.quickLinks.projects': 'Our Projects',
    'footer.quickLinks.services': 'Our Services',
    'footer.quickLinks.quote': 'Get Quote',
    'footer.services.title': 'Services',
    'footer.services.villa': 'Villa Construction',
    'footer.services.housing': 'Mass Housing',
    'footer.services.turnkey': 'Turnkey',
    'footer.services.landscape': 'Landscape & Pool',
    'footer.copyright': '© 2025 Hasanağaoğlu Construction Fethiye (Since 1935) | All Rights Reserved',
    'footer.website': 'www.hasanagaogluinsaat.com',
    'footer.rights': 'All Rights Reserved',
    // About page
    'about.title.split.left': 'Construction',
    'about.title.split.right': 'Services',
    'about.copy.p1': 'Hasanağaoğlu Construction produces reliable, planned and durable solutions in residential and building projects in Fethiye and its surroundings. We combine modern architectural understanding with strong engineering, correct business plan and transparent communication; we make quality a standard in every project.',
    'about.copy.p2': 'Our goal is to build comfortable and solid living spaces that maintain their value after delivery. Without compromising engineering standards, we safely realize our customers\' expectations with correct planning and transparent communication.',
    'about.tag': 'Lasting Value',
    'about.vision.title.short': 'Our Vision',
    'about.vision.text.short': 'To be a trusted, long-term construction brand in our region by producing livable, aesthetic and sustainable structures.',
    'about.mission.title.short': 'Our Mission',
    'about.mission.text.short': 'To safely realize our customers\' expectations with correct planning and transparent communication without compromising engineering standards.',
    // Services page
    'services.kicker': 'WHAT WE DO',
    'services.hero.title': 'Fethiye Construction Services | Turnkey Projects',
    'services.hero.text.p1': 'Hasanağaoğlu Construction provides turnkey construction services from foundation to roof in Fethiye and Muğla region. We build quality, sustainable structures with modern architectural design and strong engineering infrastructure.',
    'services.hero.text.p2': 'We serve with our expert team in villas, mass housing, commercial buildings and special projects. We demonstrate transparent communication and professional approach with our customer satisfaction-oriented working principle.',
    'services.hero.btn': 'OUR PROJECTS',
    'services.section.kicker': 'SERVICES',
    'services.card.planning.title': 'Project Planning',
    'services.card.planning.desc': 'Professional planning and coordination of the entire process from land to delivery. Architectural design, static project and application planning.',
    'services.card.housing.title': 'Residential Construction',
    'services.card.housing.desc': 'Mass housing projects and private residential construction. Modern living spaces, safe and quality structures.',
    'services.card.villa.title': 'Villa Construction',
    'services.card.villa.desc': 'Custom design villa projects. Pool, landscape and luxury living spaces. Turnkey villa construction.',
    'services.card.commercial.title': 'Commercial Buildings',
    'services.card.commercial.desc': 'Offices, stores, business centers and commercial buildings. Modern business spaces and expert solutions in commercial projects.',
    'services.card.land.title': 'Land Valuation',
    'services.card.land.desc': 'Sea view and strategically located land valuation. Investment potential analysis and project development.',
    'services.card.turnkey.title': 'Turnkey',
    'services.card.turnkey.desc': 'Turnkey projects where the entire process from foundation to roof is managed. All services from a single center.',
    'services.card.detail': '— DETAILED INFO',
    'services.contact.title': 'Let\'s Build Something Together',
    'services.contact.subtitle': 'Contact us for professional construction services in Fethiye and Muğla region.',
    'services.contact.phone.title': 'Phone',
    'services.contact.phone.text': 'Call now, get detailed information about your projects. Our expert team is ready to help you.',
    'services.contact.email.title': 'Email',
    'services.contact.email.text': 'Send an email to get detailed information about your projects. We will get back to you as soon as possible.',
    // Projects page
    'projects.hero.vertical': 'Delivered and planned projects of Hasanağaoğlu Construction.',
    'projects.hero.title': 'Portfolio',
    'projects.hero.details.title': 'Details :',
    'projects.hero.details.item1': 'Modern architectural approach and detail-oriented design',
    'projects.hero.details.item2': 'Solid engineering and quality material usage',
    'projects.hero.details.item3': 'Reliable construction services starting in Sakarya in 1935 and extending to Fethiye',
    'projects.hero.desc': 'As Hasanağaoğlu Construction, we provide quality construction services with a story that started in Sakarya in 1935 and extends to Fethiye. Our projects, which we realize with modern architectural approaches, solid engineering solutions and meticulous workmanship, provide our customers with comfortable and safe living spaces. In our villa, mass housing, pool and mansion projects, we combine aesthetics and functionality by carefully planning every detail. We build works that will add value to future generations with our sustainable architectural understanding and environmentally respectful approach.',
    'projects.section.delivered': 'Delivered Projects',
    'projects.section.upcoming': 'Upcoming Projects',
    'projects.section.malikane': 'Mansion Projects',
    'projects.subsection.villa': 'Villa',
    'projects.subsection.pool': 'Pool Projects',
    'projects.subsection.housing': 'Mass Housing',
    'projects.kicker': 'ARCHITECTURE',
    'projects.project01.title': 'Project_01',
    'projects.project01.desc': 'Special villa project designed with modern architectural approach in Fethiye. Material, light and proportion focused.',
    'projects.project02.title': 'Project_02',
    'projects.project02.desc': 'Modern villa application focused on facade proportions and detail workmanship. Material continuity and light balance.',
    'projects.project03.title': 'Project_03',
    'projects.project03.desc': 'Modern pool application in our Fethiye pool projects: environment arrangement, coating details and linear architectural harmony. Professional pool construction and pool design services in Fethiye.',
    'projects.project04.title': 'Project_04',
    'projects.project04.desc': 'Planning, scale and sustainable architectural approach in mass housing projects.',
    'projects.project05.title': 'Project_05',
    'projects.project05.desc': 'Modern architecture and detail-oriented approach in ongoing villa projects.',
    'projects.project06.title': 'Project_06',
    'projects.project06.desc': 'Planning, scale and sustainable architectural approach in ongoing mass housing projects.',
    'projects.project07.title': 'Project_07',
    'projects.project07.desc': 'Luxury details, special workmanship and architectural excellence in premium mansion projects.',
    'projects.villa01.title': 'Villa_01',
    // Contact page
    'contact.hero.title': 'Contact',
    'contact.hero.subtitle': 'HASANAĞAOĞLU CONSTRUCTION OFFICES',
    'contact.region.turkey': 'TURKEY',
    'contact.city.fethiye': 'Fethiye',
    'contact.detail.address': 'ADDRESS:',
    'contact.detail.phone': 'PHONE:',
    'contact.detail.email': 'EMAIL:',
    'contact.form.label': 'CONTACT US',
    'contact.form.question': 'Would you like to get a quote or consulting service for your construction project?',
    'contact.form.name.label': 'Full Name',
    'contact.form.email.label': 'Email',
    'contact.form.message.label': 'Your Message',
    'contact.form.privacy': 'By submitting this form, I confirm that I have read and accepted the <a href="#" target="_blank">Privacy Policy</a>.',
    'contact.form.submit': 'Send',
    // Slider captions
    'hero.slide.turnkey': 'Fethiye Turnkey from Foundation to Roof',
    'hero.slide.villa': 'Fethiye Villa Projects',
    'hero.slide.housing': 'Fethiye Mass Housing Projects',
    'hero.slide.pool': 'Fethiye Pool Projects'
  },
  ru: {
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'header.call': 'Позвонить',
    'hero.title': 'Под Ключ от Фундамента до Крыши в Регионе Фетхие',
    'hero.description': 'С услугами нашей устоявшейся компании мы предлагаем вам возможности под ключ с нашими проектами жилых домов, вилл, частных больниц, ландшафтного дизайна, бассейнов и многих других структур от фундамента до крыши.',
    'hero.viewProjects': 'Посмотреть Проекты',
    'hero.getQuote': 'Получить Предложение',
    'hero.youtube.title': 'Адрес современного образа жизни',
    'hero.youtube.cta': 'Связаться',
    'services.title': 'Наши Услуги',
    'services.housing.title': 'Массовое Жилищное Строительство',
    'services.housing.desc': 'Планирование и строительство современных массовых жилых проектов с высоким качеством жизни.',
    'services.floorExchange.title': 'Строительство в Обмен на Квартиры',
    'services.floorExchange.desc': 'Строительство в обмен на квартиры с прозрачными и надежными договорными процессами с владельцами земель.',
    'services.seaViewLand.title': 'Покупка Земель с Видом на Море',
    'services.seaViewLand.desc': 'Наличная покупка и разработка проектов земель с видом на море или близких к морю.',
    'services.villa.title': 'Дизайн и Строительство Вилл',
    'services.villa.desc': 'Индивидуальный дизайн, премиум проекты вилл с бассейнами и ландшафтом.',
    'services.poolLandscape.title': 'Бассейн и Ландшафт',
    'services.poolLandscape.desc': 'Мы дополняем жилые пространства эстетическими и функциональными решениями для открытых пространств.',
    'services.commercial.title': 'Коммерческие Здания',
    'services.commercial.desc': 'Архитектурные и инженерные решения в коммерческих проектах, таких как офисы, магазины и деловые центры.',
    'services.turnkey.title': 'Строительство Под Ключ',
    'services.turnkey.desc': 'Проекты под ключ, где управляется весь процесс от фундамента до крыши.',
    'services.largeScale.title': 'Крупномасштабные Структуры',
    'services.largeScale.desc': 'Сильная инженерия в частных больницах, общественных зданиях и сложных проектах.',
    'projects.title': 'Избранные Проекты',
    'home.section.title': 'Проекты строительства и люксовых вилл в Фетхие',
    'home.seo.title': 'Наши современные и люксовые виллы и строительные процессы в Фетхие',
    'home.seo_text': 'Наши современные и люксовые виллы и строительные процессы в Фетхие',
    'home.seo.p1': 'Как Hasanağaoğlu Construction, мы развиваем проекты люксовых вилл, массового жилья, бассейнов и коммерческих объектов, соответствующие уникальной природе Фетхие, опираясь на современную архитектуру и сильную инженерную базу. Перенося наш опыт с 1935 года в Фетхие, мы объединяем надежность и комфорт в проектах, расположенных вдоль побережья и в районах с видом на море.',
    'home.seo.p2': 'В проектах вилл и люксовых вилл в Фетхие мы предлагаем просторные жилые пространства, системы умного дома, энергоэффективность и эстетичную архитектуру. В проектах массового жилья, частных больниц, отелей и коммерческих зданий мы опираемся на планированную застройку, сильную инфраструктуру, полное соответствие сейсмическим нормам и долговечные стандарты строительства.',
    'home.seo.p3': 'Мы управляем каждым проектом собственной командой от инженерно-геологических изысканий до передачи «под ключ»; строим в Фетхие качественные, устойчивые и растущие в цене объекты. С проектами строительства бассейнов в Фетхие, развитием частной недвижимости и участками с видом на море мы создаем решения, обеспечивающие долгосрочную выгоду для инвесторов и жителей региона.',
    'about.title': 'О нас',
    'about.description.p1': 'Hasanağaoğlu Construction создала свою устоявшуюся историю в секторе с прочными основами, заложенными в Сакарья; сегодня она расширила свою область услуг, принеся свой опыт и экспертизу в Фетхие.',
    'about.description.p2': 'Как компания, работающая в Фетхие и его окрестностях, тесно знакомая с динамикой и потребностями региона, мы стремимся создавать проекты, которые внушают доверие, эстетичны и долговечны.',
    'about.description.p3': 'Мы предлагаем широкий спектр услуг от массового жилищного строительства до строительства в обмен на квартиры, от жилых пространств с видом на море до коммерческих зданий. Земли с видом на море или в пешей доступности от моря, районы с высокой инвестиционной стоимостью и локации, открытые для развития, входят в число наших приоритетных рабочих областей.',
    'about.description.p4': 'Подходящие земли оцениваются и приобретаются нами либо наличными, либо на основе проекта.',
    'about.description.p5': 'В наших проектах мы не просто строим здания; мы предлагаем решения, охватывающие все жилое пространство, такие как бассейны, ландшафтный дизайн, дизайн вилл и обустройство общих зон.',
    'about.description.p6': 'При необходимости мы также берем на себя весь процесс от фундамента до крыши для крупномасштабных структур, таких как частные больницы и деловые центры.',
    'about.description.p7': 'В каждом проекте:',
    'about.list.item1': 'Под ключ от фундамента до крыши,',
    'about.list.item2': 'Статические, архитектурные и инженерные решения,',
    'about.list.item3': 'Обустройство бассейнов и садов,',
    'about.list.item4': 'Принцип доверия и прозрачности',
    'about.description.p8': 'мы продвигаемся с.',
    'about.description.p9': 'С нашим подходом, ориентированным на правильное местоположение – правильный проект; мы продолжаем разрабатывать проекты, которые добавляют ценности Фетхие и предлагают инвестиционные и жизненные преимущества.',
    'about.vision.title': 'Наше Видение',
    'about.vision.text': 'Быть ведущей строительной компанией в регионе Фетхие и приносить пользу будущим поколениям качественными, устойчивыми структурами.',
    'about.mission.title': 'Наша Миссия',
    'about.mission.text': 'Строить надежные, современные и эстетичные структуры, предоставляя нашим клиентам услуги высочайшего качества. Стать примером в отрасли, стремясь к совершенству в каждом проекте.',
    'contact.title': 'Контакты и Местоположение',
    'contact.phone': 'Телефон',
    'contact.address': 'Адрес',
    'contact.location': 'Местоположение',
    'contact.officeInfo': 'Информация о нашем офисе',
    'contact.company': 'Компания',
    'contact.email': 'Электронная почта',
    'contact.whatsappQuick': 'Быстрая связь через WhatsApp',
    'contact.formTitle': 'Форма информации и предложения',
    'contact.formName': 'ФИО',
    'contact.formNamePlaceholder': 'Введите ваше имя и фамилию',
    'contact.formPhone': 'Телефон',
    'contact.formPhonePlaceholder': '+90 ___ ___ __ __',
    'contact.formMessage': 'Ваше сообщение',
    'contact.formMessagePlaceholder': 'Пожалуйста, предоставьте краткую информацию о вашем проекте или земле',
    'contact.formSubmit': 'Отправить',
    'contact.mapTitle': 'Местоположение офиса',
    'footer.rights': 'Все Права Защищены',
    'home.projects.title': 'Наши Проекты',
    'home.projects.villa.title': 'Проекты Вилл',
    'home.projects.villa.desc': 'Современная архитектура, просторные жилые зоны, высококачественные материалы и дизайны, подходящие для Фетхие.',
    'home.projects.pool.title': 'Бассейн и Открытые Пространства',
    'home.projects.pool.desc': 'Мы добавляем эстетическую ценность нашим проектам с современными дизайнами бассейнов, долговечными решениями для полов и приложениями для открытых пространств, ориентированными на комфорт.',
    'home.projects.housing.title': 'Массовые Жилищные Проекты',
    'home.projects.housing.desc': 'Планируемое поселение, сильная инфраструктура, современный фасад и долговечные строительные стандарты.',
    'home.projects.landscape.title': 'Ландшафт и Окружающая Среда',
    'home.projects.landscape.desc': 'Планирование зеленых зон, современные линии сада и экологические решения, простые в обслуживании.',
    'home.projects.hotel.title': 'Проекты Отелей',
    'home.projects.hotel.desc': 'Престижный фасад, сильный язык освещения и функциональное планирование, ориентированное на размещение.',
    'home.projects.seaView.title': 'Земли с Видом на Море',
    'home.projects.seaView.desc': 'Анализ земли, осуществимость проекта и решения для поселения, максимально использующие вид.',
    'home.projects.hospital.title': 'Проекты Частных Больниц',
    'home.projects.hospital.desc': 'Экспертные услуги в проектах частных больниц с современной медицинской инфраструктурой, сильными инженерными решениями и дизайном, ориентированным на пациентов.',
    'home.projects.viewProjects': 'Посмотреть Проекты →',
    'footer.workingHours.title': 'Часы Работы',
    'footer.workingHours.weekdays': 'Понедельник - Суббота',
    'footer.workingHours.weekdaysTime': '09:00 - 18:00',
    'footer.workingHours.sunday': 'Воскресенье',
    'footer.workingHours.closed': 'Закрыто',
    'footer.location': 'Фетхие, Мугла, Турция',
    'footer.navigation.title': 'Навигация',
    'footer.quickLinks.title': 'Быстрые Ссылки',
    'footer.services.title': 'Услуги',
    'footer.services.villa': 'Строительство Вилл',
    'footer.services.housing': 'Массовое Жилище',
    'footer.services.turnkey': 'Под Ключ',
    'footer.services.landscape': 'Ландшафт и Бассейн',
    'footer.quickLinks.contact': 'Контакты',
    'footer.quickLinks.projects': 'Наши Проекты',
    'footer.quickLinks.services': 'Наши Услуги',
    'footer.quickLinks.quote': 'Получить Предложение',
    'footer.copyright': '© 2025 Hasanağaoğlu Construction Фетхие (С 1935) | Все Права Защищены',
    'footer.website': 'www.hasanagaogluinsaat.com',
    // About page
    'about.title.split.left': 'Строительство',
    'about.title.split.right': 'Услуги',
    'about.copy.p1': 'Hasanağaoğlu Construction производит надежные, спланированные и долговечные решения в жилищных и строительных проектах в Фетхие и его окрестностях. Мы сочетаем современное архитектурное понимание с сильной инженерией, правильным бизнес-планом и прозрачной коммуникацией; мы делаем качество стандартом в каждом проекте.',
    'about.copy.p2': 'Наша цель - строить комфортные и прочные жилые пространства, которые сохраняют свою ценность после сдачи. Не идя на компромиссы в инженерных стандартах, мы безопасно реализуем ожидания наших клиентов с правильным планированием и прозрачной коммуникацией.',
    'about.tag': 'Постоянная Ценность',
    'about.vision.title.short': 'Наше Видение',
    'about.vision.text.short': 'Быть доверенным, долгосрочным строительным брендом в нашем регионе, производя пригодные для жизни, эстетичные и устойчивые структуры.',
    'about.mission.title.short': 'Наша Миссия',
    'about.mission.text.short': 'Безопасно реализовать ожидания наших клиентов с правильным планированием и прозрачной коммуникацией, не идя на компромиссы в инженерных стандартах.',
    // Services page
    'services.kicker': 'ЧТО МЫ ДЕЛАЕМ',
    'services.hero.title': 'Строительные Услуги Фетхие | Проекты Под Ключ',
    'services.hero.text.p1': 'Hasanağaoğlu Construction предоставляет услуги строительства под ключ от фундамента до крыши в регионе Фетхие и Мугла. Мы строим качественные, устойчивые структуры с современным архитектурным дизайном и сильной инженерной инфраструктурой.',
    'services.hero.text.p2': 'Мы обслуживаем с нашей экспертной командой виллы, массовое жилье, коммерческие здания и специальные проекты. Мы демонстрируем прозрачную коммуникацию и профессиональный подход с нашим принципом работы, ориентированным на удовлетворенность клиентов.',
    'services.hero.btn': 'НАШИ ПРОЕКТЫ',
    'services.section.kicker': 'УСЛУГИ',
    'services.card.planning.title': 'Планирование Проекта',
    'services.card.planning.desc': 'Профессиональное планирование и координация всего процесса от земли до сдачи. Архитектурный дизайн, статический проект и планирование применения.',
    'services.card.housing.title': 'Жилищное Строительство',
    'services.card.housing.desc': 'Проекты массового жилья и частное жилищное строительство. Современные жилые пространства, безопасные и качественные структуры.',
    'services.card.villa.title': 'Строительство Вилл',
    'services.card.villa.desc': 'Проекты вилл с индивидуальным дизайном. Бассейн, ландшафт и роскошные жилые пространства. Строительство вилл под ключ.',
    'services.card.commercial.title': 'Коммерческие Здания',
    'services.card.commercial.desc': 'Офисы, магазины, деловые центры и коммерческие здания. Современные деловые пространства и экспертные решения в коммерческих проектах.',
    'services.card.land.title': 'Оценка Земли',
    'services.card.land.desc': 'Оценка земли с видом на море и стратегически расположенной. Анализ инвестиционного потенциала и разработка проектов.',
    'services.card.turnkey.title': 'Под Ключ',
    'services.card.turnkey.desc': 'Проекты под ключ, где управляется весь процесс от фундамента до крыши. Все услуги из одного центра.',
    'services.card.detail': '— ПОДРОБНАЯ ИНФОРМАЦИЯ',
    'services.contact.title': 'Давайте Построим Что-то Вместе',
    'services.contact.subtitle': 'Свяжитесь с нами для профессиональных строительных услуг в регионе Фетхие и Мугла.',
    'services.contact.phone.title': 'Телефон',
    'services.contact.phone.text': 'Позвоните сейчас, получите подробную информацию о ваших проектах. Наша экспертная команда готова помочь вам.',
    'services.contact.email.title': 'Электронная почта',
    'services.contact.email.text': 'Отправьте электронное письмо, чтобы получить подробную информацию о ваших проектах. Мы свяжемся с вами как можно скорее.',
    // Projects page
    'projects.hero.vertical': 'Сданные и запланированные проекты Hasanağaoğlu Construction.',
    'projects.hero.title': 'Портфолио',
    'projects.hero.details.title': 'Детали :',
    'projects.hero.details.item1': 'Современный архитектурный подход и дизайн, ориентированный на детали',
    'projects.hero.details.item2': 'Прочная инженерия и использование качественных материалов',
    'projects.hero.details.item3': 'Надежные строительные услуги, начавшиеся в Сакарья в 1935 году и простирающиеся до Фетхие',
    'projects.hero.desc': 'Как Hasanağaoğlu Construction, мы предоставляем качественные строительные услуги с историей, которая началась в Сакарья в 1935 году и простирается до Фетхие. Наши проекты, которые мы реализуем с современными архитектурными подходами, прочными инженерными решениями и тщательной работой, обеспечивают нашим клиентам комфортные и безопасные жилые пространства. В наших проектах вилл, массового жилья, бассейнов и особняков мы сочетаем эстетику и функциональность, тщательно планируя каждую деталь. Мы строим работы, которые добавят ценности будущим поколениям с нашим устойчивым архитектурным пониманием и экологически уважительным подходом.',
    'projects.section.delivered': 'Сданные Проекты',
    'projects.section.upcoming': 'Предстоящие Проекты',
    'projects.section.malikane': 'Проекты Особняков',
    'projects.subsection.villa': 'Вилла',
    'projects.subsection.pool': 'Проекты Бассейнов',
    'projects.subsection.housing': 'Массовое Жилье',
    'projects.kicker': 'АРХИТЕКТУРА',
    'projects.project01.title': 'Проект_01',
    'projects.project01.desc': 'Специальный проект виллы, разработанный с современным архитектурным подходом в Фетхие. Материал, свет и пропорции в фокусе.',
    'projects.project02.title': 'Проект_02',
    'projects.project02.desc': 'Современное применение виллы, ориентированное на пропорции фасада и детальную работу. Непрерывность материала и баланс света.',
    'projects.project03.title': 'Проект_03',
    'projects.project03.desc': 'Современное применение бассейна в наших проектах бассейнов Фетхие: обустройство окружающей среды, детали покрытия и линейная архитектурная гармония. Профессиональное строительство бассейнов и услуги дизайна бассейнов в Фетхие.',
    'projects.project04.title': 'Проект_04',
    'projects.project04.desc': 'Планирование, масштаб и устойчивый архитектурный подход в проектах массового жилья.',
    'projects.project05.title': 'Проект_05',
    'projects.project05.desc': 'Современная архитектура и подход, ориентированный на детали, в текущих проектах вилл.',
    'projects.project06.title': 'Проект_06',
    'projects.project06.desc': 'Планирование, масштаб и устойчивый архитектурный подход в текущих проектах массового жилья.',
    'projects.project07.title': 'Проект_07',
    'projects.project07.desc': 'Роскошные детали, специальная работа и архитектурное совершенство в премиальных проектах особняков.',
    'projects.villa01.title': 'Вилла_01',
    // Contact page
    'contact.hero.title': 'Контакты',
    'contact.hero.subtitle': 'ОФИСЫ HASANAĞAOĞLU CONSTRUCTION',
    'contact.region.turkey': 'ТУРЦИЯ',
    'contact.city.fethiye': 'Фетхие',
    'contact.detail.address': 'АДРЕС:',
    'contact.detail.phone': 'ТЕЛЕФОН:',
    'contact.detail.email': 'ЭЛЕКТРОННАЯ ПОЧТА:',
    'contact.form.label': 'СВЯЖИТЕСЬ С НАМИ',
    'contact.form.question': 'Хотели бы вы получить предложение или консультационную услугу для вашего строительного проекта?',
    'contact.form.name.label': 'ФИО',
    'contact.form.email.label': 'Электронная почта',
    'contact.form.message.label': 'Ваше сообщение',
    'contact.form.privacy': 'Отправляя эту форму, я подтверждаю, что прочитал и принял <a href="#" target="_blank">Политику Конфиденциальности</a>.',
    'contact.form.submit': 'Отправить',
    // Slider captions
    'hero.slide.turnkey': 'Фетхие Под Ключ от Фундамента до Крыши',
    'hero.slide.villa': 'Проекты Вилл Фетхие',
    'hero.slide.housing': 'Массовые Жилищные Проекты Фетхие',
    'hero.slide.pool': 'Проекты Бассейнов Фетхие'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    'header.call': 'اتصل الآن',
    'hero.title': 'تسليم المفتاح من الأساس إلى السقف في منطقة فتحية',
    'hero.description': 'مع خدمات شركتنا الراسخة، نقدم لكم فرص تسليم المفتاح مع مشاريعنا السكنية والفيلات والمستشفيات الخاصة وتنسيق الحدائق والمسابح والعديد من الهياكل الأخرى من الأساس إلى السقف.',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.getQuote': 'احصل على عرض سعر',
    'hero.youtube.title': 'عنوان الحياة العصرية',
    'hero.youtube.cta': 'تواصل معنا',
    'services.title': 'خدماتنا',
    'services.housing.title': 'مشاريع الإسكان الجماعي',
    'services.housing.desc': 'تخطيط وبناء مشاريع الإسكان الجماعي الحديثة ذات جودة الحياة العالية.',
    'services.floorExchange.title': 'البناء مقابل الشقق',
    'services.floorExchange.desc': 'البناء مقابل الشقق مع عمليات عقد شفافة وموثوقة مع مالكي الأراضي.',
    'services.seaViewLand.title': 'شراء الأراضي المطلة على البحر',
    'services.seaViewLand.desc': 'الشراء النقدي وتطوير المشاريع للأراضي المطلة على البحر أو القريبة من البحر.',
    'services.villa.title': 'تصميم وبناء الفيلات',
    'services.villa.desc': 'تصميم مخصص، مشاريع فيلات فاخرة مع مسابح وتنسيق حدائق.',
    'services.poolLandscape.title': 'المسبح وتنسيق الحدائق',
    'services.poolLandscape.desc': 'نكمل مساحات المعيشة بحلول المساحات المفتوحة الجمالية والوظيفية.',
    'services.commercial.title': 'المباني التجارية',
    'services.commercial.desc': 'حلول معمارية وهندسية في المشاريع التجارية مثل المكاتب والمتاجر ومراكز الأعمال.',
    'services.turnkey.title': 'البناء تسليم المفتاح',
    'services.turnkey.desc': 'مشاريع تسليم المفتاح حيث يتم إدارة العملية بأكملها من الأساس إلى السقف.',
    'services.largeScale.title': 'الهياكل واسعة النطاق',
    'services.largeScale.desc': 'هندسة قوية في المستشفيات الخاصة والمباني العامة والمشاريع المعقدة.',
    'projects.title': 'المشاريع المميزة',
    'home.section.title': 'مشاريع البناء والفلل الفاخرة في فتحية',
    'home.seo.title': 'مشاريعنا للفلل الحديثة والفاخرة وعمليات البناء في فتحية',
    'home.seo_text': 'مشاريعنا للفلل الحديثة والفاخرة وعمليات البناء في فتحية',
    'home.seo.p1': 'نحن في حسن أغلو للإنشاءات نطوّر مشاريع الفلل الفاخرة والإسكان الجماعي والمسابح والمشاريع التجارية المتوافقة مع طبيعة فتحية الفريدة، بالاعتماد على العمارة الحديثة وبنية هندسية قوية. وبنقل خبرتنا منذ عام 1935 إلى فتحية، نجمع بين الثقة والراحة في مشاريع تقع على الساحل وفي مناطق ذات إطلالة بحرية.',
    'home.seo.p2': 'في مشاريع فلل فتحية والفلل الفاخرة، نقدم مساحات معيشة واسعة وأنظمة منزل ذكي وكفاءة طاقة وعمارة جمالية معًا. وفي مشاريع الإسكان الجماعي والمستشفيات الخاصة والفنادق والمباني التجارية نعتمد على تخطيط عمراني منظم وبنية تحتية قوية والالتزام الكامل بأنظمة الزلازل ومعايير بناء طويلة العمر.',
    'home.seo.p3': 'ندير كل مشروع بفريقنا الخاص من دراسة التربة حتى التسليم المفتاحي؛ ونبني في فتحية مباني عالية الجودة ومستدامة وتزداد قيمتها. ومع مشاريع إنشاء المسابح في فتحية وتطوير الملكيات الخاصة والأراضي ذات الإطلالة البحرية، نقدّم حلولًا تحقق عوائد طويلة الأمد للمستثمرين وسكان المنطقة.',
    'home.projects.title': 'مشاريعنا',
    'home.projects.villa.title': 'مشاريع الفلل',
    'home.projects.villa.desc': 'عمارة حديثة ومساحات معيشة واسعة ومواد عالية الجودة وتصاميم تناسب فتحية.',
    'home.projects.pool.title': 'المسبح والمساحات الخارجية',
    'home.projects.pool.desc': 'نضيف قيمة جمالية لمشاريعنا عبر تصاميم المسابح الحديثة وحلول الأرضيات المتينة وتطبيقات خارجية تركز على الراحة.',
    'home.projects.housing.title': 'مشاريع الإسكان الجماعي',
    'home.projects.housing.desc': 'تخطيط سكني منظم وبنية تحتية قوية وواجهات حديثة ومعايير بناء طويلة العمر.',
    'home.projects.landscape.title': 'تنسيق الحدائق والبيئة',
    'home.projects.landscape.desc': 'تخطيط المساحات الخضراء وخطوط حدائق حديثة وحلول بيئية سهلة الصيانة.',
    'home.projects.hotel.title': 'مشاريع الفنادق',
    'home.projects.hotel.desc': 'واجهة مرموقة ولغة إضاءة قوية وتخطيط وظيفي يركز على الإقامة.',
    'home.projects.seaView.title': 'أراضٍ مطلة على البحر',
    'home.projects.seaView.desc': 'تحليل الأرض ودراسة الجدوى وحلول توطين تستفيد من الإطلالة بأقصى حد.',
    'home.projects.hospital.title': 'مشاريع المستشفيات الخاصة',
    'home.projects.hospital.desc': 'خدمة متخصصة في مشاريع المستشفيات الخاصة ببنية صحية حديثة وحلول هندسية قوية وتصميم يركز على المرضى.',
    'home.projects.viewProjects': 'عرض المشاريع →',
    'about.title': 'من نحن',
    'about.description.p1': 'أنشأت شركة حسن أغلو للإنشاءات تاريخها الراسخ في القطاع بأساسات قوية وضعت في ساكاريا؛ اليوم، وسعت منطقة خدماتها من خلال نقل خبرتها وخبرتها إلى فتحية.',
    'about.description.p2': 'كشركة تعمل في فتحية والمناطق المحيطة بها، وتتعرف عن كثب على ديناميكيات واحتياجات المنطقة، نهدف إلى إنتاج مشاريع تبعث على الثقة وجمالية وطويلة الأمد.',
    'about.description.p3': 'نقدم مجموعة واسعة من الخدمات من مشاريع الإسكان الجماعي إلى البناء مقابل الشقق، من مساحات المعيشة المطلة على البحر إلى المباني التجارية. الأراضي التي تتمتع بإطلالة على البحر أو على مسافة قريبة من البحر، والمناطق ذات القيمة الاستثمارية العالية، والمواقع المفتوحة للتطوير هي من بين مجالات عملنا ذات الأولوية.',
    'about.description.p4': 'يتم تقييم وشراء الأراضي المناسبة من قبلنا إما نقداً أو على أساس المشروع.',
    'about.description.p5': 'في مشاريعنا، لا نبني المباني فقط؛ نقدم حلولاً تغطي مساحة المعيشة بأكملها مثل المسابح وتنسيق الحدائق وتصميم الفيلات وترتيب المساحات المشتركة.',
    'about.description.p6': 'عند الحاجة، نتولى أيضاً العملية بأكملها من الأساس إلى السقف للهياكل واسعة النطاق مثل المستشفيات الخاصة ومراكز الأعمال.',
    'about.description.p7': 'في كل مشروع:',
    'about.list.item1': 'تسليم المفتاح من الأساس إلى السقف،',
    'about.list.item2': 'حلول هندسية معمارية وميكانيكية،',
    'about.list.item3': 'ترتيبات المسابح والحدائق،',
    'about.list.item4': 'مبدأ الثقة والشفافية',
    'about.description.p8': 'نتقدم مع.',
    'about.description.p9': 'مع نهجنا المتمحور حول الموقع الصحيح – المشروع الصحيح؛ نواصل تطوير المشاريع التي تضيف قيمة إلى قيمة فتحية وتوفر مزايا الاستثمار والمعيشة.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون الشركة الرائدة في قطاع البناء في منطقة فتحية وإضافة قيمة للأجيال القادمة من خلال هياكل عالية الجودة ومستدامة.',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'بناء هياكل موثوقة وحديثة وجمالية من خلال تقديم خدمات بناء عالية الجودة لعملائنا. السعي للتميز في كل مشروع لنكون مثالاً يحتذى به في الصناعة.',
    'contact.title': 'اتصل بنا والموقع',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.location': 'الموقع',
    'contact.officeInfo': 'معلومات مكتبنا',
    'contact.company': 'الشركة',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsappQuick': 'اتصال سريع عبر واتساب',
    'contact.formTitle': 'نموذج المعلومات والعروض',
    'contact.formName': 'الاسم الكامل',
    'contact.formNamePlaceholder': 'أدخل اسمك واسم عائلتك',
    'contact.formPhone': 'الهاتف',
    'contact.formPhonePlaceholder': '+90 ___ ___ __ __',
    'contact.formMessage': 'رسالتك',
    'contact.formMessagePlaceholder': 'يرجى تقديم معلومات موجزة عن مشروعك أو أرضك',
    'contact.formSubmit': 'إرسال',
    'contact.mapTitle': 'موقع المكتب',
    'footer.workingHours.title': 'ساعات العمل',
    'footer.workingHours.weekdays': 'الاثنين - السبت',
    'footer.workingHours.weekdaysTime': '09:00 - 18:00',
    'footer.workingHours.sunday': 'الأحد',
    'footer.workingHours.closed': 'مغلق',
    'footer.location': 'فتحية، موغلا، تركيا',
    'footer.navigation.title': 'التنقل',
    'footer.quickLinks.title': 'روابط سريعة',
    'footer.quickLinks.contact': 'اتصل بنا',
    'footer.quickLinks.projects': 'مشاريعنا',
    'footer.quickLinks.services': 'خدماتنا',
    'footer.quickLinks.quote': 'احصل على عرض سعر',
    'footer.services.title': 'الخدمات',
    'footer.services.villa': 'إنشاء الفلل',
    'footer.services.housing': 'الإسكان الجماعي',
    'footer.services.turnkey': 'تسليم المفتاح',
    'footer.services.landscape': 'تنسيق الحدائق والمسبح',
    'footer.copyright': '© 2025 Hasanağaoğlu İnşaat فتحية (منذ 1935) | جميع الحقوق محفوظة',
    'footer.website': 'www.hasanagaogluinsaat.com',
    'footer.rights': 'جميع الحقوق محفوظة',
    // About page
    'about.title.split.left': 'البناء',
    'about.title.split.right': 'الخدمات',
    'about.copy.p1': 'تنتج شركة حسن أغلو للإنشاءات حلولاً موثوقة ومخططة ودائمة في مشاريع الإسكان والبناء في فتحية والمناطق المحيطة بها. نجمع بين الفهم المعماري الحديث والهندسة القوية وخطة العمل الصحيحة والتواصل الشفاف؛ نجعل الجودة معياراً في كل مشروع.',
    'about.copy.p2': 'هدفنا هو بناء مساحات معيشة مريحة وصلبة تحافظ على قيمتها بعد التسليم. دون المساس بمعايير الهندسة، نحقق بأمان توقعات عملائنا بالتخطيط الصحيح والتواصل الشفاف.',
    'about.tag': 'القيمة الدائمة',
    'about.vision.title.short': 'رؤيتنا',
    'about.vision.text.short': 'أن نكون علامة بناء موثوقة وطويلة الأجل في منطقتنا من خلال إنتاج هياكل قابلة للعيش وجمالية ومستدامة.',
    'about.mission.title.short': 'مهمتنا',
    'about.mission.text.short': 'تحقيق توقعات عملائنا بأمان بالتخطيط الصحيح والتواصل الشفاف دون المساس بمعايير الهندسة.',
    // Services page
    'services.kicker': 'ماذا نفعل',
    'services.hero.title': 'خدمات البناء في فتحية | مشاريع تسليم المفتاح',
    'services.hero.text.p1': 'توفر شركة حسن أغلو للإنشاءات خدمات بناء تسليم المفتاح من الأساس إلى السقف في منطقة فتحية وموغلا. نبني هياكل عالية الجودة ومستدامة بتصميم معماري حديث وبنية تحتية هندسية قوية.',
    'services.hero.text.p2': 'نخدم مع فريقنا الخبير في الفيلات والإسكان الجماعي والمباني التجارية والمشاريع الخاصة. نظهر التواصل الشفاف والنهج المهني مع مبدأ عملنا المتمحور حول رضا العملاء.',
    'services.hero.btn': 'مشاريعنا',
    'services.section.kicker': 'الخدمات',
    'services.card.planning.title': 'تخطيط المشروع',
    'services.card.planning.desc': 'التخطيط والتنسيق المهني للعملية بأكملها من الأرض إلى التسليم. التصميم المعماري ومشروع الثابت وتخطيط التطبيق.',
    'services.card.housing.title': 'البناء السكني',
    'services.card.housing.desc': 'مشاريع الإسكان الجماعي والبناء السكني الخاص. مساحات معيشة حديثة وهياكل آمنة وعالية الجودة.',
    'services.card.villa.title': 'بناء الفيلات',
    'services.card.villa.desc': 'مشاريع فيلات بتصميم مخصص. مسابح وتنسيق حدائق ومساحات معيشة فاخرة. بناء فيلات تسليم المفتاح.',
    'services.card.commercial.title': 'المباني التجارية',
    'services.card.commercial.desc': 'المكاتب والمتاجر ومراكز الأعمال والمباني التجارية. مساحات عمل حديثة وحلول خبيرة في المشاريع التجارية.',
    'services.card.land.title': 'تقييم الأرض',
    'services.card.land.desc': 'تقييم الأراضي المطلة على البحر والموجودة في مواقع استراتيجية. تحليل إمكانات الاستثمار وتطوير المشاريع.',
    'services.card.turnkey.title': 'تسليم المفتاح',
    'services.card.turnkey.desc': 'مشاريع تسليم المفتاح حيث يتم إدارة العملية بأكملها من الأساس إلى السقف. جميع الخدمات من مركز واحد.',
    'services.card.detail': '— معلومات مفصلة',
    'services.contact.title': 'دعونا نبني شيئاً معاً',
    'services.contact.subtitle': 'اتصل بنا للحصول على خدمات بناء مهنية في منطقة فتحية وموغلا.',
    'services.contact.phone.title': 'الهاتف',
    'services.contact.phone.text': 'اتصل الآن، احصل على معلومات مفصلة حول مشاريعك. فريقنا الخبير جاهز لمساعدتك.',
    'services.contact.email.title': 'البريد الإلكتروني',
    'services.contact.email.text': 'أرسل بريداً إلكترونياً للحصول على معلومات مفصلة حول مشاريعك. سنعود إليك في أقرب وقت ممكن.',
    // Projects page
    'projects.hero.vertical': 'المشاريع المقدمة والمخططة لشركة حسن أغلو للإنشاءات.',
    'projects.hero.title': 'المحفظة',
    'projects.hero.details.title': 'التفاصيل :',
    'projects.hero.details.item1': 'نهج معماري حديث وتصميم يركز على التفاصيل',
    'projects.hero.details.item2': 'هندسة صلبة واستخدام مواد عالية الجودة',
    'projects.hero.details.item3': 'خدمات بناء موثوقة بدأت في ساكاريا في عام 1935 وتمتد إلى فتحية',
    'projects.hero.desc': 'كشركة حسن أغلو للإنشاءات، نقدم خدمات بناء عالية الجودة مع قصة بدأت في ساكاريا في عام 1935 وتمتد إلى فتحية. مشاريعنا، التي نحققها بأساليب معمارية حديثة وحلول هندسية صلبة وعمل دقيق، توفر لعملائنا مساحات معيشة مريحة وآمنة. في مشاريعنا للفيلات والإسكان الجماعي والمسابح والقصور، نجمع بين الجمال والوظيفية من خلال التخطيط بعناية لكل تفصيل. نبني أعمالاً ستضيف قيمة للأجيال القادمة مع فهمنا المعماري المستدام ونهجنا المحترم للبيئة.',
    'projects.section.delivered': 'المشاريع المقدمة',
    'projects.section.upcoming': 'المشاريع القادمة',
    'projects.section.malikane': 'مشاريع القصور',
    'projects.subsection.villa': 'فيلا',
    'projects.subsection.pool': 'مشاريع المسابح',
    'projects.subsection.housing': 'الإسكان الجماعي',
    'projects.kicker': 'العمارة',
    'projects.project01.title': 'المشروع_01',
    'projects.project01.desc': 'مشروع فيلا خاص مصمم بنهج معماري حديث في فتحية. يركز على المواد والضوء والنسبة.',
    'projects.project02.title': 'المشروع_02',
    'projects.project02.desc': 'تطبيق فيلا حديث يركز على نسب الواجهة وعمل التفاصيل. استمرارية المواد وتوازن الضوء.',
    'projects.project03.title': 'المشروع_03',
    'projects.project03.desc': 'تطبيق مسبح حديث في مشاريع المسابح في فتحية: ترتيب البيئة وتفاصيل الطلاء والانسجام المعماري الخطي. خدمات بناء المسابح المهنية وتصميم المسابح في فتحية.',
    'projects.project04.title': 'المشروع_04',
    'projects.project04.desc': 'التخطيط والمقياس والنهج المعماري المستدام في مشاريع الإسكان الجماعي.',
    'projects.project05.title': 'المشروع_05',
    'projects.project05.desc': 'العمارة الحديثة والنهج المركّز على التفاصيل في مشاريع الفيلات الجارية.',
    'projects.project06.title': 'المشروع_06',
    'projects.project06.desc': 'التخطيط والمقياس والنهج المعماري المستدام في مشاريع الإسكان الجماعي الجارية.',
    'projects.project07.title': 'المشروع_07',
    'projects.project07.desc': 'تفاصيل فاخرة وعمل خاص والتميز المعماري في مشاريع القصور المميزة.',
    'projects.villa01.title': 'فيلا_01',
    // Contact page
    'contact.hero.title': 'اتصل بنا',
    'contact.hero.subtitle': 'مكاتب شركة حسن أغلو للإنشاءات',
    'contact.region.turkey': 'تركيا',
    'contact.city.fethiye': 'فتحية',
    'contact.detail.address': 'العنوان:',
    'contact.detail.phone': 'الهاتف:',
    'contact.detail.email': 'البريد الإلكتروني:',
    'contact.form.label': 'اتصل بنا',
    'contact.form.question': 'هل ترغب في الحصول على عرض سعر أو خدمة استشارية لمشروع البناء الخاص بك؟',
    'contact.form.name.label': 'الاسم الكامل',
    'contact.form.email.label': 'البريد الإلكتروني',
    'contact.form.message.label': 'رسالتك',
    'contact.form.privacy': 'بإرسال هذا النموذج، أؤكد أنني قرأت ووافقت على <a href="#" target="_blank">سياسة الخصوصية</a>.',
    'contact.form.submit': 'إرسال',
    // Slider captions
    'hero.slide.turnkey': 'فتحية تسليم المفتاح من الأساس إلى السقف',
    'hero.slide.villa': 'مشاريع الفيلات فتحية',
    'hero.slide.housing': 'مشاريع الإسكان الجماعي فتحية',
    'hero.slide.pool': 'مشاريع المسابح فتحية'
  }
};

// Mevcut dili al veya varsayılan olarak Türkçe kullan
let currentLang = 'tr';
try {
  currentLang = localStorage.getItem('language') || 'tr';
} catch (e) {
  currentLang = 'tr';
}

// Dil kodlarını buton metinlerine çevir
const langNames = {
  'tr': 'TR',
  'en': 'EN',
  'ru': 'RU',
  'ar': 'AR'
};

// Sayfayı çevir
function translatePage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('language', lang);
  } catch (e) {
    // localStorage erişilemiyorsa sessizce devam et
  }
  
  // Tüm data-key özellikli elementleri bul ve çevir
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      // Input ve textarea için placeholder, diğerleri için textContent veya innerHTML
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        // HTML içeriği varsa innerHTML kullan (Gizlilik Politikası linki için)
        const translation = translations[lang][key];
        if (translation.includes('<a') || translation.includes('<span') || translation.includes('<strong')) {
          element.innerHTML = translation;
        } else if (element.children.length > 0) {
          // Çocuk elementleri (ikon/ok) koru, sadece metni değiştir
          const textNode = Array.from(element.childNodes).find(
            node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
          );
          if (textNode) {
            textNode.textContent = translation;
          } else {
            element.insertBefore(document.createTextNode(translation), element.firstChild);
          }
        } else {
          element.textContent = translation;
        }
      }
    }
  });
  
  // Dil butonunu güncelle
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = '🌐 ' + (langNames[lang] || lang.toUpperCase());
  }
  
  // HTML lang özelliğini güncelle
  document.documentElement.lang = lang;
  
  // RTL için Arapça
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }
}

// Dil seçici event listener'ları
document.addEventListener('DOMContentLoaded', function() {
  // Mevcut dili yükle
  translatePage(currentLang);
  
  const langBtn = document.getElementById('langBtn');
  const langDropdowns = document.querySelectorAll('.lang-dropdown');
  const languageSelectors = document.querySelectorAll('.language-selector');
  
  // Dil butonuna tıklama – aç/kapa
  if (langBtn) {
    langBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      languageSelectors.forEach(selector => {
        const dropdown = selector.querySelector('.lang-dropdown');
        if (dropdown) {
          const isOpen = dropdown.classList.contains('active') || dropdown.classList.contains('is-open');
          if (isOpen) {
            dropdown.classList.remove('active');
            dropdown.classList.remove('is-open');
          } else {
            dropdown.classList.add('active');
            dropdown.classList.add('is-open');
            // Açıldıktan sonra dışarı tıklanınca kapat – gecikmeyle ekle (hemen kapanmasın)
            setTimeout(function() {
              var closeOnOutside = function(ev) {
                if (!ev.target.closest('.language-selector')) {
                  langDropdowns.forEach(function(d) {
                    d.classList.remove('active');
                    d.classList.remove('is-open');
                  });
                  document.removeEventListener('click', closeOnOutside);
                  document.removeEventListener('touchstart', closeOnOutside);
                }
              };
              document.addEventListener('click', closeOnOutside);
              document.addEventListener('touchstart', closeOnOutside);
            }, 100);
          }
        }
      });
    });
  }
  
  // Dil seçeneklerine tıklama – dil değiştir ve kapat
  document.querySelectorAll('.lang-dropdown [data-lang]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lang = this.getAttribute('data-lang');
      if (lang) {
        translatePage(lang);
      }
      langDropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        dropdown.classList.remove('is-open');
      });
    });
  });
});

function openPopup() {
  document.getElementById("ctaPopup").classList.add("show");
}

function closePopup() {
  document.getElementById("ctaPopup").classList.remove("show");
}

// Popup dışına tıklandığında kapat
document.addEventListener('click', (e) => {
  const popup = document.getElementById('ctaPopup');
  if (popup && e.target === popup) {
    closePopup();
  }
});

// Form mesaj gösterimi
document.addEventListener('DOMContentLoaded', function() {
  const formMessage = document.getElementById('form-message');
  if (!formMessage) return;

  // URL parametrelerini kontrol et
  const urlParams = new URLSearchParams(window.location.search);
  const success = urlParams.get('success');
  const error = urlParams.get('error');
  const spam = urlParams.get('spam');

  if (success === '1') {
    formMessage.className = 'form-message form-message-success';
    formMessage.innerHTML = '<strong>✓ Başarılı!</strong> Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.';
    formMessage.style.display = 'block';
    
    // URL'den parametreyi temizle
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Form bölümüne kaydır
    setTimeout(() => {
      const formSection = document.querySelector('.contact-form-section') || document.getElementById('contactForm');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else if (error) {
    formMessage.className = 'form-message form-message-error';
    let errorText = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    
    switch(error) {
      case 'empty':
        errorText = 'Lütfen tüm zorunlu alanları doldurun.';
        break;
      case 'email':
        errorText = 'Geçerli bir e-posta adresi giriniz.';
        break;
      case 'short':
        errorText = 'Mesajınız çok kısa. Lütfen daha detaylı bir mesaj yazın.';
        break;
      case 'send':
        errorText = 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin veya WhatsApp üzerinden iletişime geçin.';
        break;
    }
    
    formMessage.innerHTML = '<strong>✗ Hata!</strong> ' + errorText;
    formMessage.style.display = 'block';
    
    // URL'den parametreyi temizle
    window.history.replaceState({}, document.title, window.location.pathname);
    
    // Form bölümüne kaydır
    setTimeout(() => {
      const formSection = document.querySelector('.contact-form-section') || document.getElementById('contactForm');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else if (spam === '1') {
    formMessage.className = 'form-message form-message-error';
    formMessage.innerHTML = '<strong>✗ Hata!</strong> Spam tespit edildi. Lütfen formu doğru şekilde doldurun.';
    formMessage.style.display = 'block';
    
    // URL'den parametreyi temizle
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Mesajı 5 saniye sonra otomatik kapat
  if (formMessage.style.display === 'block') {
    setTimeout(() => {
      formMessage.style.opacity = '0';
      setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.style.opacity = '1';
      }, 300);
    }, 5000);
  }
});

// İletişim Formu AJAX Gönderimi
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Form verilerini al
    const formData = new FormData(contactForm);
    
    // Validasyon
    const name = formData.get('name')?.trim() || '';
    const email = formData.get('email')?.trim() || '';
    const message = formData.get('message')?.trim() || '';
    
    if (!name || !email || !message) {
      if (formMessage) {
        formMessage.className = 'form-message form-message-error';
        formMessage.innerHTML = '<strong>✗ Hata!</strong> Lütfen tüm zorunlu alanları doldurun.';
        formMessage.style.display = 'block';
      }
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      if (formMessage) {
        formMessage.className = 'form-message form-message-error';
        formMessage.innerHTML = '<strong>✗ Hata!</strong> Geçerli bir e-posta adresi giriniz.';
        formMessage.style.display = 'block';
      }
      return;
    }
    
    if (message.length < 10) {
      if (formMessage) {
        formMessage.className = 'form-message form-message-error';
        formMessage.innerHTML = '<strong>✗ Hata!</strong> Mesajınız çok kısa. Lütfen daha detaylı bir mesaj yazın.';
        formMessage.style.display = 'block';
      }
      return;
    }
    
    // Butonu devre dışı bırak
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Gönderiliyor...';
    
    // Önceki mesajları temizle
    if (formMessage) {
      formMessage.style.display = 'none';
      formMessage.className = '';
      formMessage.innerHTML = '';
    }
    
    // AJAX ile gönder
    fetch('send-mail.php', {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      // Response tipini kontrol et
      const contentType = response.headers.get('content-type') || '';
      
      // JSON yanıt bekliyoruz
      if (contentType.includes('application/json')) {
        return response.json();
      }
      
      // Eğer HTML dönüyorsa (PHP çalışmıyor demektir)
      if (contentType.includes('text/html')) {
        return response.text().then(text => {
          // PHP kodu görünüyorsa
          if (text.includes('<?php') || text.includes('PHPMailer') || text.includes('use PHPMailer')) {
            throw new Error('PHP çalışmıyor');
          }
          // Başarılı görünüyor (redirect olmuş olabilir)
          return { success: true };
        });
      }
      
      // Diğer durumlar
      if (response.ok || response.redirected) {
        return { success: true };
      }
      
      throw new Error('Mail gönderilemedi');
    })
    .then(data => {
      // JSON yanıt geldi
      if (data.success) {
        // Başarılı - teşekkürler sayfasına yönlendir
        window.location.href = 'tesekkurler.html';
      } else {
        // Hata mesajı göster
        throw new Error(data.message || 'Bir hata oluştu');
      }
    })
    .catch(error => {
      // Hata durumunda
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      
      if (formMessage) {
        formMessage.className = 'form-message form-message-error';
        let errorText = 'Mesaj gönderilirken bir hata oluştu. ';
        
        if (error.message === 'PHP çalışmıyor') {
          errorText += 'Lütfen sunucu yöneticisi ile iletişime geçin veya WhatsApp üzerinden bize ulaşın.';
        } else {
          errorText += 'Lütfen daha sonra tekrar deneyin veya WhatsApp üzerinden iletişime geçin.';
        }
        
        formMessage.innerHTML = '<strong>✗ Hata!</strong> ' + errorText;
        formMessage.style.display = 'block';
        
        // Form bölümüne kaydır
        setTimeout(() => {
          const formSection = document.querySelector('.contact-form-section') || contactForm;
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  });
});

// Mobil Menü Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Hamburger animasyonu
      const spans = mobileMenuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Menü linklerine tıklandığında menüyü kapat
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
});

// 3D Villa Slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('villaSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dots = document.querySelectorAll('.slider-dots .dot');
  
  if (!slider) return;
  
  const slides = slider.querySelectorAll('.villa-slide');
  let currentSlide = 0;
  let autoSlideInterval;
  
  // Slider'ı başlat
  function initSlider() {
    showSlide(currentSlide);
    startAutoSlide();
  }
  
  // Belirli bir slide'ı göster
  function showSlide(index) {
    // Slide sınırlarını kontrol et
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    
    // Tüm slide'ları gizle ve aktif olanı göster
    // CSS transition otomatik olarak animasyonu yapacak
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentSlide) {
        slide.classList.add('active');
      }
    });
    
    // Dot'ları güncelle
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === currentSlide) {
        dot.classList.add('active');
      }
    });
  }
  
  // Sonraki slide'a geç
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  // Önceki slide'a geç
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  // Otomatik slide başlat
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // 5 saniyede bir değişir
  }
  
  // Otomatik slide durdur
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }
  
  // Buton event listener'ları
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }
  
  // Dot'lara tıklama
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });
  
  // Mouse slider üzerindeyken otomatik geçişi durdur
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  }
  
  // Touch/swipe desteği (mobil için)
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (slider) {
    slider.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    });
    
    slider.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoSlide();
    });
  }
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Sola kaydırma - sonraki
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      // Sağa kaydırma - önceki
      prevSlide();
    }
  }
  
  // Klavye ile kontrol (opsiyonel)
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    } else if (e.key === 'ArrowRight') {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    }
  });
  
  // Slider'ı başlat
  initSlider();
});

// Hero Slider (Eski yapı için)
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return; // Diğer sayfalarda hata vermesin

  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  if (!slides.length || !prevBtn || !nextBtn) {
    console.warn('Slider elemanları bulunamadı');
    return;
  }

  let index = 0;
  let timer;

  function showSlide(n) {
    slides[index].classList.remove('active');
    index = (n + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 4000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  prevBtn.addEventListener('click', function () {
    stopAuto();
    prevSlide();
    startAuto();
  });

  nextBtn.addEventListener('click', function () {
    stopAuto();
    nextSlide();
    startAuto();
  });

  startAuto();
});

// Hero Slider Main (Yeni mimari sunum stili)
document.addEventListener('DOMContentLoaded', function () {
  const sliderMain = document.querySelector('.hero-slider-main');
  if (!sliderMain) return;

  const slides = sliderMain.querySelectorAll('.slide');
  const prevBtn = sliderMain.querySelector('.prev');
  const nextBtn = sliderMain.querySelector('.next');
  const slideNumbers = sliderMain.querySelectorAll('.slide-number');

  if (!slides.length || !prevBtn || !nextBtn) {
    return;
  }

  let index = 0;
  let timer;

  function updateSlideNumber() {
    slideNumbers.forEach((num, i) => {
      const current = String(i + 1).padStart(2, '0');
      const total = String(slides.length).padStart(2, '0');
      num.textContent = `${current} / ${total}`;
    });
  }

  function showSlide(n) {
    slides[index].classList.remove('active');
    index = (n + slides.length) % slides.length;
    slides[index].classList.add('active');
    updateSlideNumber();
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 5000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    stopAuto();
    prevSlide();
    startAuto();
  });

  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    stopAuto();
    nextSlide();
    startAuto();
  });

  updateSlideNumber();
  startAuto();
});

// Hero Slider - Projeler Sayfası (Manuel + Otomatik)
document.addEventListener('DOMContentLoaded', function() {
  const heroSlider = document.querySelector('.hero-slider');
  if (!heroSlider) return;

  const slides = heroSlider.querySelectorAll('.hero-slide');
  const dots = heroSlider.querySelectorAll('.hero-dots .dot');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;
  const autoSlideDelay = 5000; // 5 saniye

  // Belirli bir slide'ı göster
  function showSlide(index) {
    // Slide sınırlarını kontrol et
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Tüm slide'ları gizle ve aktif olanı göster (+ video oynatma)
    slides.forEach((slide, i) => {
      const video = slide.querySelector('video.hero-video');
      slide.classList.remove('active');
      if (i === currentSlide) {
        slide.classList.add('active');
        if (video) video.play().catch(() => {});
      } else {
        if (video) video.pause();
      }
    });

    // Dot'ları güncelle
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === currentSlide) {
        dot.classList.add('active');
      }
    });
  }

  // Sonraki slide'a geç
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Önceki slide'a geç
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Otomatik slide başlat
  function startAutoSlide() {
    stopAutoSlide(); // Önceki interval'i temizle
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
  }

  // Otomatik slide durdur
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // Önceki/Sonraki butonları
  const prevBtn = heroSlider.querySelector('.hero-slider-prev');
  const nextBtn = heroSlider.querySelector('.hero-slider-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }

  // Dot'lara tıklama (Manuel kontrol)
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide(); // Manuel kontrol sonrası otomatik devam et
    });
  });

  // Mouse slider üzerindeyken otomatik geçişi durdur
  heroSlider.addEventListener('mouseenter', stopAutoSlide);
  heroSlider.addEventListener('mouseleave', startAutoSlide);

  // Touch/swipe desteği (mobil için)
  let touchStartX = 0;
  let touchEndX = 0;
  let mouseStartX = 0;
  let mouseEndX = 0;
  let isDragging = false;

  // Touch events (mobil)
  heroSlider.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  });

  heroSlider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe(touchStartX, touchEndX);
    startAutoSlide();
  });

  // Mouse drag events (masaüstü)
  heroSlider.addEventListener('mousedown', function(e) {
    isDragging = true;
    mouseStartX = e.clientX;
    stopAutoSlide();
    e.preventDefault();
  });

  heroSlider.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    mouseEndX = e.clientX;
  });

  heroSlider.addEventListener('mouseup', function(e) {
    if (isDragging) {
      handleSwipe(mouseStartX, mouseEndX);
      isDragging = false;
      startAutoSlide();
    }
  });

  heroSlider.addEventListener('mouseleave', function(e) {
    if (isDragging) {
      handleSwipe(mouseStartX, mouseEndX);
      isDragging = false;
      startAutoSlide();
    }
  });

  function handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    if (endX < startX - swipeThreshold) {
      // Sola kaydırma - sonraki
      nextSlide();
    }
    if (endX > startX + swipeThreshold) {
      // Sağa kaydırma - önceki
      prevSlide();
    }
  }

  // Klavye ile kontrol (opsiyonel)
  document.addEventListener('keydown', function(e) {
    // Sadece slider görünürken çalışsın
    if (!heroSlider || !heroSlider.offsetParent) return;
    
    if (e.key === 'ArrowLeft') {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    } else if (e.key === 'ArrowRight') {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    }
  });

  // İlk slide'ı göster ve otomatik kaydırmayı başlat
  showSlide(0);
  startAutoSlide();
});


// === SMOOTH SCROLL: Hızlı ve akıcı ===
(function() {
  let isScrolling = false;
  let scrollTimeout = null;
  
  // Scroll fonksiyonu - hızlı ve akıcı
  function smoothScrollTo(element) {
    if (!element || isScrolling) return;
    
    isScrolling = true;
    
    // Önceki timeout'u temizle
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Element pozisyonunu hesapla
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = 80; // Header yüksekliği için offset
    const targetPosition = elementPosition - offset;
    
    // Smooth scroll animasyonu
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 800); // Max 800ms
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (easeInOutCubic)
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        isScrolling = false;
        // Hash'i güncelle (URL'de görünsün)
        const id = element.getAttribute('id');
        if (id) {
          history.replaceState(null, null, '#' + id);
        }
      }
    }
    
    requestAnimationFrame(animation);
  }
  
  // Sayfa içi # linkler için smooth scroll
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    e.stopPropagation();
    smoothScrollTo(target);
  }, true);
  
  // Hash değiştiğinde scroll yap (sadece manuel hash değişiklikleri için)
  window.addEventListener('hashchange', function() {
    const target = document.querySelector(window.location.hash);
    if (target) {
      // Kısa bir delay ile scroll yap (sayfa yüklenmesi için)
      setTimeout(() => smoothScrollTo(target), 50);
    }
  });
  
  // Sayfa yüklendiğinde otomatik scroll
  function autoScrollOnLoad() {
    // Önce hash kontrolü yap
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => smoothScrollTo(target), 200);
        return;
      }
    }
    
    // Anasayfa ise hero bölümüne scroll yap
    if (document.body.classList.contains('home-page')) {
      const hero = document.querySelector('.hero-slider, .hero, .hero-section, .home-hero, .hero-slider-main');
      if (hero) {
        setTimeout(() => smoothScrollTo(hero), 300);
        return;
      }
    }
    
    // Diğer sayfalarda ilk içerik bölümüne scroll yap
    const firstContent = document.querySelector('main, .main-content, section:first-of-type, .page-content, .page-hero, .about-split, .services-hero-premium, .projects-hero, .contacts-hero');
    if (firstContent) {
      setTimeout(() => smoothScrollTo(firstContent), 300);
    }
  }
  
  // Sayfa yüklendiğinde otomatik scroll çalıştır
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(autoScrollOnLoad, 100);
    });
  } else if (document.readyState === 'interactive') {
    setTimeout(autoScrollOnLoad, 200);
  } else {
    // Sayfa zaten yüklenmiş
    setTimeout(autoScrollOnLoad, 100);
  }
  
  // Sayfa tamamen yüklendiğinde de kontrol et (resimler vs. yüklendikten sonra)
  window.addEventListener('load', function() {
    // Sadece daha önce scroll yapılmadıysa
    if (!isScrolling && window.pageYOffset === 0) {
      setTimeout(autoScrollOnLoad, 100);
    }
  });
})();

// Footer Quote Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const footerQuoteForm = document.getElementById('footerQuoteForm');
  if (footerQuoteForm) {
    footerQuoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = footerQuoteForm.querySelector('input[name="name"]').value;
      const phone = footerQuoteForm.querySelector('input[name="phone"]').value;
      const email = footerQuoteForm.querySelector('input[name="email"]').value;
      const message = footerQuoteForm.querySelector('textarea[name="message"]').value;
      
      // Gmail compose URL oluştur
      const gmailSubject = encodeURIComponent('Teklif Talebi');
      const gmailBody = encodeURIComponent(
        `Ad Soyad: ${name}\nTelefon: ${phone}\nE-posta: ${email}\n\nProje Bilgisi:\n${message}`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@hasanagaogluinsaat.com&su=${gmailSubject}&body=${gmailBody}`;
      
      // Gmail'i yeni sekmede aç
      window.open(gmailUrl, '_blank');
      
      // Formu temizle
      footerQuoteForm.reset();
      
      // Başarı mesajı
      alert('Gmail açılıyor... Teklif talebinizi gönderebilirsiniz.');
    });
  }
});

// Projects Page Tab Switcher
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab[data-tab]');
  const panels = document.querySelectorAll('.panel[id^="tab-"]');
  
  if (tabs.length === 0 || panels.length === 0) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Tüm tab'ları deaktif et
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      
      // Tüm panel'leri gizle
      panels.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('hidden', '');
      });
      
      // Aktif tab'ı işaretle
      this.classList.add('is-active');
      this.setAttribute('aria-selected', 'true');
      
      // İlgili panel'i göster
      const targetPanel = document.getElementById(targetTab);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
        targetPanel.removeAttribute('hidden');
      }
    });
  });
});

// Contact Page Office Selector
document.addEventListener('DOMContentLoaded', function() {
  const officeItems = document.querySelectorAll('.office-item[data-office]');
  const officeDetailCards = document.querySelectorAll('.office-detail-card');
  
  if (officeItems.length === 0) return;
  
  officeItems.forEach(item => {
    item.addEventListener('click', function() {
      const officeId = this.getAttribute('data-office');
      
      // Tüm office item'ları deaktif et
      officeItems.forEach(i => {
        i.classList.remove('active');
      });
      
      // Tüm detail card'ları gizle
      officeDetailCards.forEach(card => {
        card.classList.remove('active');
      });
      
      // Aktif office item'ı işaretle
      this.classList.add('active');
      
      // İlgili detail card'ı göster
      const targetCard = document.getElementById('detail-' + officeId);
      if (targetCard) {
        targetCard.classList.add('active');
      }
    });
  });
});

// ===== Teslim Villa mini zoom =====
document.addEventListener('DOMContentLoaded', function() {
  const mini = document.getElementById('teslim-villa-mini');
  if (!mini) return;

  let modal = document.querySelector('.mini-zoom');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'mini-zoom';
    modal.innerHTML = `
      <div class="mini-zoom-backdrop"></div>
      <div class="mini-zoom-panel" role="dialog" aria-modal="true">
        <button class="mini-zoom-close" aria-label="Kapat">✕</button>
        <img class="mini-zoom-img" alt="">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const imgEl = modal.querySelector('.mini-zoom-img');
  const closeBtn = modal.querySelector('.mini-zoom-close');

  const open = (src, alt) => {
    imgEl.src = src;
    imgEl.alt = alt || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Scroll'u engelle
  };
  const close = () => {
    modal.classList.remove('is-open');
    imgEl.src = '';
    document.body.style.overflow = ''; // Scroll'u geri aç
  };

  mini.addEventListener('click', (e) => {
    const a = e.target.closest('a.zoomable');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    const img = a.querySelector('img');
    open(a.getAttribute('href'), img ? img.alt : '');
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('mini-zoom-backdrop')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
});

// ===== Havuz mini zoom (only #havuz-mini) =====
document.addEventListener('DOMContentLoaded', function() {
  const mini = document.getElementById('havuz-mini');
  if (!mini) return;

  let modal = document.querySelector('.mini-zoom');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'mini-zoom';
    modal.innerHTML = `
      <div class="mini-zoom-backdrop"></div>
      <div class="mini-zoom-panel" role="dialog" aria-modal="true">
        <button class="mini-zoom-close" aria-label="Kapat">✕</button>
        <img class="mini-zoom-img" alt="">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const imgEl = modal.querySelector('.mini-zoom-img');
  const closeBtn = modal.querySelector('.mini-zoom-close');

  const open = (src, alt) => {
    imgEl.src = src;
    imgEl.alt = alt || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Scroll'u engelle
  };
  const close = () => {
    modal.classList.remove('is-open');
    imgEl.src = '';
    document.body.style.overflow = ''; // Scroll'u geri aç
  };

  mini.addEventListener('click', (e) => {
    const a = e.target.closest('a.zoomable');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    const img = a.querySelector('img');
    open(a.getAttribute('href'), img ? img.alt : '');
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('mini-zoom-backdrop')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
});

// ===== Gelecek Villa mini zoom =====
document.addEventListener('DOMContentLoaded', function() {
  const mini = document.getElementById('gelecek-villa-mini');
  if (!mini) return;

  let modal = document.querySelector('.mini-zoom');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'mini-zoom';
    modal.innerHTML = `
      <div class="mini-zoom-backdrop"></div>
      <div class="mini-zoom-panel" role="dialog" aria-modal="true">
        <button class="mini-zoom-close" aria-label="Kapat">✕</button>
        <img class="mini-zoom-img" alt="">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const imgEl = modal.querySelector('.mini-zoom-img');
  const closeBtn = modal.querySelector('.mini-zoom-close');

  const open = (src, alt) => {
    imgEl.src = src;
    imgEl.alt = alt || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Scroll'u engelle
  };
  const close = () => {
    modal.classList.remove('is-open');
    imgEl.src = '';
    document.body.style.overflow = ''; // Scroll'u geri aç
  };

  mini.addEventListener('click', (e) => {
    const a = e.target.closest('a.zoomable');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    const img = a.querySelector('img');
    open(a.getAttribute('href'), img ? img.alt : '');
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('mini-zoom-backdrop')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
});

// ===== Genel Project Thumbs Zoom (Tüm hero card thumbnails için) =====
document.addEventListener('DOMContentLoaded', function() {
  // Modal zaten varsa onu kullan, yoksa oluştur
  let modal = document.querySelector('.mini-zoom');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'mini-zoom';
    modal.innerHTML = `
      <div class="mini-zoom-backdrop"></div>
      <div class="mini-zoom-panel" role="dialog" aria-modal="true">
        <button class="mini-zoom-close" aria-label="Kapat">✕</button>
        <img class="mini-zoom-img" alt="">
      </div>
    `;
    document.body.appendChild(modal);
  }

  const imgEl = modal.querySelector('.mini-zoom-img');
  const closeBtn = modal.querySelector('.mini-zoom-close');

  const open = (src, alt) => {
    imgEl.src = src;
    imgEl.alt = alt || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Scroll'u engelle
  };
  const close = () => {
    modal.classList.remove('is-open');
    imgEl.src = '';
    document.body.style.overflow = ''; // Scroll'u geri aç
  };

  // Tüm project-thumbs, project-image ve mini grid içindeki zoomable linkler için event listener
  // Hem event delegation hem de direkt listener ekle (daha güvenilir)
  function attachZoomListeners() {
    // Project-image içindeki linkler (hero card'lardaki büyük görseller)
    document.querySelectorAll('.project-image a.zoomable').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const img = this.querySelector('img');
        open(this.getAttribute('href'), img ? img.alt : '');
      });
    });
    
    // Project-thumbs içindeki linkler (thumbnail'ler)
    document.querySelectorAll('.project-thumbs a.zoomable').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const img = this.querySelector('img');
        open(this.getAttribute('href'), img ? img.alt : '');
      });
    });
    
    // Mini grid içindeki linkler (projects-mini-grid içindeki zoomable linkler)
    // Bu linkler .project-image'in parent'ı, child'ı değil
    document.querySelectorAll('.projects-mini-grid a.zoomable').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const img = this.querySelector('img');
        open(this.getAttribute('href'), img ? img.alt : '');
      });
    });
  }
  
  // İlk yüklemede ekle
  attachZoomListeners();
  
  // Event delegation de ekle (dinamik içerik için)
  // Mini grid'lerdeki linkler için de çalışsın
  // Capture phase'de çalıştır ki mini grid handler'larından önce çalışsın
  document.addEventListener('click', function(e) {
    // Sadece a.zoomable linklerine veya içindeki img'lere tıklanmışsa
    const target = e.target;
    let zoomableLink = null;
    
    // Eğer direkt link'e tıklandıysa
    if (target.tagName === 'A' && target.classList.contains('zoomable')) {
      zoomableLink = target;
    }
    // Eğer img'e tıklandıysa, parent'ındaki a.zoomable'ı bul
    else if (target.tagName === 'IMG') {
      zoomableLink = target.closest('a.zoomable');
    }
    // Eğer başka bir element'e tıklandıysa
    else {
      zoomableLink = target.closest('a.zoomable');
    }
    
    if (zoomableLink) {
      // Project-image içindeki linkler (hero card büyük görseller)
      const isInProjectImage = zoomableLink.closest('.project-image');
      // Project-thumbs içindeki linkler (thumbnail'ler)
      const isInProjectThumbs = zoomableLink.closest('.project-thumbs');
      // Projects-mini-grid içindeki linkler (mini grid görselleri)
      const isInMiniGrid = zoomableLink.closest('.projects-mini-grid');
      // Mini grid'deki linkler .project-image içinde değil, parent'ı
      const hasProjectImageChild = zoomableLink.querySelector('.project-image');
      
      if (isInProjectImage || isInProjectThumbs || isInMiniGrid || hasProjectImageChild) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation(); // Diğer handler'ları durdur
        const img = zoomableLink.querySelector('img');
        open(zoomableLink.getAttribute('href'), img ? img.alt : '');
      }
    }
  }, true); // Capture phase kullan

  // Close butonu ve backdrop için event listener (sadece bir kez ekle)
  if (!closeBtn.hasAttribute('data-listener-added')) {
    closeBtn.setAttribute('data-listener-added', 'true');
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('mini-zoom-backdrop')) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
    });
  }
});

// Görsel büyütüldüğünde (lightbox) kapatma işlevi
document.addEventListener('click', function(e) {
  var modal = document.querySelector('.mini-zoom');
  if (modal && modal.classList.contains('is-open')) {
    if (e.target.classList.contains('mini-zoom-backdrop') || e.target.classList.contains('mini-zoom-close')) {
      modal.classList.remove('is-open');
      document.body.style.overflow = ''; // Scroll'u geri aç
    }
  }
});

// ESC tuşu ile kapatma
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var modal = document.querySelector('.mini-zoom');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }
});

// Sayfa yüklendiğinde pencereye odak ver ve kaydırmayı serbest bırak
window.onload = function() {
  try {
    window.focus();
  } catch (e) {}
  document.body.style.overflow = 'auto';
};

// DOM yüklendiğinde odağı ve tıklanabilirliği garanti altına al
document.addEventListener("DOMContentLoaded", function() {
  // Sayfa yüklence odağı ana sayfaya ver
  try {
    window.focus();
  } catch (e) {}

  // Slider butonlarının veya katmanının ekranı kilitlemesini engelle
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    slider.style.zIndex = "1";
  }

  // Sayfanın tıklanabilir olduğunu garanti et
  document.body.style.pointerEvents = "auto";
});
