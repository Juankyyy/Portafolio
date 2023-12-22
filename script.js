const btnProjects = document.querySelector("#proyectos");
const cards = document.querySelector(".projects")

btnProjects.addEventListener("click", () => {
    if (cards.classList.contains("hidden")) {
        cards.classList.toggle("hidden")
    }
})