const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() { //анимация на css
//     let pos = 0;

//     const id = setInterval(frame, 10); //обновляться каждые 10мсек
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) { //счетчик на 300 повторений
        requestAnimationFrame(myAnimation);
    } else {
        pos = 0;
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); //запустить конструкцию после клика

let id = requestAnimationFrame(myAnimation); 
cancelAnimationFrame(id); //отмена анимации