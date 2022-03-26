const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;


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
    let randomTime = Math.random() * 6000;
    
    
  
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  
    let leftTimer = setInterval(() => {
        if (cactusPosition < -60) {
 
            // Saiu da tela
            clearInterval(leftTimer);
            background.removeChild(cactus);

        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo <br> Pressione F5</h1>';
            

        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'; 
        }

    }, 20);
  
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

