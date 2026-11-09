const frm = document.getElementById("formulario")
const resplado = document.getElementById("respostalado")
const resptipo = document.getElementById("respostatipo")
const limpar = document.getElementById("Limpar")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(frm.ladoA.value)
    const ladoB = Number(frm.ladoB.value)
    const ladoC = Number(frm.ladoC.value)

    /*
    se pode formar triangulo (a + b <= c)
    equilatero 3 iguais
    isosceles 2 lados
    escaleno 3 diferentes
    */

    if (ladoA === ladoB && ladoB === ladoC) {
        resptipo.innerText = `Equilatero`
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        resptipo.innerText = `Isosceles`
    } if (ladoB + ladoC <= ladoA || ladoB + ladoA <= ladoC || ladoA + ladoC <= ladoB) {
        resptipo.innerText = ``
    } else {
        resptipo.innerText = `Escaleno`
    }

    if (ladoB + ladoC <= ladoA || ladoB + ladoA <= ladoC || ladoA + ladoC <= ladoB) {
        resplado.innerText = `Não pode formar triangulo`
    } else {
        resplado.innerText = `Pode formar um triangulo`
    }
})