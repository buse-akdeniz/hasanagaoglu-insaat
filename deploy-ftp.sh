#!/bin/bash
# FTP ile yükleme scripti
# Kullanım: ./deploy-ftp.sh
# 
# Önce bu dosyayı düzenleyip hosting bilgilerinizi girin,
# sonra: chmod +x deploy-ftp.sh && ./deploy-ftp.sh

# Hosting bilgilerinizi buraya girin:
FTP_HOST="your-ftp-host.com"
FTP_USER="your-username"
FTP_PASS="your-password"
FTP_DIR="/public_html"  # veya "/www" veya "/htdocs"

# Alternatif: Environment variable kullanmak için (daha güvenli):
# FTP_HOST="${FTP_HOST:-your-ftp-host.com}"
# FTP_USER="${FTP_USER:-your-username}"
# FTP_PASS="${FTP_PASS:-your-password}"
# FTP_DIR="${FTP_DIR:-/public_html}"

# Kontrol: Eğer placeholder değerler varsa uyar
if [[ "$FTP_HOST" == "your-ftp-host.com" ]] || [[ "$FTP_USER" == "your-username" ]]; then
    echo "⚠️  UYARI: Lütfen önce script dosyasını düzenleyip hosting bilgilerinizi girin!"
    echo "   Dosya: deploy-ftp.sh"
    exit 1
fi

# lftp kurulu mu kontrol et
if ! command -v lftp &> /dev/null; then
    echo "❌ lftp bulunamadı. Kurulum için: brew install lftp"
    exit 1
fi

echo "🚀 FTP ile dosyalar yükleniyor..."
echo "   Host: $FTP_HOST"
echo "   Dizin: $FTP_DIR"
echo ""

# Tüm dosyaları yükle (backups hariç)
# ÖNEMLİ: robots.txt ve sitemap.xml mutlaka yüklenmeli (SEO için kritik!)
lftp -c "
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd $FTP_DIR
mirror -R --exclude backups/ --exclude .git/ --exclude .DS_Store --exclude '*.bak*' .
bye
"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Yükleme başarıyla tamamlandı!"
else
    echo ""
    echo "❌ Yükleme sırasında bir hata oluştu."
    exit 1
fi
