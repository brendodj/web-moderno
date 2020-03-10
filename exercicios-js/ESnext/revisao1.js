// let e const e var
{
    var a = 2
    let b = 3
    const c = 1
    console.log(b)
    console.log(c)
}
console.log(a)

// Template String
const produto = 'ipad'
console.log(`${produto} e caro!`)

// Destructuring
const [l, e, ...tras] = 'brendo'
console.log(l,e,tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'brendo', idade: 25}
console.log(i, nome)