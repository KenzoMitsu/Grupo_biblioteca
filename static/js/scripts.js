// Código modo-escuro //

document.addEventListener("DOMContentLoaded", function () {
    const botaoalternarTema = document.getElementById("alternarTema");
    const corpo = document.body;

    if (localStorage.getItem("tema") === "escuro") {
        corpo.classList.add("modo-escuro");
    }

    botaoalternarTema.addEventListener("click", function () {
        corpo.classList.toggle("modo-escuro");

        if (corpo.classList.contains("modo-escuro")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }
    });
});


document.querySelector(".menu-item button").addEventListener("click", function () {
    localStorage.removeItem("token"); // Remove o token do localStorage
    window.location.href = "login.html"; // Redireciona para a página de login
});
