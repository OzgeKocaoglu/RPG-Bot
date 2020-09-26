
const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.member.roles.cache.some(r => r.name === "Kamp Kılavuzu") || message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])){

        var user = message.mentions.users.first();
        if(!user) return message.reply("Böyle bir kullanıcı yok.");

        var member;
        try{
            member = await message.guild.members.fetch(user);
        }catch{
            member = null;
        }
        let nickname = args[1];
        if(!nickname) return message.reply("Kayıt için bir kullanıcı adı giriniz.");
        let registerChannel = client.channels.cache.get(`755320986508984330`);
        if(!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");
        if(!member.roles.cache.some(r=>r.name === "Yarı Tanrı")){
            member.roles.add("754300516770775143")
            member.roles.add("751059991833608294")
            member.roles.remove("750665374474960929");
            member.setNickname(`${nickname}`); 
            registerChannel.send(`${message.author} başarılı bir şekilde ${user}'i kaydetti.`);
            return message.reply("Kayıt başarıyla tamamlandı.");
            
        }else{
            return message.reply("Bu kullanıcının kaydı zaten yapılmış");
        }

      
    }
    else{
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'kayıt',
    aliases: ['kayıt'],
    description: 'kayıt',

  }