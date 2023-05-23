(function ($) {
  $('.se-vi-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '.prev-btn',
    nextArrow: '.next-btn',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
  $('.se-vii-carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '.prev-btn2',
    nextArrow: '.next-btn2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });

  // :: Cards Carousel
  $('#cards-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    prevArrow: '.prev-btn-2',
    nextArrow: '.next-btn-2',
    infinite: false,
    responsive: [
      {
        breakpoint: 1556,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1174,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });


  $('#nav-toggle-btn').on('click', function() {
    $('#theme-navbar').toggleClass('menu-open');
  });

  // Plans Toggle Button
  $('#plansToggleBtn').on('click', function() {
    if($(this).is(':checked')) {
      $('.annual-span').hide();
      $('.month-span').show();
    } else {
      $('.annual-span').show();
      $('.month-span').hide();
    }
  });



}(jQuery));
