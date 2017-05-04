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
    let check = isReachable('google.com:80');
    if (check == true) {
      console.log('true');
    } else {
      console.log('false');
    }
  } else
    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);