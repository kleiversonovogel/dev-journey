// cria ref ao form e elementos de resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// ouvinte criado, aciona quando clicar no botao (submit)
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio form
    const nome = frm.inName.value // obtem nome do aluno
    const nota1 = Number(frm.nota1.value) // ... e as notas
    const nota2 = Number(frm.nota2.value)
    const media = (nota1 + nota2) / 2 // calcula media
    resp1.innerText = `Media das notas ${media.toFixed(2)}` // exibe media

    // cria condição
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "blue"
        // altera texto e cor do elemento resp2
    } else if (media >= 4) {
        resp2.innerText = `${nome}, você está de recuperação, boa sorte!`
        resp2.style.color = "yellow"
    }
    else {
        resp2.innerText = `Você foi reprovado(a), ${nome}, estude para a próxima!`
        resp2.style.color = "red"
        // altera texto e cor do elemento resp2
    }
})

