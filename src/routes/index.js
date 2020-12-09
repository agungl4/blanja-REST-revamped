const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const productsRouter = require('./products')
const productRouter = require('./product')
const searchRouter = require('./search')
const transactionRouter = require("./transaction")
const authRouter = require('./auth')

const verifyToken = require("../helpers/middlewares/verifyToken");


//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/products", productsRouter) // endpoint sort, 
mainRouter.use("/product", verifyToken.isLogin, productRouter) // endpoint insert, update , delete
mainRouter.use("/search", searchRouter) // endpoint filter
mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/auth", authRouter)
// mainRouter.use("/upload", imgUploadRouter)


module.exports = mainRouter