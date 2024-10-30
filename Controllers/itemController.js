exports.itemGet = (req, res, next) => {
    console.log(`Requisição ${req.method} ${req.url}`)
    res.send('Olá')
    next()
}