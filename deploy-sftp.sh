#!/bin/bash
# SFTP ile yükleme scripti
# Kullanım: ./deploy-sftp.sh

SFTP_HOST="your-sftp-host.com"
SFTP_USER="your-username"
SFTP_DIR="/public_html"  # veya "/www" veya "/htdocs"

echo "SFTP ile dosyalar yükleniyor..."

# rsync ile SFTP üzerinden yükleme (rsync kurulu olmalı)
rsync -avz --exclude 'backups/' --exclude '.git/' --exclude '.DS_Store' \
  -e ssh ./ $SFTP_USER@$SFTP_HOST:$SFTP_DIR/

echo "Yükleme tamamlandı!"
