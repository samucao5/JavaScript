//estrutura de controle: permite escolher qual caminho o programa ira seguir
//de acordo com a variavel
//if ele ira seguir caso o uma condição for verdadeira

let nome = prompt("digite seu nome:");

if(nome === "samuel" || nome === "Samuel"){
    if(nome === "samuel"){
        console.log("seu nome e: samuel");
    }
    else{
        console.log("seu nome e: Samuel");
    }
}
//else if caso não seja nem if nem else, e um meio termo
else if(nome === "allan" || nome === "Allan"){
    if(nome === "allan"){
        console.log("seu nome e: allan");
    }
    else{
        console.log("seu nome e: Allan");
    }
    }
//caso seja qualquer coisa que não seja nenhuma das opçoes acima
else{
    console.log(`seu nome e: ${nome}`);
}