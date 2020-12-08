const db = require('../config/mySQL')
module.exports = {
    trxHistory: () => {
        return new Promise ((resolve, reject) => {
            const queryStr = 
            `SELECT th.id AS 'Transaksi_ID', u.fullname AS 'User', p.product_name  AS 'Nama_Produk', c.category_name as 'Kategori' , pc.color_name as 'Warna', ps.size_name AS 'Ukuran', pco.condition_name AS 'Kondisi', th.product_qty AS 'Jumlah_pembelian', p.product_price AS 'Satuan', (th.product_qty * p.product_price) AS 'Total_Harga', th.created_at AS 'Waktu_Transaksi'        
            FROM history th        
            JOIN users u ON th.user_id = u.id        
            JOIN master m ON th.product = m.id        
            JOIN products p ON m.product_id = p.id         
            JOIN category c ON p.category_id = c.id         
            JOIN color pc ON m.color_id = pc.id         
            JOIN size ps ON m.size_id = ps.id         
            JOIN conditions pco ON m.condition_id = pco.id        
            ORDER BY th.created_at DESC`
            db.query(queryStr, (err, data) => {
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    trxAdd: (trxFile) => {
        return new Promise ((resolve, reject) => {
            const queryStr = "INSERT INTO history SET ?"
            db.query(queryStr, trxFile, (err, data) => {
                if(!err){
                    resolve(
                        {msg : 'data berhasil dimasukkan',
                        ...trxFile
                        }
                    )
                }else{
                    reject(err)
                }
            })
        })
    }
}