const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/product')
const multiUpload = require("../helpers/middlewares/upload");
const verifyToken = require("../helpers/middlewares/verifyToken");

//get by id
productRouter.get('/:id', productController.getById )
productRouter.get('/productId/:id', productController.getProductId )
productRouter.get('/pivotTb/:id', productController.getPivotId )

//add New Product
productRouter.post("/add-product", verifyToken.isSeller, multiUpload, productController.addNew)

//add from Existing Product
productRouter.post("/add-stock", verifyToken.isSeller, productController.addExisting) 


//update pivot table using pivotid
productRouter.patch("/update", verifyToken.isSeller, productController.updateStock)

productRouter.patch("/updatePrd/:id", verifyToken.isSeller, multiUpload,productController.updateProduct)

//DELETE
productRouter.delete("/delete/:id", verifyToken.isSeller, productController.deleteProduct)

//getsize & color for front-end
productRouter.get("/get_size/:id", productController.getSize)
productRouter.get("/get_color/:id", productController.getColor)

module.exports = productRouter