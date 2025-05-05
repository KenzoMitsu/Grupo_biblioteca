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

function sair() {
    localStorage.clear(); // Remove todos os dados do localStorage
    window.location.href = "login.html"; // Redireciona para a página de login
}

if (cargo === 'ADM') {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-circle-user"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-inbox"></i><a href="historicoReservas.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>


        <li class="menu-item">
            <div>
                <i class="fas fa-user"></i><a href="GerenciarUsuarios.html"> Gerenciar
                        Usuários</a>
            </div>
        </li>

        <li class="menu-item" id="relatorios">
            <div>
                <i class="fa-solid fa-file-export"></i>
                <a href="javascript:void(0);" class="submenu-toggle">Relatórios</a>
            </div>
            <ul class="submenu">
                <li><a id="relatorioMultas" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Multas</a></li>
                <li><a id="relatorioLivros" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Livros</a></li>
                <li><a id="relatorioUsuarios" href="#"><i class="fa-solid fa-file-export"></i>Relatório de <br>Usuários</a></li>
                <li><a id="relatorioEmprestimos" href="#"><i class="fa-solid fa-file-export"></i>Relatório de Emprestimos</a></li>
            </ul>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-cash-register"></i><a href="addMultas.html">Adicionar Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-wallet"></i><a href="gerenciarMultas.html">Gerenciar Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-book"></i><a href="editLivros.html">Gerenciar Livros</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="ListagemReservas.html">Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-bookmark"></i><a href="ListagemEmprestimos.html">Empréstimos</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;

} else if (cargo === 'Bibliotecario') {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-circle-user"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-inbox"></i><a href="historicoReservas.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-dollar-sign"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;

} else {
    document.getElementById("logoHeader").href = "home.html"

    document.getElementById("dropdownMenu").innerHTML += `

        <li class="menu-item">
            <div>
                <i class="fa-solid fa-circle-user"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="historicoReservas.html">Minhas Reservas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sync-alt"></i><a href="historicoMultas.html">Minhas Multas</a>
            </div>
        </li>

        <li class="menu-item">
            <div>
                <i class="fas fa-sign-out-alt"></i><button onclick='sair()' class="sair">Sair</button>
            </div>
        </li>
    `;
}
