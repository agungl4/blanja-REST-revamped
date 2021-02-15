const mysql = require('mysql')

const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASS} = process.env

// koneksi ke db
const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
})

module.exports = db