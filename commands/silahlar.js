
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#361c69')
        .setTitle('Prometheus Bankası')
        .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
        .setDescription('Alabileceğin silahlar, komutları ve drami fiyatları!')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Tahta Silahlar', value: 'Tahta silah komutları:' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Tahta Ok', value: '!satın-al-tahta-ok'},
            { name: 'Tahta Yay', value: '!satın-al-tahta-yay'},
            { name: 'Tahta Kılıç', value: '!satın-al-tahta-kılıç'},
            { name: 'Tahta Kalkan', value: '!satın-al-tahta-kalkan'},
            { name: 'Tahta Mızrak', value: '!satın-al-tahta-mızrak'},
        )
        .setFooter('Olympus RPG');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "silahlar",
    aliases: ["silahlar", "silah"]
}