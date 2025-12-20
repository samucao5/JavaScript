//array
const numeros = [1,2,3];
console.log(numeros);
console.log(typeof numeros);

const itens = ["samuel", 20, true, 5.55, numeros];
console.log(itens);
//para acessar o array
console.log(numeros[0], numeros[2]);


//propriedade são informações de um objeto
console.log(numeros.length);

console.log(numeros["length"]);

let nome = "samuel";

console.log(nome.length);

if(nome.length >= 6){
    console.log("nome longo");
}else{
    console.log("nome curto");
}