

const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#7c39c4')
        .setTitle('Medusanın Oyuncakçısı')
        .setAuthor('Medusa')
        .setDescription('Olimposun tanrılarının oyuncakları. Şşşş sessiz ol ve gözlerini sakın açma!')
        .addFields(
            { name: 'Sihirli Eşyalar', value: '\n \n **Hermesin Vitaminleri**: 400 drami. \n **Görünmezlik Şapkası**: 500 drami. \n **Athenanın İzi**: 1000 drami. \n **Kanatlı Ayakkabılar**: 300 drami. \n'},
        )
        .setImage('https://i.hizliresim.com/zr1EVA.gif')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "sihirliesya",
    aliases: ["sihirliesya"]
}