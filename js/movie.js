//!  add api To movie Info Box in Movie.html
const filmDescriptionWrapperRight = document.querySelector('.movie-desc-container');
const swiperWrapperImage = document.querySelector('.swiper-wrapper-image')
window.addEventListener('load',getMovieInfo)
let movieID = localStorage.getItem("id");
function getMovieInfo(){
  filmDescriptionWrapperRight.innerHTML=''
  fetch(`https://moviesapi.ir/api/v1/movies/${movieID}`)
  .then(res => res.json())
  .then(movie => 
    filmDescriptionWrapperRight.insertAdjacentHTML('beforeend',`
    
    <div class="film__desc-wrapper" >
    <div class="film__desc-wrapper-left">
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
    </div>
  </div>

  <div class="film__desc-wrapper-about">
    <h3 class="film__desc-wrapper-about-title">About the movie</h3>
    <p class="film__desc-wrapper-about-text">
      ${movie.plot}
    </p>
  </div>


  <div class="movie-images" >
      <div class="movie-image">
          <img class='movie-image-img' src="${movie.images[0]}" alt="image">
      </div>

      <div class="movie-image">
          <img class='movie-image-img' src="${movie.images[1]}" alt="image">
      </div>

      <div class="movie-image">
          <img class='movie-image-img' src="${movie.images[2]}" alt="image">
      </div>
</div>
    `)
    )
}


//!  Api For movie Similar Slider in Movie.html
const swiperSimilarWrapper = document.querySelector('.swiperSimilarWrapper');
window.addEventListener('load',getSimilarSliderInfo)
function getSimilarSliderInfo(){
  swiperSimilarWrapper.innerHTML='';
  let MovieGenreId = localStorage.getItem('MovieGenreId');
  fetch(`https://moviesapi.ir/api/v1/genres/${MovieGenreId}/movies?page1`)
  .then(res => res.json())
  .then(movies =>
    movies.data.forEach((movie)=>{
      swiperSimilarWrapper.insertAdjacentHTML('beforeend',`
      <div class="swiper-slide similar-slide" onclick='showMovieInfo(${movie.id})' >
      <div class="similar__slider-contents">
        <span class="similar__slider-contents-category">${movie.genres[0]}</span
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


//! Set Similar Movie Id in LocalStorage
function showMovieInfo(id){
  console.log(id);
  localStorage.setItem('id',id)
  location.href='./Movie.html'
}



//!   Similar Movie Slider in Movie.html
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



//!  Sweet Alert 2 Logic
Swal.fire({
  title: 'توجه',
  text:'در این صفحه اطلاعات فیلم نمایش داده می شود که اطلاعات از api گرفته می شود  اما بخش کامنت ها به صورت استاتیک می باشد و اسلایدر similar فیلم های مشابه را نمایش می دهد', 
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





