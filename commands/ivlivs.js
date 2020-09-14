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
            if(data.drachma < 1500){
                return message.channel.send("Bir altın için 1500 altın gerek. Sen de yok. Alamazsın.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Ivlivs")) return message.channel.send("İki Ivlivs mi? Ne yapacaksın ki?");
                message.member.roles.add("751059124447477880");
                data.drachma -= 1500;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`1500 altın verip tek bir altın aldın. Mantıklı mı sence? Sanmam. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "ivlivs",
    aliases: []
}