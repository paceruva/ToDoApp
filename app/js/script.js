document.querySelector("#creator").addEventListener("click",
    function() {
        document.querySelector("#createNew").focus();
    })

document.querySelector("#theme-icon").addEventListener("click",
    function() {
        let body = document.querySelector("body");
        if (!body.classList.contains("dark-theme")) {
            body.classList.add("dark-theme");
        } else {

            body.classList.remove("dark-theme");
        }
    })