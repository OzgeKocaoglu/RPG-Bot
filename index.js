
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true, partials: ['MESSAGE'] });
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect(process.env.mongoPass, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const Messages = require("./models/messages");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		return console.log("Komut bulunmadı");
	}

	jsfile.forEach((f) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded`);
		client.commands.set(props.help.name, props);

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		})
	})
})

client.on('ready', async () => {
	console.log(`${client.user.username} is online`);
	client.user.setStatus('idle');
	client.user.setActivity(`with Percy Jackson RPG!`);

})

client.on('message', async message => {

	//Melez Kampı.
	let kampgirisi = client.channels.cache.get(`749813518655815771`);
	let thaliaagaci = client.channels.cache.get(`749813333867364403`);
	let kampalani = client.channels.cache.get(`751064941674627082`);
	let kampsiniri = client.channels.cache.get(`749813555620216892`);
	let kampgolu = client.channels.cache.get(`751469041683791933`);
	let buyukev = client.channels.cache.get(`749813389383172106`);
	let kampatesi = client.channels.cache.get(`749813476977016883`);
	let yemeksalonu = client.channels.cache.get(`749813424703406164`);
	let revir = client.channels.cache.get(`758762067485261884`);
	let antremansahasi = client.channels.cache.get(`758762169923272775`);

	//Zeus Kulübesi
	let zeuskulubesi = client.channels.cache.get(`749817909630599188`);
	let zeusyataklar = client.channels.cache.get(`754466930139856958`);

	//Poseidon Kulübesi
	let poseidonkulubesi = client.channels.cache.get(`749817879456776212`);
	let poseidonyataklar = client.channels.cache.get(`754468611435004014`);

	//Hades Kulübesi
	let hadeskulubesi = client.channels.cache.get(`749817843075252224`);
	let hadesyataklar = client.channels.cache.get(`754467607700045894`);

	//Hera Kulübesi
	let herakulubesi = client.channels.cache.get(`754471590284230801`);
	let herayataklar = client.channels.cache.get(`754471650216640622`);

	//Hephaestus Kulübesi
	let hephaestuskulubesi = client.channels.cache.get(`749818161095770153`);
	let hephaestusyataklar = client.channels.cache.get(`754471246938505376`);

	//Hermes Kulübesi
	let hermeskulubesi = client.channels.cache.get(`749818264343019621`);
	let hermesyataklar = client.channels.cache.get(`754470937214189608`);

	//Apollo Kulübesi
	let apollokulubesi = client.channels.cache.get(`749818108423700591`);
	let apollonyataklar = client.channels.cache.get(`754470673920819230`);

	//Afrodit Kulübesi
	let afroditkulubesi = client.channels.cache.get(`749818223133851678`);
	let afrodityataklar = client.channels.cache.get(`754470132050427904`);

	//Artemis Kulübesi
	let artemiskulubesi = client.channels.cache.get(`749818078505992232`);
	let artemisyataklar = client.channels.cache.get(`754470395696119849`);

	//Hekate Kulübesi
	let hekatekulubesi = client.channels.cache.get(`754472157593206934`);
	let hekateyataklar = client.channels.cache.get(`754472195652321390`);

	//Dionysos Kulübesi
	let dionysoskulubesi = client.channels.cache.get(`754471925417508874`);
	let dionysosyataklar = client.channels.cache.get(`754471962981564566`);

	//Athena Kulübesi
	let athenakulubesi = client.channels.cache.get(`749818025955295264`);
	let athenayataklar = client.channels.cache.get(`754469769402646598`);

	//Ares Kulübesi
	let areskulubesi = client.channels.cache.get(`749817983332909086`);
	let aresyataklar = client.channels.cache.get(`754469416200175766`);

	//Demeter Kulübesi
	let demeterkulubesi = client.channels.cache.get(`749817951816908830`);
	let demeteryataklar = client.channels.cache.get(`754469030777061548`);

	//Persephone Kulübesi
	let persephonekulubesi = client.channels.cache.get(`756954838461448342`);
	let persephoneyataklar = client.channels.cache.get(`756954946737274980`);

	//Olimpos.
	let olimposasansor = client.channels.cache.get(`751062797655212130`);
	let giriskapisi = client.channels.cache.get(`751062986361274409`);
	let olimpossehri = client.channels.cache.get(`751062860083363990`);
	let tahtodasi = client.channels.cache.get(`751062826315153428`);
	let olimposdagi = client.channels.cache.get(`751062758023233547`);

	//Atlantis.
	let atlantisgiriskapisi = client.channels.cache.get(`751063091747356673`);
	let atlantissehri = client.channels.cache.get(`751063185997692959`);
	let poseidontahtodasi = client.channels.cache.get(`751063147296849931`);

	//Yeraltı Dünyası
	let blestdaglari = client.channels.cache.get(`751064055313203230`);
	let tartarus = client.channels.cache.get(`751064078231011430`);
	let hollywoodisareti = client.channels.cache.get(`751063621315985530`);
	let kayikci = client.channels.cache.get(`751063706149978242`);
	let styxnehri = client.channels.cache.get(`751063766384508959`);
	let yargikosku = client.channels.cache.get(`751063825998020608`);
	let cezaalanlari = client.channels.cache.get(`751063855794356285`);
	let cennet = client.channels.cache.get(`751063943056719973`);
	let asphoneltarlalari = client.channels.cache.get(`751064006810271784`);
	let lethenehri = client.channels.cache.get(`751064131544809483`);
	let hadessarayi = client.channels.cache.get(`751064153862570025`);
	let persephonebahcesi = client.channels.cache.get(`751064192999751761`);

	//Amerika
	let newyork = client.channels.cache.get(`751490371758063627`);
	let washington = client.channels.cache.get(`751490550108127392`);
	let lasvegas = client.channels.cache.get(`751490440934457364`);
	let losangelos = client.channels.cache.get(`751490523084357855`);

	//Diger Dunyalar
	let diablodagi = client.channels.cache.get(`751490631515504750`);
	let helendagi = client.channels.cache.get(`751490684900474952`);
	let pasifikokyanusu = client.channels.cache.get(`751490745558368457`);



	if (!message.content.startsWith(process.env.PREFIX) && message.author.id !== client.user.id) {

		if (message.channel.id == kampgirisi.id || message.channel.id == thaliaagaci.id || message.channel.id == kampalani ||
			message.channel.id == kampsiniri.id || message.channel.id == kampgolu.id || message.channel.id == buyukev.id ||
			message.channel.id == kampatesi.id || message.channel.id == yemeksalonu.id || message.channel.id == revir.id || message.channel.id == antremansahasi.id || 
			message.channel.id == zeuskulubesi.id ||
			message.channel.id == zeusyataklar.id || message.channel.id == poseidonkulubesi.id || message.channel.id == poseidonyataklar.id ||
			message.channel.id == hadeskulubesi.id || message.channel.id == hadesyataklar.id || message.channel.id == herakulubesi.id ||
			message.channel.id == herayataklar.id || message.channel.id == hephaestuskulubesi.id || message.channel.id == hephaestusyataklar.id ||
			message.channel.id == hermeskulubesi.id || message.channel.id == hermesyataklar.id || message.channel.id == apollokulubesi.id ||
			message.channel.id == apollonyataklar.id || message.channel.id == afroditkulubesi.id || message.channel.id == afrodityataklar.id ||
			message.channel.id == artemiskulubesi.id || message.channel.id == artemisyataklar.id || message.channel.id == hekatekulubesi.id ||
			message.channel.id == hekateyataklar.id || message.channel.id == dionysoskulubesi.id || message.channel.id == dionysosyataklar.id ||
			message.channel.id == athenakulubesi.id || message.channel.id == athenayataklar.id || message.channel.id == areskulubesi.id ||
			message.channel.id == aresyataklar.id || message.channel.id == demeterkulubesi.id || message.channel.id == demeteryataklar.id ||
			message.channel.id == persephonekulubesi.id || message.channel.id == persephoneyataklar.id || message.channel.id == olimposasansor.id ||
			message.channel.id == giriskapisi.id || message.channel.id == olimpossehri.id || message.channel.id == tahtodasi.id || message.channel.id == olimposdagi.id ||
			message.channel.id == atlantisgiriskapisi.id || message.channel.id == atlantissehri.id || message.channel.id == poseidontahtodasi.id ||
			message.channel.id == blestdaglari.id || message.channel.id == tartarus.id || message.channel.id == hollywoodisareti.id || message.channel.id == kayikci.id ||
			message.channel.id == styxnehri.id || message.channel.id == yargikosku.id || message.channel.id == cezaalanlari.id || message.channel.id == cennet.id || message.channel.id == asphoneltarlalari.id ||
			message.channel.id == lethenehri.id || message.channel.id == hadessarayi.id || message.channel.id == persephonebahcesi.id || message.channel.id == newyork.id ||
			message.channel.id == washington.id || message.channel.id == lasvegas.id || message.channel.id == losangelos.id || message.channel.id == diablodagi.id ||
			message.channel.id == helendagi.id || message.channel.id == pasifikokyanusu.id) {

			let messageUser = await Messages.findOne({
				userID: message.author.id
			});
			let channel;
			let args = message.content.slice().trim().split(/ +/);
			let number = args.length;
			if (!messageUser) {
				messageUser = new Messages({
					userID: message.author.id,
					messages: 0,
					name: message.author.username,
					lastChannel: message.channel,
					serverID: message.guild.id,
				});
				await messageUser.save().catch(e => console.log(e));

			}else{
				
				channel = messageUser.lastChannel;
			}
			let logChannel = client.channels.cache.get(`754459813253218324`);
			if (!logChannel) return message.reply("Kanal yok!");

			let user = await Messages.findOne({
				userID: message.author.id
			}, async (err, dUser) => {
				dUser.messages += number,
				dUser.lastChannel = message.channel,
				await dUser.save().catch(e => console.log(e));
			})
			let userChannel = message.channel.toString();
			console.log(userChannel);

			if(userChannel != channel && channel != null){
				logChannel.send(`${message.author}, ${channel} kanalından ${userChannel} kanalına geçti.`)
			}
			else if(userChannel === channel){
				logChannel.send(`${message.author}, ${channel} kanalında rp yapmaya devam ediyor.`)
			}else{
				logChannel.send(`${message.author}, ${userChannel} kanalında rp yapmaya başladı.`)
			}

			
		}
	}
	else {
		let args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
		let cmd = args.shift().toLowerCase();
		let command;

		if (client.commands.has(cmd)) {
			command = client.commands.get(cmd);
		}
		else if (client.aliases.has(cmd)) {
			command = client.commands.get(client.aliases.get(cmd));
		}


		try {
			command.run(client, message, args);
		} catch (e) {
			return;
		}
	}

});

client.on('messageDelete', message =>{
	if(!message.partial){
		let deletedlogChannel = client.channels.cache.get(`759773645823279124`);
		if(deletedlogChannel){
			const embed = new Discord.MessageEmbed()
			.setTitle('Silinmiş Mesaj')
			.setDescription(message.content)
			.setTimestamp()
			.setColor('#d6f797')
			.addField('Yazar', message.author)
			.addField('Silinen Kanal', message.channel)
			.setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
			deletedlogChannel.send(embed);
		}

	}
})

client.login(process.env.TOKEN);
