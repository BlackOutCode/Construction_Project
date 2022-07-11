 $(document).ready(function() {
 	$('.slider-img-block').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    // rtl: true
  });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-img-block',
      focusOnSelect: true,
      centerMode: true,
      arrows: false
    });
      });