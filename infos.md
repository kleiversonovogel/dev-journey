# Notas de JavaScript

## 1. Variáveis

| Palavra | Comportamento |
|---|---|
| `let` | Valor pode ser alterado. Escopo de bloco `{}`. |
| `const` | Não aceita nova atribuição após a inicialização. Escopo de bloco. |
| `var` | Valor pode ser alterado. Escopo de função e aceita redeclaração. Forma antiga, evitar. |

```js
let idade = 20
idade = 21          // ok

const pi = 3.14
pi = 3              // erro: TypeError
```

## 2. Comentários

```js
// comentário de uma linha

/*
comentário de
duas ou mais linhas
*/
```

## 3. Tipos e conversão

Valores lidos de `prompt` ou de campos de formulário chegam como **string** (texto).
O operador `+` com uma string faz **concatenação**, não soma.

```js
const a = "2"
console.log(a + 3)           // "23" (concatenação)
console.log(Number(a) + 3)   // 5   (soma)
```

`Number()` converte o valor para número. Se não for possível, retorna `NaN`.

`Number.isInteger(x)` retorna `true` se `x` é inteiro, `false` se tem decimais.

```js
console.log(Number.isInteger(12))    // true
console.log(Number.isInteger(3.50))  // false
```

## 4. Saída de dados

`console.log()` exibe no terminal.

Template literal: texto entre crases (`` ` ``) com `${}` para inserir variáveis ou expressões.

```js
console.log(`Taxa do Garçom: ${garcom.toFixed(2)} Total: R$ ${total.toFixed(2)}`)
```

`.toFixed(n)` formata o número com `n` casas decimais. **Retorna uma string.**

`.padEnd(n)` completa a string com espaços à direita até ter `n` caracteres.

```js
"abc".padEnd(6) + "|"   // "abc   |"
```

## 5. DOM (página web)

| Método | Busca |
|---|---|
| `getElementById("id")` | Um elemento, apenas pelo id (sem `#`). |
| `querySelector("seletor")` | O primeiro elemento que coincide com um seletor CSS. |

```js
const botaoSalvar = document.getElementById('btn-salvar')
const inputNome = document.querySelector('#formulario .campo-nome')
// seletor CSS: # = id, . = classe, nome da tag = tag
```

`.innerText` define (ou lê) o texto de um elemento. Usado para mostrar a saída na página.

```js
resultado.innerText = `Total: ${total}`
```

`evento.preventDefault()` cancela o comportamento padrão do evento.
Em um `<form>`, o padrão do `submit` é recarregar a página; com `preventDefault()` isso não ocorre
e o código JS controla o que acontece.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault()
})
```

## 6. Operadores aritméticos

| Operador | Operação |
|---|---|
| `+` | adição (com strings, concatena: use `Number()`) |
| `-` | subtração |
| `*` | multiplicação |
| `/` | divisão |
| `**` | exponenciação |
| `%` | módulo: resto da divisão |

```js
const a = 5 % 2   // 1
const b = 7 % 4   // 3
2 ** 3            // 8
```

### Precedência (ordem de execução)

1. Parênteses `( )`
2. Chamadas de função (o resultado é calculado antes de entrar na expressão)
3. `**`
4. `*`, `/`, `%`
5. `+`, `-`
6. Mesmo nível: da esquerda para a direita

```js
2 + 3 * 4     // 14
(2 + 3) * 4   // 20
```

## 7. Objeto Math

| Função | O que faz | Exemplo |
|---|---|---|
| `Math.abs(n)` | Valor absoluto (remove o sinal negativo) | `Math.abs(-3)` → `3` |
| `Math.ceil(n)` | Arredonda para cima (próximo inteiro maior) | `Math.ceil(4.3)` → `5` |
| `Math.floor(n)` | Arredonda para baixo (inteiro menor) | `Math.floor(7.9)` → `7` |
| `Math.round(n)` | Arredonda para o inteiro mais próximo (`.5` ou mais sobe) | `Math.round(2.7)` → `3` |
| `Math.pow(b, e)` | `b` elevado a `e` | `Math.pow(3, 2)` → `9` |
| `Math.sqrt(n)` | Raiz quadrada | `Math.sqrt(16)` → `4` |
| `Math.random()` | Decimal aleatório de `0` até menos que `1` (o 1 nunca sai) | `0.6501...` |

Inteiro aleatório de 0 a 9:

```js
Math.floor(Math.random() * 10)
```

## 8. Terminal

| Comando | Função |
|---|---|
| `dir` | Lista arquivos e pastas (Windows) |
| `cd cap03` | Entra na pasta `cap03` |
| `cd ..` | Volta uma pasta |
| `node ex3_1.js` | Executa o arquivo JavaScript |

`prompt-sync` permite entrada de dados pelo terminal:

```js
const prompt = require("prompt-sync")()
const nome = prompt("Nome: ")   // sempre retorna string
```

Instalação: `npm install prompt-sync`

Dica VS Code: `Alt + Shift + F` formata/indenta o código.

## 9. Condições

`if...else` e `switch...case` criam condições: um bloco só executa se a condição for `true`.

```js
// simples
if (condicao) {
  comandos
}

// if...else
if (condicao) {
  comandosV   // executa se true
} else {
  comandosF   // executa se false
}

// várias condições (testadas de cima para baixo; a primeira true executa e as demais são ignoradas)
if (condicao1) {
  comandos1
} else if (condicao2) {
  comandos2
} else {
  comandos3
}
```

### Operadores relacionais

Retornam sempre `true` ou `false`.

| Operador | Significado |
|---|---|
| `==` | igual em valor (converte tipos antes de comparar) |
| `!=` | diferente em valor |
| `===` | estritamente igual: valor **e** tipo |
| `!==` | estritamente diferente: valor **ou** tipo diferente |
| `>` | maior (com texto, usa ordem alfabética) |
| `<` | menor |
| `>=` | maior ou igual (nessa ordem de símbolos) |
| `<=` | menor ou igual (nessa ordem de símbolos) |

```js
'5' == 5     // true  (converte)
'5' === 5    // false (tipos diferentes)
'5' !== 5    // true
```

Preferir `===` e `!==` para evitar conversões inesperadas.

### Operadores lógicos

| Operador | Nome | Resultado |
|---|---|---|
| `!` | NOT (negação) | inverte o valor |
| `&&` | AND (conjunção) | `true` só se **todas** forem `true` |
| `\|\|` | OR (disjunção) | `true` se **pelo menos uma** for `true` |

Precedência: `!` primeiro, depois `&&`, depois `||`. Use parênteses para deixar a ordem explícita.

```js
const cor = "Azul"   // p
const ano = 2017     // q
```

**Negação (`!`)**

| p | !p |
|---|---|
| true | false |
| false | true |

```js
if (cor !== "Azul") {...}      // forma correta de testar diferença
if (!(cor === "Azul")) {...}   // equivalente
// Atenção: !cor == "Azul" está ERRADO.
// O ! atua só em cor, antes da comparação: (!cor) == "Azul"
```

**Conjunção (`&&`)**

| p | q | p && q |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

```js
if (cor === "Azul" && ano === 2017) {...}
if (cor === "Cinza" && ano < 2017) {...}
if (ano >= 2012 && ano <= 2017) {...}
if (cor !== "Azul" && cor !== "Vermelho") {...}
```

**Disjunção (`||`)**

| p | q | p \|\| q |
|---|---|---|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

```js
if (cor === "Azul" || ano === 2017) {...}
if (cor === "Azul" || cor === "Branco") {...}
if ((cor === "Azul" || cor === "Branco") && ano === 2017) {...}
if (cor === "Azul" && (ano === 2016 || ano === 2017)) {...}
// parênteses definem a ordem de avaliação
```

### Operador ternário `?:`

Forma curta de `if...else` que **atribui um valor** conforme uma condição.

```
condicao ? valor_se_true : valor_se_false
```

```js
const categoria = idade >= 18 ? "Adulto" : "Juvenil"
// idade >= 18 → "Adulto"; caso contrário → "Juvenil"
```

Usar só para condições curtas.

## 10. Funções e return

`return` encerra a função e devolve um valor para quem a chamou. Assim a mesma lógica é escrita uma vez e reutilizada em várias chamadas.

```js
function dobro(n) {
  return n * 2
}

const x = dobro(4)   // x = 8
```

Nada após o `return` dentro da função é executado.

## 11. Git

Git é um sistema de controle de versão: registra o histórico de alterações do projeto.
GitHub é o serviço online que hospeda repositórios Git.

### Fluxo básico

```
git status                // mostra arquivos novos, modificados e prontos para commit
git add arquivo.js        // adiciona UM arquivo à área de preparação (staging)
git add .                 // adiciona TODAS as alterações da pasta
git commit -m "mensagem"  // grava as alterações staged no histórico LOCAL
git push                  // envia os commits locais para o GitHub
```

Ordem: modificar → `add` → `commit` → `push`.
O `commit` só inclui o que passou pelo `add`.

### Comandos úteis

| Comando | Função |
|---|---|
| `git init` | Cria um repositório Git na pasta atual |
| `git clone url` | Copia um repositório do GitHub para o computador |
| `git pull` | Baixa e aplica commits novos do GitHub |
| `git log --oneline` | Lista o histórico de commits (uma linha cada) |
| `git diff` | Mostra as linhas alteradas ainda não staged |
| `git restore arquivo` | Descarta alterações não commitadas do arquivo |
| `git restore --staged arquivo` | Remove o arquivo do staging (mantém as alterações) |
| `git commit --amend -m "nova"` | Altera a mensagem do último commit (só se ainda não deu push) |
| `git remote -v` | Mostra a URL do repositório remoto |

### Branches (ramificações)

Branch é uma linha independente de commits. Permite desenvolver algo sem alterar a branch principal (`main`).

```
git branch                 // lista as branches
git switch -c minha-feature // cria e entra na branch
git switch main            // volta para a main
git merge minha-feature    // junta a branch na branch atual
git push -u origin minha-feature // primeiro push de uma branch nova
```

### .gitignore

Arquivo na raiz do projeto com nomes de arquivos/pastas que o Git deve ignorar.

```
node_modules/
.env
*.log
```

Sempre ignorar `node_modules/` (recriada com `npm install`) e `.env` (pode conter senhas).

### Padronização de commits (Conventional Commits)

Formato:

```
tipo(escopo opcional): descrição curta no imperativo
```

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Mudança só em documentação (README, notas) |
| `style` | Formatação, sem mudar o comportamento (espaços, `;`) |
| `refactor` | Reorganiza o código sem mudar o comportamento |
| `test` | Cria ou altera testes |
| `chore` | Tarefas de manutenção (dependências, configuração) |

Exemplos:

```
feat: adiciona formulário de pedido
fix(form): impede envio com campo vazio
docs: revisa notas de JavaScript
refactor: move cálculo do total para função
chore: adiciona .gitignore
```

Boas práticas:
- Mensagem curta (até ~50 caracteres), sem ponto final.
- Verbo no imperativo: "adiciona", "corrige" (descreve o que o commit faz).
- Um commit = uma mudança com um propósito só.
- Commitar com frequência, em passos pequenos.
- Rodar `git status` antes do `add` para conferir o que será incluído.
- Evitar mensagens como "ajustes", "teste", "asdf".

## 12. Repetições

### for

Usado quando o número de repetições é conhecido.

```js
for (let i = 1; i <= 10; i = i + 1) {
  comandos
}
```

1. `let i = 1`: valor inicial da variável de controle (executa uma vez).
2. `i <= 10`: condição, testada **antes de cada volta**. Se `true`, executa o bloco; se `false`, encerra.
3. `i = i + 1`: incremento (ou decremento), executado **ao final de cada volta**.

`i++` é a forma curta de `i = i + 1`.

### while

Testa a condição **antes**. Se `true`, executa o bloco e testa de novo. Se `false`, encerra.
Pode executar **0 vezes** se a condição já começar `false`.

```js
let i = 1
while (i <= 10) {
  comandos
  i++   // sem isso a condição nunca fica false: laço infinito
}
```

### do...while

Executa o bloco **pelo menos uma vez**, depois testa a condição. Se `true`, repete; se `false`, encerra.

```js
let i = 1
do {
  comandos
  i++
} while (i <= 10)
```

### break e continue

| Comando | Efeito |
|---|---|
| `break` | Sai do laço imediatamente. A execução segue com o código depois do laço. |
| `continue` | Pula o resto da volta atual e vai para o próximo teste da condição. |

```js
while (condicao1) {
  comandos
  if (condicao2) {
    continue   // ignora o que vem abaixo e volta ao teste de condicao1
  }
  if (condicao3) {
    break      // encerra o laço
  }
  comandos     // só executa se continue e break não foram acionados
}
```

No `for`, o `continue` vai para o incremento antes de testar a condição.
