//! Search Modal Logic
const modalSearch = document.querySelector('.search-modal');
const searchIcon =document.querySelector('.navabr__search-icon-svg');
const closeModalBtn = document.querySelector('.search-modal__close');
const modalContainer = document.querySelector('.modal-container');

const notifModalCloseBtn = document.querySelector('.notif-modal__close');
const notifBox = document.querySelector('.notif-box');
const navbarBellIcon = document.querySelector('.navbar__bell-icon-svg');
let flag = false;

searchIcon.addEventListener('click',()=>{
    modalSearch.classList.add('modal-show');
    notifBox.style.display='none';
})

closeModalBtn.addEventListener('click',()=>{
    modalSearch.classList.remove('modal-show');
})

navbarBellIcon.addEventListener('click',()=>{
    if(!flag){
        notifBox.style.display='flex';
        flag=true;
    }else{
        notifBox.style.display='none';
        flag=false;
    }
})