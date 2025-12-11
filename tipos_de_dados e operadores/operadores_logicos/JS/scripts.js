//operadores logicos servem para unir duas ou mais comparações
// && AND ele retorna true so quando os dois comparadores retornam true
//true
console.log((5 > 3) && (7 > 5));
//false
console.log((5 < 3) && (5 > 6));

// || OR ele retorna true caso uma dos comparadores retornar true
//true
console.log((4 < 1) || (2 > 1) );
//false
console.log((3 < 1) || (1 > 4) );

// ! ele inverte a saida caso um de true ele inverte para false
console.log (!(5 < 4) && (3 > 2));