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






