const authModel = require("../models/auth");
const form = require("../helpers/form");
const { token } = require("morgan");

module.exports = {
  signup: (req, res) => {
    const { body } = req;
    authModel
      .postNewUser(body)
      .then(() => {
        form.success(res, {
          msg: "Register Berhasil",
          userData: {
            username: body.username,
          },
        });
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
  login: (req, res) => {
    const { body } = req;
    authModel
      .postLogin(body)
      .then((data) => {
        form.success(res, data);
      })
      .catch((err) => {
        form.error(res, err);
      });
  },
  logout: (req, res) => {
    const bearerToken = req.header("x-access-token");
    if (!bearerToken) {
      res.json({
        msg: `token null!`
      })
    } else {
      blacklisToken = {
        token: bearerToken.split(" ")[1]
      }

      authModel
      .postLogout(bearerToken)
      .then((result) => {
        res.json({
          msg: `token already blacklisted, so its mean you already logout from system`
        })
      }).catch((error) => {
        res.json(error)
      })
    }

  }
};