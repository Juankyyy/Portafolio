// --- --- --- Theme --- --- ---
const body = document.querySelector("body")
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


// --- --- --- Languague --- --- ---
const language = document.querySelector("#language");

// -- Elements --
const descriptions = document.querySelectorAll(".card-body p");
const buttons = document.querySelectorAll(".card-body button");
const footer = document.querySelectorAll(".footer-text *")

// -- Text --
const pSpanish = ["1 Sandwich BBQ Crunch (1 filete de pollo apanado)", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...", "1 Sandwich BBQ Crunch (1 filete de pollo apanado) + 1 Papa pequeña + 1 gaseosa...", "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, Ensalada, ...", "1 Sandwich Crispy BBQ (1 filete de pechuga de pollo extra grande, triple empanizado, cebolla, ...", "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla, ..."];
const pEnglish = ["1 BBQ Crunch Sandwich (1 breaded chicken fillet)", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles, ...", "1 BBQ Crunch Sandwich (1 breaded chicken fillet) + 1 small potato + 1 soda...", "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad,...", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles, ...", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, Salad, ..." , "1 Crispy BBQ Sandwich (1 extra large chicken breast fillet, triple breaded, onion, ...", "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, onion, ..."];
const footerSpanish = ["Hambre de promos - KFC", "Disfruta de nuestro delicioso pollo frito, popcorn, alitas picantes, sándwiches originales, postres, y más. Conoce aquí nuestro menú KFC."];
const footerEnglish = ["Hungry for Promos - KFC", "Enjoy our delicious fried chicken, popcorn, hot wings, original sandwiches, desserts, and more. Check out our KFC menu here."];

asignarIdioma();

language.addEventListener("change", () => {
    localStorage.setItem("language", language.value)
    asignarIdioma();
});

function asignarIdioma() {
    let cont = 0;

    if (localStorage.getItem("language") == "es") {
        descriptions.forEach((p) => {
            p.textContent = pSpanish[cont];
            cont++;
        });

        buttons.forEach((btn) => {
            btn.textContent = "Comprar"
        });

        cont = 0;
        footer.forEach((text) => {
            text.textContent = footerSpanish[cont];
            cont++;
        });
    } else if (localStorage.getItem("language") == "en") {
        descriptions.forEach((p) => {
            p.textContent = pEnglish[cont];
            cont++;
        });

        buttons.forEach((btn) => {
            btn.textContent = "Buy"
        });

        cont = 0;
        footer.forEach((text) => {
            text.textContent = footerEnglish[cont];
            cont++;
        });
    }
}