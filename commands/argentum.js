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
            if(data.drachma < 4000){
                return message.channel.send("Ah bu güzel gümüş köpekler. Ne de güzel bekçiler değil mi? Ne yazık ki sahip olamayacaksın. Neden biliyor musun? ÇÜNKÜ 4000 DRAMİN YOK!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Argentum")) return message.channel.send("Muhtemelen 2 Argentum bulabilirdin ama sana vermiyorum. Çünkü canım öyle istiyor.");
                message.member.roles.add("751059986133680139");
                data.drachma -= 4000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Karanlıkta bir çift kırmızı göz parlıyor. Korkuyor musun? Korkmalısın. Çünkü bunlar ölümsüz bekçiler. Hey dur! Sana yoldaş olmak istemişler. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "argentum",
    aliases: []
}