'use strict';

console.log('it works!');

// let mouth = 'open';
// const PacOpen = document.querySelector('.pacboy-active-light') ;

// document.addEventListener('click', () => {
//     if (mouth === 'open') {
//         PacOpen.style.backgroundPositionX = '85px';
//         mouth = 'closed';
//     }
//     else  {
//         PacOpen.style.backgroundPositionX = '0px';
//         mouth='open';
//     }
//         });

 
 

const move = document.querySelector('.entity--pac');
const PacOpen = document.querySelector('.pacboy-active-light');

let TILE_SIZE = 85; 
let xpos=1; 
let mouth = 'open';
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                move.style.transform = `translateX(${xpos*TILE_SIZE}px)`;
                xpos +=1;

            if (mouth === 'open') {
                PacOpen.style.backgroundPositionX = '85px';
                mouth = 'closed';
             }
            else  {
                PacOpen.style.backgroundPositionX = '0px';
                mouth='open';
             }
            }
            
        }
        );
