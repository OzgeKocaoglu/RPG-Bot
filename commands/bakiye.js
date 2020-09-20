const mongoose = require("mongoose");
//const config = require("../config.json");
const Discord = require('discord.js');

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {

    if (args[0] == null) {

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
                    .setColor('#d6f797')
                    .setTitle('Prometheus Bankası')
                    .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
                    .setThumbnail('https://i.hizliresim.com/fmW14a.png')
                    .setDescription('Ölümlü hayatındaki dolarlar burada kullanılmaz. Şimdilik sana 50 drahmi verdik!')
                    .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
                    .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
                return message.channel.send(exampleEmbed);
            }
            else {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d6f797')
                    .setTitle(`Prometheus Bankası`)
                    .setThumbnail('https://i.hizliresim.com/fmW14a.png')
                    .setDescription(`Merhaba fani, şimdilik senin ${data.drachma} drahmin var.`)
                    .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
                    .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
                return message.channel.send(exampleEmbed);
            }
        })
    }
    else {
        var user = message.mentions.users.first();
        if(!user) return message.reply("Böyle bir kullanıcı yok.");
        var member;
            try{
                member = await message.guild.members.fetch(user);
            }catch{
                member = null;
            }
            if(!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");
            
        Data.findOne({
            userID: member.id
        }, (err, data) => {
            if (!data) {
                return message.channel.send("Kullanıcının bir banka hesabı yok. Oluşması için !bakiye yazması yeterlidir.");
            }
            else {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#d6f797')
                    .setTitle(`Prometheus Bankası`)
                    .setThumbnail('https://i.hizliresim.com/fmW14a.png')
                    .setDescription(`Merhaba fani, şimdilik ${member.nickname}'in ${data.drachma} drahmin var.`)
                    .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
                    .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
                return message.channel.send(exampleEmbed);
            }
        })
    }

}


module.exports.help = {
    name: "bakiye",
    aliases: ["bakiye", "b"]
}