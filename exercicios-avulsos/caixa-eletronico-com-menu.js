// Exercício avulso: simular um caixa eletrônico com depósito, saque, consulta e projeção do saldo.
const prompt = require("prompt-sync")()

let saldo = 1000
let opcao
let contador = 0

console.log("===============================================")
console.log("            CAIXA ELETRONICO")
console.log("===============================================")

do {
    console.log("\n-----------------------------------------------")
    console.log("                    MENU")
    console.log("-----------------------------------------------")
    console.log("  1. Depositar")
    console.log("  2. Sacar")
    console.log("  3. Ver Saldo")
    console.log("  0. Sair")
    console.log("-----------------------------------------------")

    opcao = Number(prompt("Escolha uma opcao: "))
    console.log("-----------------------------------------------")

    if (opcao === 1) {
        contador = 0
        console.log("                  DEPOSITO")
        console.log("-----------------------------------------------")
        let valor = Number(prompt("Valor Depositado: "))
        while (isNaN(valor) || valor <= 0) {
            console.log("[ERRO] Insira um valor valido.")
            valor = Number(prompt("Valor Depositado: "))
        }
        saldo += valor
        console.log(`[OK] Novo Saldo: R$ ${saldo.toFixed(2)}`)

    } else if (opcao === 2) {
        console.log("                    SAQUE")
        console.log("-----------------------------------------------")
        let valor = Number(prompt("Valor do saque: "))
        while (isNaN(valor) || valor <= 0 || valor > saldo) {
            console.log("[ERRO] Sem saldo ou valor invalido, insira novamente.")
            valor = Number(prompt("Valor do saque: "))
        }
        saldo -= valor
        contador++
        console.log(`[OK] Novo Saldo: R$ ${saldo.toFixed(2)}`)

        if (contador === 3) {
            console.log("===============================================")
            console.log("[BLOQUEADO] Por motivos de seguranca,")
            console.log("entraremos em contato via SMS ou Email.")
            console.log("===============================================")
            break
        }

    } else if (opcao === 3) {
        contador = 0
        console.log("                    SALDO")
        console.log("-----------------------------------------------")
        console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
        console.log("\n      Projecao de rendimento (1% ao mes)")
        console.log("-----------------------------------------------")
        let projecao = saldo
        for (let i = 1; i <= 6; i++) {
            projecao = projecao * 1.01
            console.log(`  Mes ${i}: R$ ${projecao.toFixed(2)}`)
        }

    } else if (opcao !== 0) {
        console.log("[AVISO] Opcao invalida.")
        continue
    }

} while (opcao !== 0)

console.log("\n===============================================")
console.log("        Obrigado por usar o Caixa!")
console.log("===============================================")