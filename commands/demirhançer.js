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
            if(data.drachma < 150){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Demir Hançer")) return message.channel.send("İki demir hançer ile ne yapacaksın? Kampta katliam mı? Kaybol.");
                message.member.roles.add("751059974968311880");
                data.drachma -= 150;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Demek keskin bir hançer aldın. Umarım birisinin sırtında bulmayız. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "demirhançer",
    aliases: []
}