
module.exports = (client) => {

    const reactions = {
        lol: '774736149121204234',
        minecraft: '774735812545216522',
        amongus: '774735814470008832'
    }

    let reactionChannel = client.channels.cache.get('755416598851878982');
    client.on('message', async message => {
        if(reactionChannel){
            if(message.content.startsWith('**Reaksiyon Rol Alma**')){
                message.react(reactions.lol).then(() =>  message.react(reactions.minecraft)).then(() => message.react(reactions.amongus));
            }
        }
       
    })
}