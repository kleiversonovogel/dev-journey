/* elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade do condutor 
se a velocidade for inferior ou igual a permitida exiba "sem multa" 
se for ate 20% maior exiba "multa leve", se for > 20% exiba "multa grave" */

const frm = document.querySelector("form")
const resp = document.querySelector("p")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const velocidadePermitida = Number(frm.velocidadePermitida.value)
const velocidadeCondutor = Number(frm.velocidadeCondutor.value)
const limiteMultaLeve = velocidadePermitida * 1.20

if (velocidadePermitida >= velocidadeCondutor) {
    resp.innerText = `Nenhuma infração; Siga assim.`
} else if (velocidadeCondutor > limiteMultaLeve) {
    resp.innerText = `Infração grave; multa de R$ 195,23 -5pts na CNH.`
} else {
    resp.innerText = `Infração média; multa de R$ 130,16 -4pts na CNH.`
}
})