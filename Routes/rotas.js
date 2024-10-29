const express = require('express')
const router = express.Router()
const controller = require('../Controllers/controller.js')

router.get('/', controller.homePage)

router.get('/contato', controller.contatoPage)

router.get('/produtos', controller.produtoPage)

router.get('/about', controller.aboutPage)

router.get('/services', controller.servicesPage)

module.exports = router