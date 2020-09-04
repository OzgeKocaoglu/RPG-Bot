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
            if(data.drachma < 200){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Stygian Kalkan")) return message.channel.send("Ölümsüz olmaya mı çalışıyorsun yarı fani? İki Stygian kalkanı seni belki korurdu ancak bir tanesini ancak benden alabilirsin. İkincisini veremem.");
                message.member.roles.add("751059977837346897");
                data.drachma -= 200;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Stygian kalkanına sahipsin. Artık en keskin kılıçlar bile eğer doğru kullanırsan yolunu bulamaz. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygiankalkan",
    aliases: []
}