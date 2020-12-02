const sortModel = require('../models/products')
const deleteModel = require('../models/products')
const getModel = require('../models/products')
const form = require('../helpers/form')
module.exports = {
  sortProduct: (req, res) => {
    const { sortBy, orderBy } = req.query;

    let addQuery = ``

    if (sortBy != null) {
      if (orderBy == `desc`) {
        addQuery += `ORDER BY  ${sortBy} DESC`
      }else{
        addQuery += `ORDER BY ${sortBy} ASC`
      }
    }

    sortModel.sortProduct(addQuery)
      .then((data) => {
        form.success(res, data)
      })
      .catch((err) => {
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
  showAll:(req,res) => {
    getModel.allProduct()
    .then((data) => {
      form.success(res, data)
    }).catch((err) => {
      form.error(res, err)
    })
  },
  getColor:(req,res) => {
    getModel.getColor()
    .then((data) => {
      form.success(res, data)
    }).catch((err) => {
      form.error(res,err)
    })
  },
  getSize:(req,res) => {
    getModel.getSize()
    .then((data) => {
      form.success(res, data)
    }).catch((err) => {
      form.error(res,err)
    })
  }
}