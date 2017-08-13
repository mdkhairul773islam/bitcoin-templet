

  $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
          $('#nav').addClass("fixed");          
      } else {
          $('#nav').removeClass("fixed");          
      }
  });


$('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();

          $('html, body').animate({
              scrollTop: (target.offset().top - $('nav#nav').outerHeight())
          }, 1000);
      }
  });


$(document).ready(function(){  
   $("figure").on('mouseenter', function(){
     $(this).addClass("active-2");
     $(this).css({"cursor":"pointer"});
   });
   $("figure").on('mouseleave', function(){
     $(this).removeClass("active-2");     
   });


   $("figure").on('click', function(){
        var target = $(this).data('target');
        $(".tab-menu").removeClass("active-1");
        $(this).addClass('active-1');      
    });


    $("figure.tab-menu").on('click', function(){
        var target = $(this).data('target');

        $('.tab-content').removeClass('active'); 
        $('#' + target).addClass('active'); 
    });      
});


// Preloader
$(window).on('load', function(){
  $("#mainbox").delay(800).fadeOut("slow");
});
// Preloader