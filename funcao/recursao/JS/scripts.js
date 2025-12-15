//recursao permite que a função se autoinvoque continuamente
const ate_dez = (n,m) => {
    if(n < 10) {
        console.log("A função parou");
    } else {
        const x = n - m;
        console.log(x);

        ate_dez(x,m);
    }
};

ate_dez(50,7);

function fatorial(x){
    if (x === 0) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

const num = prompt("digite um numero: ");

const resultado = fatorial(num);

console.log(`o valor da fatorial de ${num} e ${resultado}`);