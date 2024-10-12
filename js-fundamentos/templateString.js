const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const templateString = `
    Olá
    ${nome}!
    `
const templateStringEmLinha = `Olá ${nome}!`

console.log(templateStringEmLinha)
console.log(concatenacao, templateString)


// Expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)
