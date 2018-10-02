	    function resize() {
 			if ($(window).width() < 630) {
				$("#musux-image").attr("src","img/Logos/logo-musux-xs.png");
		    }
		    else{
		    	if($(window).width() > 630){
		    		$("#musux-image").attr("src","img/Logos/logo-musux-chico.png");
		    	}
		    	else{
		    		$("#musux-image").attr("src","img/Logos/logo-musux.png");
		    	}
		    }
		    if ($(window).width() < 770) {
		    	$('#video-resp-index').addClass("video-responsive-musux");
		    }
		    else{
		    	$('#video-resp-index').removeClass("video-responsive-musux");
		    }
		    if ($(window).width() < 992) {
		    	$('#nav-bar').addClass('black-back');
		    	$('#nav-bar').removeClass('transparente');
		    	$('#nav-2').removeClass('mx-md-auto');
		    	$('#nav-2').removeClass('row');
		    	$('#nav-2').removeClass('justify-content-center');
		    }
		    else{
		    	$('#nav-bar').removeClass('black-back');
		    	$('#nav-bar').addClass('transparente');
		    	$('#nav-2').addClass('mx-md-auto');
		    	$('#nav-2').addClass('row');
		    	$('#nav-2').addClass('justify-content-center');
		    }

		}
		$(document).ready( function() {
    		$(window).resize(resize);
   			resize();
		});
