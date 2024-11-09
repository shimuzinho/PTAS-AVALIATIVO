const login = (req, res, next) => {
  const horario = new Date().getTime()
  console.log(`Usuário acessou ${req.originalUrl}, pelo metodo ${req.method} e no horário ${horario}`)
  next()
}

module.exports = login