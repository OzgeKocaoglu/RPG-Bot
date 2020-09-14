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
                return message.channel.send("Ah pegasus pegasus... Herkes ister ama herkes sahip olamaz bu eşsiz atlara. Ben satarım ama parası olana... Sende 10000 drami olmadığına göre. Altınları bulunca yeniden dene?");
            }
            else{
                if(message.member.roles.cache.some(r => r.name === "Pegasus")) return message.channel.send("İki pegasusu ne yapacaksın? Üst üste at mı süreceksin? Ah- Ne terbiyesizce!");
                message.member.roles.add("751059987954008064");
                data.drachma -= 10000;
                Drachma = data.drachma;
                data.save({_id: data.id, drachma: Drachma});
                return message.channel.send(`Sıradan attan daha ötesini, kanatlarını çırparak gelen bir pegasusu elde ediyorsun fani, tanrı bile olsan benden daha yaşlı olamazsın. Emin ol... Ben çok ama çok yaşlıyım. Her neyse, ${data.drachma} dramin kaldı.`);

            }
    })


}


module.exports.help = {
    name: "pegasus",
    aliases: []
}