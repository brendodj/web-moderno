const aprovados = ['brendo', 'felipe', 'thawa', 'cindy']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// a função forEach recebe 3 parametros o nome o indice e o p´roprio array