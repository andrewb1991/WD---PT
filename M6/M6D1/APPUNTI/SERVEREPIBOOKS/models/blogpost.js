const mongoose = require("mongoose")

const BlogPostsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        max: 30,
    },
    title: {
        type: String,
        required: true,
        max: 255,
    },
    cover: {
        type: String,
        required: true,
        max: 2000,
    },
    readTime: {
            value: String,
            unit: String,
            },
    author: { 
            name: String,
            avatar: String,

    },
    content: {
        type: String,
    }
}, {timestamps: true, strict: true})

module.exports = mongoose.model("BlogPostsModel", BlogPostsSchema, "BlogPosts")