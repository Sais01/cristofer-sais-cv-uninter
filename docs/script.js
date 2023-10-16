// Adicionando evento de clique no botão de enviar formulário
const button = document.querySelector("button");

button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});

// Adicionando evento de clique no botão de menu

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("active");
});