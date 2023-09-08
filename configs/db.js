const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/relationships"

const connect = ()=>{
    return mongoose.connect(uri);
};

module.exports = connect;
