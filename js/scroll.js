$(function (){
      $(window).scroll(function(){
         if ($(this).scrollTop() > 10) {
          $('.navscroll').addClass("black");
         } else {
          $(".navscroll").removeClass("black");
         }
      });
  });