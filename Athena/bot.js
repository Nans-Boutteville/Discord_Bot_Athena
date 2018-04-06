const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '+';
var tabChannelPermission = ['administration','devbot']
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var channel = msg.channel;
  //IF THE MESSAGE IS PING
  if (msg.content.startsWith(prefix + 'ping')) {
    //SEND THE USER'S PING
    msg.reply(' Your ping is `' + `${Date.now() - msg.createdTimestamp}` + ' ms`!');
  }else if(msg.content.startsWith(prefix + 'beer')){
  	channel.send('Thanks for this BEER :beer:');
  }else // If the message is "what is my avatar"
  if (msg.content.startsWith(prefix + 'avatar')) {
    // Send the user's avatar URL
    msg.reply(msg.author.avatarURL);
  }else if (msg.content.startsWith(prefix + 'helpMeGoshujinsama')){
    msg.author.sendMessage("Your message here.")
  }else if (msg.content.startsWith(prefix + 'stop')){
    console.log(channel.name);
    var pass = false;
    for(var i= 0; i < tabChannelPermission.length; i++)
      {
          if(channel.name === tabChannelPermission[i]){
            var pass = true;
            channel.send('Ok you have the permission. I disconnect boss.');
            setTimeout(function () {
                process.exit();
            }, 1000);
          }
      }
      if(!pass){
        channel.send('Sorry you don\'t have access :sob: ');
      }
  }else if (msg.content.startsWith(prefix)){
    msg.reply('Sorry no command for you. try with "+helpMeGoshujinsama"')
  }
});

client.login('NDI4ODY3MDU1MjY2MDM3NzYw.DZ5VeQ.rABucLU-kQBsd9yKR1tDNMWSx4M');