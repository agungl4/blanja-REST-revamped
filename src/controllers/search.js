const searchModel = require('../models/search')
const form = require('../helpers/form')
module.exports = {
  searchBy: (req, res) => {
    const { query } = req
    const limit = Number(query.limit) || 5 //jika tidak terdeklarasi limit otomatis 5
    const page = Number(query.page) || 1 //jika tidak terdeklarasi page otomatis 1
    const offset = (page - 1) * limit

    const { name, color, size, category } = req.query;
    let addQuery = ``
    let urlQuery = ``
    let query_length = Object.keys(req.query).length - 1
    if (query.page) {
      query_length -= 1
    }
    if (query.limit) {
      query_length -= 1
    }
    let initial = 0

    if (Object.keys(req.query).length) {
      addQuery += `WHERE `
      if (name != null) {
        addQuery += `product_name like '%${name}%' `
        urlQuery += `name=${name}`
        urlQuery += `&`
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (color != null) {
        addQuery += `color_id = ${color} `
        urlQuery += `color=${color}`
        urlQuery += `&`
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (size != null) {
        addQuery += `size_id = ${size} `
        urlQuery += `size=${size}`
        urlQuery += `&`
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
      if (category != null) {
        addQuery += `category_id = ${category} `
        urlQuery += `category=${category}`
        urlQuery += `&`
        if (initial != query_length) {
          addQuery += `AND `
          initial += 1
        }
      }
    }

    searchModel.totalResult(addQuery)
      .then((result) => {
        searchModel.searchBy(addQuery, urlQuery,result[0].total_result, page, offset, limit)
          .then((data) => {
            form.success(res, data)
          }).catch((err) => {
            form.error(res, err)
          })
      }).catch((error) => {
        res.status(500).json(error)
      })
  }
}
