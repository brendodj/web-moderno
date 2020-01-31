
    const carnes = ['file', 'picanha', 'linguiça', 'feijoada']
    const acompanhamentos = ['branco', 'tropeiro', 'mandioca']

// mostrar opções
function cardapio(){
    console.log(`    OPÇÕES DE CARNE    `)
    for(i = 0; i < carnes.length; i++){
    console.log(`${carnes[i]}`)

    }
    console.log(`    ACOMPANHAMESTOS    `)
    
    for(i = 0; i < acompanhamentos.length; i++){
    console.log(`${acompanhamentos[i]}`)

    }
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