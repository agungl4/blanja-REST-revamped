const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/product')

//get by id
productRouter.get('/:id', productController.getById )

//add New Product
productRouter.post("/add-product", productController.addNew)

//add from Existing Product
productRouter.post("/add-stock", productController.addExisting) 


//update pivot
productRouter.patch("/update", productController.updateProduct)

productRouter.get("/get_size/:id", productController.getSize)

productRouter.get("/get_color/:id", productController.getColor)

module.exports = productRouter