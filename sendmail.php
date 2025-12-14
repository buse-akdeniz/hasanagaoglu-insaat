<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Form verilerini al
    $name    = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $email   = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $phone   = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

    // Basit doğrulama
    if ($name === "" || $email === "" || $message === "") {
        header("Location: iletisim.html?status=error");
        exit;
    }

    // Mail ayarları
    $to      = "hasanagaogullariinsaat@gmail.com";
    $subject = "Web Sitesi İletişim Formu Mesajı";
    $body    = "Yeni bir iletişim formu mesajı:\n\n";
    $body   .= "Ad Soyad: $name\n";
    $body   .= "E-posta: $email\n";
    $body   .= "Telefon: $phone\n\n";
    $body   .= "Mesaj:\n$message\n";

    // Header (gönderen bilgisi)
    $headers  = "From: Web Form <no-reply@" . $_SERVER["SERVER_NAME"] . ">\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Mail gönder
    if (mail($to, $subject, $body, $headers)) {
        // Başarılıysa iletişim sayfasına status=ok ile dön
        header("Location: iletisim.html?status=ok");
        exit;
    } else {
        // Hata olursa status=error
        header("Location: iletisim.html?status=error");
        exit;
    }
} else {
    // Direkt php dosyasına gelirse ana sayfaya yönlendir
    header("Location: index.html");
    exit;
}

?>
