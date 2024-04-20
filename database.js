const mongoose = require("mongoose")
 
 let todolistSchema = new mongoose.Schema({
   todolist:{
     type: String
   }
 },{
   createdAt:false,
   updatedAt:false,
   versionKey:false
 })
 
 let todolist = mongoose.model("todolist",todolistSchema,"todolist")
 
module.exports = todolist