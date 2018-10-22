	<?php



	require_once ('PHPMailer/src/Exception.php');

	require_once ('PHPMailer/src/PHPMailer.php');

	require_once ('PHPMailer/src/SMTP.php');



	use PHPMailer\PHPMailer\PHPMailer;

	use PHPMailer\PHPMailer\Exception;



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

	
	//Server settings

	try{

        $mail->SMTPDebug = 2;                                 

        $mail->isSMTP();                                     

        $mail->Host = 'mail.popcorntv.com.ar';  
	
	$mail->SMTPSecure = ssl;

        //$mail->SMTPAuth = true;                               

        $mail->Username = 'presupuestos@popcorntv.com.ar';            

        $mail->Password = 'presupuestospop';                           

        $mail->Port = 465;                                    

        

		//Recipients

        $mail->setFrom('presupuestos@popcorntv.com.ar', 'Popcorntv');

        $mail->addAddress('info@popcorntv.com.ar', 'Info');    

	$mail->addAddress('presupuestos@popcorntv.com.ar', 'Presupuestos');    

	$mail->addAddress('demianlinet@popcorntv.com.ar', 'DLinet');    

	$mail->addAddress('fpassoni@popcorntv.com.ar', 'FPassoni');    

       

        //Content

        $mail->isHTML(true);                                  

        $mail->Subject = 'Email enviado desde http://www.popcorntv.com.ar';

        $mail->Body    = '<b>Nombre:</b> '.$nombre.'<br><b> Apellido: </b>'.$apellido.'<br><b> Empresa:</b> '.$empresa.

                         '<br><b> Web: </b>'.$web.'<br><b> Telefono: </b>'.$telefono.'<br> <b>Email: </b>'.$email.

                         '<br> <b>Presupuesto: </b>'.$presupuesto.'<br><b> Que desea realizar:</b> '.$realiza.

                         '<br> <b>A quien va dirigido:</b> '.$dirige.'<br> <b>Comentarios: </b>'.$comentarios;

        $mail->AltBody = 'Nombre: '.$nombre.'<br> Apellido: '.$apellido.'<br> Empresa: '.$empresa.

                         '<br> Web: '.$web.'<br> Telefono: '.$telefono.'<br> Email: '.$email.

                         '<br> Presupuesto: '.$presupuesto.'<br> Que desea realizar: '.$realiza.

                         '<br> A quien va dirigido: '.$dirige.'<br> Comentarios: '.$comentarios;



        $mail->send();
	
	echo "Send_ok";


        } 
	catch (Exception $e){
		echo "Send_error";
        }


?>