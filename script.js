const btnProjects = document.querySelector("#proyectos");
const cards = document.querySelector(".projects")
const main = document.querySelector("#main")

btnProjects.addEventListener("click", () => {
    if (cards.classList.contains("hidden")) {
        cards.classList.toggle("hidden")
    }
})