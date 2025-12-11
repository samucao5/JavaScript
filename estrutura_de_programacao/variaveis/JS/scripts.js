//variaveis
//let nome_da_variavel = valor_desejado;
let nome = "samuel";
console.log(nome);
nome = "samuel felipe";
console.log(nome);
//cont nome_da_variavel = valor_desejado;
//const não muda de valor de acordo com o tempo
const idade = 20;
console.log(idade);

//tipos de dados
console.log(typeof nome);
console.log(typeof idade);

//não podemos criar variaveis com o inicio com simbolos como: #as , $as
//numeros: 12opa , 32dd,
//tambem não podemos colocar o nome da variavel com nomes reservados(funcoes da linguagem)
//ex: let, if, while, true, entre outros

//evitar fazer este tipo de comando
let a = 10,
    b = 20,
    c = 30;

//as variaveis possuem case sensitive entao caso um dois valores
//esta com algum caractere maiusculo ele sera diferente de outro ao qual não esta
const nomecompleto = "Samuel Felipe Candido Monteiro Da Silva";
const NomeCompleto = "Samuel Felipe Candido Monteiro Da Silva";

console.log(nomecompleto);
console.log(NomeCompleto);