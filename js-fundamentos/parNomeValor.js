// par nome/valor ou par chave/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos não grupos aninhados de pares chave/valor

const cliente = {
    nome: 'Cassio',
    idade: 35,
    peso: 92,
    endereco: {
        logradouro: 'Rua tal...',
        numero: 322
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)