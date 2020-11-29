const getByIdModel = require('../models/product')
const addNewModel = require('../models/product')
const addExistingModel = require('../models/product')
const updateModel = require('../models/product')
const form = require('../helpers/form')

module.exports = {
    getById: (req, res) => {
        const { id } = req.params
        getByIdModel.getById(id)
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    },
    addNew: (req, res) => {
        const insert_product = req.body
        addNewModel.addNew(insert_product)
        .then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    addExisting: (req, res) => {
        const add_stock = req.body
        addExistingModel.addExisting(add_stock)
        .then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    updateProduct: (req, res) => {
        const { id } = req.body
        const { body } = req
        const updatePatch = {
            ...body,
            updated_at: new Date(Date.now())
        }
        updateModel.updateProduct(id, updatePatch)
        .then((result) => {
            const output = {
                msg: `Data updated at id ${id}`,
                ...result,
            }
            res.json(output)
        }).catch((err) => {
            form.error(res, err)
        })
    }
}