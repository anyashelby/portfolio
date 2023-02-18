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


$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#thanks').fadeOut();
        $('#thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();