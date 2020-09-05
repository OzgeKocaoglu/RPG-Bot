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
            if(data.drachma < 150){
                return message.channel.send("Bu güzeller güzeli beyaz atı almak için 150 drami gerekiyor. Sende de o yok.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Beyaz At")) return message.channel.send("Zaten bir beyaz atın var. İkincisini alman büyük bir hata olur.");
                message.member.roles.add("751059993062801479");
                data.drachma -= 150;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bir beyaz at sahiplendin. Artık savaşırken kullanabilirsin. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "atbeyaz",
    aliases: []
}