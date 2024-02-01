let menuBtn = document.querySelector('.menu-btn');
let menuIconOpen = document.querySelector('.menu-icon-open');
let menuIconClose = document.querySelector('.menu-icon-close');
let navWrapper = document.querySelector('.nav-wrapper');
let nav = document.querySelector('.nav')
menuBtn.addEventListener('click',()=>{
    navWrapper.classList.toggle('active')
    menuBtn.classList.toggle('active')
    menuIconOpen.classList.toggle('active');
    menuIconClose.classList.toggle('active');
    nav.classList.toggle('active')
})