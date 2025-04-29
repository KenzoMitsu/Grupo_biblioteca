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

    retorno.header.for((multas) => {
        html.innerHTML += `
                      <div class="item">

        <div class="header-end">
            <div class="menu-container">
                <div class="menu-icon" id="menuButton">
                    <div class="menulinha"></div>
                    <div class="menulinha"></div>
                    <div class="menulinha"></div>
                </div>

                <ul class="dropdown-menu" id="dropdownMenu">

                    <li class="menu-item">
                        <div>
                            <i class="fa-solid fa-circle-user"></i><a id="editPerfil" href="editPerfil.html"> Perfil</a>
                        </div>
                    </li>

                    <li class="menu-item">
                        <div>
                            <i class="fas fa-sync-alt"></i><a href="historicoReservas.html">Reservas</a>
                        </div>
                    </li>

                    <li class="menu-item">
                        <div>
                            <i class="fas fa-sync-alt"></i><a href="historicoMultas.html">Multas</a>
                        </div>
                    </li>


                    <li class="menu-item">
                        <div>
                            <i class="fas fa-user"></i><a href="GerenciarUsuarios.html"> Gerenciar
                                    Usuários</a>
                        </div>
                    </li>

                    <li class="menu-item">
                        <div>
                            <i class="fas fa-sync-alt"></i><a href="historico.html">Histórico</a>
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
                            <i class="fa-solid fa-cash-register"></i><a href="addMultas.html">Adicionar multas</a>
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
                            <i class="fas fa-book"></i><a href="ListagemReservas.html">
                                    Reservas</a>
                            <i class="fas fa-sync-alt"></i><a href="historico.html">Histórico</a>
                         </div>
                    </li>

                    <li class="menu-item">
                        <div>
                            <i class="fas fa-sync-alt"></i><a href="editLivros.html"> Gerenciar
                                    Livros</a>
                        </div>
                    </li>

                    <li class="menu-item">
                        <div>
                            <i class="fas fa-sign-out-alt"></i><button class="sair">Sair</button>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
                  `;
      });

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
