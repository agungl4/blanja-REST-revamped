const db = require('../config/mySQL')
module.exports = {
    searchBy: (keyword) => {
        return new Promise((resolve, reject) => {
            let queryStr = `SELECT m.id,  m.product_id, p.product_name,c.category_name, pc.color_name, ps.size_name, pco.condition_name,p.product_price, p.product_desc, p.product_img, m.qty, m.created_at, m.updated_at 
            FROM master m JOIN products p ON m.product_id = p.id 
            JOIN category c ON p.category_id = c.id 
            JOIN color pc ON m.color_id = pc.id 
            JOIN size ps ON m.size_id = ps.id 
            JOIN conditions pco ON m.condition_id = pco.id `
            queryStr += keyword
            db.query(queryStr, (err, data) => {
                if (!err) {
                    if (Object.keys(data).length === 0) {
                        reject({
                            status: 404,
                            msg: `data not found`,
                        })
                    }
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}