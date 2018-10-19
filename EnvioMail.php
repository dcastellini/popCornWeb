<?php

	require_once ('PHPMailer/src/Exception.php');
	require_once ('PHPMailer/src/PHPMailer.php');
	require_once ('PHPMailer/src/SMTP.php');

	use PHPMailer/PHPMailer/PHPMailer;
	use PHPMailer/PHPMailer/Exception;

	$mail = new PHPMailer(true);                              
    
	$nombre      = $_POST['nombre']; 
	$apellido    = $_POST['apellido'];
	$empresa     = $_POST['empresa'];
	$web         = $_POST['web'];
	$telefono    = $_POST['telefono'];
	$email       = $_POST['email'];
	$presupuesto = $_POST['presupuesto'];
	$realiza     = $_POST['realiza'];
	$dirige      = $_POST['dirige'];
	$comentarios = $_POST['comentarios'];
	
	try{
		//Server settings
        $mail->SMTPDebug = 2;                                 
        $mail->isSMTP();                                     
        $mail->Host = 'ssl://smtp.gmail.com';  
        $mail->SMTPAuth = true;                               
        $mail->SMTPSecure = ssl;
        $mail->Username = 'programacionweb3@gmail.com';            
        $mail->Password = 'Montoto123';                           
        $mail->Port = 465;                                    
        
		//Recipients
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('dcastellini89@gmail.com', 'Joe User');    
       
        //Content
        $mail->isHTML(true);                                  
        $mail->Subject = 'Email enviado desde http://www.popcorntv.com.ar';
        $mail->Body    = 'Nombre: '.$nombre.'<br> Apellido: '.$apellido.'<br> Empresa: '.$empresa.
                         '<br> Web: '.$web.'<br> Telefono: '.$telefono.'<br> Email: '.$email.
                         '<br> Presupuesto: '.$presupuesto.'<br> Que desea realizar: '.$realiza.
                         '<br> A quien va dirigido: '.$dirige.'<br> Comentarios: '.$comentarios;
        $mail->AltBody = 'Nombre: '.$nombre.'<br> Apellido: '.$apellido.'<br> Empresa: '.$empresa.
                         '<br> Web: '.$web.'<br> Telefono: '.$telefono.'<br> Email: '.$email.
                         '<br> Presupuesto: '.$presupuesto.'<br> Que desea realizar: '.$realiza.
                         '<br> A quien va dirigido: '.$dirige.'<br> Comentarios: '.$comentarios;

        $mail->send();
		echo "Send_ok";
        } 
	catch (Exception $e){
        echo 'El email no pudo ser enviado. Error: ', $mail->ErrorInfo;
		echo "Send_error";
        }
?>