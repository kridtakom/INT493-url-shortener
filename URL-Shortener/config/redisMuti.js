var redis = require("redis");

var clientMuti = redis.createClient({
  host: process.env.REDIS_HOST2,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
});

clientMuti.on("connect", function () {
  var socket = clientMuti.stream;
  socket.setKeepAlive(true, 30 * 1000);
});

clientMuti.on("error", function (error) {
  console.error(error);
});

module.exports = clientMuti;
