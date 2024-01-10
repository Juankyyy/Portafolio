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
        
        
        const editar = document.createElement("a");
        editar.setAttribute("href","#");
        editar.innerText = 'Editar';
        acciones.appendChild(editar);
        
        const detalles = document.createElement("a");
        detalles.setAttribute("href","#");
        detalles.textContent = 'Eliminar';
        detalles.classList.add('m-2')
        acciones.appendChild(detalles);
        
        const eliminar = document.createElement("a");
        eliminar.setAttribute("href","#");
        eliminar.textContent = 'Detalles';
        acciones.appendChild(eliminar);
        })
    })