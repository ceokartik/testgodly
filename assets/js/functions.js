function getHeaderHeight() {
   var headerHeight = $('.header').height();
   $('body').css('padding-top', headerHeight);
}
function fixedHeader() {
   var scrollTop = $(window).scrollTop();
   if(scrollTop > 1) {
      $('.header').addClass('fixed');
   } else {
      $('.header').removeClass('fixed');
   }
}
getHeaderHeight();
fixedHeader();
$(document).ready(function(){
   $('.custom-link').on('click', function() {
      if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({ scrollTop: $(hash).offset().top - 150 }, 800);
      }
   });
   //Section Scroll on anchor click
   if (window.location.hash) {
      setTimeout(function() {
         $('html, body').scrollTop(0).show();
         $('html, body').animate({ scrollTop: $(window.location.hash).offset().top - 150 }, 1000)
      }, 0);
   }
    $('#howItWorkModal').on('hidden.bs.modal', function() {
       var $this = $(this).find('iframe'),
       tempSrc = $this.attr('src');
       $this.attr('src', "");
       $this.attr('src', tempSrc);
  });
   /* AOS Animation */
   AOS.init({ duration: 600, once: true, offset: 60, disable: function() {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
       }
   });
   $('.navicon').on('click', function() {
      $('.nav').toggleClass('active');
   });
   //My Templates Tabs
   $('.my-templates .template-type').click(function(){
      $('.my-templates .template-type').removeClass('active');
      $(this).addClass('active');
      var tagid = $(this).data('tab');
      $('.screen-image').removeClass('active').addClass('hide');
      $('#'+tagid).addClass('active').removeClass('hide');
   });
   // Engagements
   $(".engagements-types").on('init', function(e, slick) {
        var $firstAnimatingElements = jQuery('.slick-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $(".engagements-types").on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = jQuery('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);
    });
   $(".engagements-types").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true
   });
   $('.prev-arrow').click(function(){
      $('.engagements-types').slick('slickPrev');
   });
   $('.next-arrow').click(function(){
      $('.engagements-types').slick('slickNext');
   });
   function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
           var $this = jQuery(this);
           var $animationDelay = $this.data('delay');
           var $animationType = 'animated ' + $this.data('animation');
           $this.css({
               'animation-delay': $animationDelay,
               '-webkit-animation-delay': $animationDelay
           });
           $this.addClass($animationType).one(animationEndEvents, function() {
               $this.removeClass($animationType);
           });
      });
   }
   /* Copyright Year */
    var currentYear = (new Date).getFullYear();
    $("#copyright-year").text((new Date).getFullYear());
});
$(window).on('load scroll', function() {
   getHeaderHeight();
   fixedHeader();
})
