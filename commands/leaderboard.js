const Discord = require("discord.js");
const Messages = require("../models/messages");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.run = async (client, message, args) =>{


};

exports.help = {
    name: "leaderboard",
    aliases: ["ençokrp", "board", "lb"]
}