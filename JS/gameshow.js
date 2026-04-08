import {timer} from "./timer.js"
import {generateTiles, score} from "./quizData.js"
document.getElementById("startGame").addEventListener("click", gameBegin);
let gameStarted = false;

function gameBegin(){
    if (gameStarted) return;
    gameStarted = true;
    generateTiles();
    timer();
    document.getElementById("gameShw").classList.remove("hidden");
}

export function gameOver(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "none";
    });
    //need to do more for game over but good enough for now
}

export function updateScore(){
    const scoreElement = document.getElementById("score");
    if (score >= 0) scoreElement.textContent = "★".repeat(score);
    else scoreElement.textContent = "You're in debt already...";
}