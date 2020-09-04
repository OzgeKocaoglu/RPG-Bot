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
            if(data.drachma < 80){
                return message.channel.send("Bu nadir güzellik boz atı almak için 80 drami gerekiyor. Sende de o yok.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Boz At")) return message.channel.send("Zaten bir boz atın var. İkincisini alman büyük bir hata olur.");
                message.member.roles.add("751059980848726088");
                data.drachma -= 80;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bir boz at sahiplendin. Artık savaşırken kullanabilirsin. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "atboz",
    aliases: []
}