const mongoose = require("mongoose")

const BooksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
    type: String,
    required: true,
    },
    category: {
    type: String,
    required: true,
    },
    price: {
    type: Number,
    decimal: true,
    required: true,
    },
}, {timestamps: true, strict: true})

module.exports = mongoose.model("BooksModel", BooksSchema, "books")