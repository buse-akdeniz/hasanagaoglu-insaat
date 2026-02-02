# ✅ Sunucu Kontrol Listesi

## 📁 Görünen Dosyalar (Doğru ✅)

HTML dosyalarınız root'ta doğru yerde:
- ✅ `index.html`
- ✅ `hakkimizda.html`
- ✅ `hizmetler.html`
- ✅ `projeler.html`
- ✅ `iletisim.html`
- ✅ `tesekkurler.html`

## ⚠️ Kontrol Edilmesi Gerekenler

File Manager'da şunları kontrol edin:

### 1. Klasörler (Çok Önemli!)

**`assets/` klasörü var mı?**
- İçinde `css/`, `images/`, `img/`, `js/` alt klasörleri olmalı
- Kontrol: `assets/css/app.css` dosyası var mı?

**`PHPMailer/` klasörü var mı?**
- İçinde `src/` klasörü olmalı
- Kontrol: `PHPMailer/src/PHPMailer.php` dosyası var mı?

**`img/` klasörü var mı?**
- İçinde `whatsapp.svg` dosyası olmalı

### 2. Önemli Dosyalar

**Root dizinde şunlar olmalı:**
- ✅ `.htaccess` (görünmeyebilir - gizli dosya)
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `send-mail.php`
- ✅ `sendmail.php`

## 🔍 Nasıl Kontrol Edeceğim?

### File Manager'da:

1. **Klasörleri görmek için:**
   - Üst menüde "Folders" veya "Klasörler" sekmesine bakın
   - Veya liste görünümünde klasör ikonlarına bakın

2. **Gizli dosyaları görmek için:**
   - `.htaccess` dosyası gizli olabilir
   - File Manager ayarlarından "Show Hidden Files" seçeneğini açın

3. **Klasör içeriğini kontrol etmek için:**
   - `assets` klasörüne tıklayın
   - İçinde `css`, `images`, `img`, `js` klasörleri görünmeli

## ✅ Doğru Yapı Şöyle Olmalı:

```
public_html/
├── index.html ✅
├── hakkimizda.html ✅
├── hizmetler.html ✅
├── projeler.html ✅
├── iletisim.html ✅
├── tesekkurler.html ✅
│
├── assets/          ← BU KLASÖR VAR MI?
│   ├── css/
│   ├── images/
│   ├── img/
│   └── js/
│
├── PHPMailer/       ← BU KLASÖR VAR MI?
│   └── src/
│
├── img/             ← BU KLASÖR VAR MI?
│
├── .htaccess        ← BU DOSYA VAR MI?
├── robots.txt        ← BU DOSYA VAR MI?
├── sitemap.xml      ← BU DOSYA VAR MI?
├── send-mail.php    ← BU DOSYA VAR MI?
└── sendmail.php      ← BU DOSYA VAR MI?
```

## 🚨 Eğer Klasörler Yoksa:

### `assets/` klasörü yoksa:

1. **File Manager'da "New Folder" butonuna tıklayın**
2. **Klasör adı:** `assets`
3. **İçine alt klasörler oluşturun:**
   - `assets/css/`
   - `assets/images/`
   - `assets/img/`
   - `assets/js/`
4. **Dosyaları doğru yerlere yükleyin**

### `PHPMailer/` klasörü yoksa:

1. **`PHPMailer` klasörü oluşturun**
2. **İçine `src` klasörü oluşturun**
3. **Dosyaları yükleyin:**
   - `PHPMailer/src/Exception.php`
   - `PHPMailer/src/PHPMailer.php`
   - `PHPMailer/src/SMTP.php`

## 🧪 Test

Kontrol sonrası tarayıcıda test edin:

1. **Ana sayfayı açın:** `https://www.hasanagaogluinsaat.com`
2. **F12 tuşuna basın (Developer Tools)**
3. **Console sekmesine bakın**
4. **Hata var mı kontrol edin**

### Olası Hatalar:

**Eğer şu hataları görürseniz:**

- `404 - assets/css/app.css not found` 
  → `assets/` klasörü eksik veya yanlış yerde

- `404 - assets/images/logo.png not found`
  → `assets/images/` klasörü eksik

- `404 - assets/js/main.js not found`
  → `assets/js/` klasörü eksik

## 💡 Hızlı Kontrol

File Manager'da şu dosyalara erişebiliyor musunuz?

1. `assets/css/app.css` → Tıklayın, açılıyor mu?
2. `assets/images/logo.png` → Tıklayın, açılıyor mu?
3. `assets/js/main.js` → Tıklayın, açılıyor mu?

**Eğer "File not found" hatası alıyorsanız:**
→ Klasör yapısı eksik, yukarıdaki adımları takip edin.

## ✅ Sonuç

HTML dosyalarınız doğru yerde ✅

**Şimdi kontrol edin:**
- `assets/` klasörü var mı?
- `PHPMailer/` klasörü var mı?
- `.htaccess`, `robots.txt`, `sitemap.xml` dosyaları var mı?

Bu dosyalar/klasörler yoksa, sayfa bozuk görünecektir!







