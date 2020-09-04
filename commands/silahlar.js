
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#d6f797')
        .setTitle('Prometheus Bankası')
        .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
        .setDescription('Alabileceğin silahlar, komutları ve drami fiyatları!')
        .setThumbnail('https://i.hizliresim.com/fmW14a.png')
        .addFields(
            { name: 'Tahta Silahlar', value: 'Ok, Yay, Kılıç, Kalkan, Mızrak.'},
            { name: 'Fiyatlar', value: '**Tahta Ok**: 10 drami. \n **Tahta Yay**: 15 drami. \n **Tahta Kılıç**: 20 drami. \n **Tahta Kalkan**: 20 drami. \n **Tahta Mızrak**: 15 drami.'},
            { name: 'Satın Alma Komutları', value: '**Tahta Ok**: !satın-al-tahta-ok. \n **Tahta Yay**: !satın-al-tahta-yay. \n **Tahta Kılıç**: !satın-al-tahta-kılıç \n **Tahta Kalkan**: !satın-al-tahta-kalkan \n **Tahta Mızrak**: !satın-al-tahta-mızrak'},
            { name: 'Bakır Silahlar', value: 'Ok, Yay, Kılıç, Kalkan, Mızrak'},
            { name: 'Fiyatlar', value: '**Bakır Ok**: 20 drami. \n **Bakır Yay**: 25 drami. \n **Bakır Kılıç**: 40 drami. \n **Bakır Kalkan**: 40 drami. \n **Bakır Mızrak**: 45 drami'},
            { name: 'Satın Alma Komutları', value: '**Bakır Ok**: !satın-al-bakır-ok. \n **Bakır Yay**: !satın-al-bakır-yay. \n **Bakır Kılıç**: !satın-al-bakır-kılıç \n **Bakır Kalkan**: !satın-al-bakır-kalkan \n **Bakır Mızrak**: !satın-al-bakır-mızrak'},
            { name: 'Demir Silahlar', value: 'Ok, Yay, Kılıç, Kalkan, Mızrak, Hançer'},
            { name: 'Fiyatlar', value: '**Demir Ok**: 40 drami. \n **Demir Yay**: 55 drami. \n **Demir Kılıç**: 70 drami. \n **Demir Kalkan**: 100 drami. \n **Demir Mızrak**: 120 drami \n **Demir Hançer**: 150 drami.'},
            { name: 'Satın Alma Komutları', value: '**Demir Ok**: !satın-al-demir-ok. \n **Demir Yay**: !satın-al-demir-yay. \n **Demir Kılıç**: !satın-al-demir-kılıç \n **Demir Kalkan**: !satın-al-demir-kalkan \n **Demir Mızrak**: !satın-al-demir-mızrak \n **Demir Hançer**: !satın-al-demir-hançer'},
            { name: 'Stygian Silahlar', value: 'Ok, Yay, Kılıç, Kalkan, Mızrak, Hançer'},
            { name: 'Fiyatlar', value: '**Stygian Ok**: 70 drami. \n **Stygian Yay**: 75 drami. \n **Stygian Kılıç**: 150 drami. \n **Stygian Kalkan**: 200 drami. \n **Stygian Mızrak**: 250 drami \n **Stygian Hançer**: 350 drami.'},
            { name: 'Satın Alma Komutları', value: '**Stygian Ok**: !satın-al-stygian-ok. \n **Stygian Yay**: !satın-al-stygian-yay. \n **Stygian Kılıç**: !satın-al-stygian-kılıç \n **Stygian Kalkan**: !satın-al-stygian-kalkan \n **Stygian Mızrak**: !satın-al-stygian-mızrak \n **Stygian Hançer**: !satın-al-stygian-hançer'},
        )
        .setImage('https://i.hizliresim.com/U9N4JS.png')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "silahlar",
    aliases: ["silahlar", "silah"]
}