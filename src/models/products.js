const db = require('../config/mySQL')
module.exports = {
  sortProduct: (param) => {
    return new Promise((resolve, reject) => {
      let queryString = `SELECT m.id, m.product_id, p.product_name, c.category_name, pc.color_name, ps.size_name, pco.condition_name, p.product_price, p.product_desc, p.product_img, m.qty, m.created_at, m.updated_at 
            FROM master m JOIN products p ON m.product_id = p.id 
            JOIN category c ON p.category_id = c.id 
            JOIN color pc ON m.color_id = pc.id 
            JOIN size ps ON m.size_id = ps.id 
            JOIN conditions pco ON m.condition_id = pco.id `
      queryString += param
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject({
            msg: `Please input sorting params first`
          })
        }
      })
    })
  },
  allProduct: (limit, offset, page) => {
    return new Promise((resolve, reject) => {
      const queryString = `SELECT m.id, m.product_id, p.product_name, c.category_name, pc.color_name, ps.size_name, pco.condition_name, p.product_price, p.product_desc, p.product_img, m.qty, m.created_at, m.updated_at 
      FROM master m JOIN products p ON m.product_id = p.id 
      JOIN category c ON p.category_id = c.id 
      JOIN color pc ON m.color_id = pc.id 
      JOIN size ps ON m.size_id = ps.id 
      JOIN conditions pco ON m.condition_id = pco.id LIMIT ? OFFSET ?`
      db.query(queryString, [limit, offset, page], (err, data) => {
        const newResult = {
          products: data,
          pageInfo: {
            currentPage: page,
            previousPage:
              page === 1 ? null : `/products/getAll?page=${page - 1}&limit=${limit}`,
            nextPage: limit != data.length ? null : `/products/getAll?page=${page + 1}&limit=${limit}`,
          },
        };
        if (!err) {
          resolve(newResult)
        } else {
          reject(err)
        }
      })
    })
  },
  getColor: () => {
    return new Promise((resolve, reject) => {
      const qs = 'SELECT * FROM color'
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  },
  getSize: () => {
    return new Promise((resolve, reject) => {
      const qs = 'SELECT * FROM size'
      db.query(qs, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
}