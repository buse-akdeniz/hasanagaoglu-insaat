<?php
// Test sayfası - mail gönderimini test etmek için
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = 'hasanagaogulariinsaat@gmail.com';
  $mail->Password   = 'slmgorutupmiwddk';
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port       = 587;
  $mail->SMTPDebug  = 2; // Debug açık
  
  $mail->setFrom('hasanagaogulariinsaat@gmail.com', 'Test');
  $mail->addAddress('info@hasanagaogluinsaat.com');
  
  $mail->isHTML(true);
  $mail->Subject = 'Test Mail';
  $mail->Body    = 'Bu bir test mailidir.';
  
  $mail->send();
  echo 'Mail başarıyla gönderildi!';
} catch (Exception $e) {
  echo 'Hata: ' . $mail->ErrorInfo;
}
