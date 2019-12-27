// Função em JS é tratada como sendo um DADO
// pode passar um função como parametro, uma função em uma variavel ....

// criar de forma literal
function fun1() {  }

// Armazenar em uma variavel
const fun2 = function() {  }

// Armazenar em um arrey
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objato
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar uma função como parametro
function run(fun) {
    fun()
}
run(function () {console.log('Executando ....')})

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4) 
// ou
const cincoMais = soma(2, 3)
cincoMais(4)
 