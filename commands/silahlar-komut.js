
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#d6f797')
        .setTitle('Prometheus Bankası')
        .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
        .setDescription('Alabileceğin silahlar ve komutları!')
        .setThumbnail('https://i.hizliresim.com/fmW14a.png')
        .addFields(
            { name: 'Tahta Silahlar', value: '**Tahta Ok**: !tahtaok. \n **Tahta Yay**: !tahtayay. \n **Tahta Kılıç**: !tahtakılıç \n **Tahta Kalkan**: !tahtakalkan \n **Tahta Mızrak**: !tahtamızrak'},
            { name: 'Bakır Silahlar', value: '**Bakır Ok**: !bakırok. \n **Bakır Yay**: !bakıryay. \n **Bakır Kılıç**: !bakırkılıç \n **Bakır Kalkan**: !bakırkalkan \n **Bakır Mızrak**: !bakırmızrak'},
            { name: 'Demir Silahlar', value: '**Demir Ok**: !demirok. \n **Demir Yay**: !demiryay. \n **Demir Kılıç**: !demirkılıç \n **Demir Kalkan**: !demirkalkan \n **Demir Mızrak**: !demirmızrak \n **Demir Hançer**: !demirhançer'},
            { name: 'Stygian Silahlar', value: '**Stygian Ok**: !stygianok. \n **Stygian Yay**: !stygianyay. \n **Stygian Kılıç**: !stygiankılıç \n **Stygian Kalkan**: !stygiankalkan \n **Stygian Mızrak**: !stygianmızrak \n **Stygian Hançer**: !stygianhançer'},
        )
        .setImage('https://i.hizliresim.com/U9N4JS.png')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "silahlar-komut",
    aliases: ["sk"]
}