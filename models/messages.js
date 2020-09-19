const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    userID: String,
    messages: Number,
    name: String,
    lastChannel: String,

})

module.exports = mongoose.model("messages", messageSchema);