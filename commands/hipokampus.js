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
                return message.channel.send("Atlantisin derinliklerinden gelen bu güzel deniz atını alamıyorsun küçük fani. Neden mi? Çünkü paran yok. Satın almak için 15000 dramin olmalı. Hadi kaybol!");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Hipokampus")) return message.channel.send("Poseidon'u delirtmeden yok ol. İki hipokampus isteği herkesi deli eder!");
                message.member.roles.add("755094897190502571");
                data.drachma -= 15000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Hey, poseidon melezi misin yoksa? Nasıl böyle denizler dize geldi? Bir anda bu şanlı deniz atı sana boyun eğmeye karar verdi. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "hipokampus",
    aliases: []
}