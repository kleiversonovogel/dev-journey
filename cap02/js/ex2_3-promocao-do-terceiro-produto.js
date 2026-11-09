const frm = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const product = frm.produto.value // obtem produto
    const price = Number(frm.preco.value) // obtem valor
    const prm3 = (price * 0.5)
    const valuetotal = (price * 2) + (price * 0.5)

    resp1.innerText = `${product} Buy 3, pay only ${valuetotal.toFixed(2)}U$D`
    resp2.innerText = `The 3rd ${product} costs only ${prm3.toFixed(2)}U$D`

})