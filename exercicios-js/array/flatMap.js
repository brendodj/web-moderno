const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Brendo',
        nota: 9.8
    },{
        nome: 'Ana',
        nota: 6.5
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 7.8
    }, {
        nome: 'Roberto',
        nota: 8.6
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//console.log([].concat([ 9.8, 6.5 ], [ 7.8, 8.6 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

