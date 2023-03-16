const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const userRoute = require("./routes/users")
const port = 3030
const app = express()
// middleware
app.use(express.json())
app.use("/", userRoute)

mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connection
db.on("error", console.error.bind(console, "errore di connessione"))
db.once("open", ()=>{
    console.log("database connesso")
})


app.listen(port, ()=> console.log(`Server pronto sulla porta ${port}`))