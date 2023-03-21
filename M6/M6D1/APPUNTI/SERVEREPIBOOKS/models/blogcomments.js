const mongoose = require("mongoose")

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
    blogpostId: {
        type: String,
        required: true
    }
}, {timestamps: true, strict: true })

module.exports = mongoose.model("BlogCommentsModel", BlogCommentsSchema, "BlogComments")