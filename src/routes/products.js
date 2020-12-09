const express = require('express')

const productsRouter = express.Router()

const productsController = require('../controllers/products')



// SORT
productsRouter.get("/", productsController.sortProduct)

//showAll
productsRouter.get("/getAll", productsController.showAll)

//getColor
productsRouter.get("/getColor", productsController.getColor)

//getSize
productsRouter.get("/getSize", productsController.getSize)

module.exports = productsRouter