const express = require('express')
const router = express.Router()
const controller = require('../Controllers/controller.js')
const controllerItem = require('../Controllers/itemController.js')

router.get('/', controller.homePage)

router.get('/itens', controllerItem.itemGet)

module.exports = router