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
            if(data.drachma < 400){
                return message.channel.send("Seni taşa çevirmeden önce kaybol. Bunu alacak 400 dramin yok!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Hermes'in Vitaminleri")) return message.channel.send("İkinci vitamin kutunu mu almaya geldin? Daha neler!");
                message.member.roles.add("751058277475024989");
                data.drachma -= 400;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hermes'in vitaminleri artık senin! Şimdi inimden yok ol! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "hermesinvitaminleri",
    aliases: []
}