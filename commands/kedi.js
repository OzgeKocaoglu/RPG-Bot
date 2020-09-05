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
            if(data.drachma < 20){
                return message.channel.send("Bir kedi sahiplenecek kadar dramin yok. Sanırım biraz drami fakirisin. Neyse kedi yerine afrodit melezlerine bak derim. Kedi gibiler diyorlar.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Kedi")) return message.channel.send("Zaten bir kedin var. İkincisini sahiplenemezsin. Sonra ilki ne der?");
                message.member.roles.add("751059982128119929");
                data.drachma -= 20;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bir kedi bacaklarının arasında geziniyor, mırlıyor. Başını sevdiğinde onun en yakın dostun olacağını fark ediyorsun. Tebrikler, bir kedi sahiplendin! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "kedi",
    aliases: []
}