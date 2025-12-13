//estrutura de repetição um bloco de codigo que se repete ate uma condição
//seja satisfeita

let idade = prompt("digite sua idade:");
//while e um comando ao qual so para quando a instrução seja verdadeira
while( idade <= 18){
    console.log(idade);
//incrementador nome_da_variavel++ ou nome_da_variavel = nome_da_variavel + 1;
    idade++;
}
console.log(`voce e maior de idade`);

//do while ele roda pelo menos uma vez caso a veriavel não se torne verdadeira ele continua

let numero = 1;
let numero_a_ser_contado = (prompt("digite um numero:"));;
do{
    console.log(numero);
    numero = numero + 1;
}while(numero <= numero_a_ser_contado);
    console.log("numeros contados");

//for ela condensa toda logica em uma linha
    let i = prompt("digite um numero");
for(i; i >= 0; i--){
    console.log(`${i} segundos`);
}
console.log("acabou");

//break tem como função forçar a parada do laço de repetição
let s = 100;
for(s; s >= 0; s = s - 1){
    console.log(s)
    if(s === 5){
        break;
    }
}
console.log(`s = ${s}`);

//continue pula um instrução

let m = 1;

for (; m < 10; m++) {
    if (m === 3) {
        console.log("numero apagado");
        continue;
    }
    console.log(m);
}