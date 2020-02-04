const a = 1
const b = 2
const c = 3

// antes
const obj1 = {a: a, b: b, c: c}

// agora
const obj2 = {a, b, c}
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAttr = 8.5

//Antes
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Agora
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    // antes
    funcao1: function(){
        // ...
    },
    // agora
    funcao2() {
        // ...
    }
}
console.log(obj5)