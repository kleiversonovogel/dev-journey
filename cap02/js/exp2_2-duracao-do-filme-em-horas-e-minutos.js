// cria ref ao form e ao elementos resposta (h3 e h4)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria "ouvinte" de evento, acionando quando botao submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value // obtem conteudo do campo
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arredonda a resposta p/ baixo
    const minutos = duracao % 60 // obtem resto da divisao

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`

    e.preventDefault() // evita envio do form

})