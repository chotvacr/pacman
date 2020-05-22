'use strict';

console.log('it works!');

let mouth = 'open';
const PacOpen = document.querySelector('.pacboy-active-light') ;

document.addEventListener('click', () => {
    if (mouth === 'open') {
        PacOpen.style.backgroundPositionX = '85px';
        mouth = 'closed';
    }
    else  {
        PacOpen.style.backgroundPositionX = '0px';
        mouth='open';
    }
        });
   
  
