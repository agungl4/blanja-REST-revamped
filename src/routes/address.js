const express = require('express')
const addressRouter = express.Router()
const addressController = require('../controllers/address')

addressRouter.post("/new", addressController.addAddress)
addressRouter.patch("/update/:id", addressController.changeAddress )
addressRouter.get("/:userId", addressController.getAddress)
addressRouter.get("/get/:id", addressController.getAddressId)

module.exports = addressRouter
