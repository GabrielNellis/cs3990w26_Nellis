import {updateScore} from "./gameshow.js"

export class Tile{
    constructor(data){
        this.question = data.question;
        this.options = data.options;
        this.correctAnswer = data.correctAnswer;
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
                let text = "Good Job!";
                updateScore(1, text);
                this.element.style.backgroundColor = "green";
            }
            else{
                let text = "Wrong Answer!";
                updateScore(0, text);
                this.element.style.backgroundColor = "red";
            } 
            this.element.innerHTML = selected.value;
        });
        questionContainer.appendChild(confirm);
        this.element.appendChild(questionContainer);
    }
}