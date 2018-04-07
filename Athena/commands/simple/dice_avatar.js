const Commando = require('discord.js-commando');

//Commande permettant d'afficher l'avatar de la personne envoyant le message
class DiceAvatarCommand extends Commando.Command {
	//Constructor
	constructor(client) {

	    super(client, {
	        name: 'avatar',
	        group: 'simple',
	        memberName: 'avatar',
	        description: 'Display avatar of user'

	    });
	}

	async run(message, args){
		//Si on est pas en message privé
		if(message.guild !== null){
			message.delete();
		}
		// Send the user's avatar URL
   	 	message.reply(message.author.avatarURL);
	}


}

//import DiceAvatarCommand dans notre index, donc le bot pourra le reconnaitre
module.exports = DiceAvatarCommand;