const nomes = ['Pedro', 'Paulo', 'Patrick', 'Pogba']
console.log(nomes)

nomes.pop()
console.log(nomes)

nomes.push('Brendo')
console.log(nomes)

nomes.shift()
console.log(nomes)

nomes.unshift('Felipe')
console.log(nomes)

nomes.forEach(e => console.log(e))

const numeros = [1, 2, 3, 4]
const soma2 = e => e + 2
const resultado = numeros.map(soma2)
console.log(resultado)

const alunos = [
{nome: 'Brendo', idade: 26, estudante: true},
{nome: 'Felipe', idade: 27, estudante: false},
{nome: 'Ricardo', idade: 44, estudante: true},
{nome: 'Thawa', idade: 18, estudante: false}
]

console.log(alunos.filter(function(p) {
    return p.idade < 30 && p.estudante == true
}))
