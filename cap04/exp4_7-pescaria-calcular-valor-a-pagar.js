const prompt = require("prompt-sync") (); // add pacote prompt-sync
const pessoas = Number(prompt("Num de Pessoas: ")) // le dados de entrada
const peixes = Number(prompt("Num de Peixes: "))
let pagar // declara variavel pagar
if (peixes <= pessoas) { // condição definida no exp
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log(`Pagar R$ ${pagar.toFixed(2)}`) // exibe valor a ser pago