const Discord = require("discord.js");
const Messages = require("../models/messages");

module.exports.run = async (client, message, args) =>{

    if(args[0]== null){
        const messages = await Messages.findOne({
            userID: message.author.id
        });
    
        message.channel.send(`En son rp yapılan kanal: ${messages.lastChannel}`);
    }
    else{

        var user = message.mentions.users.first();
        if(!user) return message.reply("Böyle bir kullanıcı yok.");
        var member;
            try{
                member = await message.guild.members.fetch(user);
            }catch{
                member = null;
            }
            if(!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");

            const messageUser = await Messages.findOne({
                userID: member.id
            });
            if (!messageUser){
                message.channel.send("Bu kullanıcı henüz rp yapmamış.");
            }
            else{
                message.channel.send(`${member.nickname}'in en son rp yapılan kanal: ${messageUser.lastChannel}`);
            }
            
    }
    
};

exports.help = {
    name: "enson",
    aliases: ["enson"]
}