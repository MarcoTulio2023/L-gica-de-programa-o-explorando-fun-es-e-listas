let listaDeNumerosSorteados = [];
let limiteTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirMensagemNaTela(Tag, texto){
    let campo = document.querySelector(Tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }  
}
function exibirMensagemInicial(){
exibirMensagemNaTela('h1', 'Jogo de Adivinhação');
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
    let numeroEscolhido = parseInt(Math.random() * limiteTentativas) + 1;
    let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

    if(quantidadeNumerosSorteados === limiteTentativas){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }   
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


