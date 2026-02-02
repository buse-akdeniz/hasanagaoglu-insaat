# 🔧 cPanel Yükleme Sorun Giderme Rehberi

## ❌ Sorun: Değişiklikler Görünmüyor

### 🔍 Kontrol Listesi

#### 1. Dosyaların Doğru Yerde Olduğunu Kontrol Edin

cPanel File Manager'da şu yolları kontrol edin:

```
public_html/
  └── assets/
      ├── css/
      │   └── app.css ✅ (201 KB olmalı)
      └── js/
          └── main.js ✅ (117 KB olmalı)
```

**Kontrol:**
- `public_html/assets/css/app.css` dosyası var mı?
- `public_html/assets/js/main.js` dosyası var mı?
- Dosya boyutları doğru mu? (app.css: ~201 KB, main.js: ~117 KB)

---

#### 2. Dosya İzinlerini Kontrol Edin

**cPanel File Manager'da:**
1. `app.css` dosyasına sağ tık → "Change Permissions"
2. `644` seçin (veya `rw-r--r--`)
3. `main.js` dosyasına sağ tık → "Change Permissions"
4. `644` seçin (veya `rw-r--r--`)

**Doğru izinler:**
- `app.css`: `644` (rw-r--r--)
- `main.js`: `644` (rw-r--r--)

---

#### 3. Zip Dosyasının İçeriğini Kontrol Edin

**Sorun:** Zip dosyasında eski dosyalar olabilir!

**Çözüm:**
1. cPanel File Manager'da zip dosyasına sağ tık → "Extract"
2. Extract edilen dosyaların tarih/saat bilgilerini kontrol edin
3. Dosya boyutlarını kontrol edin:
   - `app.css` → **201 KB** olmalı
   - `main.js` → **117 KB** olmalı

**Eğer dosya boyutları eski ise:**
- Yeni zip dosyası oluşturun
- Eski assets klasörünü tamamen silin
- Yeni zip'i extract edin

---

#### 4. Tarayıcı Önbelleğini Temizleyin

**Çok önemli!** Tarayıcı eski dosyaları cache'lemiş olabilir.

**Hard Refresh:**
- **Windows:** `Ctrl + F5` veya `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

**Veya tarayıcı önbelleğini tamamen temizleyin:**
- **Chrome:** `Ctrl + Shift + Delete` → "Cached images and files" → "Clear data"
- **Firefox:** `Ctrl + Shift + Delete` → "Cache" → "Clear Now"
- **Safari:** `Cmd + Option + E`

**Gizli modda test edin:**
- Chrome: `Ctrl + Shift + N`
- Firefox: `Ctrl + Shift + P`
- Safari: `Cmd + Shift + N`

---

#### 5. Dosya Yollarını Kontrol Edin

**HTML dosyalarında dosya yolları doğru mu?**

`index.html` dosyasında şu satırlar olmalı:

```html
<link rel="stylesheet" href="assets/css/app.css">
<script src="assets/js/main.js"></script>
```

**Kontrol:**
- `public_html/index.html` dosyasını açın
- CSS ve JS dosya yollarını kontrol edin
- Yollar `assets/css/app.css` ve `assets/js/main.js` olmalı

---

#### 6. Sunucu Cache'ini Temizleyin

**cPanel'de:**
1. "Cache" veya "Performance" bölümüne gidin
2. "Clear Cache" butonuna tıklayın
3. Veya "Purge All" seçeneğini kullanın

---

#### 7. Dosyaların İçeriğini Kontrol Edin

**cPanel File Manager'da:**
1. `app.css` dosyasını açın (Edit)
2. Dosyanın sonunda şu satırları arayın:
   ```css
   /* Dil menüsü hover yerine tıkla ile çalışsın */
   .lang-switcher:hover .lang-dropdown
   ```

3. `main.js` dosyasını açın (Edit)
4. Dosyanın sonunda şu satırları arayın:
   ```javascript
   // Mevcut event listener'ları temizlemek için butonu klonla
   const newLangBtn = langBtn.cloneNode(true);
   ```

**Eğer bu satırlar yoksa:** Dosyalar eski versiyon, yeni zip yükleyin!

---

## ✅ Adım Adım Çözüm

### Yöntem 1: Manuel Dosya Yükleme (En Güvenilir)

1. **Eski assets klasörünü yedekleyin:**
   - `public_html/assets` → Rename → `assets-backup`

2. **Yeni assets klasörü oluşturun:**
   - `public_html/` → "New Folder" → `assets`

3. **CSS dosyasını yükleyin:**
   - `assets/` → "New Folder" → `css`
   - `css/` klasörüne `app.css` dosyasını yükleyin

4. **JS dosyasını yükleyin:**
   - `assets/` → "New Folder" → `js`
   - `js/` klasörüne `main.js` dosyasını yükleyin

5. **Dosya izinlerini ayarlayın:**
   - `app.css` → 644
   - `main.js` → 644

6. **Tarayıcı önbelleğini temizleyin:**
   - `Ctrl + F5`

---

### Yöntem 2: Doğru Zip Yükleme

1. **Eski assets klasörünü tamamen silin:**
   - `public_html/assets` → Delete

2. **Yeni zip dosyasını yükleyin:**
   - `public_html/` klasörüne `assets-update-only.zip` yükleyin

3. **Zip'i extract edin:**
   - Zip dosyasına sağ tık → "Extract"
   - `assets/` klasörü oluşturulacak

4. **Dosya yapısını kontrol edin:**
   ```
   public_html/
     └── assets/
         ├── css/
         │   └── app.css ✅
         └── js/
             └── main.js ✅
   ```

5. **Dosya izinlerini ayarlayın:**
   - `app.css` → 644
   - `main.js` → 644

6. **Tarayıcı önbelleğini temizleyin:**
   - `Ctrl + F5`

---

## 🔍 Debug: Tarayıcı Konsolunu Kontrol Edin

1. **Siteyi açın:** `https://www.hasanagaogluinsaat.com`
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
   - Size: Doğru boyut olmalı
   - Type: `text/css` ve `application/javascript` olmalı

---

## 🆘 Hala Çalışmıyorsa

### Kontrol Listesi:

- [ ] Dosyalar `public_html/assets/css/` ve `public_html/assets/js/` klasörlerinde
- [ ] Dosya izinleri `644`
- [ ] Dosya boyutları doğru (app.css: 201 KB, main.js: 117 KB)
- [ ] HTML dosyalarında dosya yolları doğru
- [ ] Tarayıcı önbelleği temizlendi (`Ctrl + F5`)
- [ ] Sunucu cache temizlendi
- [ ] Gizli modda test edildi
- [ ] Tarayıcı konsolunda hata yok

### Son Çare:

1. **Tüm assets klasörünü silin**
2. **Yeni zip dosyasını oluşturun** (sadece güncel dosyalarla)
3. **Zip'i extract edin**
4. **Dosya izinlerini ayarlayın**
5. **Tarayıcı önbelleğini temizleyin**

---

## 📞 Yardım İçin Bilgi Toplama

Eğer hala çalışmıyorsa, şu bilgileri toplayın:

1. **Tarayıcı konsolundaki hatalar** (F12 → Console)
2. **Network sekmesindeki durum** (F12 → Network → app.css ve main.js)
3. **Dosya yolları** (cPanel File Manager'da)
4. **Dosya izinleri** (cPanel File Manager'da)
5. **Dosya boyutları** (cPanel File Manager'da)







