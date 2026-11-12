// seleciona o formulário e os elementos de saída
const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // vetor global com os números já apostados
let sorteado = Math.floor(Math.random() * 100) + 1 // let: precisa ser reatribuído ao reiniciar
const CHANCES = 6 // constante: máximo de tentativas

// evento disparado ao enviar o formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault() // impede o envio/recarregamento da página
    const numero = Number(frm.inNumero.value) // converte o valor digitado para número

    if (numero == sorteado) {
        // acertou: mostra mensagem e troca o estado dos botões
        respDica.innerText = `Parabéns! Número Sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) {
            // número repetido: apenas avisa, não gasta chance
            alert(`Você já apostou o numero ${numero}. Tente outro.`)
        } else {
            // número novo e errado: registra o erro
            erros.push(numero)
            const numErros = erros.length // quantidade de erros
            const numChances = CHANCES - numErros // chances restantes

            // atualiza os erros e as chances na tela
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances

            if (numChances == 0) {
                // fim de jogo: acabaram as chances
                alert(`Suas chances acabaram...`)
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Acabou o jogo! O número sorteado era ${sorteado}`
            } else {
                // ainda tem chances: dá a dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: tente um numero ${dica} que ${numero}`
            }
        }
    }

    frm.inNumero.value = "" // limpa o campo
    frm.inNumero.focus() // devolve o foco ao campo
})

// evento disparado ao clicar em "Jogar Novamente"
frm.btNovo.addEventListener("click", () => {
    erros.length = 0 // esvazia o vetor sem reatribuir
    sorteado = Math.floor(Math.random() * 100) + 1 // sorteia novo número

    // restaura os textos da tela
    respErros.innerText = "0"
    respChances.innerText = CHANCES
    respDica.innerText = "Dica: é um número entre 1 e 100"

    // restaura os botões
    frm.btSubmit.disabled = false
    frm.btNovo.className = "oculta"

    frm.inNumero.value = "" // limpa o campo
    frm.inNumero.focus() // devolve o foco ao campo
})