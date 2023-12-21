const moviesListBoxs = document.querySelector('.movies__list-boxs');

window.addEventListener('load',getMoviesInfo);

function getMoviesInfo(){
    moviesListBoxs.innerHTML='';
    fetch('https://moviesapi.ir/api/v1/movies?page=1')
    .then(res => res.json())
    .then(movies=>
        movies.data.forEach((movie)=>{
            moviesListBoxs.insertAdjacentHTML('beforeend',`
            <div class="movies__list-box">
            <img src="${movie.poster}" alt="movie" class="movies__list-box-img">
            <div class="movies__list-box-detail">
              <h4 class="movies__list-box-detail-name">
                ${movie.title}
              </h4>
              <a href="./movie.html" class="movies__list-box-detail-btn" onclick="setIdToStorage(${movie.id})">
                <svg class="movies__list-box-detail-btn-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>                            
                Watch
              </a>
            </div>
          </div>
            `)
        })    
    )
}

let moviesListBoxDetailBtns = document.querySelectorAll('.movies__list-box-detail-btn')
console.log(moviesListBoxDetailBtns);
function setIdToStorage(id){
  console.log(id);
  localStorage.setItem("id", id);
}