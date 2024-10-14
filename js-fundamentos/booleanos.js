let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // usando o valor 1 como true

console.log('### Os verdadeiros ###')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // não é se a atribuição funcionou mas sim se o valor atribuído for resolvível para true
console.log(!!(isAtivo = !!3)) // não é se a atribuição funcionou mas sim se o valor atribuído for resolvível para true

console.log('### Os falsos ###')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = !3))

console.log('### Pra finalizar ###')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')