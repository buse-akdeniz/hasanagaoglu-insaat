# 🔍 AutoSSL Butonunu Bulma Rehberi

## 📍 Şu Anda Neredesiniz?

SSL/TLS Status sayfasındasınız ve şunları görüyorsunuz:
- ✅ `hasanagaogluinsaat.com` - Self-signed
- ✅ `www.hasanagaogluinsaat.com` - Self-signed

## 🎯 Aranacak Buton/Seçenek

### Yöntem 1: Sayfanın Üst Kısmında

1. **Sayfanın en üstüne bakın**
2. **"Run AutoSSL"** veya **"AutoSSL'i Çalıştır"** butonunu arayın
3. Genellikle sağ üst köşede veya domain listesinin üstünde olur

### Yöntem 2: Domain Satırının Sağında

1. **`hasanagaogluinsaat.com` satırına bakın**
2. **Sağ tarafta** (Certificate Status'un yanında):
   - **"Run AutoSSL"** butonu olabilir
   - **"Install"** butonu olabilir
   - **"Renew"** butonu olabilir
   - **"..." (üç nokta)** menüsü olabilir

### Yöntem 3: Toplu İşlem Butonu

1. **Sayfanın üst kısmında** şunları arayın:
   - **"Run AutoSSL for All Domains"**
   - **"AutoSSL'i Tümü İçin Çalıştır"**
   - **"Install SSL for All"**

### Yöntem 4: cPanel Ana Menüsünde

Eğer SSL/TLS Status sayfasında buton yoksa:

1. **cPanel ana sayfasına dönün**
2. **Arama kutusuna "AutoSSL" yazın**
3. **"AutoSSL"** seçeneğini seçin
4. Orada **"Run AutoSSL"** butonu olacak

## 🔍 Görsel İpuçları

Aradığınız buton şöyle görünebilir:

- ✅ **Mavi buton:** "Run AutoSSL" veya "AutoSSL'i Çalıştır"
- ✅ **Yeşil buton:** "Install SSL" veya "SSL Kur"
- ✅ **Turuncu buton:** "Renew" veya "Yenile"
- ✅ **Link:** "Run AutoSSL" (mavi, tıklanabilir link)

## 📋 Adım Adım

### Senaryo 1: Buton Sayfanın Üstünde

```
┌─────────────────────────────────────┐
│ [Run AutoSSL] ← BURAYA BAK          │
├─────────────────────────────────────┤
│ Domain Name    │ Certificate Status │
│ hasanagaoglu...│ Self-signed        │
└─────────────────────────────────────┘
```

### Senaryo 2: Buton Domain Satırında

```
┌─────────────────────────────────────────────┐
│ Domain Name    │ Certificate Status │ [Run] │
│ hasanagaoglu...│ Self-signed        │ ← BURAYA BAK
└─────────────────────────────────────────────┘
```

### Senaryo 3: Dropdown Menü

```
┌─────────────────────────────────────────────┐
│ Domain Name    │ Certificate Status │ [...] │
│ hasanagaoglu...│ Self-signed        │ ← TIKLA
└─────────────────────────────────────────────┘
                                              │
                                              ▼
                                    [Run AutoSSL]
                                    [View Certificate]
                                    [Delete]
```

## 🚨 Eğer Buton Bulunamazsa

### Alternatif 1: Let's Encrypt Manuel Kurulum

1. cPanel → **"SSL/TLS"** bölümüne gidin
2. **"Let's Encrypt"** sekmesine tıklayın
3. Domain'inizi seçin: `hasanagaogluinsaat.com`
4. **"Issue"** veya **"Install"** butonuna tıklayın

### Alternatif 2: Hosting Sağlayıcınızla İletişim

Eğer hiçbir buton yoksa:

1. **Hosting sağlayıcınızla iletişime geçin**
2. **Şunu söyleyin:**
   > "hasanagaogluinsaat.com domain'im için Let's Encrypt SSL sertifikası kurulumu yapılmasını rica ediyorum. Şu anda self-signed sertifika var, bunu Let's Encrypt ile değiştirmek istiyorum."

## 💡 Hızlı Kontrol

Şu anda gördüğünüz sayfada:

1. **Sayfanın en üstüne bakın** → Buton var mı?
2. **Domain satırlarının sağına bakın** → Buton var mı?
3. **Sayfanın alt kısmına bakın** → Buton var mı?
4. **Sağ üst köşeye bakın** → Buton var mı?

## ✅ Bulduğunuzda

Butonu bulduğunuzda:

1. **"Run AutoSSL"** veya **"Install SSL"** butonuna tıklayın
2. **Domain'i seçin:** `hasanagaogluinsaat.com` (veya her ikisini de seçin)
3. **"Run"** veya **"Install"** butonuna tıklayın
4. **5-10 dakika bekleyin**
5. Sayfayı yenileyin (F5)
6. Durum **"Let's Encrypt"** veya **"Active"** olmalı

## 🎯 En Muhtemel Yer

**%90 ihtimalle:**
- Sayfanın **üst kısmında** (sağ üst köşede)
- Veya **domain satırının sağında** (Certificate Status'un yanında)

**Arayın:**
- "Run AutoSSL"
- "AutoSSL'i Çalıştır"
- "Install SSL"
- "SSL Kur"

Bu butonları bulun ve tıklayın! 🚀







