console.log('### Exemplo 1 ###')
console.log('a = ', a)
var a = 1
console.log('a = ', a)

console.log('\n### Exemplo 2 ###')
// O codigo acima equivale a este segundo exemplo.
var b
console.log('b = ', b)
b = 2
console.log('b = ', b)

console.log('\n### Exemplo 3 ###')
// O conceito de hoisting não existe com let.
// console.log('c = ', c) // ReferenceError: Cannot access 'c' before initialization
let c = 1
console.log('c = ', c)

