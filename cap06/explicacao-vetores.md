# Exercício: vetores no JavaScript

Explicação geral das funções usadas (`slice`, `splice`, `for`, `forEach`, etc.).

```javascript
const letras = ["A", "B", "C", "D"] // declara e define conteúdo inicial do array
const letras2 = letras.slice(-2) // obtém as últimas duas letras
const letras3 = letras.slice(0, -1) // obtém do início até o final, exceto a última
console.log(letras) // ["A", "B", "C", "D"]
console.log(letras2) // ["C", "D"]
console.log(letras3) // ["A", "B", "C"]

const retira = letras.splice(2, 1) // remove a partir da posição 2, 1 elemento
console.log(letras) // ["A", "B", "D"]
console.log(retira) // ["C"]
```
