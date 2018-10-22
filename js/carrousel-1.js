$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            autoWidth:true,
            items:4,
            autoHeight:true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
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
                    items:4
                }
            }
        });
});

