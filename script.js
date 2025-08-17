const botaoDeExibirPalavras = document.querySelector('#botao-palavrachave');
botaoDeExibirPalavras.addEventListener('click', mostrarPalavrasDoTexto);

function mostrarPalavrasDoTexto() {
    const textoDigitado = document.querySelector('#entrada-de-texto').value;
    const areaDeResultado = document.querySelector('#resultado-palavrachave');
    const listaDePalavras = dividirTextoEmPalavras(textoDigitado);

    areaDeResultado.textContent = listaDePalavras.join(" | ");
}

function dividirTextoEmPalavras(textoDigitado) {
    let listaDePalavras = textoDigitado.split(/\P{L}+/u);
    listaDePalavras = listaDePalavras.filter(palavra => palavra.trim() !== "");
    return listaDePalavras;
}