const root = document.querySelector(".root");

// --- --- --- Selects --- --- ---
const containerSelect = document.createElement("div")
containerSelect.classList.add("container");
root.appendChild(containerSelect);

const rowSelect = document.createElement("div");
rowSelect.className = "row mt-4";
containerSelect.appendChild(rowSelect);

// -- -- Language -- --
const colSelect1 = document.createElement("div");
colSelect1.className = "col-md-6 mt-3";
rowSelect.appendChild(colSelect1);

const select1 = document.createElement("select");
select1.classList.add("form-select");
select1.id = "language";
colSelect1.appendChild(select1);

// -- Options --
const optionDefault1 = document.createElement("option");
optionDefault1.setAttribute("disabled", "")
optionDefault1.setAttribute("selected", "");
optionDefault1.textContent = "Idioma";

const optionEn = document.createElement("option");
optionEn.setAttribute("value", "en");
optionEn.textContent = "Inglés";

const optionEs = document.createElement("option");
optionEs.setAttribute("value", "es");
optionEs.textContent = "Español";

select1.append(optionDefault1, optionEn, optionEs);

// -- -- Theme -- --
const colSelect2 = document.createElement("div");
colSelect2.className = "col-md-6 mt-3";
rowSelect.appendChild(colSelect2);

const select2 = document.createElement("select");
select2.classList.add("form-select");
select2.id = "theme";
colSelect2.appendChild(select2);

// -- Options --
const optionDefault2 = document.createElement("option");
optionDefault2.setAttribute("disabled", "")
optionDefault2.setAttribute("selected", "");
optionDefault2.textContent = "Tema";

const optionLight = document.createElement("option");
optionLight.setAttribute("value", "light");
optionLight.textContent = "Claro";

const optionDark = document.createElement("option");
optionDark.setAttribute("value", "dark");
optionDark.textContent = "Oscuro";

const optionBlue = document.createElement("option");
optionBlue.setAttribute("value", "blue");
optionBlue.textContent = "Azul";

select2.append(optionDefault2, optionLight, optionDark, optionBlue);

// --- --- --- Cards --- --- ---
const container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

for (let i = 0; i < 2; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    for (let j = 0; j < 4; j++) {
        const col = document.createElement("div");
        col.className = "col-md-3 col-sm-6 mt-5";
        row.appendChild(col);
        
        const card = document.createElement("div");
        card.className = "card h-100";
        col.appendChild(card);
        
        const img = document.createElement("img");
        img.src = "../images/hamburguesa-1.webp";
        card.appendChild(img);
        
        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";
        card.appendChild(cardBody);
        
        const titlePrice = document.createElement("h5");
        titlePrice.textContent = "$ 8.900";
        
        const titleName = document.createElement("h5");
        titleName.textContent = "BBQ Crunch";
        
        const p = document.createElement("p");
        p.textContent = "1 Sandwich BBQ Crunch (1 filete de pollo apanado)";
        
        const btn = document.createElement("button");
        btn.className = "btn btn-danger w-100 mt-auto";
        btn.textContent = "Comprar";
        
        cardBody.append(titlePrice, titleName, p, btn);
    }
}

// --- --- --- Footer --- --- ---
const footer = document.createElement("div");
footer.className = "mt-5 p-4 text-light bg-danger";
root.appendChild(footer);

const footerContainer = document.createElement("div");
footerContainer.classList.add("container");
footer.appendChild(footerContainer);

const footerRow = document.createElement("div");
footerRow.classList.add("row");
footerContainer.appendChild(footerRow);

const footerCol = document.createElement("div");
footerCol.className = "col-md-12 text-center";
footerRow.appendChild(footerCol);

const footerTitle = document.createElement("h5");
footerTitle.textContent = "Hambre de promos - KFC";

const footerP = document.createElement("p");
footerP.classList.add("mb-0");
footerP.textContent = "Disfruta de nuestro delicioso pollo frito, popcorn, alitas picantes, sándwiches originales, postres, y más. Conoce aquí nuestro menú KFC.";

footerCol.append(footerTitle, footerP);