// Uma loja chamada VogelStore precisa de um programa que calcule o valor final das compras de seus clientes.

const frm = document.querySelector("form")
const respNome = document.getElementById("RespNome")
const respValorTotal = document.getElementById("RespValorTotal")
const respDesconto = document.getElementById("RespDesconto")

addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.nome.value
    respNome.innerText = `Olá, ${nome}, temos uma oferta especial para você`
    respDesconto.innerText = ``

    const valorBruto = Number(frm.valorBruto.value)
    if (valorBruto < 100) {
        respValorTotal.innerText = `Valor total: R$${valorBruto.toFixed(2)}`
    } else if (valorBruto <= 299.99) { // 5
        const desconto = valorBruto * 5 / 100
        const valorFinal = valorBruto - desconto
        respDesconto.innerText = `Seu desconto é de 5% isso te deu R$${desconto.toFixed(2)} de desconto`
        respValorTotal.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    } else if (valorBruto <= 499.99) { // 10
        const desconto = valorBruto * 10 / 100
        const valorFinal = valorBruto - desconto
        respDesconto.innerText = `Seu desconto é de 10% isso te deu R$${desconto.toFixed(2)} de desconto`
        respValorTotal.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    } else { // 15
        const desconto = valorBruto * 15 / 100
        const valorFinal = valorBruto - desconto
        respDesconto.innerText = `Seu desconto é de 15% isso te deu R$${desconto.toFixed(2)} de desconto`
        respValorTotal.innerText = `Valor: R$${valorFinal.toFixed(2)}`
    }
})