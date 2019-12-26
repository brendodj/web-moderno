const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x == 5){ 
        break  // desvia pra fora do laço de repetição
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue  // enterrompe o laço no indice indicado na condição if
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: /*ROTULO*/ for(a in nums) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo  // não usar essa pratica de rotulos e breaks
        console.log(`Par = ${a},${b}`)
    }
}
