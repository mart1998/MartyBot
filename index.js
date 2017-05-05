const Discord = require("discord.js");
const config = require("./package.json");
const connection = require("./Connection.js");
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
    //message.channel.sendMessage('Pong!');
    let Names = ["BungeeCord", "Lobby 1", "Skyblock", "Skywars", "Factions", "Eggwars", "Adventure Escape", "Arcade", "Verstoppertje", "Minetopia"];
    let Ports = [25565, 25566, 25567, 25568, 25569, 25570, 25571, 25572, 25573, 25574, 25575, 25576, 25577, 25578, 25579, 25580, 25581, 25582, 25583, 25584];
    connection.checkStatus(Ports);
  } else
    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);

