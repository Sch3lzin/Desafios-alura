let nameAmigos = [];
let nameAmigosID = 0;

function adicionar() {
    // Informações
    let name = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    // Adiciona span no HTML e adiciona no array
    if (name.trim() !== '') {
        nameFormatado = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if (nameAmigos.includes(nameFormatado)) {
            alert("Nome já adicionado");
            return;
        }
        nameAmigos.push(nameFormatado);
        lista.innerHTML += `<span id="nameAmigos${nameAmigosID}">${nameFormatado} - <a onclick="remover(${nameAmigosID})"class="form__remove"href="#">Remover</a></span><br>`;
        document.getElementById('nome-amigo').value = '';
        nameAmigosID++;
    } else {
        alert("Insira um nome");
    }
}

function sortear() {
    // Barrar
    if (nameAmigosID <= 2) {
        alert("Número de amigos insuficiente");
        return;
    }

    // Embaralha array
    for (let i = nameAmigos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nameAmigos[i], nameAmigos[j]] = [nameAmigos[j], nameAmigos[i]];
    }

    // Adiciona na área sorteio
    document.getElementById('lista-sorteio').innerHTML = '';
    let sorteio = document.getElementById('lista-sorteio'); 
    for (let a = 0; a < nameAmigos.length; a++) {
        if (a == nameAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + nameAmigos[a] + ' --> ' + nameAmigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + nameAmigos[a] + ' --> ' + nameAmigos[a + 1] + '<br>'
        }
    }
}

function reiniciar() {
    nameAmigos.length = 0;
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    let nameAmigosID = 0;
}

function remover(amigosID) {
    // Remove o nome do array
    let elemento = document.getElementById(`nameAmigos${amigosID}`);
    if (elemento) {
        let nome = elemento.textContent.split(' - ')[0]; // Extrai o nome do texto do span
        nameAmigos = nameAmigos.filter(amigo => amigo !== nome); // Remove do array
        elemento.nextSibling.remove(); // Remove a <br> ao lado do span
        elemento.remove(); // Remove o próprio span
    }
}