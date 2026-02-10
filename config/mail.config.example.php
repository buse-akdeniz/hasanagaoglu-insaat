<?php
/**
 * Copy this file to `config/mail.config.php` on the server.
 * IMPORTANT: `config/mail.config.php` must NOT be committed to git.
 */
return [
  // SMTP
  'host' => 'smtp.gmail.com',
  'port' => 587,
  'secure' => PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS,
  'username' => 'hasanagaogulariinsaat@gmail.com',
  'password' => 'PASTE_YOUR_16_CHAR_APP_PASSWORD_HERE',

  // Mail routing
  'from_email' => 'hasanagaogulariinsaat@gmail.com',
  'from_name' => 'Web Sitesi',
  'to_email' => 'info@hasanagaogluinsaat.com',
];

