//for each course, make a button. Button name = course, courseDesc = descr, coursePrereqs = prereqs.
//since courseDescr and coursePrereqs are sections, need to update them based on which button is selected

let courses = [
    {
        coursename: "cs2910",
        descr: "The course includes basic concepts in computer data organization and information processing hardware",
        prereqs: ["CS2010 - Practical Programming Methodology (3)"]
    },
    {
        coursename: "cs3610",
        descr: "This course focuses on the principles of software engineering",
        prereqs: []
    },
    
    {
        coursename: "cs3990",
        descr: "This course introduces students to web design mainly in HTML/XHTML, CSS, JS, and Jquery",
        prereqs: ["CS2010 - Practical Programming Methodology (3)"]
    },

    {
        coursename: "cs3220",
        descr: "This course introduces the underlying concepts of modern artificial intelligence (AI)",
        prereqs: [
            "CS2010 - Practical Programming Methodology (3)",
            "MA1200 - Linear Algebra I (3)",
            "ST1510 - Introduction to Applied Statistics I (3)"
        ]
    }
];

courses.forEach(course => {
    const btn = document.createElement("button");
    btn.textContent = course.coursename;
    btn.classList.add("course");
    btn.addEventListener("click", () => {
        const selectedOne = document.querySelectorAll(".selected");
        selectedOne.forEach(selected => {
            console.log(selected);
            selected.classList.remove("selected");
        });
        btn.classList.add("selected");
        document.getElementById("courseDesc").innerHTML = course.descr;
        if (!(course.prereqs.length > 0)){
            document.getElementById("coursePrereqs").innerHTML = "<h3><b>No Prerequisites</b></h3>"; //removing a potential list
        }
        else{
            const preqs = document.getElementById("coursePrereqs");
            preqs.innerHTML = `<h3><b>Complete the Following:</b></h3>`;
            preqs.innerHTML += course.prereqs.map(course => `<li>${course}</li>`).join("");
        }
    });
    document.getElementById("courses").appendChild(btn);
});

const firstBtn = document.querySelector("div ul button:first-child");
firstBtn.click();