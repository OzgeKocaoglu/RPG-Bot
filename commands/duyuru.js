
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!")

        let argresult;
        const mChannel = client.channels.get("id", "749844028648062986")
        if(mChannel){
            argresult = args.slice(1).join(" ")
            const botemded = new Discord.MessageEmbed()
            .setDescription(argresult)
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