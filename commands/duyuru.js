
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!")
        message.delete()
        const text = args.join(" ")
        if(text.length < 1) return message.reply("Bir duyuru girer misin minik fani? Yoksa bunu tüm kampa duyuramam. Fısıltılar fısıltılar...");
        const colour = args.slice(2).join(" ");

        const annouceEmbed = new Discord.MessageEmbed()
        .setColor('#7c39c4')
        .setTitle('Duyuru')
        .setAuthor('Prometheus')
        .setDescription(`${text}`)
        .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');


        let annouceChannel = client.channels.cache.get(`749844028648062986`);
        if(!annouceChannel) return message.reply("Kanal yok!");
        annouceChannel.send(`@everyone`)
        annouceChannel.send(annouceEmbed)
    }
        

};


exports.help = {
    name: 'duyuru',
    aliases: ['duyuru'],
    description: 'duyuru komutu',

  }