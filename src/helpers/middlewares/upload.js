const multer = require("multer");
const path = require("path");
const form = require("../form");

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        const nameFormat = `${file.fieldname}-${Date.now()}${path.extname(
            file.originalname
        )}`;
        cb(null, nameFormat);
    },
});

const upload = multer({
    storage: multerStorage,
    limits: 2 * 1000 * 1000, // 2 MB
});

const multiUpload = (req, res, next) => {
    const uploadMultiple = upload.array("product_img", 5);
    uploadMultiple(req, res, (err) => {
        if (err) {
            form.error(res, {
                msg: "Multer Error",
                err,
            });
        } else {
            let filePath = []
            for (let i = 0; i < req.files.length; i++) {
                filePath.push("/images/" + req.files[i].filename)
                console.log(i + ' ' + filePath[i])
            }

            req.filePath = filePath.join(',')
            next();
        }
    });
};



module.exports = multiUpload;