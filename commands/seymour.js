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
            if(data.drachma < 5000){
                return message.channel.send("Zeus'un parmaklarından çıkan bu canavarı almak için 5000 dramin olmalıydı. Ama sende yok. Zaten 5000 dramiyi kim bulmuş ki?");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Seymour")) return message.channel.send("İki tane Seymour mu! İki mi! Sen aklını kaçırmışsın! Defol burdan!");
                message.member.roles.add("751059984812343317");
                data.drachma -= 5000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Bir Seymour kükreyerek kafeste sana teslim ediliyor. Ve teslim eden kapşonlu sweat giymiş olan adam koşarak kaçıyor. Hey dur! Parayı vermeyi unuttun! ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "seymour",
    aliases: []
}