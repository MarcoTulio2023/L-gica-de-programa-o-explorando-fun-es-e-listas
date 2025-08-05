//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Seja bem-vindo! Ao Jogo de Adivinhação';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Adivinhe o número que estou pensando entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirMensagemNaTela(Tag, texto){
    let campo = document.querySelector(Tag);
    campo.innerHTML = texto;
}

exibirMensagemNaTela('h1', 'Bem-vindo ao Jogo de Adivinhação');
exibirMensagemNaTela('p', 'Tente adivinhar o número que estou pensando entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirMensagemNaTela('h1', 'Acertou!');
        exibirMensagemNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if(chute > numeroSecreto){
            exibirMensagemNaTela('p', 'O número secreto é menor!');
        } else {
            exibirMensagemNaTela('p', 'O número secreto é maior!');
        }

    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1;   
}
