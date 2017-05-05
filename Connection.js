var net = require('net');
var Promise = require('bluebird');

module.exports = {
  checkStatus: function (ports) {
    for (i = 0; i < ports.length; i++) {
      checkConnection('play.martycraft.net', ports[i], 5000).then(function () {
        console.log('check ' + ports[i]);
      }, function (err) {
        console.log('not check');
      })
    }

  }
}

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