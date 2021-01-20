const db = require('../config/mySQL')

module.exports = {
    addReview: (body) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `INSERT INTO tb_review SET ?`
            db.query(queryStr, body, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:`Berhasil menambahkan review`
                    })
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    },

    getReview: (productId) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT r.id, u.fullname, r.rating, r.review, r.created_at FROM tb_review r JOIN users u ON r.user_id = u.id JOIN products p ON r.product_id = p.id WHERE product_id = ?`
            db.query(queryStr, productId, (err, data) =>{
                if(!err){
                    if(data.length > 0){
                        resolve({
                            status:200,
                            data:data
                        })
                    }else{
                        resolve({
                            status:404,
                            data:`Belum ada review`
                        })
                    }
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    },
    getUserDetails: (id) =>{
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT * FROM users WHERE id = ?`
            db.query(queryStr, id, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        data:data[0]
                    })
                }else{
                    reject({
                        status:500,
                        message:err
                    })
                }
            })
        })
    }
}