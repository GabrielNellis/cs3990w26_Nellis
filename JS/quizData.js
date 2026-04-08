import {updateScore} from "./gameshow.js"
export let score = 0;

class Tile{
    constructor(data){
        this.question = data.question;
        this.options = data.options;
        this.correctAnswer = data.correctAnswer;
        this.parent = document.getElementById("gameBoard"); //making it all append to the game board
        this.answered = false;
        this.shown = false;

        this.element = document.createElement("div");
        this.element.classList.add("tile");
        // this.element.textContent = this.question; //likely wont need it
        this.element.addEventListener("click", () => {
            if (!this.shown){
                this.showQuestion();
                this.shown = true;
            }
        });
        this.parent.appendChild(this.element);
    }

    showQuestion(){
        if (this.answered) return; //if question was already answered
        this.element.innerHTML = "";
        const questionContainer = document.createElement("div");
        questionContainer.classList.add("questions");

        const qtext = document.createElement("p");
        qtext.textContent = this.question;
        questionContainer.appendChild(qtext);

        const list = document.createElement("ul");
        const groupName = `question-${Math.random()}`;

        this.options.forEach((opt, index) => {
            const li = document.createElement("li");
            const label = document.createElement("label");
            const input = document.createElement("input");

            input.type = "radio";
            input.name = groupName;
            input.value = opt;

            label.appendChild(input);
            label.appendChild(document.createTextNode(opt));

            li.appendChild(label);
            list.appendChild(li);
        });
        questionContainer.appendChild(list);

        const confirm = document.createElement("button");
        confirm.textContent = "Confirm";
        confirm.addEventListener("click", () => {
            const selected = questionContainer.querySelector("input[type=radio]:checked");
            if(!selected){
                alert("Please select an answer");
                return;
            }
            this.answered = true;
            if (selected.value == this.correctAnswer){
                score++;
                updateScore();
            }
            this.element.style.backgroundColor = "red";
            this.element.innerHTML = selected.value;
        });
        questionContainer.appendChild(confirm);
        this.element.appendChild(questionContainer);
    }
}

class AssetTile{
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

    }
}

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Do you like JS?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    }
    //more to be added later
]

const assets = [
    {
        value: "💎",
        description: "You are getting an extra star"
    },
    {
        value: "🐻",
        description: "The scary bear takes away one star"
    },
    {
        value: "❌",
        description: "Game OVER!!!"
    }
]

export function generateTiles() { //only going to do the questions array for now
    questions.forEach(tile => {
        new Tile(tile);
    });
}