const {Schema,model} = require("mongoose");

// POST SCHEMA =>
// step-1 => creating the schema

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// creating the model

const Post = model("posts", postSchema);
 // here posts is collection of database (posts)

module.exports = Post;