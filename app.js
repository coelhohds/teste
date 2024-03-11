function exibeTexto(tag, texto){
    let teste = document.querySelector(tag);
    teste.innerHTML = texto;
}

exibeTexto('h1', 'Hora do desafio')

function consoleBotao(){
    console.log('O botão foi clicado');
}

function alertaBotao(){
    alert('Eu não gosto de JS');
}

function promptBotao(){
    let cidade = prompt('Escreva uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function somaBotao() {
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let resultado = num1 + num2
    alert(`A soma entre ${num1} e ${num2} é ${resultado}`)
}