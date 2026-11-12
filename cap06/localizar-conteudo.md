# Localizar conteúdo em vetores

Como um vetor pode conter muitos elementos, as linguagens de programação dispõem de alguns métodos para nos auxiliar no controle de seu conteúdo.

Alguns desses são `indexOf()`, `lastIndexOf()` e `includes()`.

- `indexOf`: a busca é feita a partir do início do vetor.
- `lastIndexOf`: a busca é feita do final até o início do vetor.
- Se o conteúdo não existir no vetor, o valor `-1` é devolvido.
- Se existir, é retornada a primeira ocorrência.
- `includes`: retorna `true` ou `false` de acordo com a existência do conteúdo no vetor.

```javascript
const idades = [5, 6, 8, 3, 6, 9]
console.log(idades.indexOf(6)) // retorna 1 ...lembre-se: começa em 0
console.log(idades.lastIndexOf(6)) // retorna 4
console.log(idades.indexOf(7)) // retorna -1
console.log(idades.includes(3)) // retorna true
```

## Resumo

| Método            | O que faz                | Resultado |
|-------------------|--------------------------|-----------|
| `indexOf(6)`      | 1ª posição do valor      | 1         |
| `lastIndexOf(6)`  | última posição do valor  | 4         |
| `indexOf(7)`      | valor não existe         | -1        |
| `includes(3)`     | verifica se existe       | true      |

Índice começa em 0 | `idades = [5, 6, 8, 3, 6, 9]`
