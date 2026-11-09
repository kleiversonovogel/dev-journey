const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.InNumero.value) // obtem num informado
    let resposta = `Entre ${num} e 1: ` // string p/ montar a resp
    for (let i = num; i > 0; i--) { // cria um for decrescente
        resposta = resposta + i + ". " // resp acumula num e virgulas
    }
    resp.innerText = resposta // exibe a resp
})