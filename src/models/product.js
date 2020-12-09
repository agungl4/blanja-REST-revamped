const db = require('../config/mySQL')
module.exports = {
    getById: (id) => {
       return new Promise((resolve, reject) => {
            const queryStr = "SELECT m.id, m.product_id, p.product_name, p.category_id, c.category_name, pc.id AS 'color_id',pc.color_name, ps.id AS 'size_id', ps.size_name, pco.id AS 'condition_id' ,pco.condition_name, p.product_desc, p.product_price, p.product_img, m.qty, m.created_at, m.updated_at FROM master m JOIN products p ON m.product_id = p.id JOIN category c ON p.category_id = c.id JOIN color pc ON m.color_id = pc.id JOIN size ps ON m.size_id = ps.id JOIN conditions pco ON m.condition_id = pco.id WHERE m.product_id = ? GROUP BY m.product_id"
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
                    resolve({ msg : `data berhasil di insert` })
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
    },
    getSize: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT m.product_id, s.id, s.size_name FROM master m
                            JOIN size s ON m.size_id = s.id
                            WHERE m.product_id = ? GROUP BY s.size_name`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    getColor: (id) => {
        return new Promise ((resolve, reject) => {
            const queryStr = `SELECT m.product_id,c.id, c.color_name FROM master m
                            JOIN color c ON m.color_id = c.id
                            WHERE m.product_id = ? GROUP BY c.color_name`
            db.query(queryStr, id, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
          const qs = "DELETE FROM master WHERE id = ?";
          db.query(qs, id, (err, data) => {
            if (!err) {
              resolve(`Data berhasil dihapus pada id = ${id}`);
            } else {
              reject(err);
            }
          });
        });
      },
}