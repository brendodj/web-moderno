const nuns = [1, 2, 3, 4, 5]

// For com proposito
let resultado = nuns.map(function(e){
    return e * 2
})

console.log(nuns,resultado)

const soma10 = e => e + 10
const dobro = e => e * 2
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nuns.map(soma10).map(dobro).map(paraDinheiro)
console.log(resultado)