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
            if(data.drachma < 75){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Stygian Yay")) return message.channel.send("İkinci bir yay alamazsın. Bir melez için bir tanesi bile çok!");
                message.member.roles.add("751059976520204359");
                data.drachma -= 75;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Stygian yay satın aldın. Epey zengin olmalısın. Baban Zeus mu yoksa? ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygianyay",
    aliases: []
}