# 📤 Canlıya Yüklenmesi Gereken Dosyalar

## ⚠️ Sorun: Normal Web'de Değişiklikler Görünmüyor

Bu, dosyaların sunucuya yüklenmediği veya tarayıcı önbelleği sorunu olabilir.

---

## 📋 Yüklenmesi Gereken Dosyalar

### 1. CSS Dosyası
- **Dosya:** `assets/css/app.css`
- **Boyut:** ~201 KB
- **Değişiklikler:**
  - Dil butonu ve mobil menü düzeltmeleri
  - Projeler sayfası CSS çakışmaları düzeltildi
  - Z-index ve görünürlük düzeltmeleri

### 2. JavaScript Dosyası
- **Dosya:** `assets/js/main.js`
- **Boyut:** ~117 KB
- **Değişiklikler:**
  - Syntax hatası düzeltildi
  - Dil butonu event listener'ları düzeltildi
  - Mobil menü butonu düzeltmeleri

### 3. HTML Dosyası (Projeler Sayfası)
- **Dosya:** `projeler.html`
- **Boyut:** ~24 KB
- **Değişiklikler:**
  - CSS version parametresi düzeltildi (`?v=20260104`)

### 4. CSS Dosyası (Projeler Sayfası - Opsiyonel)
- **Dosya:** `assets/css/projects.css`
- **Boyut:** ~14 KB
- **Not:** Eğer projeler sayfası bozuksa bu dosyayı da yükleyin

---

## 🚀 Yükleme Adımları

### Yöntem 1: cPanel File Manager (Önerilen)

#### A) CSS Dosyasını Yükleyin

1. **cPanel → File Manager → `public_html/assets/css/`**
2. **Eski `app.css` dosyasını yedekleyin:**
   - `app.css` → Rename → `app.css.backup-20250104`
3. **Yeni `app.css` dosyasını yükleyin:**
   - Upload butonuna tıklayın
   - `app.css` dosyasını seçin ve yükleyin
4. **Dosya izinlerini ayarlayın:**
   - `app.css` → Sağ tık → "Change Permissions" → `644`

#### B) JavaScript Dosyasını Yükleyin

1. **cPanel → File Manager → `public_html/assets/js/`**
2. **Eski `main.js` dosyasını yedekleyin:**
   - `main.js` → Rename → `main.js.backup-20250104`
3. **Yeni `main.js` dosyasını yükleyin:**
   - Upload butonuna tıklayın
   - `main.js` dosyasını seçin ve yükleyin
4. **Dosya izinlerini ayarlayın:**
   - `main.js` → Sağ tık → "Change Permissions" → `644`

#### C) HTML Dosyasını Yükleyin (Projeler Sayfası)

1. **cPanel → File Manager → `public_html/`**
2. **Eski `projeler.html` dosyasını yedekleyin:**
   - `projeler.html` → Rename → `projeler.html.backup-20250104`
3. **Yeni `projeler.html` dosyasını yükleyin:**
   - Upload butonuna tıklayın
   - `projeler.html` dosyasını seçin ve yükleyin
4. **Dosya izinlerini ayarlayın:**
   - `projeler.html` → Sağ tık → "Change Permissions" → `644`

#### D) CSS Dosyasını Yükleyin (Projeler Sayfası - Opsiyonel)

1. **cPanel → File Manager → `public_html/assets/css/`**
2. **`projects.css` dosyasını kontrol edin:**
   - Dosya var mı?
   - Dosya boyutu ~14 KB mi?
3. **Eğer yoksa veya eski ise:**
   - Upload butonuna tıklayın
   - `projects.css` dosyasını seçin ve yükleyin
4. **Dosya izinlerini ayarlayın:**
   - `projects.css` → Sağ tık → "Change Permissions" → `644`

---

### Yöntem 2: Zip Dosyası ile Yükleme

1. **Hazır zip dosyalarını kullanın:**
   - `assets-fresh.zip` (CSS ve JS için)
   - `projects-css-only.zip` (Projeler CSS için)

2. **cPanel → File Manager → `public_html/assets/`**
3. **Zip dosyalarını yükleyin ve extract edin**
4. **Dosya izinlerini ayarlayın:**
   - Tüm dosyalar için `644`

---

## ✅ Yükleme Sonrası Kontrol

### 1. Dosyaların Doğru Yerde Olduğunu Kontrol Edin

```
public_html/
  ├── assets/
  │   ├── css/
  │   │   ├── app.css ✅ (201 KB)
  │   │   └── projects.css ✅ (14 KB - opsiyonel)
  │   └── js/
  │       └── main.js ✅ (117 KB)
  └── projeler.html ✅ (24 KB)
```

### 2. Dosya İzinlerini Kontrol Edin

- `app.css` → `644`
- `main.js` → `644`
- `projeler.html` → `644`
- `projects.css` → `644` (opsiyonel)

### 3. Dosyaların Güncel Olduğunu Doğrulayın

#### CSS Dosyası Kontrolü:

**cPanel → File Manager → `public_html/assets/css/app.css` → Edit**

Dosyanın sonunda şu satırları arayın:
```css
/* Dil menüsü hover yerine tıkla ile çalışsın - sadece gtranslate için */
```

**✅ Bu satır VARSA:** Dosya güncel!

#### JavaScript Dosyası Kontrolü:

**cPanel → File Manager → `public_html/assets/js/main.js` → Edit**

838. satır civarında şu satırı arayın:
```javascript
const newLangBtn = langBtn.cloneNode(true);
```

**✅ Bu satır VARSA:** Dosya güncel!

#### HTML Dosyası Kontrolü:

**cPanel → File Manager → `public_html/projeler.html` → Edit**

26. satırda şu satırı arayın:
```html
<link rel="stylesheet" href="assets/css/projects.css?v=20260104" />
```

**✅ Bu satır VARSA:** Dosya güncel!

---

## 🔧 Tarayıcı Önbelleğini Temizleyin

**Çok önemli!** Bu adımı atlamayın!

### Hard Refresh:
- Windows: `Ctrl + F5` veya `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Veya Tarayıcı Önbelleğini Tamamen Temizleyin:

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

---

## 🔍 Debug: Tarayıcı Konsolunu Kontrol Edin

1. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
2. **F12** tuşuna basın (Developer Tools)
3. **Network** sekmesine gidin
4. **Sayfayı yenileyin** (`F5`)
5. **Dosyaları kontrol edin:**
   - `app.css` → Status: `200 OK`, Size: ~201 KB
   - `main.js` → Status: `200 OK`, Size: ~117 KB
   - `projects.css` → Status: `200 OK`, Size: ~14 KB (opsiyonel)

**Eğer `404 Not Found` görüyorsanız:**
- Dosya yüklenmemiş demektir
- Dosya yolunu kontrol edin

**Eğer `403 Forbidden` görüyorsanız:**
- Dosya izinleri yanlış demektir
- İzinleri `644` olarak ayarlayın

---

## 📝 Hızlı Kontrol Listesi

- [ ] `public_html/assets/css/app.css` dosyası var (201 KB)
- [ ] `public_html/assets/js/main.js` dosyası var (117 KB)
- [ ] `public_html/projeler.html` dosyası var (24 KB)
- [ ] `public_html/assets/css/projects.css` dosyası var (14 KB - opsiyonel)
- [ ] Dosya izinleri `644`
- [ ] Dosyaların içeriği güncel (yukarıdaki satırlar var)
- [ ] Tarayıcı önbelleği temizlendi (`Ctrl + F5`)
- [ ] Gizli modda test edildi
- [ ] Tarayıcı konsolunda hata yok
- [ ] Network sekmesinde dosyalar yükleniyor (200 OK)

---

## 🆘 Hala Çalışmıyorsa

### Kontrol Edilecekler:

1. **Sunucu cache'ini temizleyin:**
   - cPanel → "Cache" veya "Performance" → "Clear Cache"

2. **CDN kullanıyorsanız:**
   - CDN cache'ini temizleyin

3. **Version parametresini güncelleyin:**
   ```html
   <link rel="stylesheet" href="assets/css/app.css?v=20260105" />
   <script src="assets/js/main.js?v=20260105"></script>
   ```

4. **Farklı tarayıcıda test edin:**
   - Chrome, Firefox, Safari

---

**Önemli:** Dosyaları yükledikten sonra mutlaka tarayıcı önbelleğini temizleyin (`Ctrl + F5`)!







