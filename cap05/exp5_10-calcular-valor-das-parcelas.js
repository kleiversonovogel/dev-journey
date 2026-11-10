// Exemplo: dividir um valor em parcelas e exibir o valor de cada parcela.
const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: "))
const num = Number(prompt("N° de parcelas: "))
const valorParcelas = Math.floor(valor / num)
const valorFinal = valorParcelas + (valor % num)
for (let i = 1; i < num; i++) {
    console.log(`${i}a parcela: R$${valorParcelas.toFixed(2)}`)
}
console.log(`${num}a parcela: R$${valorFinal.toFixed(2)}`)