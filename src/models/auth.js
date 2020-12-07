const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../config/mySQL");

module.exports = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
    // genSalt
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
          reject(err);
        }
        // hash
        bcrypt.hash(body.password, salt, (err, hashedPassword) => {
          if (err) {
            reject(err);
          }
          // store DB
          const newBody = { ...body, password: hashedPassword };
          const qs = "INSERT INTO users SET ?";
          db.query(qs, newBody, (err, data) => {
            if (!err) {
              resolve(data);
            } else {
              reject(err);
            }
          });
        });
      });
    });
  },
  postLogin: (body) => {
    return new Promise((resolve, reject) => {
      const { username, password } = body;
      // query ke DB => SELECT password WHERE username == username body
      const qs = "SELECT password, level_id FROM users WHERE username=?";
      db.query(qs, username, (err, data) => {
        // Handle Error SQL
        if (err) {
          reject({
            msg: "Error SQL",
            status: 500,
            err,
          });
        }
        // Handle User Not Found
        if (!data[0]) {
          reject({
            msg: "User Not Found",
            status: 404,
          });
        } else {
          // Compare password from body and DB
          bcrypt.compare(password, data[0].password, (err, result) => {
            if (err) {
              reject({
                msg: "Hash Error",
                status: 500,
                err,
              });
            }
            // result => true : false
            if (!result) {
              reject({
                msg: "Wrong Password",
                status: 401,
              });
            } else {
              const payload = {
                username,
                level: data[0].level_id,
              };
              // jwt => sign, verify
              const secret = process.env.SECRET_KEY;
              // sign => mendapatkan token dari payload
              // token dikirim ke client
              const token = jwt.sign(payload, secret);
              resolve({ token });
            }
          });
        }
      });
    });
  },
  postLogout:(bearerToken) => {
    return new Promise((resolve, reject) => {
      const queryStr = "INSERT INTO blocklist_token SET ?"
      db.query(queryStr, blacklisToken, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }
};