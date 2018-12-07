	    function resize() {
		    if ($(window).width() < 992) {
		    	$('#nav-bar').addClass('black-back');
		    	$('#nav-bar').removeClass('transparente');
				$('#nav-bar').html('');
				$('#nav-bar').prepend('<a class="navbar-brand" href="index"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div>')

				$('#container-cotizar').html('');
				$('#container-cotizar').html('<br><br><br><br><br><br><br><br><div class="row"><div class="col-lg-4"><div class="row"><div class="col-lg-12"><div class="form-group form-title">Contactate con nosotros</div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Nombre" class="label-pop titulo-formulario">Nombre *</label><input type="text" class="form-control form-pop" id="nombre"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Apellido" class="label-pop titulo-formulario">Apellido *</label><input type="text" class="form-control form-pop" id="apellido"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Empresa" class="label-pop titulo-formulario">Empresa *</label><input type="text" class="form-control form-pop" id="empresa"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Web" class="label-pop titulo-formulario">Sitio Web</label><input type="text" class="form-control form-pop" id="web"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Telefono" class="label-pop titulo-formulario">Teléfono *</label><input type="text" class="form-control form-pop" id="telefono"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Email" class="label-pop titulo-formulario">Email *</label><input type="text" class="form-control form-pop" id="email"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Presupuesto" class="label-pop titulo-formulario">Presupuesto</label><select class="form-control" id="presupuesto"><option value="0">Elija una opción</option><option value="010">$0 a $10.000</option><option value="1030">$10.000 a $30.000</option><option value="3060">$30.000 a $60.000</option><option value="60110">$60.000 a $110.000</option><option value="110200">$110.000 a $200.000</option><option value="200300">$200.000 a $300.000</option><option value="300450">$300.000 a $450.000</option><option value="450">$450.000 en adelante</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Realizar" class="label-pop titulo-formulario">¿Qué necesitás realizar?</label><select class="form-control" id="realizar" onchange="Cascade()"><option value="0">Elija una opción</option><option value="1">Video institucional</option><option value="1">Video de producto</option><option value="1">Video de evento</option><option value="1">Video de Redes Sociales</option><option value="1">Video Publicitario</option><option value="1">Video Cartelería Digital</option><option value="1">Video Educativo</option><option value="1">Video Tutorial</option><option value="1">Video Testimonial</option><option value="1">Video Animado(Motion Graphics)</option><option value="1">Video Casos de Éxito</option><option value="2">Cartelería Digital</option><option value="3">Marketing Digital</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Comentarios" class="label-pop titulo-formulario">Comentarios</label><textarea type="text-area" rows="6" class="form-control form-pop" id="comentarios"/></textarea></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Dirigido" class="label-pop titulo-formulario">¿A quién va dirigido? ¿Por qué canal?</label><select class="form-control" id="dirigido"><option value="0">Elija una opción</option><option value="1">Web</option><option value="1">Uso Interno</option><option value="1">TV</option><option value="1">Evento</option><option value="1">Capacitación</option><option value="1">Redes Sociales</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="g-recaptcha" data-sitekey="6Le_fXYUAAAAAJ8hK58frvqfRg3_y7ChS77lUYWb"></div></div><br><br><br><br><div class="col-lg-12"><button class="btn btn-default btn-contact" onclick="envioEmail()">Enviar</button></div></div></div><div class="col-lg-4"><br><br><br><br><div class="row"><div class="col-lg-12 contact-social-cotizar"><a href="https://www.facebook.com/popcorntv.produccion/" target="_blank"><img src="img/RedesSociales/Redes/facebook.png" alt="Facebook"></a><a href="https://www.linkedin.com/in/popcorntv-producciones-audiovisuales-1096211a/" target="_blank"><img src="img/RedesSociales/Redes/linkedin.png" alt="Linkedin"></a><a href="https://vimeo.com/popcorntv" target="_blank"><img src="img/RedesSociales/Redes/vimeo.png" alt="Vimeo"></a><a href="https://www.instagram.com/popcorntv.ar/" target="_blank"><img src="img/RedesSociales/Redes/instagram.png" alt="Instagram"></a></div></div><div class="row"><div class="col-lg-12 info-text"><br><br><a class="color-white" href="mailto:info@popcorntv.com.ar">info@popcorntv.com.ar</a> <br><p class="spacing-null">_________________________</p><br><a class="color-white" href="tel:+541152383555">54.11.5238.3555</a> <br><p class="spacing-null">_________________________<p/> <br><p class="color-white">Distrito Audiovisual <br>Ciudad Autonóma de Bs. As.</p></div></div></div></div>');

		    }
		    else{
				$('#nav-bar').removeClass('black-back');
		    	$('#nav-bar').addClass('transparente');
				$('#nav-bar').html('');
		    	$('#nav-bar').prepend('<div id="nav-1" class="container"><div id="nav-2" class="row justify-content-center mx-md-auto"><a class="navbar-brand" href="index"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div></div></div>');

				$('#container-cotizar').html('');
				$('#container-cotizar').html('<br><br><br><br><br><br><br><br><div class="row"><div class="col-lg-4"><div class="row"><div class="col-lg-12"><div class="form-group form-title">Contactate con nosotros</div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Nombre" class="label-pop titulo-formulario">Nombre *</label><input type="text" class="form-control form-pop" id="nombre"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Empresa" class="label-pop titulo-formulario">Empresa *</label><input type="text" class="form-control form-pop" id="empresa"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Telefono" class="label-pop titulo-formulario">Teléfono *</label><input type="text" class="form-control form-pop" id="telefono"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Presupuesto" class="label-pop titulo-formulario">Presupuesto</label><select class="form-control" id="presupuesto"><option value="0">Elija una opción</option><option value="010">$0 a $10.000</option><option value="1030">$10.000 a $30.000</option><option value="3060">$30.000 a $60.000</option><option value="60110">$60.000 a $110.000</option><option value="110200">$110.000 a $200.000</option><option value="200300">$200.000 a $300.000</option><option value="300450">$300.000 a $450.000</option><option value="450">$450.000 en adelante</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Comentarios" class="label-pop titulo-formulario">Comentarios</label><textarea type="text-area" rows="6" class="form-control form-pop" id="comentarios"/></textarea></div></div></div></div><div class="col-lg-4"><br><br><br><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Apellido" class="label-pop titulo-formulario">Apellido *</label><input type="text" class="form-control form-pop" id="apellido"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Web" class="label-pop titulo-formulario">Sitio Web</label><input type="text" class="form-control form-pop" id="web"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Email" class="label-pop titulo-formulario">Email *</label><input type="text" class="form-control form-pop" id="email"/></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Realizar" class="label-pop titulo-formulario">¿Qué necesitás realizar?</label><select class="form-control" id="realizar" onchange="Cascade()"><option value="0">Elija una opción</option><option value="1">Video institucional</option><option value="1">Video de producto</option><option value="1">Video de evento</option><option value="1">Video de Redes Sociales</option><option value="1">Video Publicitario</option><option value="1">Video Cartelería Digital</option><option value="1">Video Educativo</option><option value="1">Video Tutorial</option><option value="1">Video Testimonial</option><option value="1">Video Animado(Motion Graphics)</option><option value="1">Video Casos de Éxito</option><option value="2">Cartelería Digital</option><option value="3">Marketing Digital</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="form-group"><label for="Dirigido" class="label-pop titulo-formulario">¿A quién va dirigido? ¿Por qué canal?</label><select class="form-control" id="dirigido"><option value="0">Elija una opción</option><option value="1">Web</option><option value="1">Uso Interno</option><option value="1">TV</option><option value="1">Evento</option><option value="1">Capacitación</option><option value="1">Redes Sociales</option></select></div></div></div><div class="row"><div class="col-lg-12"><div class="g-recaptcha" data-sitekey="6Le_fXYUAAAAAJ8hK58frvqfRg3_y7ChS77lUYWb"></div></div><br><br><br><br><div class="col-lg-12"><button class="btn btn-default btn-contact" onclick="envioEmail()">Enviar</button></div></div></div><div class="col-lg-4"><br><br><br><br><div class="row"><div class="col-lg-12 contact-social-cotizar"><a href="https://www.facebook.com/popcorntv.produccion/" target="_blank"><img src="img/RedesSociales/Redes/facebook.png" alt="Facebook"></a><a href="https://www.linkedin.com/in/popcorntv-producciones-audiovisuales-1096211a/" target="_blank"><img src="img/RedesSociales/Redes/linkedin.png" alt="Linkedin"></a><a href="https://vimeo.com/popcorntv" target="_blank"><img src="img/RedesSociales/Redes/vimeo.png" alt="Vimeo"></a><a href="https://www.instagram.com/popcorntv.ar/" target="_blank"><img src="img/RedesSociales/Redes/instagram.png" alt="Instagram"></a></div></div><div class="row"><div class="col-lg-12 info-text"><br><br><a class="color-white" href="mailto:info@popcorntv.com.ar">info@popcorntv.com.ar</a> <br><p class="spacing-null">_________________________</p><br><a class="color-white" href="tel:+541152383555">54.11.5238.3555</a> <br><p class="spacing-null">_________________________<p/> <br><p class="color-white">Distrito Audiovisual <br>Ciudad Autonóma de Bs. As.</p></div></div></div></div>');
		    }

		}
		$(document).ready( function() {
    		$(window).resize(resize);
   			resize();
		});