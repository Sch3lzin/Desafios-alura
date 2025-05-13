function comprar() {
    // Informações
    const select = document.getElementById('tipo-ingresso');
    let qtdSelect = document.getElementById('qtd');
    let nameSelect = select.value;
    let quantidade = parseInt(qtdSelect.value);

    let pista = document.getElementById('qtd-pista');
    let superior = document.getElementById('qtd-superior');
    let inferior = document.getElementById('qtd-inferior');

    let qtdPista = isNaN(parseInt(pista.textContent)) ? 0 : parseInt(pista.textContent);
    let qtdSuperior = isNaN(parseInt(superior.textContent)) ? 0 : parseInt(superior.textContent);
    let qtdInferior = isNaN(parseInt(inferior.textContent)) ? 0 : parseInt(inferior.textContent);

    // Vereficar qtd

    if (isNaN(quantidade) || quantidade <= 0 ) {
        alert("Por favor, insira uma quantidade valida")
        return;
    }

    // Venda dos ingressos

    if (nameSelect === "pista") {
        if (qtdPista === 0) {
            alert("Os ingressos estão esgotados!")
            return;
        }
        if (quantidade > qtdPista) {
            alert("Quantidade indisponivel para Pista!");
        } else {
            novaQtd = qtdPista - quantidade;
            pista.textContent = novaQtd === 0 ? "Esgotado!" : novaQtd;
            alert("Compra realizada com sucesso")
        }
    }

     if (nameSelect === "superior") {
        if (qtdSuperior === 0) {
            alert("Os ingressos estão esgotados!")
            return;
        }
        if (quantidade > qtdSuperior) {
            alert("Quantidade indisponivel para Cadeira superior!");
        } else {
            novaQtd = qtdSuperior - quantidade;
            superior.textContent = novaQtd === 0 ? "Esgotado!" : novaQtd;
            alert("Compra realizada com sucesso")
        }
    }

     if (nameSelect === "inferior") {
        if (qtdInferior === 0) {
            alert("Os ingressos estão esgotados!")
            return;
        }
        if (quantidade > qtdInferior) {
            alert("Quantidade indisponivel para Cadeira inferior!");
        } else {
            novaQtd = qtdInferior - quantidade;
            inferior.textContent = novaQtd === 0 ? "Esgotado!" : novaQtd;
            alert("Compra realizada com sucesso")
        }
    }
}