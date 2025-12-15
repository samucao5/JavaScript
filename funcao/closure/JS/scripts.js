//closure e um conjunto de funções, onde temos um reaproveitamento
//do escopo interno de uma função
//clusure tambem podem servir para salvar os resultados ja executados 
function some_function() {
    let txt = "ola mundo";

    function display(){
        console.log(txt);
    }

    display();
}

some_function();

const soma_closure = (n) => {
    return (m) => {
        return n + m;
    };
};

const c1 = soma_closure(5);

const c2 = soma_closure(20);

//salva o valor de n 
console.log(c1);

console.log(c2);

//salva o valor de m e faz a soma
console.log(c1(5));

console.log(c2(10));
