const express = require("express")
const router = express.Router()
const Comments = require("../models/comments")

router.get("/comments", async(req, res)=>{
    try {
        const comment = await Comments.find()
        res.status(200).send(comment)
    } catch (error) {
        res.status(500).send({
        message: "Errore interno del server",
        error: error
        })
    }

})

router.post("/comments", async(req, res)=>{
    console.log(req.body)

    const comments = new Comments({
    bookID: req.body.bookID,
    author: req.body.author,
    comment: req.body.comment,
    rate: req.body.rate
    })
    try {
        const newcomment = await comments.save()
        res.status(200).send({
        message: "Commento salvato con successo",
        payload: newcomment,
        })
    } catch (error) {
        res.status(500).send({
        message: "Errore interno del server",
        error: error,
        })
    }

})




module.exports = router