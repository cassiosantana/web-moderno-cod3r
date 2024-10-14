// Em ooutras linguagens como Java, o Array tem sua estrutura fixa. Assim que definida não é possível alterar o seu tamanho nem o tipo de dados dos seus elementos.

const valores = [7.7, 8.9, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // não gera erro, mas sim 'undefined'

valores[4] = 10
console.log(valores)
console.log(valores[7])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores) // Array em JS é do tipo object