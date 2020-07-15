const redis = require('redis');
const client = redis.createClient();

client.set("message", "hello world");

client.get('message', (err, res) => {
    console.log(res);
})
