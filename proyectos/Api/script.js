const tbody = document.querySelector("tbody");

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const submit = document.querySelector("#submit");

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
            editar.classList.add("editar")
            editar.innerText = 'Editar';
            acciones.appendChild(editar);

            editar.addEventListener("click", () => {
                const info = (editar.parentElement).parentElement;
                const id = info.children[0].innerText;
                sessionStorage.setItem("id", id);

                const name = info.children[1].innerText;
                const email = info.children[2].innerText;

                inputName.value = name;
                inputEmail.value = email;
                actualizarLocal(editar)
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

function actualizarLocal(elemento) {
    const id = sessionStorage.getItem('id');
    const info = (elemento.parentElement).parentElement

    submit.addEventListener("click", () => {
        if (inputName.value != "" && inputEmail.value != "") {    
            if (id) {
                info.children[1].innerText = inputName.value;
                info.children[2].innerText = inputEmail.value;
                inputName.value = "";
                inputEmail.value = "";
                sessionStorage.clear();
            }
        }
    })
}

submit.addEventListener("click", () => {
    const id = sessionStorage.getItem('id');

    let datos = {
        id: parseInt(id),
        name: inputName.value,
        email: inputEmail.value
    };

    if (inputName.value != "" && inputEmail.value != "") {
        if (id) {
            let sendUpdateFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(datos)
            })
                .then(
                    alert(`El id ${id} se ha actualizado correctamente`),
                );
        } else {
            alert(`El usuario que intentas editar no existe, intenta crearlo`);
        }
    } else {
        alert("Completa todos los inputs");
    };
});

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
                inputNameModal.value = "",
                inputEmailModal.value = "",
                inputPasswordModal.value = ""
            );
    } else {
        alert("Completa todos los inputs");
    }
})


search.addEventListener("keyup", () => {
    for (tr of tbody.childNodes) {
        const name = tr.children[1].textContent.toLowerCase();
        if (name.includes(search.value.toLowerCase())) {
            tr.style = "display: table-row;"
        } else {
            tr.style = "display: none;"
        }
    }
})