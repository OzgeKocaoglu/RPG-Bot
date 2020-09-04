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
            if(data.drachma < 20){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Tahta Kılıç")) return message.channel.send("Talim yaptığın küçük şey, bir tahta kılıç. Kendini ve diğerlerini yaralamaman için şimdilik bunu veriyoruz. Yenisini isteme!");
                message.member.roles.add("751059128801296444");
                data.drachma -= 20;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hadi diğer melezlerle kılıçlarınızı kapıştırın bakalım. Nasıl olsa birbirinizi tahta kılıçla yaralayacak değilsiniz! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "satın-al-tahta-kılıç",
    aliases: ["tahtakılıç", "satın al"]
}