const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const role = guild.roles.cache.find(role => role.name === 'Hades Melezi');
        const member = message.mentions.members.first();
        member.roles.add(role);
};

exports.help = {
    name: 'hades',
    aliases: ['hades', 'prnt'],
    description: 'hades role komutu',

}