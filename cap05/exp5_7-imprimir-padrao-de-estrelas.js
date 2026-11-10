// Exemplo: gerar uma sequência alternada de asteriscos e hífens com o tamanho informado.
// Seleciona <form> do HTML para poder ser manipulado
const frm = document.querySelector("form")
// Seleciona o <h3> para armazenar a resposta
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.InNumero.value)
    let estrelas = ""
    for (let i = 1; i <= num; i++) {
        if(i % 2 == 1) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "-"
        }
    }
    resp.innerText = estrelas
})