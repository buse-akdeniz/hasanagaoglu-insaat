<?php
// Tüm çıktıları engelle - en üstte başlat
while (ob_get_level()) {
  ob_end_clean();
}
ob_start();
error_reporting(0);
ini_set('display_errors', 0);
ini_set('log_errors', 0);

// AJAX isteği kontrolü
$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// PHPMailer dosyalarını yükle
$phpmailer_path = __DIR__ . '/PHPMailer/src/Exception.php';
if (!file_exists($phpmailer_path)) {
  while (ob_get_level()) ob_end_clean();
  if (!headers_sent()) {
    header("Location: iletisim.html?error=send", true, 302);
  }
  exit;
}

require $phpmailer_path;
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

function clean($v){ 
  return trim(htmlspecialchars($v ?? "", ENT_QUOTES, 'UTF-8')); 
}

// POST verilerini al
$name    = clean($_POST['name'] ?? '');
$email   = clean($_POST['email'] ?? '');
$phone   = clean($_POST['phone'] ?? '');
$message = clean($_POST['message'] ?? '');

// Validasyon
if ($name === '' || $email === '' || $message === '') {
  while (ob_get_level()) ob_end_clean();
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'empty', 'message' => 'Lütfen tüm zorunlu alanları doldurun']);
    exit;
  }
  if (!headers_sent()) {
    header("Location: iletisim.html?error=empty", true, 302);
  }
  exit;
}

// E-posta formatı kontrolü
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  while (ob_get_level()) ob_end_clean();
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'email', 'message' => 'Geçerli bir e-posta adresi giriniz']);
    exit;
  }
  if (!headers_sent()) {
    header("Location: iletisim.html?error=email", true, 302);
  }
  exit;
}

// Mesaj uzunluğu kontrolü
if (strlen($message) < 10) {
  while (ob_get_level()) ob_end_clean();
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'short', 'message' => 'Mesajınız çok kısa. Lütfen daha detaylı bir mesaj yazın']);
    exit;
  }
  if (!headers_sent()) {
    header("Location: iletisim.html?error=short", true, 302);
  }
  exit;
}

// PHPMailer başlat - exception'ları yakalamak için true
$mail = new PHPMailer(true);

try {
  // SMTP ayarları
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'hasanagaogulariinsaat@gmail.com';
  $mail->Password   = 'Hasanagaogulariinsaat54.';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;
  $mail->SMTPDebug  = 0; // Debug kapalı
  $mail->Debugoutput = function($str, $level) {
    // Hiçbir şey yapma - debug çıktısını tamamen engelle
  };
  
  // Timeout ayarları
  $mail->Timeout = 30;
  $mail->SMTPKeepAlive = false;
  
  // Mail ayarları
  $mail->setFrom('hasanagaogulariinsaat@gmail.com', 'Web Sitesi');
  $mail->addAddress('info@hasanagaogluinsaat.com');
  $mail->addReplyTo($email, $name);
  
  $mail->isHTML(true);
  $mail->Subject = 'Web Sitesinden Yeni Mesaj - ' . $name;
  $mail->Body    = "<html><body style='font-family: Arial, sans-serif;'>"
    . "<h2 style='color: #333;'>Web Sitesinden Yeni Mesaj</h2>"
    . "<p><strong>Ad Soyad:</strong> {$name}</p>"
    . "<p><strong>E-posta:</strong> {$email}</p>"
    . "<p><strong>Telefon:</strong> {$phone}</p>"
    . "<hr style='margin: 20px 0;'>"
    . "<p><strong>Mesaj:</strong></p>"
    . "<p style='white-space: pre-wrap;'>" . nl2br(htmlspecialchars($message)) . "</p>"
    . "</body></html>";
    
  $mail->AltBody = "Web Sitesinden Yeni Mesaj\n\n"
    . "Ad Soyad: $name\n"
    . "E-posta: $email\n"
    . "Telefon: $phone\n\n"
    . "Mesaj:\n$message";
  
  // Mail gönder
  $result = $mail->send();
  
  // Başarılı - tüm çıktıları temizle
  while (ob_get_level()) {
    ob_end_clean();
  }
  
  // AJAX isteği ise JSON döndür
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Mail başarıyla gönderildi']);
    exit;
  }
  
  // Normal form gönderimi ise yönlendir
  if (!headers_sent()) {
    header("Location: tesekkurler.html", true, 302);
  }
  exit;
  
} catch (Exception $e) {
  // Hata durumunda - tüm çıktıları temizle
  while (ob_get_level()) {
    ob_end_clean();
  }
  // AJAX isteği ise JSON döndür
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'send', 'message' => 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.']);
    exit;
  }
  // Normal form gönderimi ise yönlendir
  if (!headers_sent()) {
    header("Location: iletisim.html?error=send", true, 302);
  }
  exit;
} catch (\Throwable $e) {
  // Genel hata yakalama
  while (ob_get_level()) {
    ob_end_clean();
  }
  if ($isAjax) {
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'send', 'message' => 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.']);
    exit;
  }
  if (!headers_sent()) {
    header("Location: iletisim.html?error=send", true, 302);
  }
  exit;
}
