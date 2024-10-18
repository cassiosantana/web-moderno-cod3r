// envolve os conceitos de atribuição por valor ou referência
// com tipos primitivos trabalhamos atribuição por valor mas objetos a atribuição é por referência

let valor // não inicializada
console.log(valor) // retorna undefined
// console.log(valor2) // causa erro: valor2 is not defined

valor = null // ausência de valor
console.log(valor)

// a diferênca entre undefined e null é o primeiro é 'valor não definido' nunca foi inicializada e não aponta para local em memória e o segundo é 'ausência de valor'
// não devemos atribuir undefined para uma variável. devemos deixar para a linguagem tratar isso.

const produto = {}
console.log(produto.name) // neste caso o produto foi definido mas não o name, assim o retorno é undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // remove o atributo
console.log(produto)

produto.preco = null // é a forma correta de definir que o produto está sem preço.
console.log(!!produto.preco)
console.log(produto)
