<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

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
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'hasanagaogulariinsaat@gmail.com';
  $mail->Password   = 'Hasanagaogulariinsaat54.';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;

  $mail->setFrom('hasanagaogulariinsaat@gmail.com', 'Web Sitesi');
  $mail->addAddress('hasanagaogulariinsaat@gmail.com');
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
