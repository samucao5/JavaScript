//argumento opcianal
const multiplicacao = function(m,n) {
    if(n === undefined){
        resultado = m * m;
    }else {
        resultado = m * n;
    }
    return resultado;
};

console.log(multiplicacao(5));

console.log(multiplicacao(2,5));

const user = (nome) => {

    if(!nome){
        console.error("digite seu nome");
        return
    }

    console.log(`ola ${nome}`);
} 

user();

user("samuel");
