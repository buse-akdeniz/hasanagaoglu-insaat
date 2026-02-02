# 🔒 cPanel SSL Kurulum Rehberi

## 📋 Sunucu Bilgileriniz

- **cPanel Sürümü:** 132.0 ✅
- **Apache Sürümü:** 2.4.66 ✅
- **İşletim Sistemi:** Linux ✅

Bu bilgiler SSL kurulumu için uygun!

## 🚀 SSL Kurulum Adımları

### Adım 1: SSL/TLS Bölümünü Bulun

cPanel ana sayfasında:

1. **"Güvenlik" (Security)** bölümüne gidin
2. **"SSL/TLS"** veya **"SSL/TLS Status"** seçeneğini bulun
3. Tıklayın

**Alternatif:** Arama kutusuna "SSL" yazın ve "SSL/TLS Status" seçeneğini bulun

### Adım 2: SSL Sertifikası Kurun

**Yöntem 1: AutoSSL (Önerilen - Otomatik)**

1. **"SSL/TLS Status"** sayfasına gidin
2. **Domain'inizi bulun:** `hasanagaogluinsaat.com`
3. **"Run AutoSSL"** veya **"Install"** butonuna tıklayın
4. **5-10 dakika bekleyin**
5. Durum **"Active"** veya **"Installed"** olacak

**Yöntem 2: Let's Encrypt (Manuel)**

1. **"SSL/TLS"** sayfasına gidin
2. **"Let's Encrypt"** sekmesine tıklayın
3. **Domain'inizi seçin:** `hasanagaogluinsaat.com`
4. **"Issue"** veya **"Install"** butonuna tıklayın
5. **5-10 dakika bekleyin**

### Adım 3: SSL Durumunu Kontrol Edin

1. **"SSL/TLS Status"** sayfasına geri dönün
2. **Domain'inizin yanında:**
   - ✅ **"Active"** veya **"Installed"** görünmeli
   - ✅ **Yeşil tik işareti** görünmeli
   - ✅ **Sertifika tarihi** görünmeli

### Adım 4: Test Edin

1. **Tarayıcıda açın:**
   ```
   https://www.hasanagaogluinsaat.com
   ```

2. **Kontrol edin:**
   - ✅ URL'de **kilit ikonu** görünüyor mu?
   - ✅ **"Güvenli"** yazısı görünüyor mu?
   - ✅ Uyarı mesajı kayboldu mu?

## 🔍 cPanel'de SSL Bölümünü Bulamıyorsanız

### Alternatif Yollar:

1. **Arama Kutusu:**
   - cPanel üst kısmındaki arama kutusuna **"SSL"** yazın
   - **"SSL/TLS Status"** seçeneğini seçin

2. **Güvenlik Bölümü:**
   - Ana sayfada **"Güvenlik" (Security)** bölümüne bakın
   - İçinde **"SSL/TLS"** olmalı

3. **Tüm Özellikler:**
   - Ana sayfada **"Tüm Özellikler" (All Features)** seçeneğine tıklayın
   - Alfabetik listede **"S"** harfine gidin
   - **"SSL/TLS Status"** seçeneğini bulun

## ⚠️ Sorun Giderme

### "SSL/TLS Status" Bulunamıyorsa:

1. **Hosting sağlayıcınızla iletişime geçin**
2. **"SSL sertifikası kurulumu"** talep edin
3. **Let's Encrypt kullanabileceklerini belirtin**

### SSL Kurulumu Başarısız Olursa:

1. **"SSL/TLS Status"** sayfasında hata mesajını okuyun
2. **Domain DNS ayarlarını kontrol edin**
3. **Hosting sağlayıcınızla iletişime geçin**

### SSL Kuruldu Ama Hala Uyarı Görüyorsanız:

1. **Tarayıcıyı kapatıp açın**
2. **Cache'i temizleyin:** Ctrl+Shift+Delete
3. **Gizli modda test edin:** Ctrl+Shift+N (Chrome)
4. **Farklı tarayıcıda test edin**

## 📸 Görsel Rehber (Türkçe cPanel)

cPanel'de şu sırayla ilerleyin:

```
cPanel Ana Sayfa
  ↓
Güvenlik (Security) Bölümü
  ↓
SSL/TLS veya SSL/TLS Status
  ↓
Domain Seç: hasanagaogluinsaat.com
  ↓
Run AutoSSL veya Install
  ↓
5-10 dakika bekle
  ↓
Durum: Active ✅
```

## ✅ Başarı Kontrolü

SSL başarıyla kurulduğunda:

- ✅ cPanel'de durum **"Active"** görünür
- ✅ Tarayıcıda **kilit ikonu** görünür
- ✅ URL **`https://`** ile başlar
- ✅ **"Güvenli"** yazısı görünür
- ✅ Uyarı mesajı kaybolur
- ✅ `.htaccess` dosyası otomatik yönlendirme yapar

## 🎯 Sonraki Adımlar

SSL kurulduktan sonra:

1. ✅ **Siteyi test edin:** `https://www.hasanagaogluinsaat.com`
2. ✅ **Google Search Console'a kayıt olun**
3. ✅ **Sitemap gönderin:** `https://www.hasanagaogluinsaat.com/sitemap.xml`
4. ✅ **Google My Business profili oluşturun**

## 💡 Önemli Notlar

1. **SSL ÜCRETSİZ:**
   - Let's Encrypt tamamen ücretsizdir
   - AutoSSL otomatik olarak Let's Encrypt kullanır

2. **Otomatik Yenileme:**
   - Let's Encrypt sertifikaları 90 günde bir yenilenir
   - cPanel AutoSSL otomatik yenileme yapar

3. **Süre:**
   - SSL kurulumu genellikle 5-10 dakika sürer
   - Bazen 30 dakikaya kadar çıkabilir

4. **`.htaccess` Dosyası:**
   - Zaten hazır ✅
   - SSL kurulduktan sonra otomatik çalışacak

## 🚀 Hızlı Başlangıç

**En hızlı yol:**

1. cPanel → Arama kutusuna **"SSL"** yaz
2. **"SSL/TLS Status"** seç
3. Domain'i seç → **"Run AutoSSL"** tıkla
4. 5-10 dakika bekle
5. `https://www.hasanagaogluinsaat.com` ile test et

Bu kadar! 🎉







