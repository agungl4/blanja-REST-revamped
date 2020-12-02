const express = require('express')

const productsRouter = express.Router()

const productsController = require('../controllers/products')

//DELETE
productsRouter.delete("/delete/:id", productsController.deleteProduct)

// SORT
productsRouter.get("/", productsController.sortProduct)

//showAll
productsRouter.get("/showAll", productsController.showAll)

//getColor
productsRouter.get("/getColor", productsController.getColor)

//getSize
productsRouter.get("/getSize", productsController.getSize)

module.exports = productsRouter