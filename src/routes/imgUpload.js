const imgUploadRouter = require("express").Router();

const multiUpload = require("../helpers/middlewares/upload");

imgUploadRouter.post("/", multiUpload, (req, res) => {
    let filePath= []
    for(let i=0; i<req.files.length; i++){
        filePath.push("/images/" + req.files[i].filename)
        console.log(i +' '+ filePath[i])
    }
    // req.files && req.files.map(value, index => {
    //     filePath[index] = value.filename
    // })


    res.json(filePath)

    // const filePath = "/images/" + req.files.filename;
    // res.json(req.files[0].filename);

})



module.exports = imgUploadRouter;