
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])){

        var user = message.mentions.users.first();
        if(!user) return message.reply("Böyle bir kullanıcı yok.");

        var member;
        try{
            member = await message.guild.members.fetch(user);
        }catch{
            member = null;
        }

        if(!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");
        if(!member.roles.cache.some(r=>r.name === "✔")){
            member.roles.add("755189227272142859")
            let logChannel = client.channels.cache.get(`751491106184757384`);
            if(logChannel){
            logChannel.send(`${member} kullanıcısının karakter tanıtımı, ${message.author} tarafından onaylandı.`);
            }else{
            return message.channel.send("Log kanalı bulunamadı.")
            }
            return message.reply("Karakter tanıtımı onaylandı. Artık kullanıcı rp yapabilir.");
            
        }else{
            return message.reply("Bu kullanıcının kaydı zaten yapılmış");
        }

      
    }
    else{
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'onay',
    aliases: ['onay'],
    description: 'onay',

  }