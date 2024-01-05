//! Element Variables
const searchModalInput =document.querySelector('.search-modal__input');
const searchModalBtn = document.querySelector('.search-modal__btn');


//! send Request To Get searched movie Inf
searchModalBtn.addEventListener('click',searchBtnHandler)
 function searchBtnHandler(){
    let searchImputValue = searchModalInput.value;
    fetch(`https://moviesapi.ir/api/v1/movies?q=${searchImputValue}&page={page}`)
    .then(res=>res.json())
    .then(movieData=>
    movieData.data.length ? localStorage.setItem('id',movieData.data[0].id) : location.href='Home.html'
        
        ).then(
            setTimeout(() => {
                changeDirectory()
            }, 1000)
        )
}
//! Change Path
 function changeDirectory(){
    location.href ='./Movie.html'
}




