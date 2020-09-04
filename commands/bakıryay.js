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
            if(data.drachma < 25){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Bakır Yay")) return message.channel.send("Aldığın yay sana yetmedi mi? Kaybol gözümün önünden");
                message.member.roles.add("751059132106408016");
                data.drachma -= 25;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bakır yay satın aldın, şimdi bu yaylara ok alma vakti! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "bakıryay",
    aliases: []
}