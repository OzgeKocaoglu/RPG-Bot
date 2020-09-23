const Discord = require("discord.js");
const Messages = require("../models/messages");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.run = async (client, message, args) =>{

    const gift = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

    Messages.find({
        serverID: message.guild.id
    }).sort([
        ['messages', 'descending']
    ]).exec((err, res) => {
        if(err) console.log(err);

        let embed = new Discord.MessageEmbed()
        .setTitle("En çok Role Play Yapanlar")
        if(res.length === 0 ){
            embed.setColor("RED");
            embed.addField("Henüz RP Yapılmadı", "Drahmi kazanmak için yazınız!")
        }else if(res.length < 10){
            embed.setColor("#b5db69");
            for(i = 0; i< res.length; i++){
                let member = message.guild.members.cache.find(res[i].userID);
                embed.addField(`${i+1}. ${member}`, `**Drahmi**: ${gift[i]}`);
            }
        }else{
            embed.setColor("#b5db69");
            for(i = 0; i< 10; i++){
                let member = message.guild.members.get(res[i].userID);
                embed.addField(`${i+1}. ${member}`, `**Drahmi**: ${gift[i]}`);
            }

        }
        message.channel.send(embed);
    });

   
};

exports.help = {
    name: "leaderboard",
    aliases: ["ençokrp", "board", "lb"]
}