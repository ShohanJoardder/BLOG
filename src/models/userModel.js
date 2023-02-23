const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
},{
    timestamps: true,
    versionKey: false
});

const userModel = mongoose.model("User", userSchema)
module.exports = userModel;