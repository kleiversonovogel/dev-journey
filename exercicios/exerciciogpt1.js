// cria ref ao form e ao h3
const frm = document.querySelector("form") // form
const resp = document.querySelector("h3") // ... h3 (resposta)

frm.addEventListener ("submit", (e) => { // cria ouvinte quando submit clicado
    e.preventDefault () // evita envio vazio

    const temp = Number(frm.inTemperatura.value) // le valor inserido pelo user

    if (temp < 15) {
        resp.innerText = `Friio demais, prepara um casaquinho!`
    } else if (temp <= 25) {
        resp.innerText = `Que clima agradável, aproveite o dia!`
    } else {
        resp.innerText = `Caloor! Passe um protetor solar e vá para a piscina`
    }
})