const mongoose = require("mongoose")

const BooksSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
    type: String
    },
    category: {
    type: String
    },
    price: {
    type: String
    },
}, {timestamps: true, strict: true})

module.exports = mongoose.model("BooksModel", BooksSchema, "books")