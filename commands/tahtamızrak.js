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
            if(data.drachma < 15){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Tahta Mızrak")) return message.channel.send("Mızrak alacak kadar yüreğin varmış, yenisini isteme!");
                message.member.roles.add("751059130617430047");
                data.drachma -= 15;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Athena melezi misin yoksa? Mızrak seçimi... Enterasan! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "tahtamızrak",
    aliases: []
}