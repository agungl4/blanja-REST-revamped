const trxModel = require('../models/trx')
const form = require('../helpers/form')
const { promises } = require('fs')

module.exports = {
    addTrx: (req, res) => {
        const { body } = req
        console.log(body)
        trxModel.addTrx(body)
            .then((result) => {
                if (global.io.emit('forSeller', '1 pesanan baru diterima')) {
                    console.log('send to Seller sukses')
                }
                res.status(200).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })

    },

    addMultiple: (req, res) => {
        const { body } = req
        console.log(body)
        trxModel.addOrder(body)
            .then((result) => {
                res.status(200).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getMyTrans: (req, res) => {
        const { userId } = req.params
        trxModel.getMyTrans(userId)
            .then((result) => {
                res.status(200).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },

    getOrderDetails: (req, res) => {
        const { trxId } = req.params
        Promise.all([
            trxModel.getTransDetails(trxId),
            trxModel.getOrderDetails(trxId)
        ])
            .then((result) => {
                let finalResult = result[0].data
                finalResult.cardOrder = result[1].data
                res.status(200).json({
                    status: 200,
                    message: `Detail Order ${trxId}`,
                    data: finalResult
                })
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getItemsTrx: (req, res) => {
        const { trxId } = req.params
        trxModel.getOrderDetails(trxId)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getItemtoReview: (req, res) => {
        const { trxId } = req.params
        trxModel.getItemtoReview(trxId)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getSellerOrderData: (req, res) => {
        trxModel.getSellerOrderData()
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    changeStatusOrder: (req, res) => {
        const { status, trxid } = req.params
        let statusPesanan;
        if (status == 2) {
            statusPesanan = 'Pesanan kamu sedang diproses'
        } else if (status == 3) {
            statusPesanan = 'Pesanan kamu sudah dikirim'
        } else if (status == 4) {
            statusPesanan = 'Pesanan telah diterima'
        }
        trxModel.getOrderDetails(trxid)
            .then((result) => {
                const user_id = result.data[0].user_id
                trxModel.changeStatusOrder(status, trxid)
                    .then((result) => {
                        if (status != 4) {
                            if (global.io.to(user_id).emit('forBuyer', statusPesanan)) {
                                console.log('send to ' + user_id + ' sukses')
                            }
                        } else {
                            if (global.io.emit('forSeller', statusPesanan)) {
                                console.log('send to Seller sukses')
                            }
                        }
                        res.status(result.status).json(result)
                    }).catch((error) => {
                        res.status(error.status).json(error)
                    })

            }).catch((error) => {
                res.status(error.status).json(error)
            })

    },
}