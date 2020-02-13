const modulo1 = require('../../modulo1')
console.log(modulo1.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Ola Mundo!')
    res.end()
}).listen(8080)