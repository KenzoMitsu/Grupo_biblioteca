const ipPython = "http://10.92.3.167:5000"

// ESSA PÁGINA É ONDE FICA SALVA A VARIÁVEL RESPONSÁVEL POR
// ARMAZENAR O URL DO IP DO SERVIDOR

function formatarData(dataISO) {
    if (!dataISO) return ""; // Evita erro se a data estiver vazia

    let data = new Date(dataISO);
    let dia = data.getDate().toString().padStart(2, "0");
    let mes = (data.getMonth() + 1).toString().padStart(2, "0");
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }


