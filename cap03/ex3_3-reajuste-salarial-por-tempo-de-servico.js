// leia salario e tempo, a cd 4 anos, acrescenta 1%
// ... informe o num de quadriênios a q o func. tem direito e o salario final

// a cada 4 anos * 0.01

const prompt = require("prompt-sync") (); // add pct programa
const salario = Number(prompt("Salario: ")) // dados de entrada
const tempo = Number(prompt("Tempo (Anos): "))
const quadrienios = Math.floor(tempo / 4) // define quadrienios
const acrescimo = salario * quadrienios * 0.01 // correção
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salario Final: R$ ${(salario + acrescimo).toFixed(2)}`)