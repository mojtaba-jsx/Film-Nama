//! Search Modal Logic
const modalSearch = document.querySelector('.search-modal');
const searchIcon =document.querySelector('.navabr__search-icon-svg');
const closeModalBtn = document.querySelector('.search-modal__close');
const modalContainer = document.querySelector('.modal-container');


searchIcon.addEventListener('click',()=>{
    modalSearch.classList.add('modal-show');
    // modalContainer.style.filter = 'blur(10px)'
})

closeModalBtn.addEventListener('click',()=>{
    modalSearch.classList.remove('modal-show');
})
