// tipos primitivos

// boolean
var verdOuFalse = false;
// typeof uma funcao para mostrar o tipo da variavel, boolean, int, string ...
console.log(typeof(verdOuFalse));



// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String

var nome = 'diana'
console.log(typeof(nome));

// como declarar variaveis, var,let,const
// var local e global 
var variavel = 'diana';
variavel = 'rafael'
console.log(variavel);

// let escopo local de bloco 
let variavel2 = 'diana';
variavel2 = 'rafael'
console.log(variavel2);


// const ecopo local e o seu valor nao pode ser alterado

const constante = 'Marcos'
console.log(constante)


var escopoGlobal = 'global';
console.log(escopoGlobal);


function escopoLocal(){
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno);

}

// atribuicao
var atribuicao = 'diana'

// comparacao

var comparacao = '0' == 0;
console.log(comparacao);

// comparacao indentica, ele compara o valor e o tipo da variavel 

var comparacaoIndentica ='0' === 0;
console.log(comparacaoIndentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

// multiplicacao

var multiplicacao = 1 * 1;
console.log(multiplicacao);

// divisao real 
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisao inteira, mostra o resto 
var divisaoInteira = 6 % 2;

// pontenciacao
var pontenciacao = 2 ** 9;
console.log(pontenciacao);

// maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que 
var menorQue = 5 < 2;
console.log(menorQue);

// menor ou igual 

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// maior ou igual 

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// operadores logicos  E
var e = true && true ;
console.log(e);

// operadores logicos ou
var ou = true || false;
console.log(ou);

// operador logico nao ]
var nao = !true
console.log(nao);

