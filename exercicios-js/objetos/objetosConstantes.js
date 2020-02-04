// pessoa -> 123 -> {....}
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {....}

/*
const pessoa = {
    nome: 'Ana'
}
*/

// Congelando o Objeto
Object.freeze(pessoa) 
pessoa.nome = 'Maria'
pessoa.end = 'rua 18 casa 19'
delete pessoa.nome

console.log(pessoa)

// Criar um objeto ja congelado

const pessoaConstante = Object.freeze({ nome: 'Brendo'})
console.log(pessoaConstante)