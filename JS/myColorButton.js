import {Button} from "./myButton.js";

export class ColorButton extends Button{
    constructor(btnText, btnBgColor, btnTitle, fColor){
        super(btnText, btnBgColor, btnTitle);
        this.fColor = fColor;
    }
    
    show(){
        const button = document.createElement("button");
        button.textContent = this.btnText;
        button.style.backgroundColor = this.btnBgColor;
        button.style.margin = "5px";
        button.style.color = this.fColor;
        button.style.border = `2px solid ${this.btnBgColor}`;
        button.title = this.btnTitle;
        document.getElementById("header").appendChild(button);
    }
}