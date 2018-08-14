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
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'ssl://smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'programacionweb3@gmail.com';                 // SMTP username
        $mail->Password = 'Montoto123';                           // SMTP password
        /*  $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted */
        $mail->Port = 465;                                    // TCP port to connect to
        
		//Recipients
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('dcastellini89@gmail.com', 'Joe User');     // Add a recipient
        /*      $mail->addAddress('ellen@example.com');               // Name is optional
            $mail->addReplyTo('info@example.com', 'Information');
            $mail->addCC('cc@example.com');
            $mail->addBCC('bcc@example.com'); */

        //Attachments
        /*  $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name */
        
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo 'Message has been sent';
		echo "Send_ok";
        } 
	catch (Exception $e){
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
		echo "Send_error";
        }
?>