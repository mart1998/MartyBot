const Discord = require("discord.js");
const config = require("./package.json");
const isReachable = require('is-reachable');
var net = require('net');
var Promise = require('bluebird');;
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
    checkConnection("play.martycraft.net", 25566, 5000).then(function () {
      message.channel.sendMessage("online!");
    }, function (err) {
      console.log(err);
    })
  } else
    if (command === 'avatar') {
      message.reply(message.author.avatarURL);
    }
});

bot.login(config.token);

function checkConnection(host, port, timeout) {
  return new Promise(function (resolve, reject) {
    timeout = timeout || 10000;     // default of 10 seconds
    var timer = setTimeout(function () {
      reject("timeout");
      socket.end();
    }, timeout);
    var socket = net.createConnection(port, host, function () {
      clearTimeout(timer);
      resolve();
      socket.end();
    });
    socket.on('error', function (err) {
      clearTimeout(timer);
      reject(err);
    });
  });
}

