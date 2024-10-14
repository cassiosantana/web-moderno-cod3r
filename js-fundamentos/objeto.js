// Nesta aula trataremos apenas a criação de objetos de forma literal.

// Em js objeto é uma coleção de chaves/valores

const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// Objeto não é Json. Json é texto

'{"nome": "Camisa Polo", "preco": 79.90}'