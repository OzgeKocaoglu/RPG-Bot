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
            if(data.drachma < 100){
                return message.channel.send("Bir yılan sahiplenecek kadar dramin yok. Bunun için 100 draminiz olması gerekiyor.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Yılan")) return message.channel.send("Medusa mı olmayı hedefliyorsun? Yılan başlılık yalnızca ona yakışır. Birden fazla yılan alamazsın! Zaten bir yılanın var.");
                message.member.roles.add("751059982983757894");
                data.drachma -= 100;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Ormanda gezinirken bir yılanın yuvasını eşelememeye karar veriyorsun. Yılan zamanla sana alışıyor. Tebrikler artık bir yılanın var ancak ne kadar evcil tartışılır. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "yılan",
    aliases: []
}