const jsonwebtoken = require('jsonwebtoken')
const db = require('../../config/mySQL')


module.exports = (req, res, next) => {
    const bearerToken = req.header("x-access-token");
    //jika tidak ada header x-access-token
    if (!bearerToken) {
        res.json({
            msg: `Please login first`,
            status: 401 //unauthorized access
        })
    } else {
    // Bearer Token
    // [Bearer, Token]
    const token = bearerToken.split(" ")[1]
    console.log(token)
    const checkBlacklist = new Promise((resolve, reject) => {
      const queryStr = `SELECT token FROM blocklist_token WHERE token = ?`
      console.log(queryStr)
      db.query(queryStr, token, (err, data) => {
        if (!err) {
          if (!data[0]) {
            console.log('a')
            resolve(token)
          } else {
            console.log('b')
            reject({
              msg: `Invalid token => ${data[0].token}, cannot user anymore. Already logout`
            })
          }
        } else {
          console.log('c')
          reject({
            msg: `check Token ERROR!`
          })
        }
      })
    }).then((result) => {
      //cek decodedToken apakah cocok
      try {
        console.log(result)
        const decodedToken = jsonwebtoken.verify(result, process.env.SECRET_KEY)
        //asign decodedToken to req
        req = {
          ...req,
          decodedToken
        }
        next() //meneruskan ke proses selanjutnya
      } catch (err) {
        res.json({
          msg: `Token invalid, wrong SECRET_KEY`
        })
      }
    }).catch((error) => {
      res.json(error)
    })
  }
}