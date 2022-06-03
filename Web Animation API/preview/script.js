'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

/* const phoneAnimation = images[0].animate([ //анимация для картинки 1, работает по дефолту
    {transform: 'translateY(0)'}, // свойства с ключ точками анимации
    {transform: 'translateY(100px)'},
    {transform: 'translateY(-100px)'},
    {transform: 'translateX(-50px)'},
    {transform: 'translateX(50px)'},
    {transform: 'translateY(0)'}
], { //объект с настройками
    duration: 7000, //длительность анимации
    iterations: Infinity, //кол-во повторений
}); */

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) { //если нет анимации, то создаем
        phoneAnimation = images[0].animate([
            {transform: 'translateY(100px) rotate(0deg)', 
             filter: 'opacity(50%)'},
            {transform: 'translateY(-100px) rotate(0deg)',
             filter: 'opacity(75%)'},
            {transform: 'translateX(-50px)'},
            {transform: 'translateX(50px)'},
            {transform: 'translateY(0) rotate(360deg)',
             filter: 'opacity(100%)'}
        ], {
            duration: 7000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') { //если она есть, но она на паузе, то 
        phoneAnimation.play(); //то активируем ее
    } else {
        phoneAnimation.pause(); // ставим на паузу в противном случае
    }
});

let macAnimation;
btnMacbook.addEventListener('mouseover', () => {
    if (!macAnimation) { //если нет анимации, то создаем
        macAnimation = images[1].animate([
            {transform: 'translateX(150px) scale(1.2) skewX(10deg) skewY(5deg)', 
             filter: 'opacity(50%)'},
            {transform: 'translateX(100px) scale(1.4) skewX(12deg) skewY(7deg)',
             filter: 'opacity(75%)'},
            {transform: 'translateX(50px) scale(1.6) skewX(15deg) skewY(10deg)'},
        ], {
            duration: 4000,
            iterations: Infinity
        });
        
    } else if (macAnimation.playState === 'paused') { 
        macAnimation.reverse(); //запуск в обратном порядке
    } else {
        macAnimation.pause();
    }
});