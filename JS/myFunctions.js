import {Button} from "./myButton.js";
import {ColorButton} from "./myColorButton.js";

export function buildButtons(arrText, arrColors, fontColors){
    const arrButtons = [];
    arrText.forEach((text, index) => {
        const bgColor = arrColors[index];
        const title = `${text} is showing on ${bgColor} background`;
        let btn;
        if (fontColors[index] == "") btn = new Button(text, bgColor, title);
        else{
            const fColor = fontColors[index];
            btn = new ColorButton(text, bgColor, title, fColor);
        } 
        arrButtons.push(btn);
    });
    return arrButtons;
}

export function showButtons(arrButtons){
    arrButtons.forEach((button, index) => {
        setTimeout(() => button.show(), 5000 * (index + 1));
        clearTimeout();
    });
}