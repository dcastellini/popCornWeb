	    function resize() {
		    if ($(window).width() < 770) {
		    	$('#video-resp-index').addClass("video-responsive");
		    	$('#iframe').html("");
		    }
		    else{
		    	$('#video-resp-index').removeClass("video-responsive");
		    	$('#iframe').html('<iframe src="https://player.vimeo.com/video/285179154?autoplay=1&loop=1&autopause=0&background=1" width="100%" height="100%"  frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		    }
		    if ($(window).width() < 992) {
		    	$('#nav-bar').addClass('black-back');
		    	$('#nav-bar').removeClass('transparente');
		    	$('#nav-2').removeClass('mx-md-auto');
		    	$('#nav-2').removeClass('row');
		    	$('#nav-2').removeClass('justify-content-center');
		    	$("#dot-line img:last-child").remove();


		    }
		    else{
		    	$('#nav-bar').removeClass('black-back');
		    	$('#nav-bar').addClass('transparente');
		    	$('#nav-2').addClass('mx-md-auto');
		    	$('#nav-2').addClass('row');
		    	$('#nav-2').addClass('justify-content-center');
		    	if($("#dot-line img:last-child").length === 0){
		    		$('#dot-line').append('<img src="img/Home/linea.png" alt="lineas" />');
		    	}
		    }

		}
		$(document).ready( function() {
    		$(window).resize(resize);
   			resize();
		});