// Arrow Function
const soma = (a, b, c) => (a + b) * c
console.log(soma(1, 2, 3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function sei(texto = 'node') {
    console.log(texto)
}
sei()
sei (null)
sei('Sou mais forte')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
