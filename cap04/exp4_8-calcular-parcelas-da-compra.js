// uma farmacia necessita de um programa que leia o total de uma compra,
// exiba como resposta o num max de vezes que o cliente pode parcelar
// e o valor de cada parcela
// considere:
// a) cada parcela deve ser de no min R$20.00
// b) max de parcelas: 6x

const prompt = require("prompt-sync") () // add pacote prompt-sync
const valorCompra = Number(prompt("Valor da compra: ")) // le valor da compra
const aux = Math.floor(valorCompra / 20) // aux = num de parcelas s/ condic.
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // op. ternário
const valorParcelas = valorCompra / parcelas // calculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$${valorParcelas.toFixed(2)}`)