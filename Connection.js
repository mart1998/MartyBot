var net = require('net');
var Promise = require('bluebird');

var Names = ["bungeecord", "lobby", "skyblock", "skywars", "factions", "eggwars", "adventureescape", "arcade", "verstoppertje", "minetopia"];
var Ports = [25565, 25566, 25567, 25568, 25569, 25570, 25571, 25572, 25573, 25574];

module.exports = {
  checkStatus: function (message, args) {
    checkConnection('play.martycraft.net', Ports[Names.indexOf(args)]).then(function () {
      message.channel.sendMessage(":white_check_mark: De " + args + "-server is online!");
    }, function (err) {
      message.channel.sendMessage(":negative_squared_cross_mark: De " + args + "-server is offline!");
    });
  }
}

function checkConnection(host, port, timeout) {
  return new Promise(function (resolve, reject) {
    timeout = timeout || 1000;     // default of 10 seconds
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