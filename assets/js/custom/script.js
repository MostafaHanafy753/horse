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

// Get the modal
const modal = document.getElementById("modal");

// Get all the links that open the modal
const links = document.querySelectorAll(".open-modal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Loop through each link and add an onclick event listener
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.addEventListener('scroll',reveal);
function reveal(){
  var reveals= document.querySelectorAll('.reveal');
for( var i=0 ;i<reveals.length;i++){
  var windowheight =window.innerHeight;
  var revealtop=reveals[i].getBoundingClientRect().top;
var revealpoint =150;
if (revealtop<windowheight-revealpoint){
  reveals[i].classList.add('activation');
}
else{
  reveals[i].classList.remove('activation');

}
}
}

