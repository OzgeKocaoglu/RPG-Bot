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
                return message.channel.send("Bu kılıç, tanrılar için bile tehlikelidir. Üstelik senin yeterince paran bile yok. Sana neden vereyim? Yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Riptide")) return message.channel.send("İki Riptide mı? Kafayı mı yedin?");
                message.member.roles.add("751058285565575248");
                data.drachma -= 1500;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Oldukça keskin bir kılıca sahip oldun fani. Bu kılıç yalnızca melezleri değil aynı zamanda ölümsüz tanrıları dahi dize getirebilir. Kullanırken dikkatli ol, Zeus'un gazabı her zaman üzerinde olsun. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "riptide",
    aliases: []
}