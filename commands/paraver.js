const mongoose = require("mongoose");
const config = require("../config.json");
const Discord = require('discord.js');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (client, message, args) => {
  
    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
           
    })


}

module.exports.help = {
  name:"paraver",
  aliases: ["pv"]
}