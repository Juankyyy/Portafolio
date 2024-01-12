const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const submit = document.querySelector("#submit");
const loading = document.querySelector("#loading");

submit.addEventListener("click", () => {
    const id = sessionStorage.getItem('id')
    
    let datos = {
        id: parseInt(id),
        name: inputName.value,
        email: inputEmail.value
    }
    console.log(JSON.stringify(datos));
    
    if (inputName.value != "" & inputEmail.value != "") {
        if (id) {
            let sendUpdateFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(datos)
            })
                .then(alert(`El id ${id} se ha actualizado correctamente`))
                .catch((error) => {
                    console.error("Error: ", error);
                });
    
        } else {
            datos = {
                name: inputName.value,
                email: inputEmail.value
            }
    
            let sendCreateFetch = fetch("https://memin.io/public/api/users", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(datos)
            })
                .then(alert(`El usuario ${inputName.value} se creó correctamente`))
                .catch((error) => {
                    console.error("Error: ", error);
                });
        }
    } else {
        alert("Los inputs están vacíos")
    }
    sessionStorage.clear();
});

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

            editar.addEventListener("click", () =>{
                const info = (editar.parentElement).parentElement;
                const id = info.children[0].innerText;
                sessionStorage.setItem("id", id);
        
                const name = info.children[1];
                const email = info.children[2];
        
                inputName.value =name.innerText;
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
                const info = (editar.parentElement).parentElement;
                const id = info.children[0].innerText;
                
                
                const title = document.querySelector("#modalTitle");
                const body = document.querySelector("#modalText");
                title.textContent = "Información del usuario";
                if (body.childElementCount != 0) {
                    while (body.firstChild) {
                        body.removeChild(body.firstChild);
                      }
                }
                const modalFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                    method: "GET"
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    for(datos in data) {
                        const p = document.createElement("p");
                        p.textContent = `${datos}: ${data[datos]}`;
                        body.appendChild(p);
                    }
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
                let deleteFetch = fetch(`https://memin.io/public/api/users/${id}`, {
                    method: "DELETE"
                })
                    .then(alert(`Se ha eliminado el id ${id} correctamente`));
            });
        });
        loading.parentNode.removeChild(loading);
    });