$(document).ready(function(){
    if($('.owl-carousel').length > 0){
        $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
        }) 
    }


    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");


    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    }
});

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
