const trxHistoryModel = require('../models/transaction')
const trxAddModel = require('../models/transaction')
const form = require('../helpers/form')

module.exports = {
    trxHistory:  (req, res) => {
        trxHistoryModel.trxHistory()
        .then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    trxAdd: (req, res) => {
        const trxFile = req.body
        trxAddModel.trxAdd(trxFile)
        .then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    }
}