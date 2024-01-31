let menuBtn = document.querySelector('.menu-btn');
let navWrapper = document.querySelector('.nav-wrapper');
let nav = document.querySelector('.nav')
menuBtn.addEventListener('click',()=>{
    navWrapper.classList.toggle('active')
    nav.classList.toggle('active')
})