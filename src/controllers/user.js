const { getUserDetails } = require('./../models/user')
const userModel = require('./../models/user')

module.exports = {
    addReview: (req, res) => {
        const { body } = req
        userModel.addReview(body)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },

    getReview: (req, res) => {
        const { productId } = req.params
        console.log(productId)
        userModel.getReview(productId)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },

    getUserDetails: (req, res) =>{
        const { id } = req.params
        userModel.getUserDetails(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}