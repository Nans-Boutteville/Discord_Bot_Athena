const Commando = require('discord.js-commando');

//Commande permettant de tirer aléatoirement un chiffre dans un zone données par défault 6
class DiceRollCommand extends Commando.Command {
	//Constructor
	constructor(client) {

	    super(client, {
	        name: 'roll',
	        group: 'random',
	        memberName: 'roll',
	        description: 'Loterie'

	    });
	}

	async run(message, args){
		//on récupère l'argument 1 qui doit être le nombre de face sur le dé.
		var NbFace = parseInt(args);
		console.log("test1");
		if(!isNaN(NbFace)){
			//Si on est pas en message privé
			if(message.guild !== null){
				message.delete();
			}
			var roll = Math.floor(Math.random() * NbFace) + 1;
			console.log(roll);
			message.reply("Vous êtes tombé sur un " + roll);
		}else{
			//Si on est pas en message privé
			if(message.guild !== null){
				message.delete();
			}
			var roll = Math.floor(Math.random() * 6) + 1;
			message.reply("Vous êtes tombé sur un " + roll+"\n Vous pouvez utiliser !roll nbFace pour choisir le nombre de face sur votre dés.");
		}
		
	}


}

//import DiceRollCommand dans notre index, donc le bot pourra le reconnaitre
module.exports = DiceRollCommand;