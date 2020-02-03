function criaProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criaProduto('farinha', 45))
console.log(criaProduto('feijão', 45))
console.log(criaProduto('oleo', 45))