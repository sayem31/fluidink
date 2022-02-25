(function ($) {
  
  "use strict";


    // Start Humber Main Menu Icon Js
    $('.all_p_humber').click(function(){
           $(this).toggleClass('open');
       });
    //==== End Humber Main Menu Icon Js


  $('.all_p_humber').click(function(){
      $('.main__menu ul').slideToggle();
    });
    $('.main__menu ul li a').click(function(){
           $('.all_p_humber').removeClass('open');
       });

    

    // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header__area .main__menu, .home_menu').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 200, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.main__menu a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.main__menu ul li a, .home_menu ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  };

	// work popup
	$('.workpopup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $(window).scroll(function(){
    var sticky = $('.header__area'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('header_sticky');
    else sticky.removeClass('header_sticky');
  });

  /*$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
      $('.header__area').addClass('header_sticky');
     }
     else {
      $('.header__area').removeClass('header_sticky');
     }
  });*/

    

})(window.jQuery);
