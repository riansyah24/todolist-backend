const express = require("express")
const todolistModel = require("../database.js")

let router = express.Router()

router.post("/post",(req,res) => {
  let todolist = new todolistModel(req.body)
  todolist.save()
  .then(response => res.status(200).json({status:200,message:"Data berhasil diinput"}))
  .catch(err => response => res.status(404).json({status:404,message:"Data gagal diinput " + err}))
})

module.exports = router