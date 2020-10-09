
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (message.member.roles.cache.some(r => r.name === "Rol Denetmeni") || message.member.hasPermission(["ADMINISTRATOR"])) {

        var user = message.mentions.users.first();
        if (!user) return message.reply("Böyle bir kullanıcı yok.");

        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch {
            member = null;
        }
        if (!member) return message.reply("Sunucuda böyle bir kullanıcı yok.");
        let reason = " ";
        for (var i = 1; i < args.length; i++) {
            reason += args[i] + "  ";
            console.log(args[i]);

        }
        if (!reason) return message.reply("Uyarı sebebi giriniz");
        message.delete();
        let logChannel = client.channels.cache.get(`751491106184757384`);
        if (logChannel) {
            const embed = new Discord.MessageEmbed()
                .setTitle('RP Uyarısı')
                .setDescription(`${member} kullanıcısına, ${message.author} tarafından rp uyarısı verildi.`)
                .setTimestamp()
                .setColor('#d6f797')
                .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif')
                .addField('Uyarı Sebebi', reason);
            logChannel.send(embed);
        } else {
            return message.channel.send("Log kanalı bulunamadı.")
        }



    } else {
        return message.channel.send("Buna iznin yok fani, kaybol gözümün önünden!");
    }


};


exports.help = {
    name: 'rpuyarı',
    aliases: ['rpuyarı'],
    description: 'rpuyarı',

}