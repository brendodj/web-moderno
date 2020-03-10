// Tagged Template -> processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'brendo'
const situacao = 'estudando'
console.log(tag `${aluno} esta ${situacao}!`)