const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const closeList = document.querySelector('.menu__list');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeList.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.addEventListener('keydown', function(e){
    if( e.keyCode == 27 ){
        menu.classList.remove('active');    
    }; 
});

overlay.addEventListener('click', () => {
    menu.classList.remove("active");
});

const counter = document.querySelectorAll('.skills__rating-counter'),
      lines = document.querySelectorAll('.skills__rating-line span');
counter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();