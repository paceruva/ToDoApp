let tasks = [];
let position = 1;

updateEvents();

document.querySelector("#creator").addEventListener("click",
    function() {
        document.querySelector("#createNew").focus();
    });

document.querySelector("#theme-icon").addEventListener("click",
    function() {
        let body = document.querySelector("body");
        if (!body.classList.contains("dark-theme")) {
            body.classList.add("dark-theme");
        } else {

            body.classList.remove("dark-theme");
        }
    });

document.querySelector("#createNew").addEventListener("keyup",
    function(event) {
        if (event.keyCode === 13) {
            addTask();
        }
    });

const filters = document.querySelectorAll(".filter");
filters.forEach(function(element, i) {
    element.addEventListener("click", function() {
        disable();
        filters[i % 3].classList.add("active");
        filters[i % 3 + 3].classList.add("active");
        filter(element.innerHTML);
    })
});

function disable() {
    filters.forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
        }
    })
}

function filter(type) {
    console.log(type);
}

function addTask() {
    const input = document.querySelector("#createNew");
    const taskName = input.value;
    if (taskName != "") {
        input.value = "";
        var task = new Task(position, taskName);
        tasks.push(task);
        position++;
        updateView(task, true);
    }
}

function updateView(task, append) {
    let current = "";
    const undone = document.querySelector("#undone");
    if (append) {
        current = undone.innerHTML;
    }
    current += "<div class='item border undone-task pointer'><div class='circle-wrapper'><div class='circle'></div></div><p class='text'>" + task.taskName + "</p></div>";
    undone.innerHTML = current;
    updateEvents();
}

function updateEvents() {
    document.querySelectorAll(".circle").forEach(element => {
        element.addEventListener("click", function(click) {
            const parent = click.target.parentElement.parentElement;
            if (parent.classList.contains("completed")) {
                parent.classList.remove("completed");
            } else {
                parent.classList.add("completed");
            }
        });
    });
}