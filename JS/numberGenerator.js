import {News} from "./news.js"

let num = 0;
export class NumberGenerator{
    constructor(){
        this.element = document.createElement("div");
        this.element.classList.add("numGen");
        this.element.setAttribute("id", "newsGen");
        const upper = document.createElement("button");
        this.text = document.createElement("p");
        const lower = document.createElement("button");
        const numberGen = document.createElement("button");
        this.newsItems = [];
        upper.classList.add("numGenBtn");
        this.text.classList.add("numGenBtn");
        lower.classList.add("numGenBtn");
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
        this.text.textContent = 0;
        upper.textContent = "+";
        lower.textContent = "-";
        numberGen.textContent = "Generate";
        this.element.appendChild(upper);
        this.element.appendChild(this.text);
        this.element.appendChild(lower);
        this.element.appendChild(numberGen);
    }

    generateNum(){
        while (this.newsItems.length > 0){
            const newsItem = this.newsItems.pop();
            newsItem.destroy();
        }
        num = Math.floor(Math.random()*100);
        for (let i=1; i<=num; i++){
            const newsItem = new News(i);
            this.newsItems.push(newsItem);
        }
        this.changeNum();
    }

    render(){
        return this.element;
    }

    greater(){
        num++;
        const newsItem = new News(num);
        this.newsItems.push(newsItem);
        this.changeNum();
    }

    lesser(){
        if (this.newsItems.length > 0){ //just making sure its a news article we're deleting
            num--;
            const newsItem = this.newsItems.pop();
            newsItem.destroy();
            this.changeNum();
        }
    }

    changeNum(){
        this.text.textContent = `${num}`;
    }

    destroy(){
        document.body.removeChild(this.element);
    }
}
//need to make sure that when deleting a news article manually, it gets removed from the list still