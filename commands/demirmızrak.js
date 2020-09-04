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
            if(data.drachma < 120){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Demir Mızrak")) return message.channel.send("Demir Mızrağın zaten var fani, kendine gel!");
                message.member.roles.add("751059974343491585");
                data.drachma -= 120;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Athena melezi misin yoksa? Mızrak seçimi... Enterasan! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "demirmızrak",
    aliases: []
}