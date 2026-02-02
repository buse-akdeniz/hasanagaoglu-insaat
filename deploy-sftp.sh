#!/bin/bash
# SFTP ile yükleme scripti
# Kullanım: ./deploy-sftp.sh
#
# Önce bu dosyayı düzenleyip hosting bilgilerinizi girin,
# sonra: chmod +x deploy-sftp.sh && ./deploy-sftp.sh

# Hosting bilgilerinizi buraya girin:
SFTP_HOST="your-sftp-host.com"
SFTP_USER="your-username"
SFTP_DIR="/public_html"  # veya "/www" veya "/htdocs"

# Alternatif: Environment variable kullanmak için (daha güvenli):
# SFTP_HOST="${SFTP_HOST:-your-sftp-host.com}"
# SFTP_USER="${SFTP_USER:-your-username}"
# SFTP_DIR="${SFTP_DIR:-/public_html}"

# Kontrol: Eğer placeholder değerler varsa uyar
if [[ "$SFTP_HOST" == "your-sftp-host.com" ]] || [[ "$SFTP_USER" == "your-username" ]]; then
    echo "⚠️  UYARI: Lütfen önce script dosyasını düzenleyip hosting bilgilerinizi girin!"
    echo "   Dosya: deploy-sftp.sh"
    exit 1
fi

# rsync kurulu mu kontrol et
if ! command -v rsync &> /dev/null; then
    echo "❌ rsync bulunamadı. macOS'ta genellikle zaten yüklüdür."
    exit 1
fi

echo "🚀 SFTP ile dosyalar yükleniyor..."
echo "   Host: $SFTP_HOST"
echo "   Kullanıcı: $SFTP_USER"
echo "   Dizin: $SFTP_DIR"
echo ""

# rsync ile SFTP üzerinden yükleme
# ÖNEMLİ: robots.txt ve sitemap.xml mutlaka yüklenmeli (SEO için kritik!)
rsync -avz --progress \
  --exclude 'backups/' \
  --exclude '.git/' \
  --exclude '.DS_Store' \
  --exclude '*.bak*' \
  --exclude 'deploy-ftp.sh' \
  --exclude 'deploy-sftp.sh' \
  --exclude 'DEPLOYMENT.md' \
  --include 'robots.txt' \
  --include 'sitemap.xml' \
  -e ssh ./ $SFTP_USER@$SFTP_HOST:$SFTP_DIR/

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Yükleme başarıyla tamamlandı!"
else
    echo ""
    echo "❌ Yükleme sırasında bir hata oluştu."
    echo "   SSH key kurulumu gerekebilir: ssh-copy-id $SFTP_USER@$SFTP_HOST"
    exit 1
fi
