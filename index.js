const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const {prefix, token } = require ('./config.json')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

exports.conf = {
	aliases: ['Stuff', 'AlsoStuff']
	};
	exports.help = {
	name: "More Stuff", description: "SillyStuff.", usage: ".SeriousStuff"
	}

fs.readdir("./commands/", (err, files) => {
	if(err) console.log(err);

	let jsfile = files.filter( f=> f.split(".").pop() === "js");
	if(jsfile.length <= 0){
		return console.log("Komut bulunmadı");
	}

	jsfile.forEach((f) =>{
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded`);
		client.commands.set(props.help.name, props);

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		})
	})
})

client.on('ready', async() => {
	console.log(`${client.user.username} is online on ${client.guide.cache.size} servers`);
	client.user.setActivity(`with Olympus RPG!`);
})


client.on('message', async message => {

	if (!message.content.startsWith(prefix) || message.author.client) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();
	let command;

	if(client.commands.has(cmd)){
		command = client.commands.get(cmd);
	}
	else if(client.aliases.has(cmd)){
		command = client.commands.get(client.aliases.get(cmd));
	}


	try {
		command.run(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('Bir sıkıntı çıktı. Birkaç ölümlü yılı bekle, döneceğim.');
	}
});



client.login(token);
