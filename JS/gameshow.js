import {timer} from "./timer.js"
document.getElementById("startGame").addEventListener("click", gameBegin);

function gameBegin(){
    timer();
    document.getElementById("gameShw").classList.remove("hidden");
}

export function gameOver(){
    
}