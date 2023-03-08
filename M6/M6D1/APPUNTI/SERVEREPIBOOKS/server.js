const express = require("express")
const mongoose = require("mongoose")
const booksRoute = require("./routes/books")
const port = 3030
const app = express()


app.use(express.json())
app.use("/", booksRoute)

mongoose.connect("mongodb+srv://andreabramucci:yyJH5ugMl17X6zvA@cluster0.sf1v3sj.mongodb.net/test")
const db = mongoose.connection
db.on("error", console.log.bind(console, "Connection Error"))
db.once("open", ()=>{
    console.log("Connected")
})

app.listen(port, ()=> console.log(`Server ready with port ${port}`))