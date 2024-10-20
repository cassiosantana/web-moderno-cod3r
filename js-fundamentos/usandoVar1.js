{
    {
        {
            {
                var sera = 'Será????'
            }
        }
    }
}

console.log(sera)

// a variável definida como var não se limita em termos de escopo quando trabalhamos com ela em questão de níveis de blocos de código.


function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // ReferenceError: local is not defined

// Quando a variável definida como var está no escopo de uma função ela não estará visível fora do escopo da função.

/**
 * Importante evitar definição de variáveis de escopo global pois futuramente algum outro desenvolvedor pode tentar
 * utilizar o mesmo nome e por coincidência sobrescrever a primeira e causando problemas.
 */
