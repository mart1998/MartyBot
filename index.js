const Discord = require("discord.js");
const config = require("./package.json");
const isReachable = require('is-reachable');
const bot = new Discord.Client();
const prefix = config.prefix;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  console.log(message.author.username + ': ' + command);

  if (command === "ping") {
    message.channel.sendMessage('Pong!');
    let isAan = ["BungeeCord","Lobby 1","Skyblock","Skywars","Factions","Eggwars","Adventure Escape","Arcade","Verstoppertje","Minetopia"];
    isReachable('play.martycraft.net:25566').then(reachable => {
      isAan[0] = true;
      //=> true
    });
	isReachable('play.martycraft.net:25567').then(reachable => {
      isAan[1] = true;
      //=> true
    });
	isReachable('play.martycraft.net:25568').then(reachable => {
      isAan[2] = true;
      //=> true
    });
	isReachable('play.martycraft.net:25569').then(reachable => {
      isAan[3] = true;
      //=> true
    });
	isReachable('play.martycraft.net:25570').then(reachable => {
      isAan[4] = true;
      //=> true
    });
	isReachable('play.martycraft.net:25571').then(reachable => {
      isAan[5] = true;
      //=> true
    });
	for (i = 0; i < 6; i++) {
	if(isAan[i]){
      message.channel.sendMessage('server online!');
    } else {
      message.channel.sendMessage('server offline!');
    }
	}
  } else
    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);