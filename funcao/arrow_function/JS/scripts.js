//Arrow function outra forma de criar funções 
const test_arrow = () => {
    console.log("bom dia");
};

test_arrow();

const par_ou_impar = (n) => {
    if(n % 2 === 0){
        console.log("par");
        return
    }
    console.log("impar");
}

par_ou_impar(prompt("digite um numero:"));

const raiz_quadrada = (x) => {
    return x * x;
}

console.log(raiz_quadrada(5));

const raiz_quadrada_2 = (x) => x * x;

console.log(raiz_quadrada(3));

console.log(raiz_quadrada_2(10));
