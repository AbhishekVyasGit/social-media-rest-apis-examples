const express = require("express");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");
const crudController = require("./crudController");


const app = express();

// POST  CRUD OPERATIONS =>

//get all posts
app.get("", async (req, res) => {
    try {
        const posts = await Post.find().populate({path: "userId", select: {firstName: 1, email:1}});
        return res.status(200).send({ posts: posts });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});


//create post
app.post("", crudController(Post).post);



//get post and populate all comments on it
app.get("/:id", async (req, res) => {
    try {
        console.log("post get = ",req.params.id);
        const posts = await Post.findById(req.params.id).populate({path:"userId", select:{firstName: 1, email: 1}});
        return res.status(200).send({ posts: posts });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});


// update post
app.patch("/:id", async (req, res) => {
    try {
        console.log("post patch ",req.params.id);
        const posts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send({ posts: posts });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});

//delete post
app.delete("/:id", crudController(Post).deleteOne);


//get comments on post
app.get("/:postId/comments", async(req,res) => {
    try {
        console.log("post comment get",req.params.postId);
        const comments = await Comment.find({postId: req.params.postId});
        return res.status(200).send({ comment: comments });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
})

module.exports = app;