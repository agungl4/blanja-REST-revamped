const authRouter = require("express").Router();

const authController = require("../controllers/auth");
const verifyToken = require("../helpers/middlewares/verifyToken")

authRouter.post("/signup",verifyToken.isRegistered, authController.signup);
authRouter.post("/login", authController.login);

authRouter.post("/logout", authController.logout);

module.exports = authRouter;