// Seleciona a tag <form> do HTML para manipularmos o envio do formulário
const frm = document.querySelector("form")

// Seleciona a tag <h3> do HTML onde a mensagem de resposta será exibida
const resp = document.querySelector("h3")

// Adiciona um "ouvinte" que aguarda o usuário enviar o formulário (clicar no botão de submit)
frm.addEventListener("submit", (e) => {
    // Evita que a página recarregue automaticamente ao enviar o formulário
    e.preventDefault()
    
    // Pega o valor digitado no campo de input (cujo id é InNumero) e converte para número
    const num = Number(frm.InNumero.value)
    
    // Inicializa a variável que vai contar quantos divisores o número possui
    let numDivisores = 0

    // Loop que começa em 1 e vai até o valor de 'num', testando todas as divisões possíveis
    for (let i = 1; i <= num; i++) {
        // Se o resto da divisão de 'num' por 'i' for 0, significa que 'i' é um divisor
        if (num % i === 0) {
            numDivisores++ // Incrementa o contador de divisores
        }
    }

    // Um número primo é divisível apenas por 1 e por ele mesmo (ou seja, tem exatamente 2 divisores)
    if (numDivisores === 2) {
        // Se tiver 2 divisores, exibe que é primo
        resp.innerText = `${num} é primo`
    } else {
        // Caso contrário, exibe que não é primo
        resp.innerText = `${num} não é primo`
    }
})