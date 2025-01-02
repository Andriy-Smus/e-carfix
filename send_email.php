<!-- send_email.php -->
<?php
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $phone = htmlspecialchars($_POST['phone']);
//     $message = htmlspecialchars($_POST['text']);

//     // Налаштування email
//     $to = "smus.andriy@gmail.com"; // Замість цього вкажіть вашу пошту
//     $subject = "Новий запит із форми зворотного зв'язку";
//     $body = "Ім'я: $name\nТелефон: $phone\nПовідомлення: $message";
//     $headers = "From: no-reply@yourdomain.com\r\n";

//     // Відправка email
//     if (mail($to, $subject, $body, $headers)) {
//         echo "Дані відправлено!";
//     } else {
//         echo "Сталася помилка при відправці.";
//     }
// } else {
//     echo "Невірний метод запиту.";
// }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Налаштування сервера
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Ваш SMTP-сервер
    $mail->SMTPAuth = true;
    $mail->Username = 'smus.andriy@gmail.com'; // Ваш email
    $mail->Password = 'qosy eykx lplk vfix'; // Ваш пароль
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Від кого
    $mail->setFrom('your_email@example.com', 'Ваше ім’я');

    // Кому
    $mail->addAddress('smus.andriy@gmail.com');

    // Тема і тіло
    $mail->Subject = 'Новий запит із форми зворотного зв\'язку';
    $mail->Body = "Ім'я: {$_POST['name']}\nТелефон: {$_POST['phone']}\nПовідомлення: {$_POST['text']}";

    // Надсилання
    $mail->send();
    echo 'Повідомлення успішно надіслано!';
} catch (Exception $e) {
    echo "Помилка при надсиланні: {$mail->ErrorInfo}";
}

?>
