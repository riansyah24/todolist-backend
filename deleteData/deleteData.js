const express = require("express")
const todolistModel = require("../database.js")

let router = express.Router()

router.delete("/delete/:id",(req,res) => {
  todolistModel.findOneAndDelete(req.params.id)
  .then(response => res.status(200).json({status:200,message:`Data dengan todolist ${req.params.id} berhasil dihapus`}))
  .catch(err => res.status(404).json({status:404,message:`Data dengan id ${req.params.id} gagal dihapus`}))
})

module.exports = router