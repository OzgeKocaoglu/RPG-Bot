module.exports.run = async (client, message, args) =>{
		message.channel.send('Pong.');
};

exports.help = {
    name: 'ping',
    aliases: ['ping'],
    description: 'duyuru komutu',

  }