const express = require("express")
const router = express.Router()
const BlogPosts = require("../models/blogpost")
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")
const path = require("path")

router.patch("/BlogPosts/:id/author", upload.single('image'), async(req, res)=>{
try {  
    const {id} = req.query
    let blogpost = await BlogPosts.findById(req.params.id)
    await cloudinary.uploader.destroy(blogpost.cloudinary_id)
    const result = await cloudinary.uploader.upload(req.file.path)
    // res.json(result)
    const data =  {
        author: {
                id: req.body.author.id,
                name: req.body.author.name,
                avatar: result.secure_url,
            }
    }
blogpost = await BlogPosts.findByIdAndUpdate(req.params.id, data, {new: true})
res.json(blogpost)
} catch (error) {
    console.log(error)
}
})

// router.get("/BlogPosts", async(req, res)=>{
//     try {
//         const blogpost = await BlogPosts.find()
//         res.status(200).send(blogpost)
//     } catch (error) {
//         res.status(500).send({
//         message: "Errore interno del server",
//         error: error     
//         })
//         }
// })

router.get("/TestCloudinary", async(req, res)=>{
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


router.post("/BlogPosts/", upload.single('image'),async(req, res)=>{
    console.log(req.body)
    const result = await cloudinary.uploader.upload(req.file.path)
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
                avatar: result.secure_url
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


//PAGINATION 
router.get("/BlogPosts/", async(req, res)=>{
let {page, limit} = req.query;
try {
if(!page) page = 1;
if(!limit) limit = 9;
const skip = (page -1) * limit;
const totalBlogPosts = await BlogPosts.find().skip(skip).limit(limit)
res.status(200).send(totalBlogPosts)    
} catch (error) {
  console.log(error)  
}
})
  


module.exports = router