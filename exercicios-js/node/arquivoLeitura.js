const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono ...
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

// assincrono ...
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outra forma de ler arquivo JSON
const config = require('./arquivo.json')
console.log(config.db)

// ler uma pasta ou diretorio
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})
