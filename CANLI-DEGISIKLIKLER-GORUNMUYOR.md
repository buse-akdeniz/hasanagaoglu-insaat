# 🔍 Canlıda Değişiklikler Görünmüyor - Sorun Giderme

## ❌ Sorun: Konsolda Hata Yok Ama Değişiklikler Görünmüyor

Bu durum genellikle şu nedenlerden kaynaklanır:
1. **Dosyalar sunucuya yüklenmemiş**
2. **Tarayıcı önbelleği eski dosyaları gösteriyor**
3. **Sunucu cache sorunu**
4. **Version parametresi eksik veya yanlış**

---

## 🔍 Adım 1: Dosyaların Sunucuya Yüklendiğini Kontrol Edin

### cPanel File Manager'da Kontrol:

1. **cPanel → File Manager → `public_html/assets/css/`**
   - `app.css` dosyası var mı?
   - Dosya boyutu **201 KB** mi?
   - Son değiştirilme tarihi bugün mü?

2. **cPanel → File Manager → `public_html/assets/js/`**
   - `main.js` dosyası var mı?
   - Dosya boyutu **117 KB** mi?
   - Son değiştirilme tarihi bugün mü?

3. **Dosya içeriğini kontrol edin:**

   **`app.css` dosyasını açın (Edit):**
   - Dosyanın sonunda şu satırı arayın:
     ```css
     /* Dil menüsü hover yerine tıkla ile çalışsın - sadece gtranslate için */
     ```
   - **Eğer bu satır YOKSA:** Dosya eski, yeni dosyayı yükleyin!

   **`main.js` dosyasını açın (Edit):**
   - 838. satır civarında şu satırı arayın:
     ```javascript
     const newLangBtn = langBtn.cloneNode(true);
     ```
   - **Eğer bu satır YOKSA:** Dosya eski, yeni dosyayı yükleyin!

---

## 🔧 Adım 2: Version Parametresini Güncelleyin

### HTML Dosyasında Version Parametresi:

**cPanel → File Manager → `public_html/index.html` → Edit**

**20. satır civarında şu satırı bulun:**
```html
<link rel="stylesheet" href="assets/css/app.css?v=20260103-9" />
```

**Bu satırı şu şekilde güncelleyin:**
```html
<link rel="stylesheet" href="assets/css/app.css?v=20260105" />
```

**JavaScript dosyası için (sayfanın sonunda):**
```html
<script src="assets/js/main.js?v=20260105"></script>
```

**Not:** Version parametresini her yüklemede artırın (örn: `?v=20260105`, `?v=20260106`)

---

## 🚀 Adım 3: Dosyaları Yeniden Yükleyin

### Yöntem 1: Manuel Yükleme

1. **cPanel → File Manager → `public_html/assets/css/`**
2. **Eski `app.css` dosyasını silin veya yedekleyin**
3. **Yeni `app.css` dosyasını yükleyin**
4. **Dosya izinlerini ayarlayın:** `644`

5. **cPanel → File Manager → `public_html/assets/js/`**
6. **Eski `main.js` dosyasını silin veya yedekleyin**
7. **Yeni `main.js` dosyasını yükleyin**
8. **Dosya izinlerini ayarlayın:** `644`

### Yöntem 2: Zip ile Yükleme

1. **`all-updates.zip` dosyasını kullanın**
2. **cPanel → File Manager → `public_html/`**
3. **Zip dosyasını yükleyin ve extract edin**
4. **Dosya izinlerini ayarlayın:** Tüm dosyalar için `644`

---

## 🧹 Adım 4: Önbellekleri Temizleyin

### A) Tarayıcı Önbelleğini Temizleyin

**Chrome/Edge:**
1. `Ctrl + Shift + Delete` (Windows) veya `Cmd + Shift + Delete` (Mac)
2. "Cached images and files" seçeneğini işaretleyin
3. "Time range" → "All time" seçin
4. "Clear data" butonuna tıklayın

**Firefox:**
1. `Ctrl + Shift + Delete`
2. "Cache" seçeneğini işaretleyin
3. "Time range" → "Everything" seçin
4. "Clear Now" butonuna tıklayın

### B) Sunucu Cache'ini Temizleyin

1. **cPanel → "Cache" veya "Performance"**
2. **"Clear Cache" veya "Purge All" butonuna tıklayın**

### C) CDN Cache'ini Temizleyin (Eğer kullanıyorsanız)

- Cloudflare, MaxCDN vb. kullanıyorsanız cache'i temizleyin

---

## 🔍 Adım 5: Network Sekmesinde Kontrol Edin

1. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
2. **F12** tuşuna basın (Developer Tools)
3. **Network** sekmesine gidin
4. **"Disable cache" kutusunu işaretleyin** (Chrome'da)
5. **Sayfayı yenileyin** (`F5`)
6. **Dosyaları kontrol edin:**

   **`app.css` dosyasına tıklayın:**
   - **Headers** sekmesinde:
     - `Last-Modified` tarihi bugün mü?
     - `Content-Length` ~201 KB mi?
   - **Response** sekmesinde:
     - Dosyanın sonunda `/* Dil menüsü hover yerine tıkla ile çalışsın */` satırı var mı?

   **`main.js` dosyasına tıklayın:**
   - **Headers** sekmesinde:
     - `Last-Modified` tarihi bugün mü?
     - `Content-Length` ~117 KB mi?
   - **Response** sekmesinde:
     - 838. satırda `const newLangBtn = langBtn.cloneNode(true);` satırı var mı?

---

## ✅ Adım 6: Test Edin

### Test 1: Gizli Modda Test

1. **Gizli modda açın:** `Ctrl + Shift + N` (Chrome)
2. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
3. **Dil butonunu test edin**
4. **Mobil menü butonunu test edin**

### Test 2: Farklı Tarayıcıda Test

1. **Farklı bir tarayıcıda açın** (Chrome, Firefox, Safari)
2. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
3. **Değişiklikleri kontrol edin**

### Test 3: Farklı Cihazda Test

1. **Mobil cihazda açın**
2. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
3. **Değişiklikleri kontrol edin**

---

## 🆘 Hala Çalışmıyorsa

### Son Çare: Version Parametresini Zorla Güncelleyin

**`index.html` dosyasında:**

```html
<!-- Eski -->
<link rel="stylesheet" href="assets/css/app.css?v=20260103-9" />
<script src="assets/js/main.js"></script>

<!-- Yeni -->
<link rel="stylesheet" href="assets/css/app.css?v=20260105-1" />
<script src="assets/js/main.js?v=20260105-1"></script>
```

**Version parametresini her seferinde artırın:**
- `?v=20260105-1`
- `?v=20260105-2`
- `?v=20260105-3`
- vb.

---

## 📝 Kontrol Listesi

- [ ] `public_html/assets/css/app.css` dosyası var (201 KB)
- [ ] `public_html/assets/js/main.js` dosyası var (117 KB)
- [ ] Dosya içerikleri güncel (yukarıdaki satırlar var)
- [ ] Dosya izinleri `644`
- [ ] `index.html` dosyasında version parametresi güncel
- [ ] Tarayıcı önbelleği temizlendi
- [ ] Sunucu cache temizlendi
- [ ] Network sekmesinde dosyalar bugün yükleniyor
- [ ] Gizli modda test edildi
- [ ] Farklı tarayıcıda test edildi

---

## 💡 İpucu

**Eğer dosyalar hala eski görünüyorsa:**

1. **Dosyaları silin ve yeniden yükleyin** (yedek alarak)
2. **Version parametresini artırın**
3. **Sunucu cache'ini temizleyin**
4. **Tarayıcı önbelleğini temizleyin**
5. **Gizli modda test edin**

---

**Önemli:** Version parametresini her yüklemede mutlaka artırın!







