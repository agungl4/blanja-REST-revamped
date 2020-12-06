const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const productsRouter = require('./products')
const productRouter = require('./product')
const searchRouter = require('./search')
const transactionRouter = require("./transaction")
const authRouter = require('./auth')

//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/products", productsRouter) // endpoint sort, delete
mainRouter.use("/product", productRouter) // endpoint insert, update
mainRouter.use("/search", searchRouter) // endpoint filter
mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/auth", authRouter);


module.exports = mainRouter