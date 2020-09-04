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
            if(data.drachma < 300){
                return message.channel.send("Seni taşa çevirmeden önce kaybol. Bunu alacak 300 dramin yok!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Kanatlı Ayakkabılar")) return message.channel.send("Spor ayakkabılarına kanat mı taktırmak istedin? Eh, ikinci kanatları burada bulamazsın. İlki ile yetin!");
                message.member.roles.add("751058284030590977");
                data.drachma -= 300;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hadi bakalım, al bu ayakkabıları... Dikkatli ol! Düşeceksin! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "kanatlıayakkabılar",
    aliases: []
}