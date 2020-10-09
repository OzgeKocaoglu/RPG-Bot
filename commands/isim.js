const mongoose = require("mongoose");
const Discord = require("discord.js");
mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const Data = require("../models/data.js");

module.exports.run = async (client, message, args) =>{

    if(message.member.roles.cache.some(r => r.name === "Kamp Kılavuzu") || message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["MANAGE_NICKNAMES", "ADMINISTRATOR"])){

        var user = message.mentions.users.first();
        if(!user) return message.reply({embed: {color: "RED", description: "Böyle bir kullanıcı yok."}});

        args.shift();
        let nickname = args.join(" ");
        if(!nickname) return message.reply({embed: {color: "RED", description: "Bir kullanıcı adı girmeniz gerek!"}});

        let member = message.guild.members.cache.get(user.id);
        try{
            member = await message.guild.members.fetch(user);
        }catch{
            member = null;
        }
        if(member.hasPermission(["ADMINISTRATOR"])) return message.reply({embed: {color: "RED", description: "İsmini değiştirmeye çalıştığın kişi bir admin. Bunu sen yapamazsın."}})
        Data.findOne({
            userID: member.id
        }, (err, data) => {
                if(data.drachma < 50){
                    return message.channel.send({embed: {color: "RED", description: "Kullanıcının isim değiştirecek kadar parası yok. Minimum elli drahmisi olmalı."}});
                }
                else{
                    data.drachma -= 50;
                    Drachma = data.drachma;
                    data.save({_id: data.id, drachma: Drachma});
                    member.setNickname(nickname);
                    return message.channel.send({embed: {color: "GREEN", description: `Başarılı bir şekilde **${user}**ın kullanıcı adı **${nickname}** olarak değiştirildi. İsim değişimi için elli drahmi harcandı! **${data.drachma}** dramisi kaldı.`}});
    
                }
        })
            
      
    }
    else{
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'isim',
    aliases: ['isim'],
    description: 'isim',

  }