let menuBtn = document.querySelector('.menu-btn');
let menuIconOpen = document.querySelector('.menu-icon-open');
let menuIconClose = document.querySelector('.menu-icon-close');
let navWrapper = document.querySelector('.nav-wrapper');
let deliverBtn = document.querySelectorAll('.deliver-food');
let nav = document.querySelector('.nav')
menuBtn.addEventListener('click',()=>{
    navWrapper.classList.toggle('active')
    menuBtn.classList.toggle('active')
    menuIconOpen.classList.toggle('active');
    menuIconClose.classList.toggle('active');
    nav.classList.toggle('active'); 
})
for (let i = 0; i < deliverBtn.length; i++) {
    deliverBtn[i].addEventListener('click',()=>{
        deliverBtn[i].classList.toggle('active')
    })
}

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=')
.then(res=>res.json())
.then(data => console.log(data))