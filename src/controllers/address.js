const addressModel = require('../models/address')

module.exports = {
    addAddress: (req, res) => {
        const {body} = req
        addressModel.postNewAddress(body)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    changeAddress: (req, res) =>{
        const {body} = req
        const {id} = req.params
        addressModel.changeAddress(body,id)
        .then((result) =>{
            res.status(200).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    getAddress: (req, res) =>{
        const {userId} = req.params
        addressModel.getAddress(userId)
        .then((result) =>{
            res.status(result.status).json(result)
        }).catch((error) =>{
            res.status(error.status).json(error)
        })
    },
    getAddressId: (req, res) => {
        const {id} = req.params
        addressModel.getAddressbyId(id)
        .then((result) =>{
            res.status(result.status).json(result)
        }).catch((error) =>{
            res.status(error.status).json(err)
        })
    }
}