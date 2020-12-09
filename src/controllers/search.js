const searchModel = require('../models/search')
const form = require('../helpers/form')
module.exports = {
  searchBy: (req, res) => {
    const { name, color, size, category } = req.query;
    let addQuery = ``
    let query_length = Object.keys(req.query).length - 1
    let initial = 0
    if (Object.keys(req.query).length) {
      addQuery += `WHERE `
      if (name != null) {
        addQuery += `product_name like '%${name}%' `
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (color != null) {
        addQuery += `color_id = ${color} `
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (size != null) {
        addQuery += `size_id = ${size} `
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (category != null) {
        addQuery += `category_id = ${category} `
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
    }

    searchModel.searchBy(addQuery)
      .then((data) => {
        if (!data.length) {
          res.status(404).json({
            msg: "Data Not Found",
            status: 404,
          })
        } else {
          form.success(res, data)
        }
      })
      .catch((err) => {
        form.error(res, err)
      })
  }
}
