// Exercício: exibir o nome de uma fruta a quantidade de vezes informada.
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
e.preventDefault() // evita envio vazio do form

const fruta = frm.InFruta.value // ler nome fruta
const quantidade = Number(frm.InNumero.value) // ler numero
let contador = ""

for (let i = 0; i < quantidade; i++) {
if (i < quantidade - 1) {
    contador += fruta + " * "
} else {
    contador += fruta
}
}
resp.innerText = `${contador}`
})