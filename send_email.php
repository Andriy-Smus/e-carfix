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
    $mail->Username = 'ecarfix.ua@gmail.com'; 
    $mail->Password = 'd j m o t c d u m z p r n g z s';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->CharSet = 'UTF-8';

    $mail->setFrom('your_email@example.com', 'Сайт E-CARFIX');

    $mail->addAddress('ecarfix.ua@gmail.com');

    $mail->Subject = 'E-CARFIX: Запит на консультацію';
    $mail->Body = "Ім'я: {$_POST['name']}\nТелефон: {$_POST['phone']}\nПовідомлення: {$_POST['text']}";

    $mail->send();
    echo 'Повідомлення успішно надіслано!';
} catch (Exception $e) {
    echo "Помилка при надсиланні: {$mail->ErrorInfo}";
}

?>
