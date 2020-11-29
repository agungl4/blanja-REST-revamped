const db = require('../config/mySQL')
module.exports = {
    getById: (id) => {
       return new Promise((resolve, reject) => {
            const queryStr = "SELECT m.id, p.product_name, c.category_name, pc.color_name, ps.size_name, pco.condition_name, p.product_desc, p.product_img, m.qty, m.created_at, m.updated_at FROM master m JOIN products p ON m.product_id = p.id JOIN category c ON p.category_id = c.id JOIN color pc ON m.color_id = pc.id JOIN size ps ON m.size_id = ps.id JOIN conditions pco ON m.condition_id = pco.id WHERE m.id = ?"
            db.query(queryStr, id , (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    addNew: (insert_product) => {
        return new Promise((resolve, reject) => {
            const queryStr = "INSERT INTO products SET ?"
            db.query(queryStr, insert_product, (err, data) => {
                if (!err) {
                    resolve(
                        {
                            msg : `data berhasil di insert`
                        }
                    )
                } else {
                    reject(err)
                }
            })
        })
    },
    addExisting: (add_stock) => {
        return new Promise((resolve, reject) => {
            const queryStr = "INSERT INTO master SET ?"
            db.query(queryStr, add_stock, (err, data) => {
                if(!err){
                    resolve({
                        msg : `stock barang berhasil di update`
                    })
                }else{
                    reject(err)
                }
            })
        })
    },
    updateProduct: (id, updatePatch) => {
        return new Promise((resolve, reject) => {
            const queryStr = "UPDATE master SET ? WHERE id = ?"
            db.query(queryStr, [updatePatch, id], (err, data) => {
                if (!err) {
                    resolve(updatePatch)
                } else {
                    reject(err)
                }
            })
        })
    }
}