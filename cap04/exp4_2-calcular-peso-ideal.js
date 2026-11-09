// cria ref ao form e ao elemnt. onde será exibido a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// ouvinte do evento, aciona quando notao submit clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault () // *evita envio form

    const nome = frm.InNome.value // obtem valor nome do form
    const masculino = frm.InMasculino.checked
    const altura = Number(frm.InAltura.value) / 100

    let peso // declara var peso
    if (masculino) { // se masc. ou masc == true
        peso = 22 * Math.pow(altura, 2) // math.pow eleva ao quadrado
        peso = Math.round(peso)
    } else {
        peso = 21 * Math.pow(altura, 2)
        peso = Math.round(peso)
    }

    frm.addEventListener("reset", () => {
        resp.innerText = "" // limpa o conteudo do elemento h3 que exibe a resp
    })

    // altera texto do h3, apresentando resposta
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}kg`
})