var swiper = new Swiper('.mySwiper1', {

  direction: 'horizontal',
  slidesPerView: 3,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

var swiper = new Swiper('.mySwiper2', {
  direction: 'horizontal',
  loopFillGroupWithBlank: true,
  dots: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    763: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    }
  }
});


(function ($) {

  $.fn.searchBox = function (ev) {

    var $searchEl = $('.search-elem');
    var $placeHolder = $('.placeholder');
    var $sField = $('#search-field');

    if (ev === "open") {
      $searchEl.addClass('search-open')
    };

    if (ev === 'close') {
      $searchEl.removeClass('search-open'),
        $placeHolder.removeClass('move-up'),
        $sField.val('');
    };

    var moveText = function () {
      $placeHolder.addClass('move-up');
    }

    $sField.focus(moveText);
    $placeHolder.on('click', moveText);

    $('.submit').prop('disabled', true);
    $('#search-field').keyup(function () {
      if ($(this).val() != '') {
        $('.submit').prop('disabled', false);
      }
    });
  }

}(jQuery));

$('.search-btn').on('click', function (e) {
  $(this).searchBox('open');
  e.preventDefault();
});

$('.close').on('click', function () {
  $(this).searchBox('close');
});






