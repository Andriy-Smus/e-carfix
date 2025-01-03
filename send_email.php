<!-- send_email.php -->
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'smus.andriy@gmail.com'; 
    $mail->Password = 'qosy eykx lplk vfix';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom('your_email@example.com', 'Сайт E-CARFIX');

    $mail->addAddress('smus.andriy@gmail.com');

    $mail->Subject = 'E-CARFIX: Запит на консультацію';
    $mail->Body = "Ім'я: {$_POST['name']}\nТелефон: {$_POST['phone']}\nПовідомлення: {$_POST['text']}";

    $mail->send();
    echo 'Повідомлення успішно надіслано!';
} catch (Exception $e) {
    echo "Помилка при надсиланні: {$mail->ErrorInfo}";
}

?>
