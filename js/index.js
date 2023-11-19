//! Elements
let flag = false;
const modalSearch = document.querySelector('.search-modal');
const searchIcon =document.querySelector('.navabr__search-icon-svg');
const closeModalBtn = document.querySelector('.search-modal__close');
const modalContainer = document.querySelector('.modal-container');
//& //
const notifModalCloseBtn = document.querySelector('.notif-modal__close');
const notifBox = document.querySelector('.notif-box');
const navbarBellIcon = document.querySelector('.navbar__bell-icon-svg');

//& //
const languageIcon = document.querySelector('.navbar__lang-icon')
const languageIconSvg = document.querySelector('.navbar__lang-icon-svg')
const languageList = document.querySelector('.language__list');
const languageArrowIcon = document.querySelector('.navbar__lang-icon-arrow')

//! Search Modal Logic For Show And Hide Modal
searchIcon.addEventListener('click',()=>{
    if(!flag){
        modalSearch.classList.add('modal-show');
        searchIcon.style.fill='#E50914'
        flag=true;
    }else{
        modalSearch.classList.remove('modal-show');
        searchIcon.style.fill='white'
        flag=false;
    }
})

closeModalBtn.addEventListener('click',()=>{
    modalSearch.style.display='none';
    searchIcon.style.fill='white'
})

//! Notif Box Logic For Show And Hide Notif Box
navbarBellIcon.addEventListener('click',()=>{
    if(!flag){
        notifBox.style.display='flex';
        navbarBellIcon.style.stroke='#E50914';
        flag=true;
    }else{
        notifBox.style.display='none';
        navbarBellIcon.style.stroke='white';
        flag=false;
    }
})

//!  Logic For Show And Hide Language Menu

languageIcon.addEventListener('click',()=>{
    if(!flag){
        languageList.style.display='flex';
        languageIconSvg.style.fill='#E50914';
        languageArrowIcon.style.transform='rotate(0deg)'
        flag=true;
    }else{
        languageList.style.display='none';
        languageIconSvg.style.fill='white';
        languageArrowIcon.style.transform='rotate(180deg)'
        flag=false;
    }
})