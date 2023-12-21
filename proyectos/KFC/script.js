const body = document.querySelector("body")
const language = document.querySelector("#language");
const theme = document.querySelector("#theme");

asignarTema();

theme.addEventListener("change", () => {
    localStorage.setItem("theme", theme.value)
    asignarTema();
});

function asignarTema() {
    if (localStorage.getItem("theme") == "dark") {
        body.className = "theme-dark";
    
    } else if (localStorage.getItem("theme") == "blue") {
        body.className = "theme-blue";
    
    } else if (localStorage.getItem("theme") == "light") {
        body.className = "theme-light";
    }
}

language.addEventListener("change", () => {
    console.log(language.value);
    localStorage.setItem("language", language.value)
});