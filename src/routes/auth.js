const express = require('express')
const authController = require ('../controllers/auth')
const authRouter = express.Router()

const verifyToken = require('../helpers/middlewares/verifyToken')

authRouter.post("/signup",verifyToken.isRegistered, authController.signup)
authRouter.get("/activate/:email/:otp",authController.activate)
authRouter.post("/resend", authController.resend)
authRouter.post("/login", authController.login)
authRouter.post("/forgot", authController.forgot)
authRouter.get("/otp/:email/:otp", authController.otp)
authRouter.patch("/reset", authController.reset)
authRouter.post("/logout",verifyToken.isLogin, authController.logout)



module.exports = authRouter
