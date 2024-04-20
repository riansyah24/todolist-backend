const express = require("express")
const todolistModel = require("../database.js")

let router = express.Router()

router.get("/",(req,res) => {
  todolistModel.find()
  .then(response => res.status(200).json({status:200,data:response,message:"Data berhasil didapat"}))
  .catch(err => res.status(404).json({status:404,message:"Data gagal didapat " + err}))
})

module.exports = router