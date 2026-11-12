# dev-journey

Exercícios e exemplos do livro **"Lógica de Programação e Algoritmos com JavaScript"**, feitos por mim durante o estudo.

![Status](https://img.shields.io/badge/status-em%20andamento-1f2937?style=flat)
![Capítulos](https://img.shields.io/badge/cap%C3%ADtulos-6-1f2937?style=flat)

> Material de apoio para estudar **JavaScript do zero**. Cada capítulo é uma pasta com os seus próprios exemplos e exercícios, e o `infos.md` reúne as anotações de estudo.

## 🛠️ Pré-requisitos: instale isso primeiro

Antes de começar, instale os três itens abaixo. Todos são gratuitos e funcionam no Windows, macOS e Linux.

### 1. Node.js (versão LTS)

O Node.js é o que permite rodar os exemplos no terminal (cap03 e os arquivos que usam `prompt-sync`).

- Baixe a **LTS** em: https://nodejs.org
- Na hora de instalar, apenas clique em **Next/Próximo** (não é necessário mudar as opções padrão).
- Depois de instalar, abra o **Prompt de Comando** (Windows) ou **Terminal** e rode:

```bash
node -v
npm -v
```

Se aparecer um número de versão (ex.: `v20.x.x` e `10.x.x`), o Node.js está pronto. Se algum comando não for encontrado, feche o terminal e abra novamente — às vezes ele só fica disponível depois do login.

### 2. VS Code

O VS Code é o editor que usei para escrever este material. Ele abre os arquivos `.html` e `.js` com facilidade e organiza o código.

- Baixe em: https://code.visualstudio.com
- Instale normalmente (no Windows, marque a opção de **adicionar ao PATH** se aparecer).
- Dica útil: `Alt + Shift + F` formata/indenta o código.

### 3. Navegador

Os exercícios com HTML (`.html`) rodam em qualquer navegador atualizado.

- Chrome, Edge, Firefox ou Opera — baixe em https://www.google.com/chrome/ (ou use o Edge/Firefox que já vem no Windows/macOS).

## 📖 Conteúdo

Cada capítulo é uma pasta com os exemplos (`exp*`) e exercícios (`ex*`). Clique no nome da pasta para abrir os arquivos no GitHub.

| Capítulo | Tópicos |
|---------|--------|
| [`cap01`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap01) | Entrada e saída (`prompt`, `alert`, `console.log`), `Number()`, `typeof`, template strings, cálculos simples |
| [`cap02`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap02) | Formulários HTML com JavaScript em arquivo externo, `querySelector`, `addEventListener`, `preventDefault`, funções do `Math` |
| [`cap03`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap03) | JavaScript no terminal com Node.js e `prompt-sync` |
| [`cap04`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap04) | Condicionais (`if/else`, `switch`, ternário), operadores relacionais e lógicos |
| [`cap05`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap05) | Laços (`for`, `while`, `do...while`), `break`/`continue`, contadores e acumuladores |
| [`cap06`](https://github.com/kleiversonovogel/dev-journey/tree/main/cap06) | Vetores (arrays): exemplos do capítulo já incluídos. As notas de estudo ficam em `infos.md`. |
| [`exercicios-avulsos`](https://github.com/kleiversonovogel/dev-journey/tree/main/exercicios-avulsos) | Práticas avulsas feitas por mim, algumas com auxílio de IAs; não reúne todos os exercícios do livro |

> ℹ️ `infos.md` contém anotações pessoais de estudo que podem conter imprecisões.

## 📁 Convenção dos arquivos

- `exp*`: exemplos do livro
- `ex*`: exercícios propostos
- O número preserva a referência ao livro; o sufixo descreve o tema em kebab-case.

## ▶️ Como executar

**Exercícios com HTML (cap01, cap02, cap04, cap05):**

1. Clone ou baixe este repositório.
2. Entre na pasta do capítulo desejado (ex.: `cap01`).
3. Abra o arquivo `.html` no navegador.

**Exercícios com Node.js (cap03):**

1. No terminal, entre na raiz do projeto e rode `npm install` (que instala o `prompt-sync`).
2. Execute o arquivo desejado:

```bash
npm install
node cap03/ex3_1-soma-de-dois-numeros.js
```

## 🛠️ Tecnologias

![HTML](https://img.shields.io/badge/HTML-1f2937?style=flat&logo=html5)
![CSS](https://img.shields.io/badge/CSS-1f2937?style=flat&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-1f2937?style=flat&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-1f2937?style=flat&logo=nodedotjs)
