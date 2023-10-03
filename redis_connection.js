const redisConfig = require('../config/redis.js');
let clients = {
    handler: redisConfig["gameClient"]()
};

let cacheHelperClients = {
    handler: redisConfig["client"]()
};

clients.handler.connect(); // Handler Redis will be used to run Redis commands
redisHandler.setRedisHandler(clients.handler);
