const user = sessionStorage.getItem("userName");
const textUser = document.querySelector("#user")
const btnSignOut = document.querySelector(".loginSignOut");

if (!user) {
    location.href = "./index.html";
}
textUser.textContent = user;

btnSignOut.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.clear();
    location.href = "./index.html";
})