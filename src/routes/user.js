const express = require('express')
const userController = require('./../controllers/user')
const userRouter = express.Router()

userRouter.post("/addReview", userController.addReview)
userRouter.get("/getReview/:productId", userController.getReview)
userRouter.get("/details/:id", userController.getUserDetails)
userRouter.patch('/changePassword', userController.changePassword)
userRouter.get('/name/:id', userController.getNameUser)
module.exports = userRouter