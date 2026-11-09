const frm = document.querySelector("form")
const resp = document.getElementById("respo")
frm.addEventListener ("submit", (e) => {
    e.preventDefault();
const num1 = Number(frm.num1.value)
const num2 = Number(frm.num2.value)
const soma = (num1 + num2)

resp.innerText = `Soma: ${soma}`
})