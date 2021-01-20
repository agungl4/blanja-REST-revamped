const express = require('express')
const transactionController = require ('../controllers/trx')
const transactionRouter = express.Router()

transactionRouter.post("/", transactionController.addTrx)
transactionRouter.post("/itemOrder", transactionController.addMultiple)
// transactionRouter.get("/:userId", transactionController.getTrx)
transactionRouter.get("/myTransaction/:userId", transactionController.getMyTrans)
transactionRouter.get("/getOrderDetail/:trxId", transactionController.getOrderDetails)

module.exports = transactionRouter