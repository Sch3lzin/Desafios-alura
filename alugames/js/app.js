let jogosAlugados = [];

function alterarStatus(id) {
    let btn = document.getElementById('btn-' + id);
    let img = document.getElementById('img-' + id);

    let acao = btn.classList.contains('dashboard__item__button--return') ? "devolver" : "alugar";
    let confirmar = confirm(`Tem certeza que deseja ${acao} este item?`);

    if (!confirmar) {
        return;
    }

    let nomeJogo = document.getElementById('name-' + id).innerText;

    if (btn.classList.contains('dashboard__item__button--return')) {
        btn.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        btn.innerText = "Alugar";

        let index = jogosAlugados.indexOf(nomeJogo);
        if (index !== -1) {
            jogosAlugados.splice(index, 1);
        }

    } else {
        btn.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        btn.innerText = "Devolver";

        jogosAlugados.push(nomeJogo);
    }

    console.log(`Jogos alugados: ${jogosAlugados.join(', ')}`);
}

function verificarPalavra(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');

    if (palavraInvertida === palavra) {
        console.log("A palavra é um palíndromo!");
    } else {
        console.log("A palavra não é um palíndromo!");
    }
}

verificarPalavra("mirim");

function crescente(a, b, c) {
    let numbers = [a, b, c];

    numbers.sort(function(x, y){
        return x - y;
    });

    return numbers;
}

let organizar = crescente(15, 123, 9);
console.log(`Numeros em forma crescente: ${organizar}`);