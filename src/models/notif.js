const db = require('../config/mySQL')

module.exports = {
    addNewNotif: (body) => {
        return new Promise((resolve, reject) => {
            const queryStr = `INSERT INTO tb_notification SET ?`
            db.query(queryStr, body, (err, data) => {
                if (!err) {
                    resolve({
                        status: 200,
                        message: 'Berhasil'
                    })
                } else {
                    reject({
                        status: 500,
                        message: err
                    })
                }
            })
        })

    },
    getNotifSeller: (id) => {
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT * FROM tb_notification WHERE user_id = ? and level = 2`
            db.query(queryStr, id, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        data:data
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
    getNotifBuyer: (id) => {
        return new Promise ((resolve, reject) =>{
            const queryStr = `SELECT * FROM tb_notification WHERE user_id = ? and level = 1`
            db.query(queryStr, id, (err, data) =>{
                console.log(err, data)
                if(!err){
                    resolve({
                        status:200,
                        data:data
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