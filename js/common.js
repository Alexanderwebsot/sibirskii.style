$(document).ready(function () {
  AOS.init();
  
  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");

  

  $('.project-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    //autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: $('.project-arrow_l'),
    nextArrow: $('.project-arrow_r'),
    dots: true,
   });

  $('.reviews-licens-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    //autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: $('.licens-block_l'),
    nextArrow: $('.licens-block_r'),
    dots: true,
   });

  $('.reviews-phone-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    //autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: $('.phone-block_l'),
    nextArrow: $('.phone-block_r'),
    variableWidth: true,
    dots: false,
   });


  let services = $('.portfolio-block-slider');
  for (var i = services.length - 1; i >= 0; i--) {
    let par_ser = $(services[i]).parent('.portfolio-block-wrapper');
    par_ser = $(par_ser).children('.portfolio-block-arrows');

    let arrow_r = $(par_ser).children('.portfolio-block_r')
    let arrow_l = $(par_ser).children('.portfolio-block_l')
    console.log(par_ser)
    $(services[i]).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      prevArrow: arrow_l,
      nextArrow: arrow_r,
     });
  }

  if ($(window).width() < 992) {
    
  }

 

})