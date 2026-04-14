import {News} from "./news.js"

let num = 0;
export class NumberGenerator{
    constructor(){
        this.element = document.createElement("div");
        this.element.setAttribute("id", "newsGen");
        const upper = document.createElement("button");
        this.text = document.createElement("p");
        const lower = document.createElement("button");
        const numberGen = document.createElement("button");
        upper.addEventListener("click", () => {
            this.greater();
        });
        lower.addEventListener("click", () => {
            this.lesser();
        });
        numberGen.addEventListener("click", () => {
            this.generateNum();
        });
        //may need to include some things here for looks

        this.element.appendChild(upper);
        this.element.appendChild(this.text);
        this.element.appendChild(lower);
        this.element.appendChild(numberGen);

        document.body.appendChild(this.element);
    }

    generateNum(){
        num = (int)(Math.random()*101);
        for (let i=0; i<num; i++){
            new News(i);
        }
    }

    greater(){
        num++;
        new News(num);
        this.changeNum();
    }

    lesser(){
        num--;
        this.element.lastChild.remove(); //deleting the last news from this
        this.changeNum();
    }

    changeNum(){
        this.text.textContent = `${num}`;
    }

    destroy(){
        document.body.removeChild(this.element);
    }
}