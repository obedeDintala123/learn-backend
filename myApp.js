let express = require('express');
let dotenv = require('dotenv');
dotenv.config();
let app = express();

let absolutePath = __dirname + "/views/index.html"

//add middleware
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req, res) => {
    let message = "Hello json";

    if(process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
        res.json({message: message});
    } else {
        res.json({message: message});
    }
})

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})




























 module.exports = app;
