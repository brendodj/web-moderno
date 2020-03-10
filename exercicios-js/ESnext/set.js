// Não aceita repetição e não é indexada
const times = new Set()
times.add('vasco')
times.add('palmeiras').add('BotaFogo').add('corinthias')
times.add('vasco') 

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['brendo', 'felipe', 'thawa', 'brendo']
const nomesSet = new Set(nomes)
console.log(nomesSet)
