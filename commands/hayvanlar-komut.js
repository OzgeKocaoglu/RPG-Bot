
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#8f5d77')
        .setTitle('Thalianın Evcil Hayvan Dükkanı')
        .setAuthor('Thalia.')
        .setDescription('Sahiplenebileceğin hayvan listesi ve komutları!')
        .setThumbnail('https://i.gifer.com/EI8T.gif')
        .addFields(
            { name: 'Evcil Hayvan Listesi', value: '\n \n **Beyaz At**: !atbeyaz. \n **Boz At**: !atboz. \n **Siyah At**: !atsiyah. \n **Köpek**: !köpek. \n **Kedi**: !kedi. \n **Tilki**: !tilki. \n **Yılan**: !yılan.'},
        )
        .setImage('https://i.hizliresim.com/9F8Lz2.gif')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "hayvanlar-komut",
    aliases: ["hk"]
}