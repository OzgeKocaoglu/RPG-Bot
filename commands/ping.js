module.exports.run = async (client, message, args) =>{
		message.channel.send('Pong.');
};

exports.help = {
    name: 'duyuru',
    aliases: ['icon', 'pfp'],
    description: 'duyuru komutu',

  }