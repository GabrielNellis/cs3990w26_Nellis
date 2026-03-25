class News{
    constructor(image, title, text){
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
        this.likeBtn.onclick = () => this.incLikes();
        this.hideBtn = document.createElement("button");
        this.hideBtn.textContent = "Hide";
        this.hideBtn.style.margin = "5px";
        this.hideBtn.onclick = () => this.hide();
        this.starPrint = document.createElement("p");
        this.starPrint.textContent = ""; //will be filled with stars from the likeCount
        this.starPrint.style.color = "red";
        //appending everything
        this.container.appendChild(this.titleDiv);
        this.container.appendChild(this.imageDiv);
        this.container.appendChild(this.paraDiv);
        this.container.appendChild(this.likeBtn);
        this.container.appendChild(this.hideBtn);
        this.container.appendChild(this.starPrint);
        return this.container;
    }
    incLikes(){
        this.likeCount++;
        this.starPrint.innerHTML = "\&#9734;".repeat(this.likeCount);
    }
    hide(){
        this.likeBtn.disabled = true;
        this.container.style.backgroundColor = "rgb(65, 65, 65)";
        this.paraDiv.style.color = "rgb(152, 152, 152)";
        this.paraDiv.style.backgroundColor = "rgb(65, 65, 65)";
        this.titleDiv.style.color = "rgb(152, 152, 152)";
        this.titleDiv.style.backgroundColor = "rgb(65, 65, 65)";
        this.starPrint.style.backgroundColor = "rgb(65, 65, 65)";
        this.imageDiv.style.opacity = 0.5;
    }
    show(){
        const element = this.render();
        document.body.appendChild(element);
    }
}

// Array of objects
let arrRecourses = [
 {
 srcImg: './news.jpg',
 newsTitle: 'title1',
 newsContent: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled
parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`},
//  ....., //I probably will just have the 2 news things
 {
 srcImg: './news.jpg',
 newsTitle: 'title2',
 newsContent: `The purpose of lorem ipsum is to create a natural looking block of text
(sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without
controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to
be on design, not content.`}
];

function generateNews(){
    const paragraphs = document.querySelectorAll("#content p"); //grabs the p elements inside the content div
    let arrNews = [];
    paragraphs.forEach((p, index) => {
        if (!arrRecourses[index]) p.remove();
        else {
            tmp = arrRecourses[index];
            arrNews.push(new News(tmp.srcImg, tmp.newsTitle, tmp.newsContent)); //making it go into an array incase it needs to be used later
            const element = arrNews[index].render();
            p.replaceWith(element);
        }
    });
}

generateNews();