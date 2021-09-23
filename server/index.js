const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("client"));
app.use(express.static('client/assets'));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  })

//environmental variables
//env sensitive information not shared with github
const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
