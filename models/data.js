const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: String,
    userID: String,
    Ib: String,
    drachma: Number,
    xp: Number,
    daily: Number


})

module.exports = mongoose.model("Data", dataSchema);