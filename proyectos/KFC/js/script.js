const root = document.querySelector(".root");

const container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

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
btn.className = "btn btn-danger w-100 mt-auto"
btn.textContent = "Comprar"

cardBody.append(titlePrice, titleName, p, btn)