/*

Vamos usar contador + if dentro do for:

Percorra os números de 1 a 50.
Conte quantos são múltiplos de 5 (dica do cap02: operador %).
No fim, mostre a quantidade.

node ./exercicios-avulsos/identificar-multiplos-de-cinco

*/
let contador = 0
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(`${i} é multiplo de 5`)
        contador++
    } else {
        console.log(`${i} não é multiplo de 5`)
    }

}
console.log(contador + " são multiplos de 5")