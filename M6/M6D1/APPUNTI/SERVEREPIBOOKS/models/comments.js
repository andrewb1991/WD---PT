const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema({
    bookID: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        max: 200,
    },
    comment: {
        type: String,
        required: true,
        max: 255,
    }, 
    rate: {
        type: Number,
        required: true,
        max: 5,
    }

})

module.exports = mongoose.model("CommentsModel", CommentsSchema, "comments")