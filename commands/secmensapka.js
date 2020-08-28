module.exports = {
	name: 'secmensapka',
	description: 'Seçmen şapka komutu!',
	execute(message, args) {
        var rand = Math.floor((Math.random() * 4) + 1);
        if(rand == 1){
            message.channel.send('Slytherin!');
        }
        else if(rand == 2){
            message.channel.send('Hufflepuff!');
        }
        else if(rand == 3){
            message.channel.send('Gryffindor!');
        }
        else if(rand == 4){
            message.channel.send('Ravenclaw');
        }
	},
};