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
            message: "Libro salvato con successo",
            payload: newbook,
        })
        
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error,
        })
    }
})

router.delete("/books/:id", async(req, res)=>{
    const {id} = req.params
try{
    const book = await Books.findById(id).deleteOne()
    if(!book){
    return res.status(404).send({
        message: "Book not found",
    })
    }
res.status(200).send({
    message: "Book deleted!",
})
}
catch (error){
    res.status(500).send({
        message: "Internal server error",
        error: error,
    })

}

})

router.patch("/books/:id", async(req, res)=>{
    const {id} = req.params
    const bookExist = await Books.findById(id)
    if(!bookExist){
        res.status(404).send({
            message: "Book not found!"
        })
    }
    try {
        const bookToUpdate = req.body
        const options ={
        new: true
        }
    const result = await Books.findByIdAndUpdate(id, bookToUpdate, options)
    res.status(200).send({
        message: "Book updated!",
        payload: result
    })
    } catch (error) {
    res.status(500).send({
    message: "Internal server error",
    error: error
    })
    }


})

module.exports = router