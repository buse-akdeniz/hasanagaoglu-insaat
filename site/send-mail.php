<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// SMTP config (git'e gönderilmez)
$mailConfigPath = __DIR__ . '/../config/mail.config.php';
$mailConfig = null;
if (file_exists($mailConfigPath)) {
  $mailConfig = require $mailConfigPath;
}

if (!is_array($mailConfig)) {
  http_response_code(500);
  exit('MAIL_CONFIG_MISSING');
}

function clean($v){ return trim(htmlspecialchars($v ?? "", ENT_QUOTES, 'UTF-8')); }

$name    = clean($_POST['name'] ?? '');
$email   = clean($_POST['email'] ?? '');
$phone   = clean($_POST['phone'] ?? '');
$message = clean($_POST['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  exit('Eksik alan var.');
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

  $fromEmail = $mailConfig['from_email'] ?? ($mailConfig['username'] ?? '');
  $fromName = $mailConfig['from_name'] ?? 'Web Sitesi';
  $toEmail = $mailConfig['to_email'] ?? '';

  $mail->setFrom($fromEmail, $fromName);
  $mail->addAddress($toEmail);
  $mail->addReplyTo($email, $name);

  $mail->isHTML(true);
  $mail->Subject = 'Web Sitesinden Yeni Mesaj';
  $mail->Body    = "
    <b>Ad Soyad:</b> {$name}<br>
    <b>E-posta:</b> {$email}<br>
    <b>Telefon:</b> {$phone}<br><br>
    <b>Mesaj:</b><br>" . nl2br($message);

  $mail->AltBody = "Ad Soyad: $name\nE-posta: $email\nTelefon: $phone\n\nMesaj:\n$message";

  $mail->send();
  header("Location: tesekkurler.html");
  exit;
} catch (Exception $e) {
  http_response_code(500);
  echo 'HATA';
}
