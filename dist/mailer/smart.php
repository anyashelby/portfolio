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
$mail->Password = 'mgrrpoxuyaipjtus';                           
$mail->SMTPSecure = 'ssl';                           
$mail->setFrom('andreyhlvn@gmail.com', 'Pulse');   
$mail->addAddress('xasolom452@fandua.com');     

$mail->isHTML(true);                                  

$mail->Subject = 'Вы оставили сообщение';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>