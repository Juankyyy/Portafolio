const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btnLogin = document.querySelector(".loginbtn");
const usuarioIncorrecto = document.querySelector(".usuarioNo");
let usuarioCorrecto = false;

if (sessionStorage.getItem("userName")) {
    location.href = "./home.html";
}

persons = [
    {
        username: "Wilmar",
        email: "wilmar@gmail.com",
        password: "111",
        gender: "Masculino"
    },
    {
        username: "Santi",
        email: "santi@gmail.com",
        password: "222",
        gender: "Masculino"
    },
    {
        username: "Juanky",
        email: "juanky@gmail.com",
        password: "333",
        gender: "Masculino"
    },
    {
        username: "Mariana",
        email: "mariana@gmail.com",
        password: "444",
        gender: "Femenino"
    }
];

btnLogin.addEventListener("click", (event) => {
    event.preventDefault();

    persons.forEach((person) => {
        if (email.value == person.email && password.value == person.password) {
            usuarioCorrecto = true;
            sessionStorage.setItem("userName", person.username);
            sessionStorage.setItem("gender", person.gender);
            location.href = "./home.html"
        } 
    });

    if (!usuarioCorrecto) {
        usuarioIncorrecto.classList.remove("hidden")
    }

    if (email.value != "") {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    } else {
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
    }

    if (password.value != "") {
        password.classList.remove("is-invalid")
        password.classList.add("is-valid")
    } else {
        password.classList.remove("is-valid")
        password.classList.add("is-invalid")
    }
})