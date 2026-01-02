#!/bin/bash
# FTP ile yükleme scripti
# Kullanım: ./deploy-ftp.sh

FTP_HOST="your-ftp-host.com"
FTP_USER="your-username"
FTP_PASS="your-password"
FTP_DIR="/public_html"  # veya "/www" veya "/htdocs"

echo "FTP ile dosyalar yükleniyor..."

# Tüm dosyaları yükle (backups hariç)
lftp -c "
open -u $FTP_USER,$FTP_PASS $FTP_HOST
cd $FTP_DIR
mirror -R --exclude backups/ --exclude .git/ --exclude .DS_Store .
bye
"

echo "Yükleme tamamlandı!"
