const express = require('express');
const mainRouter = express.Router()

const welcomeRouter = require('./welcome')
const productsRouter = require('./products')
const productRouter = require('./product')
const searchRouter = require('./search')
// const transactionRouter = require("./transaction")
const authRouter = require('./auth')
const addressRouter = require ('./address')
const trxRouter = require ("./trx")
const userRouter = require ('./user')
const chatRouter = require ('./chat')
const verifyToken = require("../helpers/middlewares/verifyToken");


//calling endpoint handler
mainRouter.use("/", welcomeRouter)
mainRouter.use("/products", productsRouter) // endpoint sort, 
mainRouter.use("/product", productRouter) // endpoint insert, update , delete
mainRouter.use("/search", searchRouter) // endpoint filter
// mainRouter.use("/transaction", transactionRouter)
mainRouter.use("/auth", authRouter)
mainRouter.use("/address", addressRouter)
mainRouter.use("/transactions", trxRouter) //Trx
mainRouter.use("/user", userRouter)
mainRouter.use('/chat', chatRouter)
// mainRouter.use("/upload", imgUploadRouter)


module.exports = mainRouter