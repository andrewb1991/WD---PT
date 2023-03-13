const express = require("express")
const router = express.Router()
const BlogPosts = require("../models/blogpost")

router.get("/BlogPosts", async(req, res)=>{
    try {
        const blogpost = await BlogPosts.find()
        res.status(200).send(blogpost)
    } catch (error) {
        res.status(500).send({
        message: "Errore interno del server",
        error: error     
        })
        }
})

router.post("/BlogPosts", async(req, res)=>{
    const blogpost = new BlogPosts({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        readTime:{
            value: req.body.readTime.value,
            unit: req.body.readTime.unit   
            },
        author: {
                name: req.body.author.name,
                avatar: req.body.author.avatar
        },
        content: req.body.content
    })
    try {
        const newblogpost = await blogpost.save()
        res.status(200).send({
            message: "Blog Added",
            payload: newblogpost,
            })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error
        })
    }

    })

router.get("BlogPosts/:_id", async(req, res)=>{
    const {_id} = req.params
    try {
        const blogpost = await BlogPosts.findById(_id)
        if(!blogpost){
        return res.status(404).send({ message: "BlogPost non trovato"})
        }
    res.status(200).send(blogpost)
    } catch (error) {
        res.status(500).send({
        message: "Internal server error",
        error: error
        })
    }
})



module.exports = router