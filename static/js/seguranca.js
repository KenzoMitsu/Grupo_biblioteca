// Verifica se o token está armazenado no Local Storage da própria web
var token = localStorage.getItem("token")
// var cargo = localStorage.getItem("cargo")   

if(!token) { //OBSERVAÇÃO PESSOAL! > Também da para fazer de maneira mais manual usando "token === undefined || token === null"
    Swal.fire({
        title: "Página restrita!",
        text: "Entre em uma conta para acessar essa página",
        icon: "error"
    }).then(() => {
        // Manda para a pagina de login caso o usuário não possua token, ou seja, caso o usuário não esteja logado
        window.location.href = "login.html"
    })
}


function LivrosFuncao(valor) {
    var quantidade = params.get('quantidade')

    if (quantidade > 0) {
        document.getElementById("btn_emprestimo").style.display = "inline-block";
        document.getElementById("btn_reserva").style.display = "none";
    } else {
        document.getElementById("btn_emprestimo").style.display = "none";
        document.getElementById("btn_reserva").style.display = "inline-block";
    }
}
LivrosFuncao()


var cargo = localStorage.getItem("cargo")

if (cargo === 'ADM') {
    document.getElementById("logoHeader").href = "homeADM.html"
} else if (cargo === 'Bibliotecario') {
    document.getElementById("logoHeader").href = "homeBiblio.html"
} else {
    document.getElementById("logoHeader").href = "home.html"
}

var cargo = localStorage.getItem("cargo")

if (cargo === 'ADM') {
    document.getElementById("btn_voltar").href = "homeADM.html"
} else if (cargo === 'Bibliotecario') {
    document.getElementById("btn_voltar").href = "homeBiblio.html"
} else {
    document.getElementById("btn_voltar").href = "home.html"
}