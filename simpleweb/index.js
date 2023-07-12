import express from "express";

const app = express();

app.get("/",(req, res) => {
    res.send("Hello Dixit");
});

app.listen(8080, () => {
    console.log("This application is running on port 8080");
});