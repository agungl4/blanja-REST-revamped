const express = require('express')
const transactionController = require ('../controllers/trx')
const transactionRouter = express.Router()

transactionRouter.post("/", transactionController.addTrx)
transactionRouter.post("/itemOrder", transactionController.addMultiple)
// transactionRouter.get("/:userId", transactionController.getTrx)
transactionRouter.get("/myTransaction/:userId", transactionController.getMyTrans)
transactionRouter.get("/getOrderDetail/:trxId", transactionController.getOrderDetails)
transactionRouter.get("/trx/:trxId", transactionController.getItemsTrx)
transactionRouter.get("/itemToReview/:trxId", transactionController.getItemsTrx)
transactionRouter.get('/OrderData', transactionController.getSellerOrderData)
transactionRouter.patch('/changeStatus/:status/:trxid', transactionController.changeStatusOrder)

module.exports = transactionRouter