//!  add api To movie Info Box in Movie.html
const filmDescriptionWrapperRight = document.querySelector('.movie-desc-container');
const swiperWrapperImage = document.querySelector('.swiper-wrapper-image')
window.addEventListener('load',getMovieInfo)
function getMovieInfo(){
  filmDescriptionWrapperRight.innerHTML=''
  fetch('https://moviesapi.ir/api/v1/movies/1')
  .then(res => res.json())
  .then(movie => 
    filmDescriptionWrapperRight.insertAdjacentHTML('beforeend',`
    
    <div class="film__desc-wrapper">
    <div class="film__desc-wrapper-left">
      <span class="film__desc-wrapper-left-title">${movie.genres}</span>
      <img
        class="film__desc-wrapper-image"
        src="${movie.poster}"
        alt=""
      />
    </div>

    <div class="film__desc-wrapper-right">
      <h2 class="film__desc-wrapper-right-title">${movie.title}</h2>
      <div class="film__desc-wrapper-right-box">
        <span class="film__desc-wrapper-right-name">
          Year
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.year}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Released
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.released}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          RunTime:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.runtime}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Director:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.director}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Writor:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.writer}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Actors:
          <a href="#" class="film__desc-wrapper-right-name-link">
           ${movie.actors}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Country:
          <a href="#" class="film__desc-wrapper-right-name-link">
           ${movie.country}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Awards:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.awards}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          MetaScore:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.metascore}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          IMDB Rating:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.imdb_rating}
          </a>
        </span>

        <span class="film__desc-wrapper-right-name">
          Genres:
          <a href="#" class="film__desc-wrapper-right-name-link">
            ${movie.genres}
          </a>
        </span>
      </div>

      <div class="film__desc-wrapper-right-like">
        <span class="film__desc-wrapper-right-like-btn">
          <svg
            class="film__desc-wrapper-right-like-btn-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7796 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z"
              fill="#0DE509"
            />
          </svg>
          1K
        </span>
        <span class="film__desc-wrapper-right-dislike-btn">
          <svg
            class="film__desc-wrapper-right-dislike-btn-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3H6.693C6.28611 3.00135 5.88922 3.12616 5.55478 3.35792C5.22035 3.58969 4.96413 3.91749 4.82 4.298L2.063 11.649C2.02114 11.7613 1.9998 11.8802 2 12V14C2 15.103 2.897 16 4 16H9.612L8.49 19.367C8.38997 19.6676 8.36264 19.9877 8.41027 20.301C8.4579 20.6142 8.57913 20.9117 8.764 21.169C9.14 21.689 9.746 22 10.388 22H12C12.297 22 12.578 21.868 12.769 21.64L17.469 16H20C21.103 16 22 15.103 22 14V5C22 3.897 21.103 3 20 3ZM11.531 20H10.386L11.948 15.316C11.998 15.1657 12.0117 15.0058 11.9878 14.8492C11.9639 14.6926 11.9032 14.544 11.8106 14.4155C11.7181 14.287 11.5963 14.1823 11.4554 14.1101C11.3144 14.0379 11.1584 14.0001 11 14H4V12.181L6.693 5H16V14.638L11.531 20ZM18 14V5H20L20.001 14H18Z"
              fill="#E50914"
            />
          </svg>
          0
        </span>
      </div>

      <div class="film__desc-wrapper-right-btns">
        <span
          id="scroll-to-watch"
          class="film__desc-wrapper-right-watch"
        >
          <a
            id="my-link"
            href="#my-video"
            class="film__desc-wrapper-right-watch-link"
          >
            <svg
              class="film__desc-wrapper-right-watch-svg"
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z"
                fill=""
              />
            </svg>
            WATCH
          </a>
        </span>
        <span class="film__desc-wrapper-right-download">
          <a href="#" class="film__desc-wrapper-right-download-link">
            Download
          </a>
        </span>
      </div>
    </div>
  </div>

  <div class="film__desc-wrapper-about">
    <h3 class="film__desc-wrapper-about-title">About the movie</h3>
    <p class="film__desc-wrapper-about-text">
      ${movie.plot}
    </p>
  </div>

  <div class="movie-slider-box">
    <div class="swiper swiper-movie">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper swiper-wrapper-image">
        <!-- Slides -->
        <div class="swiper-slide">
        <img
          class="movie__slider-image"
          src="${movie.images[0]}"
          alt="image"
        />
      </div>
        <div class="swiper-slide">
        <img
          class="movie__slider-image"
          src="${movie.images[1]}"
          alt="image"
        />
      </div>
        <div class="swiper-slide">
        <img
          class="movie__slider-image"
          src="${movie.images[2]}"
          alt="image"
        />
      </div>

      </div>
      <!-- If we need pagination -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- If we need navigation buttons -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
    `)
    )
}




//!  add api To movie Similar Slider in Movie.html
const swiperSimilarWrapper = document.querySelector('.swiperSimilarWrapper');
window.addEventListener('load',getSimilarSliderInfo)
function getSimilarSliderInfo(){
  swiperSimilarWrapper.innerHTML='';
  fetch('https://moviesapi.ir/api/v1/movies?page=10')
  .then(res => res.json())
  .then(movies =>
    movies.data.forEach((movie)=>{
      swiperSimilarWrapper.insertAdjacentHTML('beforeend',`
      <div class="swiper-slide similar-slide">
      <div class="similar__slider-contents">
        <span class="similar__slider-contents-category">${movie.genres}</span
        >
        <div class="similar__slider-contents-stars">
          <svg
            class="similar__slider-contents-star"
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
            class="similar__slider-contents-star"
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
            class="similar__slider-contents-star"
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
            class="similar__slider-contents-star"
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
            class="similar__slider-contents-star"
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
        <span class="similar__slider-name"> ${movie.title} </span>
      </div>
      <img
        src="${movie.poster}"
        alt="image"
        class="similar__slider-img"
      />
    </div>
      
      `)
    })
    )
}


//!  add api To Image Slider  in Movie.html
const swiper = new Swiper('.swiper-movie', {
  direction: 'horizontal',
  // loop: true,
  slidesPerView: '1',
  centeredSlides: true,
  slidesPerView:'1',
  slidesPerGroup:'3',
    //   autoplay: {
    //   delay: 1000,
    // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


    breakpoints: {
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
});


//!  add api To Similar Movie Slider in Movie.html
const swiper2 = new Swiper('.similar-swiper-film', {
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
  centeredSlidesBounds: true,

    breakpoints: {
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
