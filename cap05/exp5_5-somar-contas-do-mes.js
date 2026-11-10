// Exemplo: registrar as contas do mês e exibir a quantidade e a soma dos valores.
const frm = document.querySelector("form") // obtem elementos da pagina
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

let resposta = "" // string com a resposta a ser exibida
let numContas = 0 // inicializa contador
let valorTotal = 0 // acumulador (var globais)

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.InDescricao.value
    const valor = Number(frm.InValor.value)

    numContas++ // add valor ao contador e acumulador
    valorTotal = valorTotal + valor
    resposta = resposta + descricao + "- R$: " + valor.toFixed(2) + " "
    resp1.innerText = `${resposta} -------------------------------`
    resp2.innerText = `${numContas} conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    frm.InDescricao.value = "" // limpa campos
    frm.InValor.value = ""
    frm.InDescricao.focus() // posiciona no campo indescricao do form
})