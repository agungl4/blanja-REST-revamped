const express = require("express")

const transactionRouter = express.Router();
const transactionController = require('../controllers/transaction')
const db = require("../config/mySQL")

transactionRouter.get("/history", transactionController.trxHistory)


transactionRouter.post("/add", transactionController.trxAdd)

module.exports = transactionRouter