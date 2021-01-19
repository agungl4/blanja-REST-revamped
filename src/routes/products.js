const express = require('express')
const db = require('../config/mySQL')

const productsRouter = express.Router()

const productsController = require('../controllers/products')



// SORT SEARCH
productsRouter.get("/", productsController.SearchAndSort)

//showAll
productsRouter.get("/showAll/:id", productsController.showAll)

// //getColor
productsRouter.get("/getColor", productsController.getColor)

//getSize
productsRouter.get("/getSize", productsController.getSize)

productsRouter.get("/getByUser/:user_id", productsController.getByUser)

productsRouter.get('/all_prod',(req, res) => {
    const get_all_prod = new Promise ((resolve, reject) => {
        const queryStr = `SELECT * FROM products`
        db.query(queryStr, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    }).then((result) => {
        res.json(result)
    }).catch((error) => {
        console.log(error)
    })
})

productsRouter.get('/all_cond',(req, res) => {
    const get_all_prod = new Promise ((resolve, reject) => {
        const queryStr = `SELECT * FROM conditions`
        db.query(queryStr, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    }).then((result) => {
        res.json(result)
    }).catch((error) => {
        console.log(error)
    })
})

productsRouter.get('/all_ctg', (req,res) => {
    const get_Cat = new Promise (( resolve, reject ) => {
        const queryStr = 'SELECT * FROM category'
        db.query(queryStr, (err, data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    }).then((result) => {
        res.json(result)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = productsRouter