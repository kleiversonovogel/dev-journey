const prompt = require("prompt-sync")()
const num = Number(prompt("Digite uma centena: "))

if (num < 100 || num >= 1000) {
console.log("erro, digite uma centena.")
return
}

const num1 = Math.floor(num / 100)
const sobra = num % 100
const num2 = Math.floor(sobra/10)
const num3 = sobra % 10
console.log(`${num3}${num2}${num1}`)