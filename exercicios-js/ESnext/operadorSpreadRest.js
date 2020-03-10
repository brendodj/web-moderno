// Operador ...rest(juntar)/spread(espalhar)
// Usar rest com parametro de função

// Usar spread com objeto
const funcionario = {nome: 'evandro', salario: 1200}
const clone = {ativo: true,...funcionario}
console.log(clone)

// Usar spread com array
const grupoA = ['solange', 'evandro', 'nonata']
const grupoFinal = ['roberta', ...grupoA, 'brenda']
console.log(grupoFinal)