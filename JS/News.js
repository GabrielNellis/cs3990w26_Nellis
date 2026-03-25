export class News{
    constructor(title, image, text){
        this.title = title;
        this.image = image;
        this.text = text;
        this.likeCount = 0;
        this.container = null;
    }
    render(){
        //creating everything
        this.container = document.createElement("div");
        this.container.style.padding = "5px";
        this.titleDiv = document.createElement("h1");
        this.titleDiv.textContent = this.title;
        this.imageDiv = document.createElement("img");
        this.imageDiv.src = this.image;
        this.paraDiv = document.createElement("p");
        this.paraDiv.textContent = this.text;
        this.likeBtn = document.createElement("button");
        this.likeBtn.textContent = "Like";
        this.likeBtn.style.margin = "5px";
        this.likeBtn.onclick() = () => this.incLikes();
        this.hideBtn = document.createElement("button");
        this.hideBtn.textContent = "Hide";
        this.hideBtn.style.margin = "5px";
        this.hideBtn.onclick() = () => this.hide();
        //appending everything
        this.container.appendChild(this.titleDiv);
        this.container.appendChild(this.imageDiv);
        this.container.appendChild(this.paraDiv);
        this.container.appendChild(this.likeBtn);
        this.container.appendChild(this.hideBtn);
    }
    incLikes(){
        this.likeCount++;
    }
    hide(){
        this.likeBtn.disabled = true;
        this.container.style.backgroundColor = "grey";
        this.paraDiv.style.color = "grey";
        this.titleDiv.style.color = "grey";
    }
    show(){

    }
}