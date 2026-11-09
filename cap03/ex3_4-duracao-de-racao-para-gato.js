// elaborar programa para vet q leia peso da ração (em kg)
//e qnt o gato consome por dia da ração (em g)
// informe qntds dias irá durar a ração e qnt sobra da ração em g

const prompt = require("prompt-sync") ();
const pesoKg = Number(prompt("Digite o peso da ração em Kg: "))
const consumo = Number(prompt("Digite o consume do gato em gr: "))
const pesoGr = pesoKg * 1000 // var aux.
const duracao = Math.floor (pesoGr / consumo) // calculo das respostas
const sobra = pesoGr % consumo
console.log(`Duração ${duracao} Dias`)
console.log(`Sobra: ${sobra}gr`)