const prompt = require("prompt-sync")() // add o pct programa
const veiculo = prompt("Veiculo: ") // lê os dados de entrada
const preco = Number(prompt("Preço: "))
const entrada = preco * 0.50 // calcula valor entrada
const parcela = (preco * 0.50) / 12 // ... e das parcelas
console.log(`Promoção: ${veiculo}`) // exibe veiculo
console.log(`Entrada de R$${entrada.toFixed(2)}`) // saida de dados
console.log(`+12x de R$${parcela.toFixed(2)}`)