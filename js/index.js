//! Search Modal Logic
const modalSearch = document.querySelector('.search-modal');
const searchIcon =document.querySelector('.navabr__search-icon-svg');

searchIcon.addEventListener('click',()=>{
    modalSearch.classList.add('modal-show');
})