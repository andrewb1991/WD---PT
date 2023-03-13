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
        readTime: {
            metadata: {
                value: req.body.readTime.metadata.value,
                unit: req.body.readTime.metadata.unit,  
            },
        },
        author: {
            metadata: {
                name: req.body.author.metadata.name,
                avatar: req.body.author.metadata.avatar,
            },
        },
        content: req.body.content
    })
    try {
        const newblogpost = await blogpost.save()
        res.status(200).send({
            message: "Blog Added",
            payload: newblogpost
            })
    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error
        })
    }

    })





module.exports = router