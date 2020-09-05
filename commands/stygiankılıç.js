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
                return message.channel.send("Yeterli dramin yok fani. Şimdi seni toz etmeden yok ol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Stygian Kılıç")) return message.channel.send("İkinci bir Stygian kılıç mı? Deli misin sen! Zeus'un kendisi bile benden ikinci Stygian kılıcını alamaz!");
                message.member.roles.add("751059977518579814");
                data.drachma -= 150;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`En keskin kılıcı aldın. Bunu akıllıca kullan. Aksi taktirde sonunun gazap tarlasında Hades'in işkenceleriyle bitmesini istemezsin. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "stygiankılıç",
    aliases: []
}