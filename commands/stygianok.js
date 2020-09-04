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
                if(message.member.roles.cache.some(r => r.name === "Stygian Ok")) return message.channel.send("Gözlerinde hırs görüyorum. İki Stygian ok mu? Dalga mı geçiyorsun?");
                message.member.roles.add("751059976327397477");
                data.drachma -= 70;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Dikkatli ol. Stygian en keskin oklara sahiptir. Bir tanrıyı bile yaralayabilir ancak öldürmez. Stygian okları satın aldın. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygianok",
    aliases: []
}