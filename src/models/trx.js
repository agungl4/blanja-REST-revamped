const db = require('../config/mySQL')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

module.exports = {
    addTrx: (body) => {
        return new Promise((resolve, reject) => {
            const queryStr = `INSERT INTO tb_transaksi SET ?`
            db.query(queryStr, body, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: `Transaksi berhasil dilakukan`
                    })
                } else {
                    reject({
                        status: 500,
                        message: er
                    })
                }
            })
        })
    },

    addOrder: (body) => {
        return new Promise((resolve, reject) => {
            let status = 200;
            let errData = null
            body.map((items) => {
                console.log(items)
                const queryStr = `INSERT INTO tb_item_order SET ?`
                db.query(queryStr, items, (err, data) => {

                    if (!err) {
                        if (status != 500) {
                            status = 200
                            console.log('berhasil')
                        }
                    } else {
                        status = 500
                        errData = err
                        console.log('gagal')
                    }
                })
            })
            if (status == 200) {
                resolve({
                    status: 200,
                    message: `Berhasil insert data`
                })
            } else {
                reject({
                    status: 500,
                    message: errData
                })
            }
        })
    },
    getMyTrans: (userId) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT trxId, trackingNumber, qty,total, status, created_at FROM tb_transaksi WHERE user_id = ?`
            db.query(queryStr, userId, (err, data) => {
                if (!err) {
                    if (data.length > 0) {
                        resolve({
                            status: 200,
                            data: data
                        })
                    } else {
                        resolve({
                            status: 200,
                            data: `Belum ada transaksi`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    },

    getTransDetails: (trxId) => {
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT * FROM tb_transaksi JOIN address ON tb_transaksi.address = address.id JOIN payment ON tb_transaksi.payment = payment.id WHERE TrxId = ?`
        db.query(queryStr, trxId, (err, data) => {
            console.log(err, data)
            if (!err) {
                if (data.length > 0) {
                    resolve({
                        status: 200,
                        data: data[0]
                    })
                } else {
                    resolve({
                        status: 404,
                        data: `NOT FOUND`
                    })
                }
            } else {
                reject({
                    status: 500,
                    message: err
                })
            }
        })
        })
    },

    getOrderDetails: (trxId) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT * FROM tb_item_order WHERE trxId = ?`
            db.query(queryStr, trxId, (err, data) => {
                // console.log(err,data.length)
                if (!err) {
                    if (data.length > 0) {
                        // console.log('disiniberhasil')
                        resolve({
                            status: 200,
                            data: data
                        })
                    } else {
                        // console.log('not found?')
                        resolve({
                            status: 404,
                            data: `NOT FOUND`
                        })
                    }
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })
    }
}