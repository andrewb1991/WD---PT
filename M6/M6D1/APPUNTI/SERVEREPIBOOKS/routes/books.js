const express = require("express")
const router = express.Router()
const Books = require("../models/books")

router.get("/books", async(req, res)=>{
    try {
        const books = await Books.find()
        res.status(200).send(books)
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error
        })
    }

})


router.post("/books", async(req, res)=>{
    const books = new Books({
        asin: req.body.asin,
        title: req.body.title,
        img: req.body.img,
        price: req.body.price,
        category: req.body.category
    
    })
    try {
        const newbook = await books.save()
        res.status(200).send({
            message: "utente salvato con successo",
            payload: newbook,
        })
        
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error,
        })
    }
})

module.exports = router