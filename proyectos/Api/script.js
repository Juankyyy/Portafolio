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
            const tbody = document.querySelector("tbody");
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
            editar.id = "editar";
            editar.innerText = 'Editar';
            acciones.appendChild(editar);

            editar.addEventListener("click", () => {
                const info = (editar.parentElement).parentElement;
                const id = info.children[0].innerText;
                sessionStorage.setItem("id", id);

                const name = info.children[1];
                const email = info.children[2];

                inputName.value = name.innerText;
                inputEmail.value = email.innerText;
            })

            // -- Detalles --
            const detalles = document.createElement("a");
            detalles.setAttribute("href", "#");
            detalles.setAttribute("data-bs-toggle", "modal");
            detalles.setAttribute("data-bs-target", "#modalCard");
            detalles.id = "detalles";
            detalles.classList.add('m-2')
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
            eliminar.id = "eliminar";
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


submit.addEventListener("click", () => {
    const id = sessionStorage.getItem('id');

    let datos = {
        id: parseInt(id),
        name: inputName.value,
        email: inputEmail.value
    };

    if (inputName.value != "" & inputEmail.value != "") {
        if (id) {
            let sendUpdateFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(datos)
            })
                .then(alert(`El id ${id} se ha actualizado correctamente`));

        } else {
            alert(`El usuario ${inputName.value} no tiene id por ende no existe, intenta crearlo`)
        }
    } else {
        alert("Los inputs están vacíos")
    };
    inputName.value = "";
    inputEmail.value = "";
    sessionStorage.clear();
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

submitModal.addEventListener("click", () => {
    datos = {
        name: inputNameModal.value,
        email: inputEmailModal.value,
        password: inputPasswordModal.value
    }

    const sendCreateFetch = fetch("https://memin.io/public/api/users", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(datos)
    })
        .then(alert(`El usuario ${inputNameModal.value} se creó correctamente`));
})

search.addEventListener("change", () => {
    console.log(search.value);
})