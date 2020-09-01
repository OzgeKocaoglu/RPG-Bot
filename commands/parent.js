module.exports.run = async (client, message, args) =>{
	
        var rand = Math.floor((Math.random() * 8) + 1); 
        if(rand == 1){
            message.channel.send('Zeus!');
        }
        else if(rand == 2){
            message.channel.send('Hades!');
        }
        else if(rand == 3){
            message.channel.send('Hera!');
        }
        else if(rand == 4){
            message.channel.send('Poseidon!');
        }
        else if(rand == 5){
            message.channel.send('Afrodit!');
        }
        else if(rand == 6){
            message.channel.send('Apollon!');
        }
        else if(rand == 7){
            message.channel.send('Ares');
        }
        else if(rand == 8){
            message.channel.send('Artemis');

        } 
};

exports.help = {
    name: 'duyuru',
    aliases: ['icon', 'pfp'],
    description: 'duyuru komutu',

  }