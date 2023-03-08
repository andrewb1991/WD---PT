const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/users")
const port = 3030
const app = express()
// middleware
app.use(express.json())
app.use("/", userRoute)

mongoose.connect("mongodb+srv://andreabramucci:J05XkLGEpExmXTa6@epibooksdb.q1vkcsw.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection
db.on("error", console.error.bind(console, "errore di connessione"))
db.once("open", ()=>{
    console.log("database connesso")
})


app.listen(port, ()=> console.log(`Server pronto sulla porta ${port}`))