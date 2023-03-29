const express = require("express")
const router = express.Router()
const Post = require("../models/post")
const Author = require("../models/authors")

router.post("/post", async(req, res)=>{
const {_id} = req.body
const author = await Author.findById(_id)
if(!author){
return res.status(400).send("Utente non trovato")
}
const post = new Post({
title: req.body.title,
category: req.body.category,
content: req.body.content,
author: author._id
})
try {
    const newpost = await post.save()
    res.status(200).send(newpost)
} catch (error) {
res.status(500).send("Internal server error")
}
})

router.get("/post/:id", async(req, res)=>{
const {id} = req.params
const post = await Post.findById({_id: id}).populate({path: 'Authors', options: {strictPopulate: false}})
res.status(200).json(post)
})















module.exports = router
