import {timer} from "./timer.js"
import {generateTiles, score, changeScore} from "./quizData.js"
document.getElementById("startGame").addEventListener("click", gameBegin);
let gameStarted = false;

function gameBegin(){
    if (gameStarted) return;
    gameStarted = true;
    generateTiles();
    timer();
    document.getElementById("gameShw").classList.remove("hidden");
}

function gameOver(){
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.pointerEvents = "none";
    });
    //need to do more for game over but good enough for now
}

export function timeUp(){
    gameOver();
    document.getElementById("gameOver").classList.remove("hidden");
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.remove();
    });
    let text = "card->DONE";
    updateScore(0, text);
}

export function updateScore(num, feedback){
    //just to handle the emoji cases (and change the written text)
    switch (feedback){
        case "💎":
            feedback = "+1 Star!";
            num = 1;
            break;
        case "🐻":
            feedback = "-1 Star!";
            num = -1;
            break;
        case "❌":
            feedback = "You can do nothing! Just watching your timer!";
            gameOver();
            break;
    }
    const ans = document.getElementById("answer");
    ans.textContent = feedback;
    ans.classList.add("show");
    setTimeout(() => {
        ans.classList.remove("show");
    }, 2000);

    //updating score
    changeScore(num);
    const scoreElement = document.getElementById("score");
    if (score >= 0) scoreElement.textContent = "★".repeat(score);
    else scoreElement.textContent = "You're in debt already...";
}