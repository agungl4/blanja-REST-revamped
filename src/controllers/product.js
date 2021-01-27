const getByIdModel = require('../models/product')
const addNewModel = require('../models/product')
const addExistingModel = require('../models/product')
const updateModel = require('../models/product')
const form = require('../helpers/form')
const getSizeModel = require('../models/product')
const getColorModel = require('../models/product')
const deleteModel = require('../models/product')

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
        let insert_product = req.body
        const { user_id } = req.decodedToken
        insert_product = {
            ...insert_product,
            user_id,
            product_img: req.filePath
        }
        const image = req.filePath.split(',')
        addNewModel.addNew(insert_product)
            .then((data) => {
                form.success(res, {
                    ...insert_product,
                    product_img: image
                })
            }).catch((err) => {
                form.error(res, err)
            })
    },
    updateProduct: (req, res) => {
        const { id } = req.params
        let { body } = req

        if (req.filePath != '') {
            body = {
                ...body,
                product_img: req.filePath,
            }
        }
        updateModel.updateProduct(body, id)
            .then((result) => {
                const output = {
                    msg: `Data updated at id ${id}`,
                    ...result,
                }
                res.json(output)
            }).catch((err) => {
                res.json(err)
            })
    },
    getSize: (req, res) => {
        const { id } = req.params
        getSizeModel.getSize(id).then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    getColor: (req, res) => {
        const { id } = req.params
        getColorModel.getColor(id).then((data) => {
            form.success(res, data)
        }).catch((err) => {
            form.error(res, err)
        })
    },
    deleteProduct: (req, res) => {
        const { id } = req.params
        deleteModel.deleteProduct(id)
            .then((data) => {
                const output = {
                    deletedId: id,
                    msg: data
                }
                res.json(output)
            })
            .catch((err) => {
                res.json(err);
            })
    },
    getProductId: (req, res) => {
        const { id } = req.params
        getByIdModel.getProductId(id)
            .then((data) => {
                form.success(res, data)
            })
            .catch((err) => {
                form.error(res, err)
            })
    },
}