const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria ouvinte
frm.addEventListener("submit", (e) => {
    e.preventDefault ();

    const numero = Number(frm.inNumero.value)
    const raizq = Math.sqrt(numero)
    if (Number.isInteger(raizq)) {
        resp.innerText = `Raiz: ${raizq}`
    } else {
        resp.innerText = `Não há raiz para ${numero}`
    }
})