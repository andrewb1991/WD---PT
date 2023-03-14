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
    // const readTimeValue = req.body.readTime.value
    // const readTimeUnit = req.body.readTime.unit
    // const authorName = req.body.author.name
    // const authorAvatar = req.body.author.avatar
    const blogpost = new BlogPosts({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        // readTimeValue: req.body.readTime.value,
        // readTimeUnit: req.body.readTime.unit,
        // authorName: req.body.author.name,
        // authorAvatar: req.body.author.avatar,
        // readTime:{
        //     value: req.body.readTime.value,
        //     unit: req.body.readTime.unit   
        //     },
        // author: {
        //         name: req.body.author.name,
        //         avatar: req.body.author.avatar
        // },
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

router.get("/BlogPosts/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const blogpost = await BlogPosts.findById(id)
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

router.patch("/BlogPosts/:id", async(req, res)=>{
    const {id} = req.params
    const blogpostExist = await BlogPosts.findById(id)
    if(!blogpostExist){
        res.status(400).send({
        message: "Blogpost not found"
        })
    }
    try {
        const blogpostToUpdate = req.body
        const options = {
        new: true
        }
    const result = await BlogPosts.findByIdAndUpdate(id, blogpostToUpdate, options)
    res.status(200).send({
        message: "Blogpost updated!",
        payload: result
    })
    } catch (error) {
        res.status(500).send({
        message: "Internal server error",
        error: error
        })
    }
}
)

router.delete("/BlogPosts/:id", async(req, res)=>{
    const {id} = req.params
    try {
        const blogpost = await BlogPosts.findById(id).deleteOne()
        if(!blogpost){
            return res.status(404).send({
                message: "Blogpost not found"
            })
        }
    res.status(200).send({
        message: "Blogpost deleted"
    })
    } catch (error) {
        res.status(500).send({
        message: "Internal server error",
        error: error
        })
    }
})
module.exports = router