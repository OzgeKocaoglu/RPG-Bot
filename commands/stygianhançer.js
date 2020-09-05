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
            if(data.drachma < 350){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Stygian Hançer")) return message.channel.send("Bir Stygian Hançeri çok öldürücü olabilir. Sende bir tane var. İkincisi mi? Alamazsın.");
                message.member.roles.add("751059979598954566");
                data.drachma -= 350;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Stygian Hançerini satın aldın. Bu hançer en güçlü suikastçilerin silahıdır. Bir Hermes melezi misin? Yoksa Hades mi? Sinsilik seziyorum. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygianhançer",
    aliases: []
}