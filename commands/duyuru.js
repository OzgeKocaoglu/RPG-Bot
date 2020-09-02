
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

        let argresult;
        let mChannel = message.mentions.channel.first();
        if(!argresult) return message.channel.send('Bir duyuru gir');

        message.delete()
        if(mChannel){
            argresult = args.slice(1).join(" ")
            const botemded = new Discord.MessageEmbed()
            .setDescription('#duyurular' + argresult)
            .setTitle('Duyuru')
            .setColor("#b3b330")
            mChannel.send(botemded)
        }
        else{
            argresult = args.join(" ")
            message.channel.send(argresult)
        }

};


exports.help = {
    name: 'duyuru',
    aliases: ['duyuru'],
    description: 'duyuru komutu',

  }