
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#d6f797')
        .setTitle('Prometheus Bankası')
        .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
        .setDescription('Alabileceğin silahlar ve drami fiyatları!')
        .setThumbnail('https://i.hizliresim.com/fmW14a.png')
        .addFields(
            { name: 'Tahta Silahlar', value: '**Tahta Ok**: 10 drami. \n **Tahta Yay**: 15 drami. \n **Tahta Kılıç**: 20 drami. \n **Tahta Kalkan**: 20 drami. \n **Tahta Mızrak**: 15 drami.'},
            { name: 'Bakır Silahlar', value: '**Bakır Ok**: 20 drami. \n **Bakır Yay**: 25 drami. \n **Bakır Kılıç**: 40 drami. \n **Bakır Kalkan**: 40 drami. \n **Bakır Mızrak**: 45 drami'},
            { name: 'Demir Silahlar', value: '**Demir Ok**: 40 drami. \n **Demir Yay**: 55 drami. \n **Demir Kılıç**: 70 drami. \n **Demir Kalkan**: 100 drami. \n **Demir Mızrak**: 120 drami \n **Demir Hançer**: 150 drami.'},
            { name: 'Stygian Silahlar', value: '**Stygian Ok**: 70 drami. \n **Stygian Yay**: 75 drami. \n **Stygian Kılıç**: 150 drami. \n **Stygian Kalkan**: 200 drami. \n **Stygian Mızrak**: 250 drami \n **Stygian Hançer**: 350 drami.'},
        )
        .setImage('https://i.hizliresim.com/U9N4JS.png')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "silahlar",
    aliases: ["silahlar"]
}