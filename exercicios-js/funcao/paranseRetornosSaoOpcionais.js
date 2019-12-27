function area(largura, alrura){
    const area = alrura * largura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(5, 3))
console.log(area(5))
console.log(area())
console.log(area(5, 3, 4, 6, 7))
console.log(area(5, 5))