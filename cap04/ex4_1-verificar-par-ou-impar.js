// ler num e informar se é impar ou par
// usar if else trad. e depois op. ternario

const frm = document.querySelector("form")
const resp = document.getElementById("resp")
const limpar = document.querySelector("#limpar")
const num = document.getElementById("num")

/* frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const resposta = Number(frm.num.value)

    if (resposta % 2) {
        resp.innerText = `${resposta} é impar`
    } else {
        resp.innerText = `${resposta} é par`
    }
}) */
const resposta = Number(frm.num.value)
    frm.addEventListener("submit", (e) => {
        resp.innerText = resposta % 2 == 0
        ? `${resposta} é par`
        : `${resposta} é ímpar`
    })

limpar.addEventListener("click", (e) => {
    resp.innerText = ``
    frm.num.value = ``
})