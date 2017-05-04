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
    let isAan = false;
    isReachable('google.com:80').then(reachable => {
      isAan = true;
      //=> true
    });
    if(isAan){
      message.channel.sendMessage('server online!');
    } else {
      message.channel.sendMessage('server offline!');
    }
  } else
    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);