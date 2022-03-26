const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;


function handleKeyUp() {
    
    if (event.keyCode === 32) {
        if (!isJumping) {
            //console.log('Pressionou espaço!');
            jump();
        }
    }
}

// função jumper
function jump() {
    let position = 0;
  
    let upInterval = setInterval(() => {
        if (position >= 150) {

        // Descendo
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
            if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
            
            } else {
            position -= 20;
            dino.style.bottom = position + 'px';

            }
        }, 20);
        } else {
            
        // Subindo
        position += 20;
        dino.style.bottom = position + "px";

        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);

