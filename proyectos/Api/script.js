const body = document.querySelector("body")
const tbody = document.querySelector("tbody");

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const submit = document.querySelector("#submit");

const modalNew = document.querySelector("#modalNew")
const CrossModalNew = document.querySelector(".btn-close")

const submitModal = document.querySelector("#submitModal");
const inputNameModal = document.querySelector('#nameModal');
const inputEmailModal = document.querySelector('#emailModal');
const inputPasswordModal = document.querySelector('#passwordModal');

const loading = document.querySelector("#loading");
const closeModal = document.querySelector(".btn-close");
const search = document.querySelector("#search")

const resultado = fetch("https://memin.io/public/api/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            const tr = document.createElement("tr");
            tbody.appendChild(tr);

            const id = document.createElement("td");
            id.innerHTML = element.id;
            tr.appendChild(id);

            const name = document.createElement("td");
            name.innerHTML = element.name;
            tr.appendChild(name);

            const email = document.createElement("td");
            email.innerHTML = element.email;
            tr.appendChild(email);

            const acciones = document.createElement("td");
            tr.appendChild(acciones);

            // -- Editar --
            const editar = document.createElement("a");
            editar.setAttribute("href", "#");
            editar.setAttribute("data-bs-toggle", "modal");
            editar.setAttribute("data-bs-target", "#modalNew");
            editar.classList.add("editar")
            editar.innerText = 'Editar';
            acciones.appendChild(editar);

            editar.addEventListener("click", () => {
                const info = (editar.parentElement).parentElement;
                const id = info.children[0].innerText;
                sessionStorage.setItem("id", id);
                inputName.value = info.children[1].innerText;
                inputEmail.value = info.children[2].innerText;

                // actualizarLocal(editar);
            })

            // -- Detalles --
            const detalles = document.createElement("a");
            detalles.setAttribute("href", "#");
            detalles.setAttribute("data-bs-toggle", "modal");
            detalles.setAttribute("data-bs-target", "#modalCard");
            detalles.className = "m-2 detalles";
            detalles.textContent = 'Detalles';
            acciones.appendChild(detalles);

            detalles.addEventListener("click", () => {
                const body = document.querySelector("#modalText");

                const modalFetch = fetch(`https://memin.io/public/api/users/${element.id}`, {
                    method: "GET"
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    for (datos in data) {
                        const p = document.createElement("p");
                        p.textContent = `${datos}: ${data[datos]}`;
                        body.appendChild(p);
                    }
                    const loadingModal = document.querySelector(".loadingModal");
                    loadingModal.parentNode.removeChild(loadingModal);
                })
            })

            // -- Eliminar --
            const eliminar = document.createElement("a");
            eliminar.setAttribute("href", "#");
            eliminar.classList.add("eliminar")
            eliminar.textContent = 'Eliminar';
            acciones.appendChild(eliminar);

            eliminar.addEventListener("click", () => {
                const info = (eliminar.parentElement).parentElement;
                const id = info.children[0].innerText;
                const deleteFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                    method: "DELETE"
                })
                    .then(
                        alert(`Se ha eliminado el id ${id} correctamente`),
                        info.parentNode.removeChild(info)
                    );
            });
        });
        loading.parentNode.removeChild(loading);
    });

// ¿¿¿ Funcion para respuesta visual cuando se actualiza ???
// function actualizarLocal(elemento) {
//     const info = (elemento.parentElement).parentElement;

//     submit.addEventListener("click", () => {
//         if (inputName.value != "" && inputEmail.value != "") {
//             info.children[1].innerText = inputName.value;
//             info.children[2].innerText = inputEmail.value;
//             inputName.value = "";
//             inputEmail.value = "";
//             sessionStorage.clear();
//         }
//     })
// }

submit.addEventListener("click", () => {
    const id = sessionStorage.getItem('id');
    // const modalNewBS = new bootstrap.Modal(modalNew);

    let datos = {
        id: parseInt(id),
        name: inputName.value,
        email: inputEmail.value
    };

    if (inputName.value != "" && inputEmail.value != "") {
        let sendUpdateFetch = fetch(`https://memin.io/public/api/users/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(datos)
        })
            .then(
                alert(`El id ${id} se ha actualizado correctamente`),
                location.reload(),

                // ¿¿¿ Cerrar modalNew ???
                // modalNewBS.hide(),
                // modalNew.classList.remove("show"),
                // modalNew.style = "display: none;",
                // modalNew.removeAttribute("aria-modal"),
                // modalNew.removeAttribute("role"),
                // modalNew.setAttribute("aria-hidden", "true"),
                // document.querySelector(".modal-backdrop").parentNode.removeChild(document.querySelector(".modal-backdrop")),
                // body.className = "",
                // body.style = ""
            );
    } else {
        alert("Completa todos los inputs");
    };
});

function closeCroos() {
    const modalNewBS = new bootstrap.Modal(modalNew);

    modalNewBS.hide()
    modalNew.classList.remove("show");
    modalNew.style = "display: none;";
    modalNew.removeAttribute("aria-modal");
    modalNew.removeAttribute("role");
    modalNew.setAttribute("aria-hidden", "true");
    document.querySelector(".modal-backdrop").parentNode.removeChild(document.querySelector(".modal-backdrop"));
    body.className = "";
    body.style = "";
}

closeModal.addEventListener("click", () => {
    const body = document.querySelector("#modalText");
    if (body.childElementCount != 0) {
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }
    }
    body.innerHTML = `<div class="spinner-border text-warning loadingModal" role="status" id="loading"></div>`
})

submitModal.addEventListener("click", (e) => {
    e.preventDefault();

    datos = {
        name: inputNameModal.value,
        email: inputEmailModal.value,
        password: inputPasswordModal.value
    }
    if (inputNameModal.value != "" && inputEmailModal.value != "" && inputPasswordModal.value != "") {
        const sendCreateFetch = fetch("https://memin.io/public/api/users", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(datos)
        })
            .then(
                alert(`El usuario ${inputNameModal.value} se creó correctamente`),
                location.reload(),
                // inputNameModal.value = "",
                // inputEmailModal.value = "",
                // inputPasswordModal.value = ""
            );
    } else {
        alert("Completa todos los inputs");
    }
})

search.addEventListener("keyup", () => {
    const idSearch = parseInt(search.value);
    if (Number.isInteger(idSearch)) {
        for (tr of tbody.childNodes) {
            const id = tr.children[0].textContent;
            if (id.includes(search.value)) {
                tr.style = "display: table-row;"
            } else {
                tr.style = "display: none;"
            }
        }
        search.className = "form-control mt-3 fw-bold id";
    } else {
        for (tr of tbody.childNodes) {
            const name = tr.children[1].textContent.toLowerCase();
            if (name.includes(search.value.toLowerCase())) {
                tr.style = "display: table-row;"
            } else {
                tr.style = "display: none;"
            }
        }
        search.className = "form-control mt-3 fw-bold name";
    }
})