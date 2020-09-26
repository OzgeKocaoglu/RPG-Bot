const mongoose = require("mongoose");
const Discord = require('discord.js');

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (bot, message, args) => {

   
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
            userID: message.author.id
        }, (err, data) => {
            if (!data) {
               return message.reply("Senin bir banka hesabın olmadığı için para aktarımı yapamazsın. Banka hesabı oluşturmak için !bakiye yazman yeterlidir.")
            }
            else{
                let senderData = data;
               if(!args[1]) return message.reply('Miktar girmediniz. Ekleme yapamam.')
              if(isNaN(args[1])) return message.reply('Bu geçerli bir para birimi değil.')
              let number = parseInt(args[1])
             
              if(senderData.drachma < number) return message.reply("Girdiğin miktar kadar banka hesabında drahmi yok. Aktarım iptal edildi.")
              else{
                Data.findOne({
                    userID: member.id
                }, (err, data) => {
                    if (!data) {
                       return message.reply("Göndermek istediğin kullanıcının bir banka hesabı yok. Oluşturmak için !bakiye yazması yeteli.")
                    }
                    else{
                       data.drachma += number;
                       Drachma = data.drachma;
                       data.save({_id: data.id, drachma: Drachma});
                       message.channel.send(`Başarılı bir şekilde ${member}'e ${args[1]} drami eklendi. ${member}'in şimdiki bakiyesi: ${data.drachma}`);
                    }
                })
                senderData.drachma -=number;
                Drachma = senderData.drachma;
                data.save({_id: senderData.id, drachma: Drachma});
                return message.channel.send(`\n Başarılı bir şekilde ${message.author}'den ${args[1]} drami gönderildi. ${message.author}'in şimdiki bakiyesi: ${data.drachma}`);
                
              }
              
            }
        })
        

    

}


module.exports.help = {
    name: "paraver",
    aliases: ["pv"]
}