const dino = document.querySelector('.dino');


function handleKeyUp() {
    
    if (event.keyCode === 32) {
        console.log('Pressionou espaço!');
        jump();
    }
}

function jump() {
    let position = 0;
  
    let upInterval = setInterval(() => {
        if (position >= 150) {

        // Descendo
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
            if (position <= 0) {
            clearInterval(downInterval);

            
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
  
document.addEventListener('keyup', handleKeyUp);

