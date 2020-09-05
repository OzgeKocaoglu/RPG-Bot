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
            if(data.drachma < 45){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Bakır Mızrak")) return message.channel.send("Bakır Mızrağın zaten var fani, kendine gel!");
                message.member.roles.add("751059134153097259");
                data.drachma -= 45;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Athena melezi misin yoksa? Mızrak seçimi... Enterasan! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "bakırmızrak",
    aliases: ["bm"]
}