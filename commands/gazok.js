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
            if(data.drachma < 300){
                return message.channel.send("Okları alsaydın ne olacak ki? Nasılsa atış yapamıyorsun. Dramin yeterince olmadığı için sana da vermiyorum. Bunun için 300 dramin olmalı.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Gaz Okları")) return message.channel.send("İkinci ok setini sana vereceğim ama önce ilkini bitir.");
                message.member.roles.add("751058293409185833");
                data.drachma -= 300;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Gazlı okları satın aldın. Sakın diyeyim bir sentore atayım deme. Yersin toynakları! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "gazok",
    aliases: []
}