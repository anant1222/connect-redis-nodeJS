const redis = require('redis');

module.exports = {

    client: function () {
        const nodeEnv = process.env.NODE_ENV || "local";
        console.log('Connecting with Redis ::::: ');
        var redisClient = redis.createClient(this[nodeEnv].affiliateConfig);

        redisClient.on('connect', () => {
            console.log('Redis server connected: ', nodeEnv);
        });

        return redisClient;
    }
}
