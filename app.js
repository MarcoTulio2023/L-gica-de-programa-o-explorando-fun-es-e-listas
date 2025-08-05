//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Seja bem-vindo! Ao Jogo de Adivinhação';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Adivinhe o número que estou pensando entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemNaTela(Tag, texto){
    let campo = document.querySelector(Tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
exibirMensagemNaTela('h1', 'Bem-vindo ao Jogo de Adivinhação');
exibirMensagemNaTela('p', 'Tente adivinhar o número que estou pensando entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
        exibirMensagemNaTela('h1', 'Acertou!');
        exibirMensagemNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirMensagemNaTela('p', 'O número secreto é menor!');
        } else {
            exibirMensagemNaTela('p', 'O número secreto é maior!');
        }
        limparInput();
        tentativas++;        
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10) + 1;   
}

function limparInput(){
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparInput();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


