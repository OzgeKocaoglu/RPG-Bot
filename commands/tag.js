const Discord = require("discord.js");
const Messages = require("../models/messages");

module.exports.run = async (client, message, args) =>{
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#3d9cad')
    .setTitle('Sunucu Tag')
    .setAuthor('Developer')
    .setDescription('ϟ')
    .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
    return message.reply(exampleEmbed);

};

exports.help = {
    name: "tag",
    aliases: ["tag"]
}