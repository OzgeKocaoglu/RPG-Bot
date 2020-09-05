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
            if(data.drachma < 250){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Stygian Mızrak")) return message.channel.send("Zaten bir Stygian Mızrağın var. İkincisini sana vermem.");
                message.member.roles.add("751059978718019675");
                data.drachma -= 250;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Ah cesur melez! En güçlü mızrağı seçtin demek! Stygian mızrağını satın aldın. Dikkatli kullan. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygianmızrak",
    aliases: []
}