import express from "express";
import redis from "redis";

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set('visits', 0);

app.get("/",(req, res) => {
    client.get('visits', (error, visits) => {
        res.send("Number of visits " + visits);
        client.set('visits', parseInt(visits) + 1); 
    });
});

app.listen(8080, () => {
    console.log("This application is running on port 8080");
});