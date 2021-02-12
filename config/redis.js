var redis = require("redis");

var client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
});
client.on("error", function (error) {
    console.error(error);
});

module.exports = client;