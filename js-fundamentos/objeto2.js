console.log(typeof Object)
console.log(typeof new Object)
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // É possível instanciar uma função

class Produto {} //  ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())