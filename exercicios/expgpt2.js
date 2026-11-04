// uma empresa precisa de um programa que calcule o salario semanal dos func.
// nome dos func. qntd de hrs trabalhadas semana. valor recebido p hr
// 1. salkario bruto (hr x vlr)
// calcular desconto (/0.08)
// calcular salario liquido
// mostrar result.
const frm = document.querySelector("form")
const nomeresposta = document.querySelector("#nomeresp")
const salarioresposta = document.querySelector("#salarioresp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

const nome = (frm.nome.value)
nomeresposta.innerText = (`Olá, ${nome}, conte sempre com a MeuSalário`)

const horas = Number(frm.horas.value)
const valor = Number(frm.valor.value)
const MeuSalarioBruto = horas * valor
const desconto = MeuSalarioBruto * 8 / 100
const MeuSalario = MeuSalarioBruto - desconto
salarioresposta.innerText = (`Seu salário é R$${MeuSalario.toFixed(2)}
Seu desconto foi de R$${desconto.toFixed(2)}
Enquanto o valor bruto do seu salário é R$${MeuSalarioBruto.toFixed(2)}`)
})