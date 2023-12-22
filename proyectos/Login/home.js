let user = sessionStorage.getItem("userName");
const gender = sessionStorage.getItem("gender")
const textUser = document.querySelector("#user")
const btnSignOut = document.querySelector(".loginSignOut");

if (!user) {
    location.href = "./index.html";
}
if (gender == "Masculino") {
    textUser.innerHTML = user + " &#129489;"
} else {
    textUser.innerHTML = user + " &#128105;"
}

btnSignOut.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.clear();
    location.href = "./index.html";
})