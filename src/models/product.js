const db = require('../config/mySQL')
module.exports = {
    getById: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT p.id, p.user_id as sellerId,us.fullname, p.product_name,c.id as category_id, c.category_name, cl.color_name, s.size_name, cd.condition_name,p.product_img, p.product_price,p.product_desc, IFNULL(rev.rating,0) as rating, IFNULL(rev.dibeli,0) as dibeli
            FROM products p
            JOIN category c ON p.category_id = c.id
            JOIN color cl ON p.color_id = cl.id
            JOIN size s ON p.size_id = s.id
            JOIN conditions cd ON p.condition_id = cd.id
            JOIN users us ON p.user_id = us.id
            LEFT JOIN (SELECT product_id, AVG(rating) as rating, count(rating) as dibeli from tb_review GROUP BY product_id) rev ON p.id = rev.product_id 
            WHERE p.id = ?`
            db.query(queryStr, id, (err, data) => {
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
                    resolve({ msg: `data berhasil di insert` })
                } else {
                    reject(err)
                }
            })
        })
    },
    updateProduct: (body, id) => {
        // console.log(body, id)
        return new Promise((resolve, reject) => {
            const queryStr = 'UPDATE products SET ? WHERE id = ? '
            db.query(queryStr, [body, id], (err, data) => {
                if (!err) {
                    resolve({
                        msg: `berhasil pada id ${id}`
                    })
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
        return new Promise((resolve, reject) => {
            const queryStr = `SELECT m.product_id,c.id, c.color_name FROM master m
                            JOIN color c ON m.color_id = c.id
                            WHERE m.product_id = ? GROUP BY c.color_name`
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            const qs = "DELETE FROM products WHERE id = ?";
            db.query(qs, id, (err, data) => {
                if (!err) {
                    resolve(`Data berhasil dihapus pada id = ${id}`);
                } else {
                    reject(err);
                }
            });
        });
    },
    getProductId: (id) => {
        return new Promise((resolve, reject) => {
            const queryStr = "SELECT * FROM products WHERE id = ? "
            db.query(queryStr, id, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    },
}