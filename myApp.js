let express = require('express');
let app = express();

let absolutePath = __dirname + "/views/index.html"

//add middleware
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req, res) => {
    res.json({message: "Hello json"})
})

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})




























 module.exports = app;
