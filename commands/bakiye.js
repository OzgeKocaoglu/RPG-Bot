const mongoose = require("mongoose");
const config = require("../config.json");
const Discord = require('discord.js');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {

    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
        if (!data) {
            const newData = new Data({
                name: message.author.username,
                userID: message.author.id,
                lb: "all",
                drachma: 50,
                xp: 0,
                daily: 0,
            })
            newData.save().catch(err => console.log(err));
                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#361c69')
                .setTitle('Prometheus Bankası')
                .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
                .setDescription('Ölümlü hayatındaki dolarlar burada kullanılmaz. Şimdilik sana 50 drami verdik!')
                .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
                .setFooter('Olympus RPG');
            return message.channel.send(exampleEmbed);
        }
        else{
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#361c69')
                .setTitle(`Prometheus Bankası`)
                .setDescription(`Merhaba fani, şimdilik senin ${data.drachma} dramin var.`)
                .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
                .setFooter('Olympus RPG');
            return message.channel.send(exampleEmbed);
        }
    })
}


module.exports.help = {
    name: "bakiye",
    aliases: ["bakiye", "para"]
}