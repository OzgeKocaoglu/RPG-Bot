const mongoose = require("mongoose");
const Discord = require('discord.js');

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (client, message, args) => {

    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
            if(data.drachma < 2000){
                return message.channel.send("Zeus'un kızı Thalia'nın kalkanı alman için 2000 dramin olmalıydı.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Thalia'nın Kalkanı")) return message.channel.send("İkinci ok setini sana vereceğim ama önce ilkini bitir.");
                message.member.roles.add("751058294986244166");
                data.drachma -= 2000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Şimdi bir ağaç olan Thalia'nın bir zamanlar güzelim bir melez olduğunu biliyor muydun? Al bakalım kalkanını. O kendini koruyamadı. Sen koruyabilecek misin kendini? ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "thaliakalkan",
    aliases: []
}