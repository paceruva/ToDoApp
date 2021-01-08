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

const filters = document.querySelectorAll(".filter");
filters.forEach(function(element, i) {
    element.addEventListener("click", function() {
        disable();
        filters[i%3].classList.add("active");
        filters[i%3+3].classList.add("active");
        filter(element.innerHTML);
    })
});

function disable() {
    filters.forEach(element => {
        if(element.classList.contains("active")) {
            element.classList.remove("active");
        }
    })
}

function filter(type) {
    type = type.toLowerCase();
    console.log(type);
}