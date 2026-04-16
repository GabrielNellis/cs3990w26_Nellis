import {NumberGenerator} from "./numberGenerator.js"

class TaskManager{
    constructor(){
        this.currentTask = null;
        this.tasks = {
            task1: NumberGenerator
        };
    }

    loadTask(taskName){
        if (this.currentTask) this.currentTask.destroy();
        const taskClass = this.tasks[taskName];
        const taskInstance = new taskClass();

        document.body.appendChild(taskInstance.render());
        this.currentTask = taskInstance;
    }

    init(){
        const buttons = document.querySelectorAll("header button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const taskName = button.dataset.task;
                this.loadTask(taskName);
            });
        });
        this.loadTask("task1");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const manager = new TaskManager();
    manager.init();
});