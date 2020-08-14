function valorPedido(picanha,medalhao,contra,linguica){
const entrega = 5
const Picanha = 3.3 * picanha
const Medalhao = 3 * medalhao
const Contra = 3.3 * contra
const Linguica = 3 * linguica
const total = Picanha + Medalhao + Contra + Linguica + entrega
    console.log(total)
}

valorPedido(0, 40, 80, 0)
