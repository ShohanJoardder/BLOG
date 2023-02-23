const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        minlength: 3
    },

    content: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true
    },

},{
    timestamps: true,
    versionKey: false
});

const postModel = mongoose.model("Post", userSchema)
module.exports = postModel;