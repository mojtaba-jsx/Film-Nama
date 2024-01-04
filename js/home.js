//!  Swiper Js Config Recommend Section
const swiper2 = new Swiper(".swiper-container-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,

    autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//!  Swiper Js Config Poular Section
const swiper3 = new Swiper(".swiper-container-3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: "4",
  centeredSlides: true,
  autoplay: true,
  autoplay: {
    delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


//!  Get From Api Movies Info For Recommended Slider
const swiperWrapperSlider2 = document.querySelector(".swiperWrapperSlides2");
window.addEventListener("load", getRecomendedMoviesInfo);
function getRecomendedMoviesInfo() {
  swiperWrapperSlider2.innerHTML = "";
  fetch("https://moviesapi.ir/api/v1/movies?page=5")
    .then((res) => res.json())
    .then((movies) =>
      movies.data.forEach((movie) => {
        swiperWrapperSlider2.insertAdjacentHTML(
          "beforeend",
          `
          <div class="swiper-slide recommend-slide">
          <div class="recommend__slider-contents">
            <span class="recommend__slider-contents-category"
              >${movie.genres[0]}</span
            >
            <div class="recommend__slider-contents-stars">
              <svg
                class="recommend__slider-contents-star"
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
                class="recommend__slider-contents-star"
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
                class="recommend__slider-contents-star"
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
                class="recommend__slider-contents-star"
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
                class="recommend__slider-contents-star"
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
            <span class="recommend__slider-name"> ${movie.title} </span>
          </div>
          <img
          onclick='showMovieReacommendSlider(${movie.id})'
            src="${movie.poster}"
            alt="image"
            class="recommend__slider-img"
          />
        </div>

  `
        );
      })
    );
}

//! set Movie Id To localStorage
function showMovieReacommendSlider(id){
  localStorage.setItem('id',id)
  location.href ='./movie.html'
}

//!  Get From Api Movies Info For Popular Slider
const swiperWrapperSlider3 = document.querySelector(".swiperWrapperSlides3");
window.addEventListener("load", getPopularMoviesInfo);
function getPopularMoviesInfo() {
  swiperWrapperSlider2.innerHTML = "";
  fetch("https://moviesapi.ir/api/v1/movies?page=1")
    .then((res) => res.json())
    .then((movies) =>
      movies.data.map((movie) => {
        // console.log(movie);

        swiperWrapperSlider3.insertAdjacentHTML(
          "beforeend",
          `
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
      onclick='showMovieReacommendSlider(${movie.id})'
        src="${movie.poster}"
        alt="image"
        class="popular__slider-img"
      />
    </div>
      `
        );
      })
    );
}


//!  Logic For Movie Category
const genreBoxLinks = document.querySelectorAll('.genre__box-link')
genreBoxLinks.forEach((genreBoxLink)=>{
  genreBoxLink.addEventListener('click',()=>{
    genreBoxLink.href = './movies.html'
    localStorage.setItem('genreBoxId',genreBoxLink.id);
  })
})

// //!  Sweet Alert 2 Logic
Swal.fire({
  title: 'توجه',
  text:'قالب FILM NAMA  در پنج صفحه به صورت ریپانسیو و با استفاده از CSS , HTML  و JS و با کتابخانه های SweetAlert , Swiper Js و iziToast توسعه داده شده است و باکلیک بر روی فیلم های هر اسلایدر به صفحه ی اطلاعات مربوط به آن منتقل می شوید و در بخش Category با کلیک بر روی هر ژانر به لیست مربوط به آن منتقل می شوید',
  icon: 'info',
  animation:true,
  backdrop:true,
  iconColor:'#e50914',
  textDirection: "rtl",
  background:'#0d0c11',
  confirmButtonText: 'متوجه شدم',
  confirmButtonColor:'#e50914',
  focusConfirm:true,
})







