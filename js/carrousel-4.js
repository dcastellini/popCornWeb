$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:0,
            autoplay:true, 
            autoHeight:false,
            autoWidth:true,
            autoplayHoverPause:true,
            items:4,
            nav: true,
            responsive:{
                0:{
                    items:2,
                    mouseDrag: false,
                    touchDrag: true
                },
                600:{
                    items:3,
                    mouseDrag: false,
                    touchDrag: true
                },
                1000:{
                    items:2
                }
            }
        });
});

