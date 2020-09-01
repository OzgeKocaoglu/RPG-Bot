module.exports.run = async (client, message, args) => {

		if(args[0] == 'foo'){
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
};

module.exports.help = {
	name: "args-info",
	aliases: ['icon', 'pfp'],
	description: 'Information about the arguments provided.',

  }