<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';



$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                             
$mail->Username = 'andreyhlvn@gmail.com';                
$mail->Password = 'gaadrxvzjzhvjaje';                           
$mail->SMTPSecure = 'ssl';                           
$mail->setFrom('andreyhlvn@gmail.com', 'Andrey Schneider');   
$mail->addAddress('hiwovam956@ngopy.com');     

$mail->isHTML(true);                                  

$mail->Subject = 'Вы оставили заявку на сайте holovanov.ru';
$mail->Body    = '
		<b>Ваши данные</b> <br> 
	<em>Имя:</em> ' . $name . ' <br>
	<em>E-mail:</em> ' . $email . ' <br>
	<h1>Агой</h1><br>
	<p style="font-size: 16px">Спасибо что оставили ваше сообщение/заявку</br>
	я с вами свяжусь в свободное время.!!!</p> ';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>