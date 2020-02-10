
    const carnes = ['file', 'picanha', 'linguiça', 'feijoada']
    const acompanhamentos = ['branco', 'tropeiro', 'mandioca']

// mostrar opções
function cardapio(){
    console.log(`    OPÇÕES DE CARNE    `)
    carnes.forEach((carne, i) => console.log(carne,i))

    console.log(`    ACOMPANHAMESTOS    `)
    acompanhamentos.forEach((acomp, j) => console.log(acomp, j))
}

// Escolher Opções
   
function pegaPedido(){
   carne = carnes[0]
   acomp = acompanhamentos[0]
   acomp2 = acompanhamentos[1]
   acomp3 = acompanhamentos[2]
   
   console.log(`   PEDIDO   `)
   console.log(`opção de carne: ${carne}`)
   console.log(`opção de acompanhamentos:`)
   console.log(`${acomp}`)
   console.log(`${acomp2}`)
   console.log(`${acomp3}`)

}

cardapio()
pegaPedido()

