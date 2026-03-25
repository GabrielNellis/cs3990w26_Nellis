export class Button{
    constructor(btnText, btnBgColor, btnTitle){
        this.btnText = btnText;
        this.btnBgColor = btnBgColor;
        this.btnTitle = btnTitle;
    }

    show(){
        const button = document.createElement("button");
        button.textContent = this.btnText;
        button.style.backgroundColor = this.btnBgColor;
        button.style.margin = "5px"; //just to seperate buttons
        button.title = this.btnTitle;
        document.getElementById("header").appendChild(button); //makes it so the buttons properly appear in the header
        // document.write(`
        //     <button style="background-color: ${this.btnBgColor};" title="${this.btnTitle}">
        //         ${this.btnText}
        //     </button>
        // `); //none of this works
    }
}