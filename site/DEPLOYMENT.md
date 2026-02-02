# Siteyi Canlıya Yükleme Rehberi

Bu rehber, Hasanağaoğlu İnşaat web sitesini canlı sunucuya yükleme adımlarını içerir.

## Ön Hazırlık

1. **Hosting Bilgilerinizi Hazırlayın:**
   - FTP/SFTP sunucu adresi (örn: ftp.hasanagaogluinsaat.com)
   - Kullanıcı adı
   - Şifre
   - Yükleme dizini (genellikle `/public_html`, `/www` veya `/htdocs`)

2. **Gerekli Araçlar:**
   - FTP için: `lftp` (macOS'ta: `brew install lftp`)
   - SFTP için: `rsync` (genellikle macOS'ta zaten yüklü)

## Yöntem 1: FTP ile Otomatik Yükleme (Önerilen)

### Adım 1: Script'i Yapılandırın

`deploy-ftp.sh` dosyasını düzenleyin ve hosting bilgilerinizi girin:

```bash
FTP_HOST="ftp.hasanagaogluinsaat.com"  # Hosting sağlayıcınızın FTP adresi
FTP_USER="kullanici_adi"               # FTP kullanıcı adınız
FTP_PASS="sifreniz"                     # FTP şifreniz
FTP_DIR="/public_html"                  # Yükleme dizini (hosting sağlayıcınıza göre değişir)
```

### Adım 2: Script'i Çalıştırılabilir Yapın

```bash
chmod +x deploy-ftp.sh
```

### Adım 3: Yükleme Yapın

```bash
./deploy-ftp.sh
```

**Not:** İlk kez kullanıyorsanız `lftp` kurmanız gerekebilir:
```bash
brew install lftp
```

## Yöntem 2: SFTP ile Otomatik Yükleme

### Adım 1: Script'i Yapılandırın

`deploy-sftp.sh` dosyasını düzenleyin:

```bash
SFTP_HOST="sftp.hasanagaogluinsaat.com"  # SFTP sunucu adresi
SFTP_USER="kullanici_adi"                 # SFTP kullanıcı adı
SFTP_DIR="/public_html"                   # Yükleme dizini
```

### Adım 2: SSH Key Kurulumu (Önerilen)

Şifre yerine SSH key kullanmak daha güvenlidir:

```bash
# SSH key oluşturun (eğer yoksa)
ssh-keygen -t rsa -b 4096

# Public key'i sunucuya kopyalayın
ssh-copy-id kullanici_adi@sftp.hasanagaogluinsaat.com
```

### Adım 3: Script'i Çalıştırın

```bash
chmod +x deploy-sftp.sh
./deploy-sftp.sh
```

## Yöntem 3: cPanel File Manager (Manuel)

1. cPanel'e giriş yapın
2. **File Manager**'a gidin
3. `public_html` klasörüne girin
4. Tüm dosyaları seçin ve yükleyin (backups klasörü hariç)

**Yüklenecek Dosyalar:**
- Tüm HTML dosyaları (index.html, hakkimizda.html, vb.)
- `assets/` klasörü (CSS, JS, images)
- `PHPMailer/` klasörü
- `send-mail.php` ve `sendmail.php`
- `img/` klasörü
- **`robots.txt`** ⚠️ SEO için kritik!
- **`sitemap.xml`** ⚠️ SEO için kritik!

**Yüklenmeyecek Dosyalar:**
- `backups/` klasörü
- `.git/` klasörü (eğer varsa)
- `.DS_Store` dosyaları
- `.bak` dosyaları

## Yöntem 4: FTP İstemcisi ile Manuel Yükleme

FileZilla, Cyberduck veya Transmit gibi bir FTP istemcisi kullanabilirsiniz:

1. FTP istemcinizi açın
2. Hosting bilgilerinizi girin
3. `public_html` klasörüne bağlanın
4. Tüm dosyaları sürükle-bırak ile yükleyin (backups hariç)

## Önemli Notlar

### PHP Dosyaları İçin

Site PHP kullanıyor (`send-mail.php`), bu yüzden:
- Hosting'iniz PHP desteği olmalı (PHP 7.4 veya üzeri önerilir)
- `send-mail.php` dosyasındaki SMTP ayarları doğru çalışıyor olmalı

### Dosya İzinleri

Yükleme sonrası bazı dosyaların izinlerini kontrol edin:

```bash
# PHP dosyaları için
chmod 644 *.php
chmod 755 PHPMailer/
```

### Test Etme

Yükleme sonrası şunları kontrol edin:
- ✅ Ana sayfa açılıyor mu?
- ✅ Tüm sayfalar çalışıyor mu?
- ✅ Resimler görünüyor mu?
- ✅ CSS/JS dosyaları yükleniyor mu?
- ✅ İletişim formu çalışıyor mu?

## Sorun Giderme

### "lftp: command not found" Hatası
```bash
brew install lftp
```

### "Permission denied" Hatası
```bash
chmod +x deploy-ftp.sh deploy-sftp.sh
```

### Bağlantı Hatası
- FTP/SFTP bilgilerinizi kontrol edin
- Firewall ayarlarını kontrol edin
- Hosting sağlayıcınızla iletişime geçin

## Güvenlik

⚠️ **ÖNEMLİ:** Script dosyalarınızda şifreler açık metin olarak saklanıyor. Daha güvenli bir yöntem için:

1. Şifreleri environment variable olarak kullanın
2. Veya `.env` dosyası kullanın (script'i güncelleyerek)
3. Script dosyalarını Git'e eklemeyin (`.gitignore`'a ekleyin)

## Hızlı Başlangıç

En hızlı yöntem için:

1. `deploy-ftp.sh` dosyasını düzenleyin (hosting bilgilerinizi girin)
2. `chmod +x deploy-ftp.sh`
3. `./deploy-ftp.sh`

Bu kadar! 🚀

