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
            if(data.drachma < 1500){
                return message.channel.send("Sakın yeraltı dünyasına gideyim deme. Neden biliyor musun? Çünkü kaçamazsın. Çünkü sana bu incileri vermiyorum. Çünkü fakirsin.");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Persephone'nin İncileri")) return message.channel.send("İki inci almana müsaade ederdim ama canım istemedi. Neden sor bakalım. Belki yanıt veririm.");
                message.member.roles.add("751059989153448036");
                data.drachma -= 1500;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hades'in sarayından seni kurtarmaya yetecek kadar inci satın aldın. Persephone'den umarım çalmadın. Bahar tanrıçasının pek de bahar getirmeye dayalı prensipleri olduğunu sanmıyorum. Yani... Bu konuda. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "persephoneincileri",
    aliases: []
}