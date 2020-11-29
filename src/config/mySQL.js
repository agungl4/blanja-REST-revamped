const mysql = require('mysql')
// koneksi ke db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blanja'
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
})

module.exports = db