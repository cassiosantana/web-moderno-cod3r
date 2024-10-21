// não existe escopo de variável do tipo var
var numero = 1
{
    var numero =2
    console.log('Dentro', numero)
}

console.log('Fora', numero)