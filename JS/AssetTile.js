import {updateScore} from "./gameshow.js"

export class AssetTile{
    constructor(data){
        this.value = data.value;
        this.desc = data.description;
        this.parent = document.getElementById("gameBoard"); //making it all append to the game board
        this.answered = false;
        this.shown = false;
        this.element = document.createElement("div");
        this.element.classList.add("tile");
        this.element.addEventListener("click", () => {
            if (!this.shown){
                this.showQuestion();
                this.shown = true;
            }
        });
        this.parent.appendChild(this.element);
    }

    showQuestion(){
        if(this.answered) return;
        const elem = document.createElement("div");
        elem.classList.add("questions");
        const val = document.createElement("p");
        val.textContent = this.value;
        const desc = document.createElement("p");
        desc.textContent = this.desc;
        elem.appendChild(val);
        elem.appendChild(desc);
        this.answered = true;
        updateScore(0, this.value);
        this.element.appendChild(elem);
    }
}