const Discord = require('discord.js');

module.exports.run = async (client, message, args) =>{
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#361c69')
    .setTitle('Prometheus Bankası')
    .setAuthor('Yeraltı ve yer üstünün en güvenli bankası.')
    .addFields(
        { name: 'Drami nedir?', value: 'Kampta kaldığın süre boyunca, hem yeraltı hem de olimposta kullanılan para birimidir. Bununla yeni silahlar alabilir, yeni nesneler elde edebilirsin. Hermes melezleri ile değiş tokuş da yapabilirsin.' },
        { name: 'Neler satın alabilirim?', value: 'Satın alınabilir nesnelerin listesi için ünlem silahlar yazabilirsin çaylak.' })
    .setImage('https://i.pinimg.com/originals/9c/e2/0b/9ce20b95117f447af7d652be360bc00e.gif')
    .setFooter('Olympus RPG');
     message.channel.send(exampleEmbed);
};

exports.help = {
name: 'drami',
aliases: ['drami'],

}