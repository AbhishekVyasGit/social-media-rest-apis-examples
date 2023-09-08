
const express = require("express");
const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const commentController = require("./controllers/comment.controller")
const connect = require("./configs/db");
const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);


app.listen(5000,async ()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error:" ,error );
    }
    console.log("listening to port 5000...");
});

