const Discord = require('discord.js');

module.exports.run = async (client, message, args) =>{
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#d6f797')
    .setTitle('Prometheus Bankası')
    .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
    .setThumbnail('https://i.hizliresim.com/fmW14a.png')
    .addFields(
        { name: 'Drahmi nedir?', value: 'Kampta kaldığın süre boyunca, hem yeraltı hem de olimposta kullanılan para birimidir. Bununla yeni silahlar alabilir, yeni nesneler elde edebilirsin. Hermes melezleri ile değiş tokuş da yapabilirsin.' },
        { name: 'Neler satın alabilirim?', value: 'Satın alınabilir nesnelerin listesi için !silahlar yazabilirsin çaylak.' })
    .setImage('https://i.hizliresim.com/U9N4JS.png')
    .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
     message.channel.send(exampleEmbed);
};

exports.help = {
name: 'drahmi',
aliases: ['drahmi'],

}