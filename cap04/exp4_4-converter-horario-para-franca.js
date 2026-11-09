// cria ref ao form e ao h3
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener ("submit", (e) => {
    e.preventDefault() // evita envio do form

    const horaDoBrasil = Number(frm.InHoraBrasil.value)
    let horaFr = horaDoBrasil + 5 // calc. hora frança

    if (horaFr > 24) { // se passar de 24h na frança
        horaFr = (horaFr - 24) // subtrai 24
        }

    resp.innerText = `Hora na França: ${horaFr.toFixed(2)}`
})