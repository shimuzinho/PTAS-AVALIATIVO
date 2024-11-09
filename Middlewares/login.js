const login = (req, res, next) => {
  const horario = new Date().toLocaleString('pt-BR')
  const [data, horas] = horario.split(" ")
  console.log(`Usuário acessou ${req.originalUrl}, pelo metodo ${req.method}, no dia ${data} as ${horas}`)
  next()
}

module.exports = login