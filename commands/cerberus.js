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
            if(data.drachma < 10000){
                return message.channel.send("Yeraltı dünyasının eşsiz varlığı, Hades'in bekçisi, güzeller güzeli üç başlı köpek için 10000 dramin olmalıydı. Sen de yok. YOK! DEFOL!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Cerberus")) return message.channel.send("Hades'te bile bir tane varken sen iki Cerberus mu istiyorsun! BU NE HADSİZLİK!");
                message.member.roles.add("751059985240293389");
                data.drachma -= 10000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Cehennemin kapıları aralanıyor. Yer yarılıyor ve yeraltı dünyasından bir canavar kükreyerek sıyrılıyor ateşlerin içinden. Bu yeraltı tanrısının üç başlı köpeğinden başka bir şey değil. Zapt edilmesi zor, tanrısına itaat eden. Almak istediğinden hala emin değilsen, onu hemen def et! Çabuk ol! Ah... Aptal fani! Artık çok geç. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "cerberus",
    aliases: []
}