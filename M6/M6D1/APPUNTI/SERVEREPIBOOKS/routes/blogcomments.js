const express = require("express")
const blogcomments = require("../models/blogcomments")
const router = express.Router()
const BlogComments = require("../models/blogcomments")

router.get("/BlogComments/", async(req, res)=>{
const {id} = req.params
const blogcomments = await BlogComments.find()
res.status(200).send(blogcomments)

})

router.post("/BlogPosts/:id/BlogComments", async(req, res)=>{
    const blogcomments = new BlogComments({
    author: req.body.author,
    comment: req.body.comment,
    rate: req.body.rate,
    blogpostId: req.body.blogpostId
    })
    try {
        const newblogcomments =  await blogcomments.save()
        res.status(200).send({
        message: "Comments Added",
        payload: newblogcomments
        })
    } catch (error) {
        res.status(500).send({
        message: "internal server error",
        error: error
        })
    }
})

router.get("/BlogComments/:id", async(req, res)=>{
const {id} = req.params
try {
    const blogcomment = await BlogComments.findById({_id:id})
    if(!blogcomment){
    return res.status(400).send({
    message: "Commento non trovato"
    })
    }
res.status(200).send(blogcomment)
} catch (error) {
    res.status(500).send({
        message: "Internal server error",
        error: error
        })
}
})

router.patch("/BlogComments/:id", async(req, res)=>{
const {id} = req.params
const blogcommentExist = await BlogComments.findById(id)
if(!blogcommentExist){
res.status(400).send({
message: "commento non trovato"
})
}
try {
    const blogcommentUpdated = req.body
    const options = {
    new: true
    }
const result = await BlogComments.findByIdAndUpdate(id, blogcommentUpdated, options)
res.status(200).send({
message: "Commento aggiornato",
payload: result
})
} catch (error) {
    res.status(500).send({
        message: "Internal server error",
        error: error
        })   
}
})

router.delete("/BlogComments/:id", async(req, res)=>{
const {id} = req.params
try {
    const blogcomment = await BlogComments.findById(id).deleteOne()
    if(!blogcomment){
    res.status(400).send({
    message: "Commento non trovato"
    })
    }
res.status(200).send({
    message: "Commento eliminato con successo"
})
} catch (error) {
    res.status(500).send({
        message: "Internal server error",
        error: error
        })
}
})

module.exports = router