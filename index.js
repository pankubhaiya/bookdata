
const express = require("express")
require("dotenv").config()
const connect = require("./confing/connect")
const {bookRouter} = require("./routes/bookRouter")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/book",bookRouter)
app.get("/",(req,res)=>{
      res.send("welcome to findbook")
})


app.listen(process.env.port, async()=>{
      try{
         await connect
        console.log("db is connect")
      }catch(err){
         console.log(err.message)
      }

      console.log(`server is running at port ${process.env.port}`)
})
