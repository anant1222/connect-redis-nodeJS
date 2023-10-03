module.exports.client = null
module.exports.setRedisHelper = function (redisHandlerClient) {
    this.client = redisHandlerClient;
};

module.exports.updateData = async function(id, dataArr) {
this.client.hset(`key`, dataArr, (err, reply) => {
  if (err) {
    console.error('err);
  }
});
return true;
};

module.exports.setData = async function(key, data, setExpiry = true) {
try {
  if (!key || !data) {
    throw new Error('Missing method parameters');
  }
  const jsonData = JSON.stringify(data);
  await this.client.set(key, jsonData, (err, reply) => {
    console.log('Data set into cache: ', key, reply);
  });
  if (setExpiry) {
    this.client.expire(key, appConstants.cacheExpireTime);
  }
} catch (error) {
  throw (error.toString());
}
};

module.exports.getData = async function(key) {
try {
  if (!key) {
      return reject('Missing key to process function.');
  }
  const data = await this.client.get(key);
  return data;
} catch (err) {
  logger.error('error', err);
}
};
module.exports.deleteData = async (key) => {
return new Promise(async (resolve, reject) => {
  await this.client.del(key, (err, response) => {
    if (err) {
      return reject(err);
    }
    console.log(`Deleting KEY : ${key} RESPONSE: ${response}`);
    return resolve(response);
  });
});
};
