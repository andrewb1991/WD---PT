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

router.post("/BlogPosts/", async(req, res)=>{
    console.log(req.body)
    const blogpost = new BlogPosts({
        category: req.body.category,
        title: req.body.title,
        cover: req.body.cover,
        readTime:{
            time: req.body.readTime.time,
            unit: req.body.readTime.unit   
            },
        author: {
                id: req.body.author.id,
                name: req.body.author.name,
                avatar: req.body.author.avatar
        },
        content: req.body.content,
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
        const blogpost = await BlogPosts.findById({_id:id})
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

router.get('/author', async (req, res) => {
    const {name} = req.query
    try {
        const blogpost = await BlogPosts.find({
        "author.name": {
        $regex: new RegExp(name, "i")
        }
        })
    if(blogpost.length === 0){
    return res.status(404).send("Autore non trovato")
    }
    res.status(200).send(blogpost)
    } catch (error) {
    res.status(500).send("errore interno del server")
    }
  })


  router.get("/BlogPosts", async(req, res)=>{
const {page = 1, limit = 4} = req.query
try {
const blogposts = await BlogPosts.find()
.limit(limit*1)
.skip((page-1)*limit)
const totalBlogPosts = await BlogPosts.count()
res.status(200).send({
blogposts,
totalBlogPosts: Math.ceil(count/limit),
currentPage: page
})    
} catch (error) {
  console.log(error)  
}
})
  


module.exports = router