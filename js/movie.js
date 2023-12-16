const swiper2 = new Swiper('.swiper-film', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: '4',
    centeredSlides: true,
        autoplay: {
        delay: 2000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    centeredSlides: true,
    // centeredSlidesBounds: true,

      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        350: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 180,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 290,
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 220,
        },
        810: {
          slidesPerView: 3,
          spaceBetween: 320,
        },
        906: {
          slidesPerView: 3,
          spaceBetween: 320,
        },
        940: {
          slidesPerView: 4,
          spaceBetween: 320,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 300,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 200,
        },
      },

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });