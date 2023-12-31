
const express = require("express")
const {bookmodel} = require("../models/bookmodel")
const bookRouter = express.Router()

bookRouter.use(express.json())

bookRouter.post("/addbook", async (req, res) => {
    
    try {
      
        let data = new bookmodel({...req.body})
        await data.save()
        res.send({ok:true,message:"adddata succesfull"})
    } catch (err) {
        res.send({ok:false,message:error.message})
    }
})

bookRouter.get("/mybook", async (req, res) => {
    
    try {
        // console.log("in")
        let data = await  bookmodel.find()
        res.send({ok:true,message:data})
    } catch (error) {
        res.send({ok:false,message:error.message})
    }
})

bookRouter.get("/filter/:Genre", async (req, res) => {
       const Genre=req.params.Genre
    try {
        let data = await  bookmodel.find({"Genre":Genre})
        res.send({ok:true,message:data})
    } catch (error) {
        res.send({ok:false,message:error.message})
    }
})


bookRouter.get('/sort/:order', async (req, res) => {
    try {
        const order = req.params.order == "asc" ? 1:-1
        let book = await bookmodel.aggregate([{$sort:{Pric:order}}]);
        res.status(201).send({ok: true, message:book});
    } catch (error) {
      console.error(error);
      res.send({ok:false,message:error.message})
    }
  });
 


bookRouter.delete("/deletebook/:id", async (req, res) => {
    
    try {
        // console.log("in")
        let data = await bookmodel.findByIdAndDelete({_id:req.params.id})
        res.send({ok:true,message:"Delete done"})
    } catch (err) {
        res.send({ok:false,message:err.message})
    }
})




module.exports = { bookRouter }