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
const footer = document.querySelectorAll(".footer-text *");
const languageSelect = document.querySelectorAll("#language *");
const themeSelect = document.querySelectorAll("#theme *");

// -- Text --
const cardsLanguage = [["1 Sandwich BBQ Crunch (1 filete de pollo apanado)", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...", "1 Sandwich BBQ Crunch (1 filete de pollo apanado) + 1 Papa pequeña + 1 gaseosa...", "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos, ...", "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, Ensalada, ...", "1 Sandwich Crispy BBQ (1 filete de pechuga de pollo extra grande, triple empanizado, cebolla, ...", "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla, ..."], ["1 BBQ Crunch Sandwich (1 breaded chicken fillet)", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles, ...", "1 BBQ Crunch Sandwich (1 breaded chicken fillet) + 1 small potato + 1 soda...", "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad,...", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles, ...", "1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, Salad, ..." , "1 Crispy BBQ Sandwich (1 extra large chicken breast fillet, triple breaded, onion, ...", "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, onion, ..."]];
const footerLanguage = [["Hambre de promos - KFC", "Disfruta de nuestro delicioso pollo frito, popcorn, alitas picantes, sándwiches originales, postres, y más. Conoce aquí nuestro menú KFC."], ["Hungry for Promos - KFC", "Enjoy our delicious fried chicken, popcorn, hot wings, original sandwiches, desserts, and more. Check out our KFC menu here."]];
const languagueOptions = [["Idioma", "Inglés", "Español"], ["Language", "English", "Spanish"]];
const themeOptions = [["Tema", "Claro", "Oscuro", "Azul"], ["Theme", "Light", "Dark", "Blue"]]
asignarIdioma();

language.addEventListener("change", () => {
    localStorage.setItem("language", language.value)
    asignarIdioma();
});

function asignarIdioma() {
    let cont = 0;

    if (localStorage.getItem("language") == "es") {
        descriptions.forEach((p) => {
            p.textContent = cardsLanguage[0][cont];
            cont++;
        });

        buttons.forEach((btn) => {
            btn.textContent = "Comprar"
        });

        cont = 0;
        footer.forEach((text) => {
            text.textContent = footerLanguage[0][cont];
            cont++;
        });

        cont = 0;
        languageSelect.forEach((option) => {
            option.textContent = languagueOptions[0][cont];
            cont++;
        });

        cont = 0;
        themeSelect.forEach((option) => {
            option.textContent = themeOptions[0][cont]
            cont++;
        });
        
    } else if (localStorage.getItem("language") == "en") {
        descriptions.forEach((p) => {
            p.textContent = cardsLanguage[1][cont];
            cont++;
        });

        buttons.forEach((btn) => {
            btn.textContent = "Buy"
        });

        cont = 0;
        footer.forEach((text) => {
            text.textContent = footerLanguage[1][cont];
            cont++;
        });

        cont = 0;
        languageSelect.forEach((option) => {
            option.textContent = languagueOptions[1][cont];
            cont++;
        });

        cont = 0;
        themeSelect.forEach((option) => {
            option.textContent = themeOptions[1][cont]
            cont++;
        });
    }
}

asignarSelected();
function asignarSelected() {
    // -- Language --
    if (localStorage.getItem("language") == "en") {
        languageSelect[0].removeAttribute("selected");
        languageSelect[1].setAttribute("selected", "")
    } else if (localStorage.getItem("language") == "es") {
        languageSelect[0].removeAttribute("selected");
        languageSelect[2].setAttribute("selected", "")
    }

    // -- Theme --
    if (localStorage.getItem("theme") == "light") {
        themeSelect[0].removeAttribute("selected");
        themeSelect[1].setAttribute("selected", "")
    } else if (localStorage.getItem("theme") == "dark") {
        themeSelect[0].removeAttribute("selected");
        themeSelect[2].setAttribute("selected", "")
    }  else if (localStorage.getItem("theme") == "blue") {
        themeSelect[0].removeAttribute("selected");
        themeSelect[3].setAttribute("selected", "")
    }
}