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

const TILE_SIZE = 85;

class Pacman {
    constructor(xpos, ypos, mouth) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
    }
   
    move(direction) {
       if(direction==='right') {
           this.xpos += 1;
       } else if(direction==='left') {
           this.xpos -= 1;
       }
       else if(direction==='up') {
           this.ypos -= 1;
       } else {
           this.ypos += 1;
       }
    
        if (this.mouth === 'open') {
            this.mouth = 'closed';
        }
        else  {
            this.mouth ='open';
        }
        this.direction =direction;
    }
    

};
 
const pac = new Pacman(1,1,'open');

const update = () => {
    const pacmanElm = document.querySelector('.entity--pac');
    pacmanElm.style.left = `${pac.xpos*TILE_SIZE}px`;
    pacmanElm.style.top = `${pac.ypos*TILE_SIZE}px`;
    
    if (pac.mouth === 'open') {
        pacmanElm.style.backgroundPositionX = '85px';
    }
    else {
        pacmanElm.style.backgroundPositionX = '0px';
    }

    if (pac.direction === 'right') {
        pacmanElm.style.backgroundPositionY = '0px ';
    }
    else if (pac.direction === 'left'){
        pacmanElm.style.backgroundPositionY = '255px';
    }
    else if (pac.direction === 'up'){
        pacmanElm.style.backgroundPositionY = '85px';
    }
    else {
        pacmanElm.style.backgroundPositionY = '170px';
    }
}
document.addEventListener('keydown', (event) => {
    
    if (event.key === 'ArrowRight') {
        pac.move('right');
        update();
    }
    
    if (event.key === 'ArrowLeft') {
        pac.move('left');
        update();
    }
    if (event.key === 'ArrowUp') {
        pac.move('up');
        update();
    }
    if (event.key === 'ArrowDown') {
        pac.move('down');
        update();
    }
});
