// Verifica se o token está armazenado no Local Storage da própria web
var token = localStorage.getItem("token")
// var cargo = localStorage.getItem("cargo")   

if(!token) { //OBSERVAÇÃO PESSOAL! > Também da para fazer de maneira mais manual usando "token === undefined || token === null"
    Swal.fire({
        title: "Erro!",
        text: "Página Restrita",
        icon: "error"
    }).then(() => {
        // Manda para a pagina de login caso o usuário não possua token, ou seja, caso o usuário não esteja logado
        window.location.href = "login.html"
    })
}
