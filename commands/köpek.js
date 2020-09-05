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
            if(data.drachma < 30){
                return message.channel.send("Bir köpek sahiplenecek dramin yok. Bir tane yakalamayı dene. Ya da Hermes kulübesine göz atabilirsin?");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Köpek")) return message.channel.send("Zaten bir köpeğin var. İkincisini sahiplenemezsin.");
                message.member.roles.add("751059981721272350");
                data.drachma -= 30;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bak bak havlayarak bir köpek yavrusu yaklaşıyor. Kamptaki ilk köpeğini sahiplendin. Ona iyi bak. ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "köpek",
    aliases: []
}