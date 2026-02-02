# ⚠️ Dosya Yükleme Sorunu - Düzeltme Rehberi

## 🔴 Sorun

Dosyalar yanlış yere yüklenmiş. Tüm dosyalar root dizine yüklenmiş ama **klasör yapısı eksik**.

HTML dosyaları şu yolları kullanıyor:
- `assets/css/app.css`
- `assets/images/logo.png`
- `assets/js/main.js`

Ama sunucuda bu klasörler yok!

## ✅ Çözüm: Doğru Klasör Yapısı

Sunucunuzda (`public_html` veya root dizinde) şu klasör yapısı olmalı:

```
public_html/
├── index.html
├── hakkimizda.html
├── hizmetler.html
├── projeler.html
├── iletisim.html
├── tesekkurler.html
├── proje-detay.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── send-mail.php
├── sendmail.php
│
├── assets/                    ← BU KLASÖR YOK!
│   ├── css/
│   │   ├── app.css
│   │   └── projects.css
│   ├── images/
│   │   ├── logo.png
│   │   ├── about.jpg
│   │   └── ... (tüm resimler)
│   ├── img/
│   │   ├── villa.jpg
│   │   └── ... (diğer resimler)
│   └── js/
│       └── main.js
│
├── PHPMailer/
│   └── src/
│       ├── Exception.php
│       ├── PHPMailer.php
│       └── SMTP.php
│
└── img/
    └── whatsapp.svg
```

## 🚀 Hızlı Çözüm (3 Yöntem)

### Yöntem 1: assets.zip'i Aç ve Yükle (Önerilen)

1. **Sunucuda `assets.zip` dosyasını bulun**
2. **Sağ tık → Extract/Unzip** yapın
3. **`assets` klasörü oluşacak**
4. **Kontrol edin:** `assets/css/app.css` dosyası var mı?

### Yöntem 2: Klasörleri Manuel Oluştur

Sunucuda (File Manager veya FTP ile):

1. **`assets` klasörü oluşturun**
2. **İçine `css`, `images`, `img`, `js` klasörlerini oluşturun**
3. **Dosyaları doğru yerlere taşıyın:**

```
assets/css/ → app.css, projects.css
assets/images/ → logo.png, about.jpg, ve tüm resimler
assets/img/ → villa.jpg, havuz.jpg, vb.
assets/js/ → main.js
```

### Yöntem 3: Deployment Script Kullan (En Kolay)

Yerel bilgisayarınızda:

```bash
# Script'i düzenleyin (hosting bilgilerinizi girin)
nano deploy-ftp.sh

# Yükleyin (otomatik olarak doğru yerlere yükler)
chmod +x deploy-ftp.sh
./deploy-ftp.sh
```

## 📋 Adım Adım Manuel Düzeltme

### Adım 1: Klasörleri Oluştur

File Manager'da:
1. `assets` klasörü oluştur
2. `assets/css` klasörü oluştur
3. `assets/images` klasörü oluştur
4. `assets/img` klasörü oluştur
5. `assets/js` klasörü oluştur

### Adım 2: Dosyaları Taşı

**CSS Dosyaları:**
- `app.css` → `assets/css/app.css`
- `projects.css` → `assets/css/projects.css`

**JavaScript:**
- `main.js` → `assets/js/main.js`

**Resimler (images klasörüne):**
- `logo.png`
- `about.jpg`
- `footer-wireframe-city.jpg`
- `gelecek-toplu-konut-2.jpg`
- `gelecek-toplu-konut.jpg`
- `gelecek-villa-1.JPG`
- `gelecek-villa-2.JPG`
- `gelecek-villa-3.JPG`
- `gelecek-villa-4.JPG`
- `malikane-1.JPG`
- `malikane-2.JPG`
- `malikane-3.JPG`
- `ozel-hastane.jpg`
- `proje-villa-1.jpg`
- `proje-villa-2.jpg`
- `proje-villa-3.jpg`
- `proje-villa-4.jpg`
- `teslim-havuz-1.jpg`
- `teslim-havuz-2.jpg`
- `teslim-havuz-3.jpg`
- `teslim-havuz-4.jpg`
- `teslim-havuz-5.jpg`
- `teslim-toplu-konut-1.jpg`
- `teslim-toplu-konut-2.jpg`
- `teslim-toplu-konut-3.jpg`
- `teslim-toplu-konut-4.jpg`
- `toplu-konut-1.jpg`
- `toplu-konut-2.jpg`
- `villa-completed-1.jpg`
- `villa-completed-2.jpg`
- `villa-completed-3.jpg`
- `villa-completed-4.jpg`

**Resimler (img klasörüne):**
- `arkaplan.jpg`
- `deniz-manzarali-arsa.jpg`
- `havuz.jpg`
- `hizmetler-hero.jpg`
- `otel.jpg`
- `peyzaj.jpg`
- `toplu-konut.jpg`
- `villa.jpg`

**PHPMailer:**
- `Exception.php` → `PHPMailer/src/Exception.php`
- `PHPMailer.php` → `PHPMailer/src/PHPMailer.php`
- `SMTP.php` → `PHPMailer/src/SMTP.php`

### Adım 3: Gereksiz Dosyaları Sil

Root dizinde şunları silebilirsiniz:
- `assets.zip` (açıldıktan sonra)
- `test123.html`
- `style.css` (11 bayt - boş dosya)

## ✅ Kontrol Listesi

Düzeltme sonrası kontrol edin:

- [ ] `assets/css/app.css` dosyası var mı?
- [ ] `assets/images/logo.png` dosyası var mı?
- [ ] `assets/js/main.js` dosyası var mı?
- [ ] `PHPMailer/src/PHPMailer.php` dosyası var mı?
- [ ] `.htaccess` dosyası root'ta mı?
- [ ] `robots.txt` dosyası root'ta mı?
- [ ] `sitemap.xml` dosyası root'ta mı?

## 🔍 Test

Düzeltme sonrası tarayıcıda test edin:

1. **Ana sayfa:** `https://www.hasanagaogluinsaat.com`
2. **Developer Tools açın (F12)**
3. **Console sekmesine bakın**
4. **Hata var mı kontrol edin**

Eğer hala hata varsa, Console'daki hata mesajını kontrol edin:
- `404 Not Found` → Dosya yolu yanlış
- `Failed to load resource` → Dosya eksik

## 🚨 Önemli Notlar

1. **Dosya yolları büyük/küçük harf duyarlı:**
   - `assets/css/app.css` ✅
   - `Assets/CSS/app.css` ❌ (Linux sunucularda çalışmaz)

2. **Klasör izinleri:**
   - Klasörler: `755`
   - Dosyalar: `644`

3. **PHPMailer klasörü:**
   - `PHPMailer/src/` yapısı doğru olmalı
   - Büyük P ile başlamalı

## 💡 Hızlı Çözüm Özeti

**En hızlı yol:**
1. `assets.zip` dosyasını sunucuda aç
2. `PHPMailer` klasörünü oluştur ve dosyaları taşı
3. Root'taki gereksiz dosyaları sil
4. Sayfayı yenile

Bu kadar! 🎉







