const frm = document.querySelector("form") // obtem elementos da página
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // Exercício: cadastro de pacientes com fila de espera, prioridade de urgência e atendimento.
// vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const nome = frm.inPaciente.value // obtem nome do paciente
    pacientes.push(nome) // add fim do array
    let list = "" // string pra concatenar pacientes
    // for tradicional (inicia em 0 enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        list += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = list // add lista de pacientes
    frm.inPaciente.value = "" // limpa campo de formulário
    frm.inPaciente.focus() // posiciona o cursor no campo
})

// adiciona um ouvinte de evento click no botão btUrgencia
frm.btUrgencia.addEventListener("click", () => {
    // verifica se as validações do formulário estão ok
    if (!frm.checkValidity()) {
        alert("Informe o paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus() // posiciona o cursor no campo inPaciente
        return // retorna ao form
    }

    const nome = frm.inPaciente.value // nome do paciente
    pacientes.unshift(nome) // add paciente no inicio do vetor
    let lista = ""
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    respLista.innerText = lista // exibe lista de pacientes
    frm.inPaciente.value = "" // limpa campo form
    frm.inPaciente.focus() // posiciona o cursor no campo
})

frm.btAtender.addEventListener("click", () => {
// se tamanho vetor = 0
if (pacientes.length == 0) {
    alert("Não há pacientes na fila de espera")
    frm.inPaciente.focus()
    return
}
const atender = pacientes.shift() // remove do inicio da fila (e obtem nome)
respNome.innerText = atender
let lista = ""
pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
respLista.innerText = lista // exibe a lista de pacientes da pag
})
