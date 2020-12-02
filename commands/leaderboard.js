const Discord = require("discord.js");
const Messages = require("../models/messages");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.run = async (client, message, args) => {

    Messages.find({ serverID: message.guild.id }).sort([['messages', 'descending']]).exec((err, res) => {
        if (err) console.log(err);

        let embed = new Discord.MessageEmbed()
            .setTitle('En Çok Role Play Yapanlar')

        if (res.length == 0) {
            embed.setColor("RED");
            embed.addField("No data found", "Please type in chat");
        }
        else if (res.length < 10) {
            embed.setColor("BLURPLE");
            for (i = 0; i < res.length; i++) {
                console.log(res[i].userID);
                let member = message.guild.members.cache.get(res[i].userID) || "User left"
                console.log(member);
                if (member === "User left") {
                    embed.addField(`${i + 1}.${member}`, `**Role Play Puan:** ${res[i].messages}`);
                    console.log()
                } else {
                    embed.addField(`${i + 1}.${member.user.name}`, `**Puan:** ${res[i].messages}`);
                }
            }
        } else {
            embed.setColor("BLURPLE");
            embed.setAuthor('Prometheus');
            embed.setDescription('Role Play listesi ve ödüller.');
            embed.setTimestamp();
            embed.setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            for (i = 0, j = 10; i < 10 && j > 0; i++,  j--) {
                    let cost = 100 * j;
                    embed.addFields(
                        {
                           name: 'İsim', value: `${i + 1}.${res[i].name}`, inline: true ,
                        },
                        {
                            name: '**Role Play Puan**', value: `${res[i].messages}`, inline: true,
                        },
                        {
                            name: "Ödül", value: cost, inline: true
                        });
                }

            }
        message.channel.send(embed);
    })

};

exports.help = {
    name: "leaderboard",
    aliases: ["ençokrp", "board", "lb"]
}