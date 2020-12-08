const mongoose = require("mongoose");



const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "message is required"],
        minLength: [3, "Name must be 3 characters or longer"]
    },

    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minLength: [3, "Name must be 3 characters or longer"]
    },

}, {timestamps: true});


module.exports = mongoose.model("joke", JokeSchema);