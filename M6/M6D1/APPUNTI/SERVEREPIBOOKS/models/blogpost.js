const mongoose = require("mongoose")

const BlogPostsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
            time: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            },
            },
    author: { 
            id: {
                type: String,
                required: true
            },
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

module.exports = mongoose.model("BlogPosts", BlogPostsSchema, "BlogPosts")