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
            if(data.drachma < 500){
                return message.channel.send("Seni taşa çevirmeden önce kaybol. Bunu alacak 500 dramin yok!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Görünmezlik Şapkası")) return message.channel.send("İki defa görünmez olamazsın! Birinci şapkayı almışsın işte!");
                message.member.roles.add("751058279505068082");
                data.drachma -= 500;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Görünmezlik şapkasına artık sahipsin! Bu bir Yankee şapkası, aman diyim yanlış yerlerde takma! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "görünmezlikşapkası",
    aliases: []
}