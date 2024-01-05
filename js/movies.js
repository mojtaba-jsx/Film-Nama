//! Get Movie Info With Api for Movies.js
const moviesListBoxs = document.querySelector('.movies__list-boxs');
window.addEventListener('load',getMoviesInfo);
function getMoviesInfo(){
    moviesListBoxs.innerHTML='';
    let movieID = localStorage.getItem("PageNumber");
    console.log(movieID);
    let movieGenreId = localStorage.getItem('genreBoxId')
    fetch(`https://moviesapi.ir/api/v1/genres/${movieGenreId ? movieGenreId:1}/movies?page=${movieID?movieID:1}`)
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
            </div>
            <a href="./movie.html" class="movies__list-box-detail-btn" onclick="setIdToStorage(${movie.id})">
            <svg class="movies__list-box-detail-btn-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>                            
            
          </a>
          </div>
            `)
        })    
    )
}

let moviesListBoxDetailBtns = document.querySelectorAll('.movies__list-box-detail-btn')
function setIdToStorage(id){
  localStorage.setItem("id", id);
}


//! Create Btns For Pagination
const paginationList = document.querySelector('.pagination__list')
let pageCount = 25
for (let index = 1; index <= pageCount; index++) {
  paginationList.insertAdjacentHTML('beforeend',`
  <li class="pagination__list-item">
  <a href="./movies.html" class="pagination__list-link">
   ${index}
  </a>
</li>
  `)
}


//! Get Page Number With set Event On Btns
const paginationListItems = document.querySelectorAll('.pagination__list-item')
paginationListItems.forEach((listItem)=>{
  listItem.addEventListener('click',(event)=>{
    let pageNumber = event.target.innerHTML
    localStorage.setItem("PageNumber", pageNumber);    
  })
})


//! Logic For get MoviesGenre
const moviesListGenersList = document.querySelector('.movies__list-geners-list')
window.addEventListener('load',getMovieGenres)
function getMovieGenres(){
  fetch('https://moviesapi.ir/api/v1/genres')
  .then(res => res.json())
  .then(datas=>
    datas.forEach((data)=>{
      moviesListGenersList.insertAdjacentHTML('beforeend',`
      <li class="movies__list-geners-item">
      <a href="#" onclick="getMoviesByGenre(${data.id})" class="movies__list-geners-link" > ${data.name} </a>
      </li>
      `)
    })

    )
}

const moviesListTitle = document.querySelector('.movies__list-title');
function getMoviesByGenre(id){

  localStorage.setItem('MovieGenreId',id)
  moviesListBoxs.innerHTML='';
  fetch(`https://moviesapi.ir/api/v1/genres/${id}/movies?page=1`)
  .then(res=> res.json())
  .then(movies => 
      movies.data.forEach((movie)=>{
        moviesListTitle.innerHTML = movie.genres[0]
        moviesListBoxs.insertAdjacentHTML('beforeend',`
        <div class="movies__list-box">
        <img src="${movie.poster}" alt="movie" class="movies__list-box-img">
        <div class="movies__list-box-detail">
          <h4 class="movies__list-box-detail-name">
            ${movie.title}
          </h4>
        </div>
        <a href="./movie.html" class="movies__list-box-detail-btn" onclick="setIdToStorage(${movie.id})">
        <svg class="movies__list-box-detail-btn-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>                            
      </a>
      </div>
        
        `)
      })
    
    )
}



//!  Sweet Alert 2 Logic
Swal.fire({
  title: 'توجه',
  text:'در این صفحه اطلاعات فیلم ها از API گرفته می شود و با کلیک بر روی هر ژانر فیلم های مربوط آن نمایش داده می شود و با کلیک بر روی هر فیلم به صفحه ی توضیحات آن منتقل می شوید ',
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