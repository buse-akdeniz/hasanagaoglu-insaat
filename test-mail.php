<?php
// Test sayfası - mail gönderimini test etmek için
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$mailConfigPath = __DIR__ . '/config/mail.config.php';
$mailConfig = null;
if (file_exists($mailConfigPath)) {
  $mailConfig = require $mailConfigPath;
}

if (!is_array($mailConfig)) {
  http_response_code(500);
  echo 'MAIL_CONFIG_MISSING';
  exit;
}

$mail = new PHPMailer(true);

try {
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host       = $mailConfig['host'] ?? 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = $mailConfig['username'] ?? '';
  $mail->Password   = $mailConfig['password'] ?? '';
  $mail->SMTPSecure = $mailConfig['secure'] ?? PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = (int)($mailConfig['port'] ?? 587);
  $mail->SMTPDebug  = 2; // Debug açık
  
  $fromEmail = $mailConfig['from_email'] ?? ($mailConfig['username'] ?? '');
  $fromName = $mailConfig['from_name'] ?? 'Test';
  $toEmail = $mailConfig['to_email'] ?? '';

  $mail->setFrom($fromEmail, $fromName);
  $mail->addAddress($toEmail);
  
  $mail->isHTML(true);
  $mail->Subject = 'Test Mail';
  $mail->Body    = 'Bu bir test mailidir.';
  
  $mail->send();
  echo 'Mail başarıyla gönderildi!';
} catch (Exception $e) {
  echo 'Hata: ' . $mail->ErrorInfo;
}
