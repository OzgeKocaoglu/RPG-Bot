
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    var rand = Math.floor((Math.random() * 8) + 1);
    if (rand == 1) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#3d9cad')
            .setTitle('Zeus!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Zeus!')
            .addFields(
                { name: 'Tanrıların Tanrısı Zeus', value: 'Tanrıların ve İnsanların Babası" Yunan mitolojisinde en güçlü ve önemli tanrıdır.' },
            )
            .setImage('https://64.media.tumblr.com/467dd93088232193bf4643132f15d84f/tumblr_ptxhcuIoAu1unzgvxo1_500.gifv')
            .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 2) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#965547')
        .setTitle('Hades!')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Hades!')
        .addFields(
            { name: 'Ölülere hükmeden yeraltı tanırı Hades', value: 'Yeraltı zenginliklerinin sahibidir, yerden çıkan değerli metaller onu bolluk çokluk ve servet tanrısı yapmıştır. Dilediğini zengin dilediğini fakir yapardı. Acımasız ve korkunç olsa da sözünden dönmez ve birçok tanrının aksine kaprisli bir tanrı değildir.' },
        )
        .setImage('https://68.media.tumblr.com/a0c112980a45adee2a6ba961671bddd6/tumblr_nwmzt5cP7K1txd6p7o1_400.gif')
        .setFooter('Olympus RPG');
        message.channel.send(exampleEmbed);
    }
    else if (rand == 3) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#c96c4d')
        .setTitle('Hera')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Hera!')
        .addFields(
            { name: 'Tanrıların Kraliçesi Hera', value: ' Olympos tanrıları arasında kraliçe vasfına sahiptir ve Evlilik Kraliçesi olarak anılır. Eski inanca göre doğum sırasında kadınların ve evliliklerin koruyucusudur. Mitolojide en güçlü, en cesur ve Aphroditeden sonra en güzel tanrıça olarak nitelendirilir.' },
        )
        .setImage('https://64.media.tumblr.com/0859665666edde209c93dedcc0cdab69/tumblr_ptxhcuIoAu1unzgvxo2_r1_500.gifv')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 4) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#2da6a4')
        .setTitle('Poseidon')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler tanrı ebeveynin Poseidon!')
        .addFields(
            { name: 'Deniz Tanrısı Poseidon', value: 'Denizler, depremler ve atlar tanrısı. Kronos ile Rheianın oğlu. Zeus ve Hadesin kardeşi.' },)
        .setImage('https://64.media.tumblr.com/14dc5e722e9aedc415f613b237b1783d/tumblr_ptxhcuIoAu1unzgvxo3_r1_500.gifv')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 5) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#c765b2')
        .setTitle('Afrodit!')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Afrodit!')
        .addFields(
            { name: 'Aşk ve Güzellik Tanrıçası Afrodit', value: ' Yunan mitolojisinde aşk ve güzellik tanrıçası. Roma mitolojisindeki ismi Venüs, Etrüsk mitolojisindeki ismi Turandır. Gigantlar arasındaki karşıtı Periboiadır.' },)
        .setImage('https://i.hizliresim.com/YilZOC.png')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 6) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#eded21')
        .setTitle('Apollon')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Apollon!')
        .addFields(
            { name: 'Güneş Tanrısı Apollon', value: 'Mitolojide müziğin, sanatların, Güneşin, ateşin ve şiirin tanrısı, kehanet yapan, bilici tanrıdır. Aynı zamanda kâhinlik yeteneğini diğer insanlara da transfer edebilir.' },)
        .setImage('https://64.media.tumblr.com/13a0fdd9b16bc34e322d810ff029bd51/tumblr_ptxhcuIoAu1unzgvxo7_r1_500.gifv')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 7) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#b30904')
        .setTitle('Ares')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Ares!')
        .addFields(
            { name: 'Savaş Tanrısı Ares', value: ' Ares, Savaş Tanrısıdır. Zeus ve Heranın oğlu ve On İki Olimposludan biridir. Romada Mars olarak da bilinir. Barış tanrıçası olan Athenanın zıttıdır.' },)
        .setImage('https://64.media.tumblr.com/2545dda43ac1d48846cf5e6fa2ea20a4/tumblr_ptxhcuIoAu1unzgvxo5_r1_500.gifv')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);
    }
    else if (rand == 8) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#361c69')
        .setTitle('Artemis')
        .setAuthor('Kampa hoşgeldin çaylak!')
        .setDescription('Tebrikler, tanrı ebeveynin Artemis!')
        .addFields(
            { name: 'Ay Tanrıçası Artemis', value: 'Romadaki adı Diana, Zeus ile Leto’nun kızı. Phoebe olarak da bilinir. Apollonun ikiz kız kardeşi, vahşi doğa, avcılık,okçuluk ve ay tanrıçası. Aresin dostu ve en büyük Yunan tanrıçalarından biridir.' },)
        .setImage('https://64.media.tumblr.com/3743a214e49a71f5963820b6209ffd8d/tumblr_ptxhcuIoAu1unzgvxo8_r1_500.gifv')
        .setFooter('Olympus RPG');

        message.channel.send(exampleEmbed);

    }
};

exports.help = {
    name: 'parent',
    aliases: ['parent', 'prnt'],
    description: 'parent komutu',

}