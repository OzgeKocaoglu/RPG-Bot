const Discord = require("discord.js");
const Messages = require("../models/messages");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})

module.exports.run = async (client, message, args) =>{

Messages.find({serverID: message.guild.id}).sort([['messages', 'descending']]).exec((err, res) => {
    if(err) console.log(err);

    let embed =  new Discord.MessageEmbed()
    .setTitle('Leaderboard')

    if(res.length == 0){
        embed.setColor("RED");
        embed.addField("No data found", "Please type in chat");
    }
    else if(res.length < 10){
        embed.setColor("BLURPLE");
        for(i = 0; i<res.length; i++){
            console.log(res[i].userID);
            let member = message.guild.members.cache.get(res[i].userID) ||"User left"
            console.log(member);
            if(member === "User left"){
                embed.addField(`${i+1}.${member}`, `**Puan:** ${res[i].messages}`);
                console.log()
            }else{
                embed.addField(`${i+1}.${member.user.name}`, `**Puan:** ${res[i].messages}`);
            }
        }
    }else{
        embed.setColor("BLURPLE");
        for(i = 0; i<10; i++){
            let user =  message.guild.members.fetch(res[i].userID) || "User left"

            var member;
            try{
                member = message.guild.members.fetch(user);
            }catch{
                member = null;
            }

            if(member === "User left"){
                embed.addField(`${i+1}.${member.nickname}`, `**Puan:** ${res[i].messages}`);
            }else{
                console.log(member);
                embed.addField(`${i+1}.${member.pending}`, `**Puan:** ${res[i].messages}`);
            }
        }
    }
    message.channel.send(embed);
})

};

exports.help = {
    name: "leaderboard",
    aliases: ["ençokrp", "board", "lb"]
}