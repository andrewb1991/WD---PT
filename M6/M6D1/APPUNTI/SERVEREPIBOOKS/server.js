const express = require("express")
const mongoose = require("mongoose")
const booksRoute = require("./routes/books")
const commentsRoute = require("./routes/comments")
const authorsRoute = require("./routes/authors")
const BlogPostsRoute = require("./routes/blogpost")
const port = 4040
const app = express()
const cors = require("cors")
const logMiddlewares = require("./middlewares/logMiddlewares")


app.use(express.json())
app.use(cors())
app.use(logMiddlewares)
app.use("/", booksRoute)
app.use("/", commentsRoute)
app.use("/", authorsRoute)
app.use("/", BlogPostsRoute)

mongoose.connect("mongodb+srv://andreabramucci:yyJH5ugMl17X6zvA@cluster0.sf1v3sj.mongodb.net/test")
const db = mongoose.connection
db.on("error", console.log.bind(console, "Connection Error"))
db.once("open", ()=>{
    console.log("Connected")
})

app.listen(port, ()=> console.log(`Server ready with port ${port}`))