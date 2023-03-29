const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const booksRoute = require("./routes/books")
const commentsRoute = require("./routes/comments")
const authorsRoute = require("./routes/authors")
const BlogPostsRoute = require("./routes/blogpost")
const DataBaseRoute = require("./routes/databasediprova")
const BlogCommentsRoute = require("./routes/blogcomments")
const postRoute = require("./routes/post")
const port = 4040
const app = express()
const cors = require("cors")
const logMiddlewares = require("./middlewares/logMiddlewares")
const blogcomments = require("./models/blogcomments")
const path = require("path")
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json())
app.use(cors())
app.use(logMiddlewares)
app.use("/", booksRoute)
app.use("/", commentsRoute)
app.use("/", authorsRoute)
app.use("/", BlogPostsRoute)
app.use("/", DataBaseRoute)
app.use("/", BlogCommentsRoute)
app.use("/", postRoute)

app.get("/ProvaMail", async (req, res)=>{
  const msg = {
    to: 'andrea.bramucci@gmail.com', // Change to your recipient
    from: 'andrea.bramucci@me.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
})

mongoose.connect("mongodb+srv://andreabramucci:yyJH5ugMl17X6zvA@cluster0.sf1v3sj.mongodb.net/test")
const db = mongoose.connection
db.on("error", console.log.bind(console, "Connection Error"))
db.once("open", ()=>{
    console.log("Connected")
})

app.listen(port, ()=> console.log(`Server ready with port ${port}`))