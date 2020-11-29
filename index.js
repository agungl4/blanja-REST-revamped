const express = require('express');
const logger = require('morgan');
const app = express();
const port = 8000
const db = require('./src/config/mySQL')
const mainRouter = require('./src/routes/index')

// listen port
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})

// tambah logger
app.use(logger("dev"))

// body-parser untuk x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

// parser untuk raw json
app.use(express.json())

app.use('/', mainRouter)

// app.post("/transaction/add", (req, res) => {
//     let obj
//     const trxFile = req.body
//     const addTrx = new Promise ((resolve, reject) => {
//         const queryStr = "INSERT INTO history SET ?"
//         db.query(queryStr, trxFile, (err, data) => {
//             if(!err){
//                 resolve(
//                     obj = {
//                         msg : `Transaksi berhasil dilakukan`,
//                         ...trxFile
//                     }
//                 )
//             }else{
//                 reject(err)
//             }
//         })
//     }).then((result) => {
//         res.json(result)
//     }).catch((error) => {
//         res.json(error)
//     })
// })

// app.get("/transaction/history", (req, res) => {
//     const TransHistory = new Promise ((resolve, reject) => {
//         const queryStr = 
//         `SELECT th.id AS 'Transaksi ID', u.fullname AS 'User', p.product_name  AS 'Nama Produk', c.category_name as 'Kategori' , pc.color_name as 'Warna', ps.size_name AS 'Ukuran', pco.condition_name AS 'Kondisi', th.product_qty AS 'Jumlah pembelian', p.product_price AS 'Satuan', (th.product_qty * p.product_price) AS 'Total Harga', th.created_at AS 'Waktu Transaksi'        
//         FROM history th        
//         JOIN users u ON th.user_id = u.id        
//         JOIN master m ON th.product = m.id        
//         JOIN products p ON m.product_id = p.id         
//         JOIN category c ON p.category_id = c.id         
//         JOIN color pc ON m.color_id = pc.id         
//         JOIN size ps ON m.size_id = ps.id         
//         JOIN conditions pco ON m.condition_id = pco.id        
//         ORDER BY th.created_at DESC`
//         db.query(queryStr, (err, data) => {
//             if(!err){
//                 resolve(data)
//             }else{
//                 reject(err)
//             }
//         })
//     }).then((result) => {
//         res.json(result)
//     }).catch((error) => {
//         res.json(`gagal`)
//     })
// })

module.exports = app