function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let intervalo = (ate - de) + 1;

    if (intervalo < quantidade) {
        alert('Intervalo insuficiente para sortear números únicos.');
        limparCampos();
        return;
    }

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    console.log(sorteados);

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReniciar = document.getElementById('btn-reiniciar');

    if (botaoReniciar.classList.contains('container__botao-desabilitado')) {
        botaoReniciar.classList.remove('container__botao-desabilitado');
        botaoReniciar.classList.add('container__botao');
    } else {
        botaoReniciar.classList.remove('container__botao');
        botaoReniciar.classList.add('container__botao-desabilitado');
    }
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    limparCampos();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}