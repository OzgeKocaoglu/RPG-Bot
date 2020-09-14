
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(message.member.roles.cache.some(r => r.name === "Zeus Melezi") ||message.member.roles.cache.some(r => r.name === "Hades Melezi")
    || message.member.roles.cache.some(r=>r.name === "Hera Melezi") || message.member.roles.cache.some(r=>r.name === "Poseidon Melezi") || 
    message.member.roles.cache.some(r=>r.name === "Afrodit Melezi") || message.member.roles.cache.some(r=>r.name === "Apollon Melezi") ||
    message.member.roles.cache.some(r=>r.name === "Ares Melezi") || message.member.roles.cache.some(r=>r.name === "Artemis Melezi")
    ||
    message.member.roles.cache.some(r=>r.name === "Hermes Melezi") || message.member.roles.cache.some(r=>r.name === "Hephaestus Melezi")||
    message.member.roles.cache.some(r=>r.name === "Hekate Melezi") || message.member.roles.cache.some(r=>r.name === "Dionysos Melezi")||
    message.member.roles.cache.some(r=>r.name === "Athena Melezi") || message.member.roles.cache.some(r=>r.name === "Persephone Melezi")){
       return message.channel.send("Çoktan ebeveynini seçtin melez! Yalnızca bir tane tanrı ebeveynin olabilir. Yarı tanrı olmanın da sınırı var!");
    }
    else{
        var rand = Math.floor((Math.random() * 15) + 1);
        if (rand == 1) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#3d9cad')
                .setTitle('Zeus!')
                .setAuthor('Kampa hoşgeldin çaylak!')
                .setDescription('Tebrikler, tanrı ebeveynin Zeus!')
                .addFields(
                    { name: 'Tanrıların Tanrısı Zeus', value: 'Tanrıların ve İnsanların Babası" Yunan mitolojisinde en güçlü ve önemli tanrıdır.' },
                )
                .setImage('https://i.pinimg.com/originals/e4/91/49/e4914967323fcdf3bd490c7e32acbc5f.gif')
                .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749817661231202315");
            message.channel.send(exampleEmbed);
        }
        else if (rand == 2) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#965547')
            .setTitle('Hades!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Hades!')
            .addFields(
                { name: 'Ölülere hükmeden yeraltı tanrısı Hades', value: 'Yeraltı zenginliklerinin sahibidir, yerden çıkan değerli metaller onu bolluk çokluk ve servet tanrısı yapmıştır. Dilediğini zengin dilediğini fakir yapardı. Acımasız ve korkunç olsa da sözünden dönmez ve birçok tanrının aksine kaprisli bir tanrı değildir.' },
            )
            .setImage('https://i.pinimg.com/originals/c1/a7/d2/c1a7d276a9e9473233410655c9f42e4c.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749817481144565831");
            message.channel.send(exampleEmbed);
        }
        else if (rand == 3) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#c96c4d')
            .setTitle('Hera!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Hera!')
            .addFields(
                { name: 'Tanrıların Kraliçesi Hera!', value: ' Olympos tanrıları arasında kraliçe vasfına sahiptir ve Evlilik Kraliçesi olarak anılır. Eski inanca göre doğum sırasında kadınların ve evliliklerin koruyucusudur. Mitolojide en güçlü, en cesur ve Aphroditeden sonra en güzel tanrıça olarak nitelendirilir.' },
            )
            .setImage('https://64.media.tumblr.com/b9bd6fc6e86552c414f7c50f12f4206d/tumblr_odrkz264yl1ut8szno2_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818364226174987");
            message.channel.send(exampleEmbed);
        }
        else if (rand == 4) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#2da6a4')
            .setTitle('Poseidon!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler tanrı ebeveynin Poseidon!')
            .addFields(
                { name: 'Deniz Tanrısı Poseidon', value: 'Denizler, depremler ve atlar tanrısı. Kronos ile Rheianın oğlu. Zeus ve Hadesin kardeşi.' },)
            .setImage('https://i.pinimg.com/originals/c6/b8/b4/c6b8b46719bdf29a351a794042262981.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818324707442738");
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
            .setImage('https://64.media.tumblr.com/7c16931c76ea38698f56fa0b4591258e/tumblr_odrkz264yl1ut8szno6_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818583760109648");
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
            .setImage('https://64.media.tumblr.com/4e59ba9bb19e69169cb9e09d4713a5f5/tumblr_odsl4jBptp1ut8szno3_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818548032897155");
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
            .setImage('https://64.media.tumblr.com/35c7a0673e5b2af8a36a7a3c4ede60f7/tumblr_odsl4jBptp1ut8szno5_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818406718668923");
            message.channel.send(exampleEmbed);
        }
        else if (rand == 8) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#361c69')
            .setTitle('Artemis!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Artemis!')
            .addFields(
                { name: 'Ay Tanrıçası Artemis', value: 'Romadaki adı Diana, Zeus ile Leto’nun kızı. Phoebe olarak da bilinir. Apollonun ikiz kız kardeşi, vahşi doğa, avcılık,okçuluk ve ay tanrıçası. Aresin dostu ve en büyük Yunan tanrıçalarından biridir.' },)
            .setImage('https://i.pinimg.com/originals/b0/f7/44/b0f744d4c3624db3871c3e463ac8bebe.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818489702973451");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 9) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#3a612d')
            .setTitle('Demeter!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Demeter!')
            .addFields(
                { name: 'Bereket Tanrıçası Demeter', value: ' Yunan mitolojisinde tarımın, bereketin, mevsimlerin ve anne sevgisinin tanrıçasıdır. Homerosun destanlarında, güzel saçlı kraliçe ya da güzel örgülü Demeter diye geçer. İnsanlara toprağı ekip biçmesini öğreten bu tanrıçadır. Ekinleri, özellikle de buğdayı simgeler..' },)
            .setImage('https://64.media.tumblr.com/daec5637469c92b92e000e932060b311/tumblr_odsl4jBptp1ut8szno1_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("754791970232336565");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 10) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba6927')
            .setTitle('Hermes!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Hermes!')
            .addFields(
                { name: 'Haberci Tanrı Hermes', value: ' Yunancada "Hermes Trimegustus" (üç kere kutsanmış hermes) anlamına gelmektedir. Zeus ve Maianın oğludur. Zeusun habercisidir. Tanrıların en kurnazı sayılır, tanrıların en hızlısıdır. Bir de Caduceus adında büyülü bir altın değnek taşır. Gigantlar arasındaki karşıtı Hippolytosdur.' },)
            .setImage('https://i.pinimg.com/originals/22/06/d4/2206d4249c522f63702da26e780b6e15.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("754791970664087573");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 11) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#428c56')
            .setTitle('Athena')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Athena!')
            .addFields(
                { name: 'Zeka Tanrıçası Athena!', value: 'Athena, Yunan mitolojisinde zeka, sanat, strateji, ilham ve barış tanrıçasıdır. Roma mitolojisinde Minerva diye anılır. Babası Tanrıların başı Zeus, annesi ise Zeusun ilk karısı olan hikmet tanrıçası Metistir. ' },)
            .setImage('https://64.media.tumblr.com/cf88cb4ffc9b20186885600b79836a75/tumblr_odrkz264yl1ut8szno5_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("749818451698384897");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 12) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#732308')
            .setTitle('Hephaestus!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Hephaestus!')
            .addFields(
                { name: 'Demircilik Tanrısı Hephaestus', value: 'Hephaistos, Yunan mitolojisinde Zeus ile Heranın oğlu, ya da Heranın yalnız başına doğurduğu oğlu. Tanrılar ve kahramanlar için demircilik zanaatıyla uğraşarak silahlar ve zırhlar üreten ateşler tanrısı. Aşk ve güzellik tanrıçası Afroditin eşidir. ' },)
            .setImage('https://64.media.tumblr.com/88fc93d76ad99cad72a253cff7fefb41/tumblr_odsl4jBptp1ut8szno6_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("754791971570319430");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 13) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#edb19d')
            .setTitle('Hekate!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Hekate!')
            .addFields(
                { name: 'Ay Tanrıçası Hekate', value: 'Hekate, ay ve gece ile ilişkilendirilmiş bakire tanrıçadır. Türkiyede Lagina antik kenti, tanrıçanın başlıca kült merkezidir. Titan soylu Perses ve Asterianın kızıdır, Ay ve gecenin dışında ölüler,yeraltı ve büyücülük ile ilişkilendirilmiştir. Korkuyla karışık bir saygı uyandırır. ' },)
            .setImage('https://i.pinimg.com/originals/60/f7/ee/60f7ee2579ccda984c1021374eb845eb.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("754791969871495324");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 14) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#a82aa0')
            .setTitle('Dionysos!')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Dionysos!')
            .addFields(
                { name: 'Şarap Tanrısı Dionysos', value: ' Çallı şarap tanrısı. Şarabın sadece sarhoş ediciliğini değil, sosyal ve faydalı etkilerini de temsil eder. Medeniyetin destekçisi ve barış aşığıdır. ' },)
            .setImage('https://64.media.tumblr.com/2283690f710b4fd090054ef8abe47f92/tumblr_oeul0oqtEE1ut8szno3_500.gifv')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("755035123988299787");
            message.channel.send(exampleEmbed);
    
        }
        else if (rand == 15) {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#52104d')
            .setTitle('Persephone')
            .setAuthor('Kampa hoşgeldin çaylak!')
            .setDescription('Tebrikler, tanrı ebeveynin Persephone!')
            .addFields(
                { name: 'Yeraltı Kraliçesi Persephone', value: 'Persephone, Yunan mitolojisinde Zeus ile Demeterin kızıdır. Persephonenin asıl ismi Koredir. Hades Persephone ismini, Onu yeraltına kaçırdıktan sonra vermiştir. Kaçırılıp Persephone orada, Hadesin sunduğu nardan biraz yedikten sonra, ölüler ülkesinde bir şey yiyenlerin yeryüzüne çıkma hakları bulunmamaktadır kuralı nedeniyle, ölüler ülkesinde kalmak zorunda kalmıştır. ' },)
            .setImage('https://i.pinimg.com/originals/e6/7c/e9/e67ce962ea8e3dd110b788153b8bd50d.gif')
            .setFooter('Olympus RPG', 'https://i.hizliresim.com/esuGEM.gif');
            message.member.roles.add("755187435264278569");
            message.channel.send(exampleEmbed);
    
        }
    
    }
   
};

exports.help = {
    name: 'parent',
    aliases: ['parent', 'prnt'],
    description: 'parent komutu',

}