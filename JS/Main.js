import {arrTexts, arrColors, fontColors} from "./myArrays.js"
import {buildButtons, showButtons} from "./myFunctions.js"

const arrButtons = buildButtons(arrTexts, arrColors, fontColors);
showButtons(arrButtons);