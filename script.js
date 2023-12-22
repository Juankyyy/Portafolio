const btnProjects = document.querySelector("#proyectos");
const cards = document.querySelector(".projects")
const main = document.querySelector("#main")
const back = document.querySelector(".back-text")

btnProjects.addEventListener("click", () => {
    if (cards.classList.contains("hidden")) {
        cards.classList.toggle("hidden")
    }
    
    // setTimeout(() => {
    //     main.classList.toggle("hidden")
    // }, 1000)
})

// back.addEventListener("click", () => {
//     main.classList.toggle("hidden")
// })