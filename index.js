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

const courseOptions = document.createElement("header");
document.body.prepend(courseOptions);
courses.forEach(course => {
    const btn = document.createElement("button");
    btn.textContent = course.coursename;
    btn.classList.add(".course");
    btn.addEventListener("click", () => {
        btn.classList.add(".selected");
        document.getElementById("courseDesc").innerHTML = course.descr;
        if (!(course.prereqs.length > 0)){
            document.getElementById("coursePrereqs").innerHTML = "No Prerequisites"; //removing a potential list
        }
        else{
            const preqs = document.getElementById("coursePrereqs");
            const preList = document.createElement("ol");
            preList.type = "1";
            preqs.innerHTML = "Complete the Following:";
            preqs.innerHTML += course.prereqs.map(course => `<li>${course}</li>`).join("");
        }
    });
    courseOptions.appendChild(btn);
});