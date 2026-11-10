const prompt = require("prompt-sync")()

console.log("---------------------------------------------------------------------")
console.log("USO DE WHILE PARA IMPRIMIR DE 1 A 5")
console.log("---------------------------------------------------------------------")

let i = 1
while (i <= 5){
    console.log(i)
    i++
}

console.log("---------------------------------------------------------------------")
console.log("USO DO DO...WHILE PARA REPETIR ATÉ NÚMERO DIGITADO FOR MAIOR OU IGUAL A 10")
console.log("---------------------------------------------------------------------")

let num = 0
do {
    num = Number(prompt("DIGITE UM NÚMERO: "))
}while(num < 10)

console.log("---------------------------------------------------------------------")
console.log("TABUADA DO NÚMERO 3")
console.log("IMPRIME TODA A TABUADA DO NÚMERO 3")
console.log("---------------------------------------------------------------------")

for(let NumTabuada = 1; NumTabuada <= 10; NumTabuada++){
    let resultado = 3 * NumTabuada
    console.log(`3 * ${NumTabuada} = ${resultado}`)
}
console.log("---------------------------------------------------------------------")