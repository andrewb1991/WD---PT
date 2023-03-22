const mongoose = require("mongoose")

const BlogCommentsSchema = new mongoose.Schema({
    _id: {
    type: String,
    required: true
    },
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
        ref: "BlogPostsModel",
        required: true
    }]
}, {timestamps: true, strict: true })

module.exports = mongoose.model("BlogCommentsModel", BlogCommentsSchema, "BlogComments")