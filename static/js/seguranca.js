// Verifica se o token está armazenado no Local Storage da própria web
var token = localStorage.getItem("token")
// var cargo = localStorage.getItem("cargo")   

if (!token) { //OBSERVAÇÃO PESSOAL! > Também da para fazer de maneira mais manual usando "token === undefined || token === null"
    Swal.fire({
        title: "Página restrita!",
        text: "Entre em uma conta para acessar essa página",
        icon: "error"
    }).then(() => {
        // Manda para a pagina de login caso o usuário não possua token, ou seja, caso o usuário não esteja logado
        window.location.href = "login.html"
    })
}


var cargo = localStorage.getItem("cargo")

console.log(cargo)

if (cargo === 'ADM') {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("biblio").style.display = "none";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("adm").style.display = "inline-block";

} else if (cargo === 'Bibliotecario') {
    document.getElementById("logoHeader").href = "home.html"
    
    document.getElementById("adm").style.display = "none";
    document.getElementById("cliente").style.display = "none";
    document.getElementById("biblio").style.display = "inline-block";
} else {
    document.getElementById("logoHeader").href = "home.html"
    
    document.getElementById("biblio").style.display = "none";
    document.getElementById("adm").style.display = "none";
    document.getElementById("cliente").style.display = "inline-block";
}

