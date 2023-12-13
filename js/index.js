//!  Swiper Js
//!  Swiper Js Landing Section

const swiper1 = new Swiper('.swiper-container-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: '1',
    centeredSlides: true,
  
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



//!  Swiper Js Recommend Section
  const swiper2 = new Swiper('.swiper-container-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: '4',
    centeredSlides: true,
      //   autoplay: {
      //   delay: 2000,
      // },
  
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



  const swiper3 = new Swiper('.swiper-container-3', {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: '5',
    centeredSlides: true,
    autoplay:true,
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




//!  Sweet Alert 2 Logic
  // Swal.fire({
  //   title: 'توجه',
  //   text: 'این قالب با HTML CSS  و کمی JS و کتابخانه های Swiper Js , Sweet Alert2 , Video Js در 5 صفحه به صورت ریسپانسیو توسعه داده شده است',
  //   icon: 'info',
  //   animation:true,
  //   backdrop:true,
  //   iconColor:'#e50914',
  //   textDirection: "rtl",
  //   background:'#0d0c11',
  //   confirmButtonText: 'متوجه شدم',
  //   confirmButtonColor:'#e50914',
  //   focusConfirm:true,
  // })


//!  Get From Api Movies Info For landing Slider
const swiperWrapperSlider1 = document.querySelector('.swiperWrapperSlides1');
window.addEventListener('load',getLandingMoviesInfo)
function getLandingMoviesInfo(){
  swiperWrapperSlider1.innerHTML = ''
  fetch('https://moviesapi.ir/api/v1/movies?page=4')
  .then(res =>res.json())
  .then(movies =>
    movies.data.forEach(movie => {
      console.log(movie);
      
      swiperWrapperSlider1.insertAdjacentHTML('beforeend',`


      <div class="swiper-slide">
      <img
        src="${movie.poster}"
        alt="landing"
        class="landing__image-slider"
      />
      <div class="swiper-slide__contents">
        <span class="swiper-slide__contents-type">TOP</span>
        <h2 class="swiper-slide__contents-title">${movie.title}</h2>

        <div class="swiper-slide__contents-category">
          <span class="swiper-slide__contents-year">${movie.year} |</span>
          >
        </div>
        <div class="swiper-slide__contents-score">
          <span class="swiper-slide__contents-score-star">
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 15.9119L16.3348 18.8277C17.3118 19.3621 18.5073 18.5721 18.2502 17.5731L16.8362 12.09L21.554 8.39594C22.4153 7.72218 21.9525 6.44434 20.8212 6.36303L14.6123 5.88674L12.1827 0.705712C11.7456 -0.235237 10.2544 -0.235237 9.81734 0.705712L7.38773 5.87513L1.17875 6.35141C0.047509 6.43273 -0.415273 7.71056 0.446015 8.38433L5.16381 12.0784L3.74976 17.5615C3.49266 18.5605 4.68818 19.3505 5.66516 18.8161L11 15.9119Z"
                fill="#FCC209"
              />
            </svg>
            ${movie.imdb_rating}
          </span>
          <span class="swiper-slide__contents-score-genre">
           Genre
            <span>${movie.genres} </span>
          </span>
        </div>
        <a href="#" class="swiper-slide-btn">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z"
              fill="white"
            />
          </svg>
          WATCH
        </a>
      </div>
    </div>


      `)


    })
    )
}


//!  Get From Api Movies Info For Popular Slider
const swiperWrapperSlider2 = document.querySelector('.swiperWrapperSlides2');
window.addEventListener('load',getPopularMoviesInfo)

function getPopularMoviesInfo(){
  swiperWrapperSlider2.innerHTML = ''
  fetch('https://moviesapi.ir/api/v1/movies?page=1')
  .then(res =>res.json())
  .then(movies =>
    movies.data.map(movie => {
      console.log(movie);
      
      swiperWrapperSlider2.insertAdjacentHTML('beforeend',`
      <div class="swiper-slide popular-slide">
      <div class="popular__slider-contents">
        <span class="popular__slider-contents-category">${movie.genres[0]}</span
        >
        <div class="popular__slider-contents-stars">
          <svg
            class="popular__slider-contents-star"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 3.61355L8.95832 6.36522L9.13362 6.86853H9.66659H12.5205L10.3105 8.62808L9.91732 8.94117L10.0574 9.42388L10.8684 12.2179L8.41976 10.5637L7.99992 10.2801L7.58008 10.5637L5.13146 12.2179L5.94242 9.42388L6.08252 8.94117L5.6893 8.62808L3.47933 6.86853H6.33325H6.86622L7.04152 6.36522L7.99992 3.61355Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
          <svg
            class="popular__slider-contents-star"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 3.61355L8.95832 6.36522L9.13362 6.86853H9.66659H12.5205L10.3105 8.62808L9.91732 8.94117L10.0574 9.42388L10.8684 12.2179L8.41976 10.5637L7.99992 10.2801L7.58008 10.5637L5.13146 12.2179L5.94242 9.42388L6.08252 8.94117L5.6893 8.62808L3.47933 6.86853H6.33325H6.86622L7.04152 6.36522L7.99992 3.61355Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
          <svg
            class="popular__slider-contents-star"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 3.61355L8.95832 6.36522L9.13362 6.86853H9.66659H12.5205L10.3105 8.62808L9.91732 8.94117L10.0574 9.42388L10.8684 12.2179L8.41976 10.5637L7.99992 10.2801L7.58008 10.5637L5.13146 12.2179L5.94242 9.42388L6.08252 8.94117L5.6893 8.62808L3.47933 6.86853H6.33325H6.86622L7.04152 6.36522L7.99992 3.61355Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
          <svg
            class="popular__slider-contents-star"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 3.61355L8.95832 6.36522L9.13362 6.86853H9.66659H12.5205L10.3105 8.62808L9.91732 8.94117L10.0574 9.42388L10.8684 12.2179L8.41976 10.5637L7.99992 10.2801L7.58008 10.5637L5.13146 12.2179L5.94242 9.42388L6.08252 8.94117L5.6893 8.62808L3.47933 6.86853H6.33325H6.86622L7.04152 6.36522L7.99992 3.61355Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
          <svg
            class="popular__slider-contents-star"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 3.61355L8.95832 6.36522L9.13362 6.86853H9.66659H12.5205L10.3105 8.62808L9.91732 8.94117L10.0574 9.42388L10.8684 12.2179L8.41976 10.5637L7.99992 10.2801L7.58008 10.5637L5.13146 12.2179L5.94242 9.42388L6.08252 8.94117L5.6893 8.62808L3.47933 6.86853H6.33325H6.86622L7.04152 6.36522L7.99992 3.61355Z"
              fill="white"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <span class="popular__slider-name"> ${movie.title} </span>
      </div>
      <img
        src="${movie.poster}"
        alt="image"
        class="popular__slider-img"
      />
    </div>
      `)
    })
    )
}






