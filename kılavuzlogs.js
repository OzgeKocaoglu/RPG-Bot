
const Discord = require("discord.js");

module.exports = (client) => {
    client.on('message', (message) =>{
        const {content, member} = message

    if(message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])){
        const channel = client.channels.cache.get(`749844028648062986`)
        if(message.content.includes("!kayıt")){
            console.log("Kayıt yapıyor");
        }
        else{
            console.log("Bu bir kayıt komutu değil");
            return;
        }
        channel.send(``)
        }
        else{
            message.reply("Senin yetkin yok.");
        }
    })


}

