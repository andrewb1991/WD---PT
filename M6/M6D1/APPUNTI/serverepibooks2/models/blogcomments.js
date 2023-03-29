const mongoose = require("mongoose")
const BlogPosts = require("../models/blogpost")
const BlogCommentsSchema = new mongoose.Schema({
    author: {
    type: String,
    required: true
    },
    comment: {
    type: String,
    required: true
    },
    rate: {
    type: Number,
    required: true
    },
    blogpostId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogPosts",
        required: true
    }]
}, {timestamps: true, strict: true })

module.exports = mongoose.model("BlogCommentsModel", BlogCommentsSchema, "BlogComments")