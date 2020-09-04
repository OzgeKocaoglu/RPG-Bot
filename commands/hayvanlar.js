
const config = require("../config.json");
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#8f5d77')
        .setTitle('Thalianın Evcil Hayvan Dükkanı')
        .setAuthor('Thalia.')
        .setDescription('Sahiplenebileceğin hayvan listesi ve dramiler')
        .setThumbnail('https://i.gifer.com/EI8T.gif')
        .addFields(
            { name: 'Evcil Hayvan Listesi', value: '\n \n **Beyaz At**: 150 drami. \n **Boz At**: 80 drami. \n **Siyah At**: 200 drami. \n **Köpek**: 30 drami. \n **Kedi**: 20 drami. \n **Tilki**: 300 drami. \n **Yılan**: 100 drami.'},
        )
        .setImage('https://i.hizliresim.com/9F8Lz2.gif')
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');

    return message.channel.send(exampleEmbed);

}


module.exports.help = {
    name: "hayvanlar",
    aliases: ["hayvanlar"]
}