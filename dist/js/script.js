const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const closeList = document.querySelector('.menu__list');

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

new WOW().init();