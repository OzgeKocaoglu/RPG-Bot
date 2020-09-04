
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#7c39c4')
    .setTitle('Medusanın Oyuncakçısı')
    .setAuthor('Medusa')
    .setDescription('Olimposun tanrılarının oyuncakları. Şşşş sessiz ol ve gözlerini sakın açma!')
    .addFields(
        { name: 'Sihirli Eşyaların Komutları', value: '\n \n **Hermesin Vitaminleri**: !hermesinvitaminleri. \n **Görünmezlik Şapkası**: !görünmezlikşapkası. \n **Athenanın İzi**: !athenanınizi  \n **Kanatlı Ayakkabılar**: !kanatlıayakkabılar \n'},
    )
        .setImage('https://i.hizliresim.com/zr1EVA.gif')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "sihirliesya-komut",
    aliases: ["sek"]
}