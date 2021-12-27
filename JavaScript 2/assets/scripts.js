function calculadora(){
    const operacao= Number(prompt('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão Real\n 5 - Divisão Inteira\n 6 - Potenciação'));

    if (!operacao ||  operacao >= 7) {
        alert('erro - operação inválida');
        calculadora();
    } else {
let n1=Number(prompt('Insira o primeiro valor:'));
let n2=Number(prompt("Insira o segundo valor:"));
let resultado;

function soma(){
    resultado=n1+n2;
    alert(`${n1}+${n2}=${resultado}`);
}

function subtracao(){
    resultado=n1-n2;
    alert(`${n1}-${n2}=${resultado}`);
}

function multiplicacao(){
    resultado=n1*n2;
    alert(`${n1}*${n2}=${resultado}`);
}

function divisaoReal(){
    resultado=n1/n2;
    alert(`${n1}/${n2}=${resultado}`);
}

function divisaoInteira(){
    resultado=n1%n2;
    alert(`O resto da divisão ${n1}/${n2} é ${resultado}`);
}

function potenciacao(){
    resultado=n1**n2;
    alert(`${n1}^${n2}=${resultado}`);
}

function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert('Digite uma opção válida!');
        novaOperacao();
    }
}

if (!n1 || !n2) {
    alert('erro - parâmetros inválidos');
    calculadora();
} else {
if(operacao==1){
    soma();
    novaOperacao();
}else if(operacao==2){
    subtracao();
    novaOperacao();
}else if(operacao==3){
    multiplicacao();
    novaOperacao();
}else if(operacao==4){
    divisaoReal();
    novaOperacao();
}else if(operacao==5){
    divisaoInteira(); 
    novaOperacao();   
}else if(operacao==6){
    potenciacao();
    novaOperacao();
}
}
}
}


calculadora();