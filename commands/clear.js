
const Discord = require("discord.js");

module.exports.run = async (client, message) =>{

    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);
    if( message.member.hasPermission(["ADMINISTRATOR"])){  
      let deleteAmount;

      if(isNaN(args[0]) || parseInt(args[0]) <= 0 ) return message.reply('Sayı gir. Başka bir şey olmaz!');
      if(parseInt(args[0])>=100){
          return message.reply('Tek seferde yalnızca 100den az mesaj silebilirsin.');
      }else{
          deleteAmount = parseInt(args[0]);
      }
      message.channel.bulkDelete(deleteAmount+1, true);
      message.reply('**Silme işlemi başarılı.**');
    }
    else{
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }
        

};


exports.help = {
    name: 'clear',
    aliases: ['clear'],
    description: 'clear',

  }