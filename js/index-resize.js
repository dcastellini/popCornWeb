	    function resize() {
		   	if ($(window).width() < 600) {
		   		$('#link-arrow').remove();
		   	}
		   	else {
		   		if($('#link-arrow').length === 0){
		    		$('#arrow').append('<a href="#Nosotros" id="link-arrow"> <div id="scroll-to-content"></div> </a>');
		    	}
		   	}
		    if ($(window).width() < 770) {
		    	$('#video-resp-index').addClass("video-responsive");
		    	$('#iframe').html("");
		    	$('#minion-responsive').html("");
		    }
		    else{
		    	$('#video-resp-index').removeClass("video-responsive");
		    	$('#iframe').html('<iframe src="https://player.vimeo.com/video/285179154?autoplay=1&loop=1&autopause=0&background=1" width="100%" height="100%"  frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		    	$('#minion-responsive').html("<div class='minions-prebox'><div class='minions-box'><div class='minion'>En Popcorntv nos divertimos<br>haciendo lo que nos gusta</div></div></div>");

		    }
		    if ($(window).width() < 992) {
		    	$('#nav-bar').addClass('black-back');
		    	$('#nav-bar').removeClass('transparente');
				$('#nav-bar').html('');
				$('#nav-bar').prepend('<a class="navbar-brand" href="index.html"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index.html">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales.html">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital.html">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital.html">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index.html#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes.html">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar.html">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div>')
		    	$("#dot-line img:last-child").remove();
		    }
		    else{
		    	$('#nav-bar').removeClass('black-back');
		    	$('#nav-bar').addClass('transparente');
				$('#nav-bar').html('');
		    	$('#nav-bar').prepend('<div id="nav-1" class="container"><div id="nav-2" class="row justify-content-center mx-md-auto"><a class="navbar-brand" href="index.html"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index.html">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales.html">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital.html">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital.html">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index.html#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes.html">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar.html">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div></div></div>');
		    	if($("#dot-line img:last-child").length === 0){
		    		$('#dot-line').append('<img src="img/Home/linea.png" alt="lineas" />');
		    	}
		    }

		}
		$(document).ready( function() {
    		$(window).resize(resize);
   			resize();
		});