const Discord = require("discord.js");
const Messages = require("../models/messages");

module.exports.run = async (client, message, args) => {

    if (args[0] == null) {
        const messages = await Messages.findOne({
            userID: message.author.id
        });

        message.channel.send(`${message.author}, rp puanın: ${messages.messages}`);
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
                    message.channel.send(`${member}'in rp puanı: ${messageUser.messages}`);
                }
                
        }



};

exports.help = {
    name: "rppuan",
    aliases: []
}