//função serve para que podemos dividir nosso codigo em varias funções
//function nome_da_função(argumentos){}

function boa_tarde(){
    console.log("boa tarde");
}

boa_tarde();
//função em variavel
const funcao_em_variavel = function (){
    console.log("função em variavel");
}

funcao_em_variavel();

function funcao_com_parametro(nome) {
    console.log(`seu nome e: ${nome}`);
}

funcao_com_parametro(prompt("qual seu nome:"));

//return: retorna os valores da função 

s = 3;
b = 2;

function soma (num1, num2){
    return num1 + num2;
}

let resultado = soma(s,b);
console.log(resultado);

function idade (){
    let idade_1
    idade_1 = prompt("digite sua idade");
    return idade_1;
}
    console.log(idade());

//escopo das funções

let v = 9;
function testando_escopo() {
    let v = 6;
    console.log(`v dentro da função: ${v}`);
}

testando_escopo();

console.log(`v fora da função e: ${v}`);

//escopo aninhado: que consiste em ter em qualquer bloco a declaração
//de variaveis separadas dos outros escopos

//escopo global
let t = 5;

function escopo_aninhado(){
//escopo do funcition
    let t = 10;
    console.log(t)
    if(true){
    //escopo if
        let t = 15;
        if(true){
        //escopo do if do if
            let t = 20;
            console.log(t)
        }
        console.log(t);
    }
}
escopo_aninhado();
console.log(t);
