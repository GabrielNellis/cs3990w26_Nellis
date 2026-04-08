import {gameOver} from "./gameshow.js"
let startTime = 20;

document.getElementById("timer").textContent =
        `${startTime} secs.`;

export function timer(){
    let seconds = startTime;
    let gameTime = setInterval(() => {
        seconds--;
        document.getElementById("timer").textContent = 
            `${seconds} secs.`;
        if (seconds == 0){
            clearInterval(gameTime);
            endGame();
        }
    }, 1000);
}

function endGame(){
    gameOver(); //only putting it here to prevent infinite recurrsion
}