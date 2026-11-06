// elaborar programa que leia um numero e verfique se ele é ou não perfeito
// num perfeito = soma dos seus divisores inteiros (exceto ele mesmo)
// deve exibir os divisores e a soma deles

const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let contador = 1
    let soma = 0
    let divisores = ""
    const numeroInformado = Number(frm.numero.value)

    while(contador < numeroInformado) {
        if (numeroInformado % contador === 0) {
            soma += contador
            divisores += contador + " "
        }
        contador++
    }

    let veredito = (soma === numeroInformado) ? "É perfeito" : "Não é perfeito"

    resp.innerText = `divisores: ${divisores} e soma: ${soma} | veredito: ${veredito}`

})