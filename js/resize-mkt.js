	    function resize() {
		    if ($(window).width() < 992) {
		    	$('#nav-bar').addClass('black-back');
		    	$('#nav-bar').removeClass('transparente');
				$('#nav-bar').html('');
				$('#nav-bar').prepend('<a class="navbar-brand" href="index"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div>')
		    	if($(window).width() < 600){
		    			$('.mkt-dig').html('');
		    			$('.mkt-dig').html('Marketing Digital <br> Redes Sociales');
		    			$('.audio-vis').html('');
		    			$('.audio-vis').html('Realización Audiovisual <br> Cartelería Digital');
		    	}
		    	else{
		    			$('.mkt-dig').html('');
		    			$('.mkt-dig').html('Marketing Digital . Redes Sociales ');
		    			$('.audio-vis').html('');
		    			$('.audio-vis').html('Realización Audiovisual - Cartelería Digital');
		    	}

		    }
		    else{
		    	$('#nav-bar').removeClass('black-back');
		    	$('#nav-bar').addClass('transparente');
				$('#nav-bar').html('');
		    	$('#nav-bar').prepend('<div id="nav-1" class="container"><div id="nav-2" class="row justify-content-center mx-md-auto"><a class="navbar-brand" href="index"><img id="logo" src="img/Logos/logo-pop.png"/></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link font-white nav-what-we-do" href="index">Home <span class="sr-only">(current)</span></a></li><li class="nav-item dropdown"><a class="nav-link font-white dropdown-toggle nav-what-we-do" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Qué hacemos?</a><div class="dropdown-menu black-drop" aria-labelledby="navbarDropdown"><a class="dropdown-item" target="_self" href="contenidos-audiovisuales">Contenidos Audiovisuales</a><a class="dropdown-item" target="_self" href="carteleria-digital">Cartelería Digital + Turnos</a><a class="dropdown-item" target="_self" href="marketing-digital">Marketing Digital</a></div></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="index#Nosotros">Nosotros</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="clientes">Clientes</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" target="_self" href="cotizar">Cotizar</a></li><li class="nav-item"><a class="nav-link font-white nav-what-we-do" href="tel:+541152383555">54.11.5238.3555</a></li></ul></div></div></div>');
		    	$('.mkt-dig').html('');
		    	$('.mkt-dig').html('Marketing Digital . Redes Sociales ');
		    	$('.audio-vis').html('');
		    	$('.audio-vis').html('Realización Audiovisual - Cartelería Digital');
		    }
		}
		$(document).ready( function() {
    		$(window).resize(resize);
   			resize();
		});