// ES8: Object.values e  Object.entries

const obj = {a: 1, b: 2, c: 3, d:4}

console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação Literal

const nome = 'brendo'
const pessoa = {
    nome,
    ola(){
        return 'Oi oessoal!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au au au au!'
    }
}
const cachorro = new Cachorro()
console.log(cachorro.falar())
