const Commando = require('discord.js-commando');
const tabChannelPermission = ['administration','devbot']

//Commande permet d'arêter le bot
class DiceStopCommand extends Commando.Command {
	//Constructor
	constructor(client) {

	    super(client, {
	        name: 'stop',
	        group: 'simple',
	        memberName: 'stop',
	        description: 'Stop the bot'

	    });
	}

	async run(message, args){
    	var pass = false;
    	var channel = message.channel;
    	for(var i= 0; i < tabChannelPermission.length; i++)
      	{
          if(channel.name === tabChannelPermission[i]){
            var pass = true;
          }
      	}
      	if(!pass){
        	channel.send('Sorry you don\'t have access :sob: ');
      	}else{
      		//Si on est dans un des channels autorisé pour arêter le bot
      		channel.send('Ok you have the permission. I disconnect boss. :angel:');
            setTimeout(function () {
                process.exit();
            }, 1000);
      	}
	}


}

//import DiceStopCommand dans notre index, donc le bot pourra le reconnaitre
module.exports = DiceStopCommand;