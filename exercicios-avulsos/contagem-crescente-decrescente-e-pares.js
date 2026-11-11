// Exercício avulso: exibir contagens crescente, decrescente e os números pares de 2 a 20.
/* Mostre os números de 1 a 10, um por linha.
Depois mude o programa para mostrar de 10 a 1.
Por último, mostre só os números de 2 a 20 que são pares.

node ./exercicios-avulsos/contagem-crescente-decrescente-e-pares

*/

console.log("-------------------------------------------")

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("-------------------------------------------")

console.log("-------------------------------------------")

for (let i = 10; i >= 1; i--){
    console.log(i)
}

console.log("-------------------------------------------")

console.log("-------------------------------------------")

for(let i = 2; i <= 20; i += 2) {
    console.log(i)
}

console.log("-------------------------------------------")