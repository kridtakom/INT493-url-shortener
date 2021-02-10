var redis = require("redis");

var client = redis.createClient({
    host: "104.215.186.219",
    port: 6379
});
client.on("error", function (error) {
    console.error(error);
});

module.exports = client;