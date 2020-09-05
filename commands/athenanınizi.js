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
            if(data.drachma < 1000){
                return message.channel.send("Seni taşa çevirmeden önce kaybol. Bunu alacak 1000 dramin yok!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Athena'nın İzi")) return message.channel.send("Ah Athena Melezi, sen yok musun? İkinci izi annenden iste! Bende yok!");
                message.member.roles.add("751058281258287144");
                data.drachma -= 1000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Athena'nın izi parmaklarının üzerinde belirdi. Tebrikler! Athena'nın seçilmiş çocuğu sensin! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "athenanınizi",
    aliases: []
}