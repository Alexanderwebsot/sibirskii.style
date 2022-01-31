$(document).ready(function () {
  if ($(window).width() < 720) {
    $('.project-slider,.portfolio-block-slider,.reviews-phone-slider,.reviews-licens-slider,.materials-bottom-slider,.project-slider,.premises-row').on('init', function(event, slick){
      AOS.init();
    });
  }
  else{
    $('.project-slider,.portfolio-block-slider,.reviews-phone-slider,.reviews-licens-slider,.materials-bottom-slider,.project-slider').on('init', function(event, slick){
      AOS.init();
    });
  }
  

  $(function() {
    $('select').selectize();
  });

  $('.date-input').datetimepicker({
    timepicker:false,
    format:'d.m.Y',
    minDate: new Date(),
  });
  $('.date-input').mask("99/99/9999");
  $('.has-child').on('click', function() {
    return false;
  })
  $('.modal-open-1').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window-1').addClass('modal-window-active');
    return false;
  })

  $('.modal-open-2').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window-2').addClass('modal-window-active');
    return false;
  })

  $('.modal-open-3').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window-estimate').addClass('modal-window-active');
    $('html').addClass('body-over');
    return false;
  })

  $('.header-button').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
    $('html').addClass('body-over');
    return false;
  })
  $('.menu-close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    $('html').removeClass('body-over');
    return false;
  })

  if ($(window).width() < 720) {
     $('.project-video').unwrap()
     $('.project-right-line').unwrap()

     $('.premises-row').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      //autoplay: true,
      // autoplaySpeed: 2000,
      prevArrow: $('.premises-block_l'),
      nextArrow: $('.premises-block_r'),
      //dots: true,
     });
  }
  

  const div = document.querySelector( '#modal-window-1');
   
  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(div);
   
    if ( ! withinBoundaries ) {
      $('.dark-window').removeClass('dark-window-active');
      $('.modal-window').removeClass('modal-window-active');
      $('html').removeClass('body-over');
    }
  })

  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.tab_1').on('click', function() {
    $('.guarantees-left__block').removeClass('guarantees-left-active');
    $(this).addClass('guarantees-left-active');

    $('.guarantees-block').removeClass('tab_active_block_3');
    $('.guarantees-block').removeClass('tab_active_block_2');
    $('.guarantees-block').addClass('tab_active_block_1');

    $('.guarantees-block__tab').removeClass('tab_active');
    $('.tab_1').addClass('tab_active');
  })
  $('.tab_2').on('click', function() {
    $('.guarantees-left__block').removeClass('guarantees-left-active');
    $(this).addClass('guarantees-left-active');

    $('.guarantees-block').removeClass('tab_active_block_1');
    $('.guarantees-block').removeClass('tab_active_block_3');
    $('.guarantees-block').addClass('tab_active_block_2');

    $('.guarantees-block__tab').removeClass('tab_active');
    $('.tab_2').addClass('tab_active');
  })
  
  $('.tab_3').on('click', function() {
    $('.guarantees-left__block').removeClass('guarantees-left-active');
    $(this).addClass('guarantees-left-active');

    $('.guarantees-block').removeClass('tab_active_block_1');
    $('.guarantees-block').removeClass('tab_active_block_2');
    $('.guarantees-block').addClass('tab_active_block_3');

    $('.guarantees-block__tab').removeClass('tab_active');
    $('.tab_3').addClass('tab_active');
  })
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

  $('.materials-bottom-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: true,
    //autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: $('.materials-block_l'),
    nextArrow: $('.materials-block_r'),
    dots: false,
    responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }
      ]
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