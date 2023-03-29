const mongoose = require("mongoose");
const Schema = mongoose.Schema

const BlogPostsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    readTime: {
      time: {
        type: String,
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
      required: true
    }
  },
  { timestamps: true, strict: true }
)

module.exports = mongoose.model("BlogPosts", BlogPostsSchema, "BlogPosts");
