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
            if(data.drachma < 300){
                return message.channel.send("Kampta tilki kolay bulunmaz. Bu yüzden pahalıdır. Sende tilki alacak drami yok. Ama bir tane yakalamayı deneyebilirsin.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Tilki")) return message.channel.send("Zaten bir tilkim var. Ne istiyorsun? Bir tilki ordusu mu? Thalia'nın ağacı öfkelenmeye başlıyor. Kaybol.");
                message.member.roles.add("751059983579217980");
                data.drachma -= 300;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`İngiltere'den mi geldin melez? Tilki aşkına anlam veremiyorum. Ama buyur bakalım. İlk tilkini sahiplendin. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "tilki",
    aliases: []
}