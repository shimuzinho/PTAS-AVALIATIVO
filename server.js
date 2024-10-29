const express = require('express')
const app = express()
const pages = require('./Routes/rotas.js')
const port = 4500

app.use(pages)

app.listen(port, () => {
    console.log('Executando')
})