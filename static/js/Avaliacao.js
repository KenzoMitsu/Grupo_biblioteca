let notaSelecionada = 0;

document.querySelectorAll('.estrelas i').forEach(estrela => {
    estrela.addEventListener('click', function () {
        notaSelecionada = parseInt(this.dataset.value);
        atualizarEstrelas(notaSelecionada);
    });
});

function atualizarEstrelas(nota) {
    document.querySelectorAll('.estrelas i').forEach(estrela => {
        estrela.classList.remove('ativa');
        if (parseInt(estrela.dataset.value) <= nota) {
            estrela.classList.add('ativa');
        }
    });
}

document.getElementById('enviarAvaliacao').addEventListener('click', function () {
    const comentario = document.getElementById('comentario').value.trim();

    if (notaSelecionada === 0 || comentario === "") {
        Swal.fire("Erro", "Por favor, selecione uma nota e escreva um comentário.", "warning");
        return;
    }

    const avaliacao = {
        id_livro: id_livro,
        nota: notaSelecionada,
        comentario: comentario
    };

    $.ajax({
        url: `${ipPython}/avaliacoes`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        data: JSON.stringify(avaliacao),
        success: function () {
            Swal.fire("Obrigado!", "Sua avaliação foi registrada.", "success");
            document.getElementById("comentario").value = "";
            atualizarEstrelas(0);
            notaSelecionada = 0;
        },
        error: function () {
            Swal.fire("Erro", "Não foi possível enviar sua avaliação.", "error");
        }
    });
});
