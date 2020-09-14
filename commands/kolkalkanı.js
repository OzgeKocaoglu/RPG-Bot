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
            if(data.drachma < 500){
                return message.channel.send("Senin bu yüce kalkanı almaya gücün yok. Paran yok. Defol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Kol Kalkanı")) return message.channel.send("İki kol kalkanı ile ne yapacaksın? İki koluna mı takalacaksın? Komiksin fani... Çok komiksin.");
                message.member.roles.add("7751058292486438912");
                data.drachma -= 500;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bu kalkanı tanrıların demircisi dövdü derler. Yıllarca üzerinde çalışılmış ve oldukça dayanıklı bir kalkandır. Değerini bil. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "kolkalkanı",
    aliases: []
}