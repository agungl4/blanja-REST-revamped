const mysql = require('mysql')

const { HOST, DB, USER, PASS} = process.env

// koneksi ke db
const db = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
})

module.exports = db