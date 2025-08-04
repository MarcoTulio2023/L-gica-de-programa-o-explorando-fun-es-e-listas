//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Seja bem-vindo! Ao Jogo de Adivinhação';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Adivinhe o número que estou pensando entre 1 e 10';

function exibirMensagemNaTela(Tag, texto){
    let campo = document.querySelector(Tag);
    campo.innerHTML = texto;
}

exibirMensagemNaTela('h1', 'Bem-vindo ao Jogo de Adivinhação');
exibirMensagemNaTela('p', 'Tente adivinhar o número que estou pensando entre 1 e 10');

function verificarChute(){
    console.log('verificarChute()');
}