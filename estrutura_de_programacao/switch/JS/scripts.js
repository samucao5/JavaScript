//switch pode ser utilizado para organização de um excesso de if/else
let adm_user = prompt("digite seu nome");

switch(adm_user){
    case "samuel":
        console.log("entrada permitida");
        break;

    case "allan":
        console.log("entrada permitida");
        break;

    default:
        console.log("entrada negada");
        break;
    
}