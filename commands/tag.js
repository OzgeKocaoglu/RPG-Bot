const Discord = require("discord.js");
const Messages = require("../models/messages");

module.exports.run = async (client, message, args) =>{
    return message.channel.send('ϟ');

};

exports.help = {
    name: "tag",
    aliases: ["tag"]
}