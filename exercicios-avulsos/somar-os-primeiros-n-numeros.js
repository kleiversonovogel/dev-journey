/* Crie uma variável soma com valor 0.
Use um for de 1 a 10 e, a cada volta, adicione i em soma.
Depois do loop, mostre o valor final de soma. 

node ./exercicios-avulsos/somar-os-primeiros-n-numeros

*/

let soma = 0

for(let i = 1; i <= 10; i++) {
    console.log(i)
    soma += i
}
console.log(soma)
