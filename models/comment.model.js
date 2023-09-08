const {Schema,model} = require("mongoose");


// COMMENT SCHEMA =>
// step-1 => creating the schema

const commentSchema = new Schema(
    {
        body: { type: String, required: true },
        postId: { type: Schema.Types.ObjectId, required: true, ref: "posts" },
        userId: { type: Schema.Types.ObjectId, required: true, ref: "users" }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// step-2 => creating model

const Comment = model("comments", commentSchema);  
// here comments is a collection of database (comments)

module.exports = Comment;