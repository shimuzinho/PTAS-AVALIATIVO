const login = (req, res, next) => {
  console.log(`Usuário acessou ${req.originalUrl}`)
  next()
}

module.exports = login