# 📦 Assets Klasörünü Zip Yapıp Yükleme Rehberi

## 🎯 Seçenek 1: Sadece Değişen Dosyaları Zip'le (ÖNERİLEN - Hızlı)

### Adımlar:

1. **Sadece değişen dosyaları zip'le:**
   ```bash
   cd /Users/busenurakdeniz/hasanagaoglu-insaat/hasanagaoglu
   zip -r assets-update-only.zip assets/css/app.css assets/js/main.js
   ```

2. **cPanel File Manager ile yükle:**
   - cPanel → File Manager → `public_html/assets/` klasörüne gidin
   - `assets-update-only.zip` dosyasını yükleyin
   - Zip dosyasına sağ tık → "Extract"
   - `assets/css/` ve `assets/js/` klasörlerine çıkarılacak
   - Dosya izinlerini kontrol edin (644)

---

## 🎯 Seçenek 2: Tüm Assets Klasörünü Zip'le (Tam Yedek)

### ⚠️ DİKKAT: Bu yöntem 46MB dosya yükler!

### Adımlar:

1. **Tüm assets klasörünü zip'le:**
   ```bash
   cd /Users/busenurakdeniz/hasanagaoglu-insaat/hasanagaoglu
   zip -r assets-full.zip assets/
   ```

2. **cPanel File Manager ile yükle:**
   - cPanel → File Manager → `public_html/` klasörüne gidin
   - **ÖNCE ESKİ ASSETS KLASÖRÜNÜ YEDEKLEYİN:**
     - `assets` klasörüne sağ tık → "Rename" → `assets-backup-20250104`
   - `assets-full.zip` dosyasını yükleyin
   - Zip dosyasına sağ tık → "Extract"
   - `assets/` klasörü oluşturulacak
   - Dosya izinlerini kontrol edin (644)

---

## ✅ Yükleme Sonrası Kontrol

### 1. Dosyaların Doğru Yerde Olduğunu Kontrol Edin:

```
public_html/
  ├── assets/
  │   ├── css/
  │   │   └── app.css ✅ (201 KB)
  │   ├── js/
  │   │   └── main.js ✅ (117 KB)
  │   ├── images/ ✅
  │   └── img/ ✅
```

### 2. Siteyi Test Edin:

1. **Ana sayfayı açın:** `https://www.hasanagaogluinsaat.com`
2. **Tarayıcı önbelleğini temizleyin:** `Ctrl + F5`
3. **Dil butonunu test edin** (🌐 TR)
4. **Mobil menü butonunu test edin** (3 çizgi)
5. **Tarayıcı konsolunu açın** (F12) ve hata olup olmadığını kontrol edin

---

## 🔧 Sorun Giderme

### Zip dosyası açılmıyor:
- cPanel File Manager'da "Extract" butonunu kullanın
- Veya SSH ile: `unzip assets-full.zip`

### Dosyalar görünmüyor:
- Dosya izinlerini kontrol edin (644)
- Dosya yollarını kontrol edin
- Tarayıcı önbelleğini temizleyin

### Eski dosyalar geri geliyor:
- Eski `assets` klasörünü tamamen silin
- Yeni zip'i tekrar extract edin

---

## 📝 Hızlı Kontrol Listesi

- [ ] Eski assets klasörü yedeklendi
- [ ] Zip dosyası yüklendi
- [ ] Zip dosyası extract edildi
- [ ] `assets/css/app.css` dosyası var (201 KB)
- [ ] `assets/js/main.js` dosyası var (117 KB)
- [ ] Dosya izinleri 644
- [ ] Site çalışıyor
- [ ] Dil butonu çalışıyor
- [ ] Mobil menü çalışıyor
- [ ] Tarayıcı önbelleği temizlendi

---

## 💡 Öneri

**Sadece değişen dosyaları yüklemek daha hızlı ve güvenlidir:**
- Daha küçük dosya boyutu
- Daha hızlı yükleme
- Daha az risk

**Tüm assets klasörünü yüklemek:**
- Tüm dosyaları günceller
- Yedek olarak kullanılabilir
- Daha uzun sürer (46MB)







