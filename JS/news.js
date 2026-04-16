export class News{
    constructor(number){
        this.name = `Title #${number}`;
        this.render();
    }

    render(){
        this.element = document.createElement("div");
        this.element.classList.add("news");
        this.elemParent = document.getElementById("newsGen");
        const nameElem = document.createElement("p");
        const removeBtn = document.createElement("button");
        this.element.textContent = this.name;
        nameElem.textContent = "This is some news, meant to be news for the news. Did you knews?";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            this.elemParent.removeChild(this.element);
            removed();
        });
        this.element.appendChild(nameElem);
        this.element.appendChild(removeBtn);
        this.elemParent.appendChild(this.element);
    }

    destroy(){
        this.elemParent.removeChild(this.element);
    }
}