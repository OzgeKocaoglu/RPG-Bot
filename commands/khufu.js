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
            if(data.drachma < 8000){
                return message.channel.send("Tatlı maymuncuğa- Ah pardon, o bir goril. Değil mi? Her neyse! Zaten sahip olamazsın. O kadar paran yok!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Khufu")) return message.channel.send("Bu nadir varlıktan iki tane yok. Sen nasıl satın almak istersin?");
                message.member.roles.add("751059986863620187");
                data.drachma -= 8000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Fani, bir basketbol sahasının yanından mı geçiyorsun? Bu gürültü? Basketbol topu kafana çarpıyor. Tebrikler artık evcil bir goril- Ah Khufu'n var. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "khufu",
    aliases: []
}