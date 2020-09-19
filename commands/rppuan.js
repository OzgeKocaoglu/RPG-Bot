const Discord = require("discord.js");
const Messages = require("../models/messages");

module.exports.run = async (client, message, args) =>{
    const messages = await Messages.findOne({
        userID: message.author.id
    });

    message.channel.send(`${message.author.nickname}'in RP Puanı: ${messages.messages}`);
};

exports.help = {
    name: "rppuan",
    aliases: []
}