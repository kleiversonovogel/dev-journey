const frm = document.querySelector("form")
const valor = document.getElementById("valorapagar")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
const minutos = Number(frm.tempodeuso.value) // obtem tempo
const vlr = Number(frm.valorpormin.value) // obtem valor

// pagamento
const pagar = Math.ceil(minutos / 15) * vlr

valor.textContent = `Valor a Pagar R$: ${pagar.toFixed(2)}`
})