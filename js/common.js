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
  $('.time-input').datetimepicker({
    timepicker:true,
    datepicker:false,
    format:'H:i',
    minDate: new Date(),
  });



  $('.portfolio-page-tab-block').on('click', function() {
    $('.portfolio-page-tab-block').removeClass('portfolio-page-tab-block-active');
    $(this).addClass('portfolio-page-tab-block-active');
    let num = $('.portfolio-page-tab-block').index(this);
    
    $('.portfolio-row').removeClass('portfolio-row-active');
    $($('.portfolio-row')[num]).addClass('portfolio-row-active');
    return false;
  })


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

  $('.modal-open-5').on('click', function() {
    $('.dark-window').addClass('dark-window-active');
    $('.modal-window-5').addClass('modal-window-active');
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
     $('.page-block').unwrap()
     $('.contacts-page-row__left').wrapAll('<div class="contacts-page-row__left_wrap">');

     $('.portfolio-tabs .portfolio-row').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      variableWidth: true
     });

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
  
  if ($(window).width() > 720 && $(window).width() < 1160) {
     $('.footer-top__title').unwrap()
     $('.footer-top-center, .footer-right').wrapAll('<div class="new-tablet">');
     $('.contacts-page-row__left, .contacts-page-row__center').wrapAll('<div class="contact-page-wrapper">');
  }
  let date = new Date();

  let day = date.getDate()
  day = day + 1;
  let month= date.getMonth();

  let months=[
     'Января',
     'Февраля',
     'Марта',
     'Апреля',
     'Майя',
     'Июня',
     'Июля',
     'Августа',
     'Сентября',
     'Ноября',
     'Декабря',
  ];
  $('.month').text(months[month]);
  $('.day').text(day);



  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      let div = $( "#modal-window-1" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          if ($(".modal-window-1").hasClass('modal-window-active')) {

             $('.dark-window').removeClass('dark-window-active');
             $('.modal-window-1').removeClass('modal-window-active');
             $('html').removeClass('body-over');
          }
      }
    });
  });

  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      let div = $( "#modal-window-2" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
           if ($(".modal-window-3").hasClass('modal-window-active')) {

              $('.dark-window').removeClass('dark-window-active');
              $('.modal-window-3').removeClass('modal-window-active');
              $('html').removeClass('body-over');
           }
          
      }
    });
  });

  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      let div = $( "#modal-window-5" ); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
           if ($(".modal-window-5").hasClass('modal-window-active')) {

              $('.dark-window').removeClass('dark-window-active');
              $('.modal-window-5').removeClass('modal-window-active');
              $('html').removeClass('body-over');
           }
          
      }
    });
  });



  $('#file-input').on('change', function() {
    let file = $('#file-input')[0].files[0]
    if (file){
      $('.file-input__text')[0].innerHTML = file.name;
    }
  })


  $('.modal-window__close').on('click', function() {
    $('.dark-window').removeClass('dark-window-active');
    $('.modal-window').removeClass('modal-window-active');
    $('html').removeClass('body-over');
  })

  $('.portfolio-brief__more').on('click', function() {
    let parent = $(this).parent('.portfolio-brief-wrap');
    parent = $(parent).parent('.portfolio-brief');
    child = $(parent).children('.portfolio-brief__text');
    $(child).toggleClass('portfolio-brief__text__active');
    return false;
  })

  $(".scrol-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
  $('.tab_1').on('click', function() {
    if ($(this).hasClass('guarantees-block__tab')) {
      return false;
    }
    else{
      $('.guarantees-left__block').removeClass('guarantees-left-active');
      $(this).addClass('guarantees-left-active');

      $('.guarantees-block').removeClass('tab_active_block_3');
      $('.guarantees-block').removeClass('tab_active_block_2');
      $('.guarantees-block').addClass('tab_active_block_1');

      $('.guarantees-block__tab').removeClass('tab_active');
      $('.tab_1').addClass('tab_active');
    }
    
  })
  $('.tab_2').on('click', function() {
    if ($(this).hasClass('guarantees-block__tab')) {
      return false;
    }
    else{
      $('.guarantees-left__block').removeClass('guarantees-left-active');
      $(this).addClass('guarantees-left-active');

      $('.guarantees-block').removeClass('tab_active_block_1');
      $('.guarantees-block').removeClass('tab_active_block_3');
      $('.guarantees-block').addClass('tab_active_block_2');

      $('.guarantees-block__tab').removeClass('tab_active');
      $('.tab_2').addClass('tab_active');
    }
    
  })
  
  $('.tab_3').on('click', function() {
    if ($(this).hasClass('guarantees-block__tab')) {
      return false;
    }
    else{
      $('.guarantees-left__block').removeClass('guarantees-left-active');
      $(this).addClass('guarantees-left-active');

      $('.guarantees-block').removeClass('tab_active_block_1');
      $('.guarantees-block').removeClass('tab_active_block_2');
      $('.guarantees-block').addClass('tab_active_block_3');

      $('.guarantees-block__tab').removeClass('tab_active');
      $('.tab_3').addClass('tab_active');
    }
    
  })
  $(".phone").mask("+7 (999) 999-9999");



  $.mask.definitions['H'] = "[0-1]";
  $.mask.definitions['h'] = "[0-9]";
  $.mask.definitions['M'] = "[0-5]";
  $.mask.definitions['m'] = "[0-9]";
  $.mask.definitions['P'] = "[AaPp]";
  $.mask.definitions['p'] = "[Mm]";

  $(".time-input").mask("Hh:Mm");

  $('.project-slider').slick({
    infinite: false,
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
    infinite: false,
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
    infinite: false,
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

  $('.price-list-pdf').on('click', function() {
    return false;
  })

  $('.portfolio-page__arrow_r').on('click', function() {
    $('.portfolio-row-active').slick('slickNext');
    return false;
  })
  $('.portfolio-page__arrow_l').on('click', function() {
    $('.portfolio-row-active').slick('slickPrev');
    return false;
  })
})