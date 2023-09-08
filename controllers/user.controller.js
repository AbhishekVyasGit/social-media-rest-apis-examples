const express = require("express");
const User = require("../models/user.model");
const crudController = require("./crudController");

const app = express();

// //  USER CRUD OPERATIONS =>

// get all users
app.get("", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send({ users: users });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});


// create user
app.post("", crudController(User).post);

 
//get user by id
app.get("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const users = await User.findById(req.params.id);
        return res.status(200).send({ users: users });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});


//update user
app.patch("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        return res.status(200).send({ users: users });
    }
    catch (err) {
        return res.status(500).send("something went wrong...", err)
    }
});

//delete user
app.delete("/:id", crudController(User).deleteOne);


module.exports = app;