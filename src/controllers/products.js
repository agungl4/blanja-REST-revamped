const sortModel = require('../models/products')
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
  showAll: (req, res) => {
    const { query } = req;
    const limit = Number(query.limit) || 2;
    const page = Number(query.page) || 1;
    const offset = (page - 1) * limit || 0;

    getModel.allProduct(limit, offset, page)
      .then((data) => {
        if (Math.ceil(data.products / limit) == data.products) {
          res.status(404).json({
            msg: "Page Not Found",
            status: 404,
          });
        } else {
          form.success(res, data)
        }
      }).catch((err) => {
        form.error(res, err)
      })
  },
  getColor: (req, res) => {
    getModel.getColor()
      .then((data) => {
        form.success(res, data)
      }).catch((err) => {
        form.error(res, err)
      })
  },
  getSize: (req, res) => {
    getModel.getSize()
      .then((data) => {
        form.success(res, data)
      }).catch((err) => {
        form.error(res, err)
      })
  }
}