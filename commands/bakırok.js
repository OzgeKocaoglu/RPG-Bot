const mongoose = require("mongoose");
//const config = require("../config.json");
const Discord = require('discord.js');

mongoose.connect(process.env.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Data = require("../models/data.js");

module.exports.run = async (client, message, args) => {


console.log(message.author.roles);


    Data.findOne({
        userID: message.author.id
    }, (err, data) => {
            if(data.drachma < 20){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Bakır Ok")) return message.channel.send("Bakır oklarını görüyorum. Yenisini alma.");
                message.member.roles.add("751059131082735648");
                data.drachma -= 20;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bakır okları satın aldın, şimdi kör etmeden atış yapabileceğini gösterme vakti! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "bakırok",
    aliases: ["okbakır"]
}