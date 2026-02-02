# 🔧 Projeler Sayfası Düzeltme Rehberi

## ❌ Sorun: Canlıda Projeler Sayfası Farklı Görünüyor

### 🔍 Olası Nedenler:

1. **`projects.css` dosyası sunucuya yüklenmemiş**
2. **Dosya yanlış yere yüklenmiş**
3. **Tarayıcı önbelleği eski CSS'i gösteriyor**
4. **CSS dosyası güncel değil**

---

## ✅ Çözüm Adımları

### 1. Dosyanın Doğru Yerde Olduğunu Kontrol Edin

**cPanel → File Manager → `public_html/assets/css/`**

Şu dosyalar olmalı:
```
public_html/assets/css/
  ├── app.css ✅
  └── projects.css ✅ (13.82 KB olmalı)
```

**Kontrol:**
- `projects.css` dosyası var mı?
- Dosya boyutu doğru mu? (~13.82 KB)
- Dosya izinleri `644` mi?

---

### 2. `projects.css` Dosyasını Yükleyin

**Eğer dosya yoksa veya eski ise:**

1. **cPanel → File Manager → `public_html/assets/css/`**
2. **Upload** butonuna tıklayın
3. **`projects.css`** dosyasını seçin ve yükleyin
4. **Dosya izinlerini ayarlayın:**
   - `projects.css` → Sağ tık → "Change Permissions" → `644`

---

### 3. HTML Dosyasında CSS Yolu Kontrol Edin

**cPanel → File Manager → `public_html/projeler.html` → Edit**

**26. satırda şu satır olmalı:**
```html
<link rel="stylesheet" href="assets/css/projects.css?v=20260104" />
```

**Kontrol:**
- CSS yolu doğru mu? (`assets/css/projects.css`)
- Version parametresi var mı? (`?v=20260104`)

---

### 4. Tarayıcı Önbelleğini Temizleyin

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

## 🔍 Debug: Tarayıcı Konsolunu Kontrol Edin

1. **Siteyi açın:** `https://www.hasanagaogluinsaat.com/projeler.html`
2. **F12** tuşuna basın (Developer Tools)
3. **Console** sekmesine gidin
4. **Hataları kontrol edin:**
   - `404 Not Found` → Dosya yolu yanlış
   - `403 Forbidden` → Dosya izinleri yanlış

5. **Network** sekmesine gidin
6. **Sayfayı yenileyin** (`F5`)
7. **`projects.css` dosyasını kontrol edin:**
   - Status: `200 OK` olmalı
   - Size: ~13.82 KB olmalı
   - Type: `text/css` olmalı

---

## 📦 Tüm CSS Dosyalarını Yükleme (Önerilen)

Eğer sadece `projects.css` yeterli değilse, tüm CSS dosyalarını yükleyin:

1. **cPanel → File Manager → `public_html/assets/css/`**
2. **Şu dosyaları yükleyin:**
   - `app.css` (201 KB)
   - `projects.css` (13.82 KB)

3. **Dosya izinlerini ayarlayın:**
   - Her iki dosya için `644`

4. **Tarayıcı önbelleğini temizleyin:**
   - `Ctrl + F5`

---

## ✅ Kontrol Listesi

Yükleme sonrası şunları kontrol edin:

- [ ] `public_html/assets/css/projects.css` dosyası var (13.82 KB)
- [ ] Dosya izinleri `644`
- [ ] `projeler.html` dosyasında CSS yolu doğru (`assets/css/projects.css`)
- [ ] Version parametresi güncel (`?v=20260104`)
- [ ] Tarayıcı önbelleği temizlendi (`Ctrl + F5`)
- [ ] Gizli modda test edildi
- [ ] Tarayıcı konsolunda hata yok
- [ ] Network sekmesinde `projects.css` yükleniyor (200 OK)

---

## 🆘 Hala Çalışmıyorsa

### Kontrol Edilecekler:

1. **Dosya yolları:**
   - `public_html/assets/css/projects.css` ✅
   - `public_html/projeler.html` ✅

2. **HTML dosyasındaki CSS linki:**
   ```html
   <link rel="stylesheet" href="assets/css/projects.css?v=20260104" />
   ```

3. **Sunucu cache'ini temizleyin:**
   - cPanel → "Cache" veya "Performance" → "Clear Cache"

4. **CDN kullanıyorsanız:**
   - CDN cache'ini temizleyin

---

## 💡 İpucu

**Eğer dosyalar hala eski görünüyorsa:**

1. **Version parametresini güncelleyin:**
   ```html
   <link rel="stylesheet" href="assets/css/projects.css?v=20260105" />
   ```

2. **Sunucu cache'ini temizleyin**

3. **Tarayıcı önbelleğini temizleyin**

---

**Önemli:** Dosyaları yükledikten sonra mutlaka tarayıcı önbelleğini temizleyin (`Ctrl + F5`)!







