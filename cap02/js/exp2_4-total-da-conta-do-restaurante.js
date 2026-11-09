// cria ref ao form e elemento h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria "ouvinte", aciona quando submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value) // obtem conteudo dos campos
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // calcula valor a ser pago
    resp.innerText = `Valor a pagar R$ ${valor.toFixed(2)}` // exibe resposta
    e.preventDefault() // evita envio vazio
})
