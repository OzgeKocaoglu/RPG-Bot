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
            if(data.drachma < 1000){
                return message.channel.send("Bu eşsiz hançeri almak için 1000 drahmin olmalıydı. Sende yok. Kaybol.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Piper'ın Hançeri")) return message.channel.send("İki tane hançer alamazsın!");
                message.member.roles.add("751059124690747423");
                data.drachma -= 1000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`1000 drahmi karşılığında Piper'ın eşsiz hançerini satın aldın. Sakın birisini arkasından bıçaklayayım deme! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "piperhançer",
    aliases: []
}