const multer  = require('multer')
const path = require("path")


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './multerrepo')
    },
    filename: function (req, file, cb) {
      console.log("filename ",file)
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})
const fileFilter = (req, file, cb)=> {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To reject this file pass `false`, like so:
    //cb(null, false)

    // To accept the file pass `true`, like so:
    cb(null, true)

    // You can always pass an error if something goes wrong:
    //cb(new Error('I don\'t have a clue!'))
}

const limits ={
    fileSize: 10 * Math.pow(10,6)
}
const upload = multer({storage,limits,fileFilter})

module.exports=upload