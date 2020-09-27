
const Discord = require("discord.js");

module.exports.run = async (client, message) =>{

    
    if( message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["ADMINISTRATOR"])){  
        message.delete();
        let logChannel = client.channels.cache.get(`751491106184757384`);
        if(logChannel){
            logChannel.send(`${message.channel}, ${message.author} tarafından denetlendi.`);
        }else{
            return message.channel.send("Log kanalı bulunamadı.")
        }
    }
    else{
        message.delete();
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'denetlendi',
    aliases: ['denetlendi'],
    description: 'denetlendi',

  }