const express = require("express");
const Comment = require("../models/comment.model");
const crudController = require("./crudController");

const app = express();

// // COMMENT CRUD OPERATIONS =>

// get all comments and populate all comments on posts
app.get("", async (req, res) => {
    try {
        const comments = await Comment.find().populate({path: "postId", select:{title: 1, body: 1},populate: {path: "userId", select: ["firstName"]}}).populate({path:"userId",select:{firstName:1}});
        return res.status(200).send({ comment: comments });
    } catch (er) {
        return res.status(500).send("something went wrong...", err)
    }
});

// create comment
app.post("", crudController(Comment).post);


// gets comment by id
app.get("/:id", async (req, res) => {
    try {
        console.log("this is comment get = ",req.params.id);
        const comments = await Comment.findById(req.params.id).populate({path: "postId", select:{title: 1, body: 1},populate: {path: "userId", select: ["firstName"]}}).populate({path:"userId",select:{firstName:1}});
        // db.users.findOne({_id:Object("445r8f8ee88gf9gig9g")})
        return res.status(200).send({ comment: comments });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});


// update comment
app.patch("/:id", async (req, res) => {
    try {
        console.log("patch" ,req.params.id);
        const comments = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // db.users.update({_id:Object("445r8f8ee88gf9gig9g")}, {$set: {req.body}})
        return res.status(200).send({ comment: comments });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});

app.delete("/:id", crudController(Comment).deleteOne);


module.exports = app;