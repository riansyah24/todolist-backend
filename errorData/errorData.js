const express = require("express")

let router = express.Router()

router.use("*",(req,res) => {
  res.status(404).json({status:404,message:"Data gagal didapat"})
})

module.exports = router