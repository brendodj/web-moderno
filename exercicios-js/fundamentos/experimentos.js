let a = 3

globalThis.b = 123
this.c = 456
this.d = false
this.e = 'Brendo'

console.log(a)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma varuiavel sem var nem let
abc = 3 // não faça isso
console.log(global.abc)