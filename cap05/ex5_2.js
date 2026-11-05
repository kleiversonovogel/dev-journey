const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let chinchilas = Number(frm.numeroDeChinchilas.value)
    const anos = Number(frm.numeroDeAnos.value)

    if (chinchilas < 0 || isNaN(chinchilas)) {
        resp.innerText = `Invalido. Tente novamente`
        return
    }

    let i = 1
    let lista = `${i}° ano: ${chinchilas} chinchilas\n`

    while (i < anos) {
        chinchilas = chinchilas * 3
        i++
        lista += `${i}° ano: ${chinchilas} chinchilas\n`
    }

    resp.innerText = lista
})