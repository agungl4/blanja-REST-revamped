const authRouter = require("express").Router();

const authController = require("../controllers/auth");

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);

module.exports = authRouter;