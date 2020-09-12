
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!")

        let argresult;
        let mChannel = client.channels.cache.get(`749844028648062986`)
        message.delete()
        if(mChannel){
            argresult = args.slice(1).join(" ")
            mChannel.send(argresult)
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