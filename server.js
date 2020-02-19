const express = require("express")

const cors = require("cors")
const hbs = require("hbs");
const app = express()
console.log("__dirname ",__dirname)
app.use(cors())
app.use(express.static(__dirname+"/static"));
const PORT=4000
const multerupload = require("./multerConfig")

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.set("view engine","hbs");

/*
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
*/

app.get("/home",(req,res)=>{
    console.log("in /test")
    res.render("home.hbs");
})

app.post("/jsondata",(req,res)=>{
  console.log("in /jsondata")
  console.log("req.body ",req.body)
  res.send({status : "location received"});
})
//app.post("/imageupload",multerupload.single('imageupload'),(req,res)=>{
app.post("/imageupload",multerupload.array('imageupload',6),(req,res)=>{
  console.log("in /imageupload")
  const filedata = req.file
  const bodydata = req.body

  console.log("filedata ",filedata)
  console.log("bodydata ",bodydata)

  res.send({status : "/imageupload"});
})





let serverObj = app.listen(PORT,()=>{
    console.log("server started host %s, port %s ",serverObj.address().address,serverObj.address().port)
})