var a = 10
console.log(a)

// redeclarar variáveis com var não causa erro
var a = 100
console.log(a)

let b = 20
console.log(b)

// let b = 200 // SyntaxError: Identifier 'b' has already been declared
b = 200
console.log(b)

const c = 30
console.log(c)

// c = 300 // TypeError: Assignment to constant variable.