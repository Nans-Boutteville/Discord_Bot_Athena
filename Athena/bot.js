
const Commando = require('discord.js-commando');
//création du bot client
const bot = new Commando.Client();

//On enregistre les types par défaults
bot.registry.registerDefaultTypes();

//on créer les différents groupes
bot.registry.registerGroups([
        ['random', 'Random'],
        ['simple', 'Simple'],
        ['admin', 'Admin']
    ]);

//on enregistre les groupes par défault
bot.registry.registerDefaultGroups();

//on signale que nos commandes sont dans le dossier commands
bot.registry.registerCommandsIn(__dirname + "/commands");

//on demande au bot de créer automatiquement les commandes par défault tel que !help et autre
bot.registry.registerDefaultCommands()

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

//login du bot
bot.login('NDI4ODY3MDU1MjY2MDM3NzYw.DZ5VeQ.rABucLU-kQBsd9yKR1tDNMWSx4M');