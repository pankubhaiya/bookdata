const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
     Title:{
        type: String,
        required: true, 
      },
    Author:{
        type: String,
        required: true, 
      },
    Genre:{
        type: String,
        required: true, 
      },
    Description:{
        type: String,
        required: true, 
      },
    Pric:{
        type: Number,
        required: true, 
      }
},{
    versionKey:false
})

const bookmodel = mongoose.model("book",bookSchema)

module.exports = {bookmodel}




