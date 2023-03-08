const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
}, {timestamps: true, strict: true})

module.exports = mongoose.model("UserModel", UsersSchema, "users")