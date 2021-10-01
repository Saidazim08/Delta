var swiper = new Swiper('.mySwiper1', {

  direction: 'horizontal',
  slidesPerView: 3,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 70
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






