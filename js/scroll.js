$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 10) {
          $('.navscroll').addClass("azul");
         } else {
          $(".navscroll").removeClass("azul");
         }
      });
  });