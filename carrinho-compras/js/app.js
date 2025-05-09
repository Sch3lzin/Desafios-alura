let itens = 0;
let totalValores = 0;

function adicionar() {
    // Informações

    const select = document.getElementById('produto');
    let quantidadeSelect = document.getElementById('quantidade');
    let nameSelect = select.value;
    let quantidade = quantidadeSelect.value;

    let valorAparecer = nameSelect.split(" - ");
    let nomeProduto = valorAparecer[0];
    let precoProduto = valorAparecer[1];

    // Bloquear ação se nao tiver quantidade ou maior que 100

    if ( quantidade === "" || quantidade === 0 ) {
        alert('Por favor, informe a quantidade.');
        return;
    }

    if ( quantidade > 100 ) {
        alert('Por favor, informe uma quantidade menor que 100 unidades.');
        return;
    }

    // Bloquear adicionar itens

    if ( itens >= 5 ) {
        alert('Limite de itens no carrinho');
        return;
    }

    itens ++;

    // Cria novo item

    let novoItem = document.createElement("section");
    novoItem.className = "carrinho__produtos__produto";
    novoItem.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${precoProduto}</span>`;

    // Carrinho

    let carrinho = document.getElementById('lista-produtos');
    carrinho.parentNode.appendChild(novoItem);

    // Somar valor

    let precoSemSigla = parseFloat(precoProduto.replace("R$", ""));
    let somaValor = quantidade * precoSemSigla;
    totalValores += somaValor; // Acumula valor
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `R$${totalValores.toFixed(2)}`;
}

function limpar() {

    // Resetar valores

    let itens = 0;
    let totalValores = 0;

    // Limpar section e voltar valor total

    let carrinho = document.getElementById('lista-produtos');
    carrinho.parentNode.innerHTML = `<section class="carrinho__produtos__produto" id="lista-produtos"></section>`;

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `R$0.00`;
}