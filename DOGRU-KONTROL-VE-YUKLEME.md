# ✅ Doğru Kontrol ve Yükleme Rehberi

## 🔍 Doğru Kontrol Noktaları

### JavaScript Dosyası (main.js) Kontrolü

**cPanel → File Manager → `public_html/assets/js/main.js` → Edit**

**838. satır civarında şu satırı arayın:**
```javascript
const newLangBtn = langBtn.cloneNode(true);
```

**Eğer bu satır YOKSA:** Eski dosya var, yeni zip yükleyin!

---

### CSS Dosyası (app.css) Kontrolü

**cPanel → File Manager → `public_html/assets/css/app.css` → Edit**

**10908. satır civarında şu satırı arayın:**
```css
/* Dil menüsü hover yerine tıkla ile çalışsın - sadece gtranslate için */
```

**Eğer bu satır YOKSA:** Eski dosya var, yeni zip yükleyin!

---

## 📦 Yeni Zip Dosyası Hazır

**Dosya:** `assets-fresh.zip` (62 KB)

**İçerik:**
- ✅ `assets/css/app.css` (201 KB) - Güncel
- ✅ `assets/js/main.js` (117 KB) - Güncel

---

## 🚀 Yükleme Adımları

### 1. Eski Dosyaları Yedekleyin

**cPanel → File Manager → `public_html/assets/`**

- `css` klasörüne sağ tık → Rename → `css-backup-20250104`
- `js` klasörüne sağ tık → Rename → `js-backup-20250104`

**VEYA tüm assets klasörünü yedekleyin:**
- `assets` klasörüne sağ tık → Rename → `assets-backup-20250104`

---

### 2. Yeni Zip'i Yükleyin

1. **cPanel → File Manager → `public_html/`**
2. **Upload** butonuna tıklayın
3. **`assets-fresh.zip`** dosyasını seçin ve yükleyin
4. **Zip dosyasına sağ tık → "Extract"**
5. **Extract edilen dosyaları kontrol edin:**
   ```
   public_html/
     └── assets/
         ├── css/
         │   └── app.css ✅
         └── js/
             └── main.js ✅
   ```

---

### 3. Dosya İzinlerini Ayarlayın

**Her iki dosya için:**
- `app.css` → Sağ tık → "Change Permissions" → `644`
- `main.js` → Sağ tık → "Change Permissions" → `644`

---

### 4. Dosyaların Güncel Olduğunu Doğrulayın

#### JavaScript Dosyası Kontrolü:

**cPanel → File Manager → `public_html/assets/js/main.js` → Edit**

**838. satır civarında şu satırı bulun:**
```javascript
const newLangBtn = langBtn.cloneNode(true);
```

**✅ Bu satır VARSA:** Dosya güncel!

#### CSS Dosyası Kontrolü:

**cPanel → File Manager → `public_html/assets/css/app.css` → Edit**

**10908. satır civarında şu satırı bulun:**
```css
/* Dil menüsü hover yerine tıkla ile çalışsın - sadece gtranslate için */
```

**✅ Bu satır VARSA:** Dosya güncel!

---

### 5. Tarayıcı Önbelleğini Temizleyin

**Çok önemli!** Bu adımı atlamayın!

1. **Hard Refresh:**
   - Windows: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Veya tarayıcı önbelleğini tamamen temizleyin:**
   - Chrome: `Ctrl + Shift + Delete` → "Cached images and files" → "Clear data"
   - Firefox: `Ctrl + Shift + Delete` → "Cache" → "Clear Now"

3. **Gizli modda test edin:**
   - Chrome: `Ctrl + Shift + N`
   - Firefox: `Ctrl + Shift + P`

---

## ✅ Kontrol Listesi

Yükleme sonrası şunları kontrol edin:

- [ ] `public_html/assets/css/app.css` dosyası var (201 KB)
- [ ] `public_html/assets/js/main.js` dosyası var (117 KB)
- [ ] Dosya izinleri `644`
- [ ] JavaScript dosyasında `const newLangBtn = langBtn.cloneNode(true);` satırı var (838. satır)
- [ ] CSS dosyasında `/* Dil menüsü hover yerine tıkla ile çalışsın */` satırı var (10908. satır)
- [ ] Tarayıcı önbelleği temizlendi (`Ctrl + F5`)
- [ ] Gizli modda test edildi
- [ ] Dil butonu çalışıyor
- [ ] Mobil menü butonu çalışıyor

---

## 🆘 Hala Çalışmıyorsa

### Tarayıcı Konsolunu Kontrol Edin

1. Siteyi açın: `https://www.hasanagaogluinsaat.com`
2. **F12** tuşuna basın (Developer Tools)
3. **Console** sekmesine gidin
4. **Hataları kontrol edin:**
   - `404 Not Found` → Dosya yolu yanlış
   - `403 Forbidden` → Dosya izinleri yanlış
   - `SyntaxError` → Dosya bozuk

5. **Network** sekmesine gidin
6. **Sayfayı yenileyin** (`F5`)
7. **`app.css` ve `main.js` dosyalarını kontrol edin:**
   - Status: `200 OK` olmalı
   - Size: Doğru boyut olmalı (app.css: ~201 KB, main.js: ~117 KB)
   - Response Headers → `Last-Modified` tarihini kontrol edin (bugün olmalı)

---

## 💡 İpucu

**Eğer dosyalar hala eski görünüyorsa:**

1. **Sunucu cache'ini temizleyin:**
   - cPanel → "Cache" veya "Performance" → "Clear Cache"

2. **CDN kullanıyorsanız:**
   - CDN cache'ini temizleyin

3. **HTML dosyasındaki cache-busting parametresini güncelleyin:**
   ```html
   <link rel="stylesheet" href="assets/css/app.css?v=20260104-1" />
   ```
   - `v=20260103-9` → `v=20260104-1` gibi

---

**Önemli:** Dosyaları yükledikten sonra mutlaka tarayıcı önbelleğini temizleyin!







