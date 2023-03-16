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
            value: {
                type: String,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            },
    author: { 
            name: {
                type: String,
                required: true
            },
            avatar: {
                type: String,
                required: true
            },

    },
    content: {
        type: String,
    }
}, {timestamps: true, strict: true})

module.exports = mongoose.model("BlogPostsModel", BlogPostsSchema, "BlogPosts")