const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/product')
const multiUpload = require("../helpers/middlewares/upload");
const verifyToken = require("../helpers/middlewares/verifyToken");

//get by id
productRouter.get('/:id', productController.getById )
productRouter.get('/productId/:id', productController.getProductId )

//add New Product
productRouter.post("/add-product", verifyToken.isLogin,verifyToken.isSeller, multiUpload, productController.addNew)

//update pivot table using pivotid
productRouter.patch("/updatePrd/:id",verifyToken.isLogin, verifyToken.isSeller, multiUpload,productController.updateProduct)

//DELETE
productRouter.delete("/deletePrd/:id", verifyToken.isLogin,verifyToken.isSeller, productController.deleteProduct)
//getsize & color for front-end
productRouter.get("/get_size/:id", productController.getSize)
productRouter.get("/get_color/:id", productController.getColor)

module.exports = productRouter