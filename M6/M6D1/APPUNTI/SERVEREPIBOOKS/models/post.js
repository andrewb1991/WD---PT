const mongoose = require("mongoose")
const {Schema} = mongoose.Schema
const authors = require("../models/authors")
mongoose.set('strictPopulate', false);

const postSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
author: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "Authors"
}
}, {timestamps: true})

module.exports = mongoose.model("PostSchema", postSchema, "Post" )