const express = require("express");
const router = express.Router();
const BlogComments = require("../models/blogcomments");
const BlogPosts = require("../models/blogpost");
const mongoose = require("mongoose");

router.get("/BlogComments/", async (req, res) => {
  const blogcomments = await BlogComments.find().populate(
    "blogpostId",
    "title"
  );
  res.status(200).send(blogcomments);
});

router.post("/BlogComments/", async (req, res) => {
  const blogpost = await BlogPosts.findById({_id: "640f73d9399ee1c323208acd"})
  if(!blogpost){
    return res.status(404).send("Post non trovato")
}
  const blogcomment = new BlogComments({
    author: req.body.author,
    comment: req.body.comment,
    rate: req.body.rate,
    blogpostId: blogpost._id,
  });
  try {
    const newblogcomments = await blogcomment.save();
    res.status(200).send({
      message: "Comments Added",
      payload: newblogcomments,
    });
  } catch (error) {
    res.status(500).send({
      message: "internal server error",
      error: error,
    });
  }
});

router.get("/BlogComments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blogcomment = await BlogComments.findById({ _id: id });
    if (!blogcomment) {
      return res.status(400).send({
        message: "Commento non trovato",
      });
    }
    res.status(200).send(blogcomment);
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
});

router.patch("/BlogComments/:id", async (req, res) => {
  const { id } = req.params;
  const blogcommentExist = await BlogComments.findById(id);
  if (!blogcommentExist) {
    res.status(400).send({
      message: "commento non trovato",
    });
  }
  try {
    const blogcommentUpdated = req.body;
    const options = {
      new: true,
    };
    const result = await BlogComments.findByIdAndUpdate(
      id,
      blogcommentUpdated,
      options
    );
    res.status(200).send({
      message: "Commento aggiornato",
      payload: result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
});

router.delete("/BlogComments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blogcomment = await BlogComments.findById(id).deleteOne();
    if (!blogcomment) {
      res.status(400).send({
        message: "Commento non trovato",
      });
    }
    res.status(200).send({
      message: "Commento eliminato con successo",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error,
    });
  }
});

module.exports = router;
