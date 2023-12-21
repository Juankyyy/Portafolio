const btnProjects = document.querySelector("#proyectos");
const cards = document.querySelector(".projects")

btnProjects.addEventListener("click", () => {
    cards.classList.toggle("hidden")
})