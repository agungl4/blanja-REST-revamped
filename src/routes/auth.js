const authRouter = require("express").Router();

const authController = require("../controllers/auth");
const db = require('../config/mySQL')
const bcrypt = require ('bcrypt')
const jsonwebtoken = require ('jsonwebtoken')

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);

authRouter.post("/logout", (req, res) => {
    const bearerToken = req.header("x-access-token");
    if(!bearerToken){
        res.json({
            msg: `token null!`
        })
    }else{
        blacklisToken = {
            token : bearerToken.split(" ")[1]
        }

        const logoutUser = new Promise ((resolve, reject) => {
            const queryStr = "INSERT INTO blocklist_token SET ?"
            db.query(queryStr, blacklisToken, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        }).then((result) => {
            res.json({
                msg: `token already blacklisted, so its mean you already logout from system`
            })
        }).catch((error) => {
            res.json(error)
        })
    }

})

module.exports = authRouter;