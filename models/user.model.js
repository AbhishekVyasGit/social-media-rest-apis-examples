const {Schema,model} = require("mongoose");


// USER SCHEMA
// Step-1 => creating the schema

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


// step-2 => creating the Schema

const User = model("users", userSchema); 
// here users is a collection of database (users)

module.exports = User;