//argumento default
const comprimento = (nome, comp = "bom dia") => {
    return `${comp}, ${nome}`;
}

console.log(comprimento("samuel"));

console.log(comprimento("allan", "boa tarde"));

const repete_frase = (text, repete = 2) => {
    for (let i = 0; i < repete; i++){
        console.log(text);
    }
};

repete_frase("boa noite");

repete_frase("bela canção", 6);

