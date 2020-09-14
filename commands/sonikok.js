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
            if(data.drachma < 400){
                return message.channel.send("Bu sonik oklar için 400 dramin olmalıydı. Ama yok. Defol.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Sonik Okları")) return message.channel.send("İkinci ok setini sana vereceğim ama önce ilkini bitir.");
                message.member.roles.add("751058294218555393");
                data.drachma -= 400;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bu oklar çok rahatsız edici. Götür şunları gözümün önünden. Zeus aşkına dayanamıyorum bu sese! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "sonikok",
    aliases: []
}