const mongoose = require("mongoose");
const config = require("../config.json");
const Discord = require('discord.js');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (client, message, args) => {


console.log(message.author.roles);


    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
            if(data.drachma < 100){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Demir Kalkan")) return message.channel.send("Elindeki demir şey kalkan değil mi? Yenisini alamazsın.");
                message.member.roles.add("751059974138101760");
                data.drachma -= 100;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Demir kalkan satın aldın. Savunma yapmayı da öğrenme vakti! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "demirkalkan",
    aliases: []
}