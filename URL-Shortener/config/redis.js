var redis = require("redis");

var client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS,
});

client.on("connect", function () {
  var socket = client.stream;
  socket.setKeepAlive(true, 30 * 1000);
});

client.on("error", function (error) {
  console.error(error);
});

module.exports = client;
