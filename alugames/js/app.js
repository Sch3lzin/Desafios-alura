function alterarStatus(id) {
    let btn = document.getElementById('btn-' + id);
    let img = document.getElementById('img-' + id);

    if (btn.classList.contains('dashboard__item__button--return')) {
        btn.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        btn.innerText = "Alugar";
    } else {
        btn.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        btn.innerText = "Devolver";
    }
}