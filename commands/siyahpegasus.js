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
            if(data.drachma < 15000){
                return message.channel.send("Siyah kanatlarını çırparak gökyüzünde atı görüyorsun. Sonra korkarak kaçıyor. Neden biliyor musun? Gelmesin diye kaçırıyorum. Çünkü yeterince dramin yok.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Siyah Pegasus")) return message.channel.send("İki siyah pegasus mu? Sen aklını kaçırmışsın!");
                message.member.roles.add("751059988440416280");
                data.drachma -= 15000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Siyah bir pegasusu sana verdim. 15000 drami karşılığında. Özür dilerim ama bu kadar drami veren herkese verirdim. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "siyahpegasus",
    aliases: []
}