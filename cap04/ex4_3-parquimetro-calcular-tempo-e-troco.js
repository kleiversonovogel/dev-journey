const frm = document.querySelector("form")
const resptempo = document.getElementById("Tempo")
const resptroco = document.getElementById("Troco")

/*
lria valor depositado,  informar tempo de permanencia,
e troco (se necessario),  
*/

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.valor.value)
    //30, 60, 120
    //1, 1.75, 3.00

if (valor >= 3) {
    const troco = valor - 3
    resptempo.innerText = `120min`
    resptroco.innerText = `R$${troco.toFixed(2)}`
} else if (valor >= 1.75) {
    const troco = valor - 1.75
    resptempo.innerText = `60min`
    resptroco.innerText = `R$${troco.toFixed(2)}`
} else if (valor >= 1) {
    const troco = valor - 1
    resptempo.innerText = `30min`
    resptroco.innerText = `R$${troco.toFixed(2)}`
} else {
    resptroco.innerText = `Valor insuficiente`
    resptempo.innerText = ``
    return
}

})