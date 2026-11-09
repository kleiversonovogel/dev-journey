// cria ref ao form e aos elementos de resp (pelo id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// cria "ouvinte" do evento, qnd botao submit acionado
frm.addEventListener("submit", (e) => {

const veiculo = frm.InVeiculo.value // obtem conteudo do campo
const preco = Number(frm.InPreco.value)

const entrada = preco * 0.50 // calcula valor entrada
const parcela = (preco * 0.50) / 12 // ... e das parcelas

resp1.innerText = `Promoção: ${veiculo}` // exibe as resps
resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

e.preventDefault() // evita envio do form
})