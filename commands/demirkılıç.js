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
            if(data.drachma < 70){
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Demir Kılıç")) return message.channel.send("Talim yaptığın küçük şey bir demir kılıç. İkincisini istemek açgözlülük!");
                message.member.roles.add("751059973282201660");
                data.drachma -= 70;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hadi diğer melezlerle kılıçlarınızı kapıştırın bakalım. Dikkat et ama bu tahta kılıca benzemez! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "demirkılıç",
    aliases: []
}