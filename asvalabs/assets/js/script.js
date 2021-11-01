(function ($) {
  'use strict';

  $('#recipeCarousel').carousel({
      interval: 10000
    })
    
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
              }
            
            next.children(':first-child').clone().appendTo($(this));
          }
    });
    
  $('#send-btn').click(function(){
  var email = $('#subscribe-email').val();

  $.post(
    "https://api.asva.finance/mailer",
    {"cust_email": email},
    function (result) {
      window.alert("Dear "+email+", thanks for subscribing!");
    }
  ).fail(function () {
      window.alert("Something went wrong, please try again.");
  });

  
})

})(jQuery);