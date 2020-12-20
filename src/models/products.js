const db = require('../config/mySQL')
module.exports = {
    allProduct: () => {
        return new Promise((resolve, reject) => {
            const queryString = `SELECT id, product_name FROM products`
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    SearchAndSort: (addQuery, urlQuery, total_result, page, offset, limit) => {
        return new Promise((resolve, reject) => {
            let queryStr = `SELECT m.id,m.product_id, p.product_name,c.category_name, pc.color_name, ps.size_name, pco.condition_name, p.product_desc,p.product_price, p.product_img, m.qty, m.created_at, m.updated_at 
            FROM master m JOIN products p ON m.product_id = p.id 
            JOIN category c ON p.category_id = c.id 
            JOIN color pc ON m.color_id = pc.id 
            JOIN size ps ON m.size_id = ps.id 
            JOIN conditions pco ON m.condition_id = pco.id `
                + addQuery +
                `LIMIT ${limit} OFFSET ${offset}`
            console.log(queryStr)
            db.query(queryStr, (err, data) => {
                if (!err) {
                    if (data.length) {
                        newData = {
                            products: data,
                            pageInfo: {
                                result: total_result,
                                totalPage: total_result % limit === 0 ? total_result / limit : Math.floor(total_result / limit) + 1,
                                currentPage: page || 1,
                                previousPage:
                                    page === 1 ? null : `/products?${urlQuery}page=${page - 1}&limit=${limit}`,
                                nextpage: offset + limit >= total_result //dia sudah pada result2 terakhir
                                    ? null
                                    : `/products?${urlQuery}page=${page + 1}&limit=${limit}`
                            }
                        }
                        resolve(newData)
                    } else {
                        reject({
                            status: 404,
                            msg: `Not Found`
                        })
                    }
                } else {
                    reject(err)
                }
            })
        })
    },
    countResult: (addQuery) => {
        return new Promise((resolve, reject) => {
            let queryStr = `SELECT count(m.id) as total_result
                FROM master m JOIN products p ON m.product_id = p.id 
                JOIN category c ON p.category_id = c.id 
                JOIN color pc ON m.color_id = pc.id 
                JOIN size ps ON m.size_id = ps.id 
                JOIN conditions pco ON m.condition_id = pco.id `
                + addQuery;
            db.query(queryStr, (err, data) => {
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
}