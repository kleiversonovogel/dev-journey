// cria referencia ao form ao elemento h3 (onde será exibido a reposta
const frm = document.querySelector("form")
const resp= document.querySelector("h3")

// cria um "ouvinte" de evento, acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // obtem nome digitado form
    resp.innerText = `Olá ${nome}`
    e.preventDefault() // evita envio form
})