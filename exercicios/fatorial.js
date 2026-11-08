/*

Defina numero = 5.
Calcule o fatorial dele (5! = 5 × 4 × 3 × 2 × 1) usando um for.
Mostre o resultado (deve dar 120).

node ./exercicios/fatorial

*/
let numero = 5
let acumulador = 1

for(let i = numero; i >= 1; i--) {
    acumulador *= i
}

console.log(acumulador)