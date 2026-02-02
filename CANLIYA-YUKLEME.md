# 🚀 Canlıya Yükleme Rehberi - Dil Butonu ve Mobil Menü Düzeltmeleri

## 📋 Değişiklik Yapılan Dosyalar

Bu güncellemede şu dosyalar değiştirildi:

1. **`assets/css/app.css`** - CSS düzeltmeleri (dil butonu görünürlük, z-index, mobil menü)
2. **`assets/js/main.js`** - JavaScript düzeltmeleri (dil butonu event listener'ları, syntax hatası)

---

## 🎯 Yöntem 1: cPanel File Manager (En Kolay ve Önerilen)

### Adımlar:

1. **cPanel'e giriş yapın**
   - `https://www.hasanagaogluinsaat.com/cpanel` veya hosting sağlayıcınızın cPanel adresi
   - Kullanıcı adı ve şifrenizle giriş yapın

2. **File Manager'ı açın**
   - cPanel ana sayfasında "File Manager" ikonuna tıklayın
   - `public_html` klasörüne gidin

3. **CSS Dosyasını Yükleyin**
   - `public_html/assets/css/` klasörüne gidin
   - Eski `app.css` dosyasını **yedekleyin** (sağ tık → Rename → `app.css.backup`)
   - Yeni `app.css` dosyasını yükleyin
   - **Yol:** `public_html/assets/css/app.css`

4. **JavaScript Dosyasını Yükleyin**
   - `public_html/assets/js/` klasörüne gidin
   - Eski `main.js` dosyasını **yedekleyin** (sağ tık → Rename → `main.js.backup`)
   - Yeni `main.js` dosyasını yükleyin
   - **Yol:** `public_html/assets/js/main.js`

5. **Dosya izinlerini kontrol edin**
   - Her iki dosyanın izinleri `644` olmalı
   - Sağ tık → "Change Permissions" → `644` seçin

6. **Tarayıcı önbelleğini temizleyin**
   - Siteyi ziyaret edin
   - `Ctrl + F5` (Windows) veya `Cmd + Shift + R` (Mac) ile hard refresh yapın

---

## 🎯 Yöntem 2: FTP/SFTP ile Yükleme

### FileZilla veya WinSCP Kullanarak:

1. **FTP programı açın** (FileZilla, WinSCP, Cyberduck vb.)

2. **Sunucuya bağlanın:**
   - **Host:** `ftp.hasanagaogluinsaat.com` veya IP adresi
   - **Kullanıcı adı:** FTP kullanıcı adınız
   - **Şifre:** FTP şifreniz
   - **Port:** 21 (FTP) veya 22 (SFTP)

3. **Dosyaları yükleyin:**
   - Sol tarafta (local) bilgisayarınızdaki dosyaları görün
   - Sağ tarafta (remote) `public_html/assets/css/` ve `public_html/assets/js/` klasörlerine gidin
   - `app.css` ve `main.js` dosyalarını sürükleyip bırakın
   - Üzerine yazma onayını verin

---

## ✅ Yükleme Sonrası Kontrol

### 1. Dosyaların Doğru Yerde Olduğunu Kontrol Edin:

Sunucuda şu yollar olmalı:
```
public_html/
  ├── assets/
  │   ├── css/
  │   │   └── app.css ✅
  │   └── js/
  │       └── main.js ✅
```

### 2. Siteyi Test Edin:

1. **Ana sayfayı açın:** `https://www.hasanagaogluinsaat.com`
2. **Dil butonunu test edin** (🌐 TR)
   - Tıklayın → Dropdown açılmalı
   - Bir dil seçin → Dil değişmeli
3. **Mobil menü butonunu test edin** (3 çizgi - mobil görünümde)
   - Tıklayın → Menü açılmalı
4. **Tarayıcı konsolunu açın** (F12) ve hata olup olmadığını kontrol edin
   - Syntax hatası olmamalı
   - "Dil butonu tıklandı!" mesajı görünmeli

### 3. Tarayıcı Önbelleğini Temizleyin:

- **Chrome/Edge:** `Ctrl + Shift + Delete` → "Cached images and files" seçin
- **Firefox:** `Ctrl + Shift + Delete` → "Cache" seçin
- **Safari:** `Cmd + Option + E`

Veya **Hard Refresh:**
- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`

---

## 🔧 Sorun Giderme

### Dosyalar görünmüyor:
- Dosya izinlerini kontrol edin (644 olmalı)
- Dosya yollarını kontrol edin (`assets/css/` ve `assets/js/`)
- Tarayıcı önbelleğini temizleyin

### Değişiklikler görünmüyor:
- Hard refresh yapın (`Ctrl + F5`)
- Farklı tarayıcıda test edin
- Tarayıcı konsolunu kontrol edin (F12)

### JavaScript hataları:
- Dosyaların tam yüklendiğinden emin olun
- Dosya izinlerini kontrol edin
- Sunucu hata loglarını kontrol edin

### Dil butonu çalışmıyor:
- Tarayıcı konsolunu açın (F12) ve hata mesajlarını kontrol edin
- "langBtn bulunamadı!" hatası varsa, HTML'de butonun olduğundan emin olun
- Dosyaların doğru yüklendiğinden emin olun

---

## 📝 Hızlı Kontrol Listesi

- [ ] `assets/css/app.css` dosyası yüklendi
- [ ] `assets/js/main.js` dosyası yüklendi
- [ ] Dosya izinleri 644 olarak ayarlandı
- [ ] Site açılıyor ve çalışıyor
- [ ] Dil butonu görünüyor ve çalışıyor
- [ ] Mobil menü butonu çalışıyor
- [ ] Tarayıcı konsolunda hata yok
- [ ] Tarayıcı önbelleği temizlendi

---

## 🆘 Yardım Gerekirse

1. **cPanel File Manager** kullanın (en kolay yöntem)
2. **Dosya yollarını** kontrol edin
3. **Tarayıcı konsolunu** açın ve hataları kontrol edin
4. **Sunucu hata loglarını** kontrol edin

---

**Not:** Eğer yedek almak isterseniz, eski dosyaları silmeden önce yedekleyin!

**Önemli:** Yükleme sonrası mutlaka tarayıcı önbelleğini temizleyin (`Ctrl + F5`)







