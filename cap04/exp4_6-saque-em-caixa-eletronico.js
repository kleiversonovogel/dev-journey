// cria ref ao form e a resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")
const resp3 = document.querySelector("#resp3")

// cria ouvinte quando submit é clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault ()
    const saque = Number(frm.valorSaque.value)

    if (saque % 10 != 0) {// n multiplo de 10
    alert("valor invalido p/ notas disponiveis (R$10, 50, 100")
    frm.valorSaque.focus()
    return
}
const notasCem = Math.floor(saque / 100)
let resto = saque % 100
const notasCinquenta = Math.floor(resto / 50)
resto = resto % 50
const notasDez = Math.floor(resto / 10)
if (notasCem > 0) {
    resp1.innerText = `Notas 100: ${notasCem}`
}
if (notasCinquenta > 0) {
    resp2.innerText = `Notas 50: ${notasCinquenta}`
}
if (notasDez > 0) {
    resp3.innerText = `Notas 10: ${notasDez}`
}
})
