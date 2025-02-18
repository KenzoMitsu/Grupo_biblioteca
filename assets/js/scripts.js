$(document).ready(function(){
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
})  });

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    menuButton.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Fecha o menu caso clique fora dele
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});


function modoEscuro() {

    const cores = [
        ['#FF5733', '#FFC300'], // Laranja vibrante e Amarelo claro
        ['#33FF57', '#28B463'], // Verde claro e Verde escuro
        ['#3357FF', '#1F618D'], // Azul intenso e Azul escuro
        ['#F1C40F', '#D68910'], // Amarelo ouro e Laranja dourado
        ['#8E44AD', '#5B2C6F'], // Roxo escuro e Roxo mais escuro
        ['#FF1493', '#FF69B4'], // Rosa escuro e Rosa  
        ['#B0E0E6', '#E0FFFF'], // PowderBlue e PaleTurquoise
        ['#1abc9c', '#3498db']  // Cores originais
    ];

    const coresSelecionadas = cores[numeroAleatorio];

    document.getElementById('fundo').style.background = `${coresSelecionadas[0]}`;
    document.getElementById('mudecor').style.background = `${coresSelecionadas[0]}`;
    document.getElementById('btn').style.background = `${coresSelecionadas[1]}`;

    const botao = document.getElementById('botao');
    botao.style.background = `${coresSelecionadas[0]}`;
    botao.style.cursor = 'pointer';
}