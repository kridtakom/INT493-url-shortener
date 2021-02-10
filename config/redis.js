var redis = require("redis");

var client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});
client.on("error", function (error) {
    console.error(error);
});

module.exports = client;