const mongoose = require("mongoose");
const Discord = require('discord.js');

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.hasPermission("ADMINISTRATOR")){
    var user = message.mentions.users.first();
    if(!user) return message.reply("Böyle bir kullanıcı yok.");
    var member;
        try{
            member = await message.guild.members.fetch(user);
        }catch{
            member = null;
        }
        if(!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");
        

    Data.findOne({
        userID: member.id
    }, (err, data) => {
        if (!data) {
           return message.reply("Bu kullanıcının bir banka hesabı yok. Olması için !bakiye yazması gerekmektedir.")
        }
        else{
           if(!args[1]) return message.reply('Miktar girmediniz. Ekleme yapamam.')
          if(isNaN(args[1])) return message.reply('Bu geçerli bir para birimi değil.')
          let number = parseInt(args[1])
           data.drachma += number;
           Drachma = data.drachma;
           data.save({_id: data.id, drachma: Drachma});
           return message.reply(`Başarılı bir şekilde ${member}'e ${args[1]} drami eklendi. Şimdiki bakiye: ${data.drachma}`);
        }
    })

}
else{
    return message.reply("Para ekleme yetkin yok.");
}
}


module.exports.help = {
    name: "maaşyatır",
    aliases: ["maaşyatır"]
}