console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // coloca em ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

/*
aprovados = ['Carlos', 'Bia', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
aprovados.splice(1, 0)
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
aprovados.splice(0, 1)
console.log(aprovados)

aprovados = ['Carlos', 'Bia', 'Ana']
console.log(aprovados)
*/

aprovados = ['Carlos', 'Bia', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)
