$(document).ready(function() {
  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
    if (windowsize <= 991) {
      //Botão para fechar menu
      var $closeBtn = $('.closeBtn');
      var $navbarToggler = $('.navbar-toggler');
      var $search = $('.search-button');

      $('.collapse').css("display","none");
      $('.search-wrapper').css("display","none");

      $navbarToggler.on('click', function(){
        $('.collapse').css("display","flex").removeClass('animated slideOutRight faster').addClass('animated slideInLeft faster');
      });

      $search.on('click', function(){
        $('.search-wrapper').css("display","flex").removeClass('animated slideOutRight faster').addClass('animated slideInLeft faster');
      });

      $closeBtn.on('click', function(){
        $('.collapse').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.collapse').css("display","none");
        }, 1000);

        $('.search-wrapper').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.search-wrapper').css("display","none");
        }, 1000);
      });

      $('.navbar-collapse').on('click', function() {
        $('.collapse').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.collapse').css("display","none");
        }, 1000);
      });

      $('.search-wrapper').on('click', function() {
        $('.search-wrapper').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.collapse').css("display","none");
        }, 1000);
      });

      $('.navbar a').on('click', function() {
        $('.collapse').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.collapse').css("display","none");
        }, 1000);
      });

      $('.submit-search').on('click', function() {
        $('.search-wrapper').removeClass('animated slideInLeft faster').addClass('animated slideOutRight faster'),
        setTimeout(function(){
          $('.collapse').css("display","none");
        }, 1000);
      });
    }
  }
  // Execute on load
  checkWidth();
  $(window).resize(checkWidth);

  //draw svg
  var hotel = $('#hotel').drawsvg({
    duration: 800
  });
  hotel.drawsvg('animate');

  function loadDisappear() {
    setTimeout(function() {
      $('svg').addClass('animated bounceOut faster');
    }, 4000);
    setTimeout(function() {
      $('.load').addClass('animated fadeOut faster');
    }, 4500);
    setTimeout(function() {
      $('.load').css('display','none');
    }, 5000);
  }

  window.onload = loadDisappear();

  //Pages transition
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out-up-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  //Rating
  $('.card-rate-1').starrr({
    rating: 1,
    readOnly: true
  });
  $('.card-rate-2').starrr({
    rating: 2,
    readOnly: true
  });
  $('.card-rate-3').starrr({
    rating: 3,
    readOnly: true
  });
  $('.card-rate-4').starrr({
    rating: 4,
    readOnly: true
  });
  $('.card-rate-5').starrr({
    rating: 5,
    readOnly: true
  });

  //Scrollreveal
  ScrollReveal().reveal('.card-result', {
    origin: 'bottom',
    distance: '50%',
    interval: 100,
    viewFactor: 0.5
  });

  //Slider
  $('.portfolio-slides').slick({
    infinite        : true,
    slidesToShow    : 3,
    slidesToScroll  : 1,
    mobileFirst     : true,
    speed           : 300,
    // centerMode      : true,
    variableWidth   : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.portfolio-slides').slickLightbox({
    itemSelector        : 'a',
    navigateByKeyboard  : true
  });


  //card
  $('.dados').card({
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    formSelectors: {
        numberInput: 'input#number', // optional — default input[name="number"]
        expiryInput: 'input#expiry', // optional — default input[name="expiry"]
        cvcInput: 'input#ccv', // optional — default input[name="cvc"]
        nameInput: 'input#card-name' // optional - defaults input[name="name"]
    },

    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'NOME',
        expiry: '••/••',
        cvc: '•••'
    }
  });

  //Payment Modal
  $('.pagamentos').css('display','none');

  $('.reservar').on('click', function() {
    $('.pagamentos').removeClass('animated bounceOut').addClass('animated bounceIn').css('display','flex');
  });

  $('.close-payment').on('click', function() {
    $('.pagamentos').removeClass('animated bounceIn').addClass('animated bounceOut');
    setTimeout(function () {
      $('.pagamentos').css('display','none');
    },1000);
  });
});
