// Exemplo: verificar se cada ano informado é ano de Copa do Mundo; 0 encerra a entrada.
const prompt = require("prompt-sync")()
console.log("Anos de copa do mundo, digite 0 para sair")
console.log("--------------------------------------------")
do {
    const ano = Number(prompt("Ano: "))
    if (ano == 0) {
        break // sai da repetição
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve copa, em ${ano} (Segunda Guerra Mundial)`)
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de copa do mundo`)
    } else {
        console.log(`Não, ${ano} não é ano de copa do mundo`)
    }
} while(true) 