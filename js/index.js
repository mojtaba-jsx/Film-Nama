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
const languageIcon = document.querySelector('.navbar__lang-icon');
const languageIconSvg = document.querySelector('.navbar__lang-icon-svg');
const languageList = document.querySelector('.language__list');
const languageArrowIcon = document.querySelector('.navbar__lang-icon-arrow');

//& //
const mobileMenuIcon = document.querySelector('.mobile-menu__icon');
const mobileMenu = document.querySelector('.mobile-menu');

//& //
const mobileMenuSearchIcon =document.querySelector('.mobile-menu__search-icon');
const mobileMenuSearchbox = document.querySelector('.mobile-menu__searchbox');
const mobileMenuSearchboxBtn = document.querySelector('.mobile-menu__searchbox-btn');

//& //
const mobileMenuBellIcon = document.querySelector('.mobile-menu__bell-icon');
const mobileMenuNotifModal = document.querySelector('.mobile-menu__notif-modal');

//& //
const mobileMenuLangIcon = document.querySelector('.mobile-menu__lang-icon');
const mobileMenuLangList = document.querySelector('.mobile-menu__lang-list')
const mobileMenuLangIconSvg = document.querySelector('.mobile-menu__lang-icon-svg');





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

//!  Logic For Show And Hide Mobile Menu

mobileMenuIcon.addEventListener('click',()=>{
    console.log('hello');
    if(!flag){
        mobileMenu.style.display='block';
        mobileMenuIcon.style.transform='rotate(90deg)'
        flag=true;
    }else{
        mobileMenu.style.display='none';
        mobileMenuIcon.style.transform='rotate(0deg)'
        flag=false;
    }
})

//!  Logic For Show And Hide Mobile Menu SearchBox

mobileMenuSearchIcon.addEventListener('click',()=>{
    if(!flag){
        mobileMenuSearchboxBtn.style.display='block';
        mobileMenuSearchbox.style.display='block';
        flag=true;
    }else{
        mobileMenuSearchboxBtn.style.display='none';
        mobileMenuSearchbox.style.display='none';
        flag=false;
    }

})

//!  Logic For Show And Hide Mobile Menu NotifBox

mobileMenuBellIcon.addEventListener('click',()=>{
    if(!flag){
        mobileMenuNotifModal.style.display='block';
        flag=true
    }else{
        mobileMenuNotifModal.style.display='none';
        flag=false;
    }

})

//!  Logic For Show And Hide Mobile Menu LanguageBox

mobileMenuLangIcon.addEventListener('click',()=>{

    if(!flag){
        mobileMenuLangList.style.display='flex';
        mobileMenuLangIconSvg.style.transform='rotate(180deg)'
        flag=true;
    }else{
        mobileMenuLangList.style.display='none';
        flag=false;
    }
})

//!  Swiper Js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: '1',
    centeredSlides: true,
  
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


