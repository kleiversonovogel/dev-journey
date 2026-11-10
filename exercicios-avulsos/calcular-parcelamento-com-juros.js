const frm = document.querySelector("form")
const respnome = document.querySelector("h2")
const respvalor = document.querySelector("h3")
const respjuros = document.querySelector("#respjuros")
const limpar = document.querySelector("#reset")

frm.addEventListener("submit", (e) => {
e.preventDefault()

const nome = frm.nome.value
respnome.innerText = `Bem vindo(a), ${nome}`

const valorDesejado = Number(frm.valorEmprestimo.value)

if (valorDesejado < 1000) { // 5%
    const valorFinal = valorDesejado * 1.05
    const juros = valorFinal - valorDesejado
    respvalor.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    respjuros.innerText = `Juros: R$${juros.toFixed(2)} (5% de juros)`

} else if (valorDesejado < 5000) {  // 10%
    const valorFinal = valorDesejado * 1.10
    const juros = valorFinal - valorDesejado
    respvalor.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    respjuros.innerText = `Juros: R$${juros.toFixed(2)} (10% de juros)`

} else { // 15%
    const valorFinal = valorDesejado * 1.15
    const juros = valorFinal - valorDesejado
    respvalor.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    respjuros.innerText = `Juros: R$${juros.toFixed(2)} (15% de juros)`
}
})

limpar.addEventListener("click", (e) => {
    respnome.innerText = ""
    respvalor.innerText = ""
    respjuros.innerText = ""
    frm.nome.value = ""
    frm.valorEmprestimo.value = ""
})