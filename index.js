const Discord = require("discord.js");
const config = require("./package.json");
const connection = require("./Connection.js");
const bot = new Discord.Client();
const prefix = config.prefix;

var Names = ["bungeecord", "lobby", "skyblock", "skywars", "factions", "eggwars", "adventureescape", "arcade", "verstoppertje", "minetopia"];

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
    if (args == "") {
      message.channel.sendMessage('```md\nGeef een (correcte) servernaam mee die gecontroleerd moet worden!\nJe kan uit de volgende servers kiezen:\n[1.](BungeeCord)\n[2.](Lobby)\n[3.](Skyblock)\n[4.](Skywars)\n[5.](Factions)\n[6.](Eggwars)\n[7.](AdventureEscape)\n[8.](Arcade)\n[9.](Verstoppertje)\n[10.](Minetopia)\nBijvoorbeeld: &ping Skyblock\n```');
    } else {
      let lowargs = args[0].toLowerCase();
      if ((Names.indexOf(lowargs) == -1)) {
        message.channel.sendMessage('```md\nGeef een (correcte) servernaam mee die gecontroleerd moet worden!\nJe kan uit de volgende servers kiezen:\n[1.](BungeeCord)\n[2.](Lobby)\n[3.](Skyblock)\n[4.](Skywars)\n[5.](Factions)\n[6.](Eggwars)\n[7.](AdventureEscape)\n[8.](Arcade)\n[9.](Verstoppertje)\n[10.](Minetopia)\nBijvoorbeeld: &ping Skyblock\n```');
      } else {
        connection.checkStatus(message, lowargs);
      }
    }

  } else

    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);

