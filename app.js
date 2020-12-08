const express = require('express');
const http = require('http')
const app = express()
const path = require("path");
const server = http.createServer(app)
const io = require('socket.io')(server);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("home")
})

io.on('connection', (socket) => {
    console.log("user joined")
    socket.on('chat-message', (msg) => {
      socket.broadcast.emit('chat-message', msg)
    });
});


const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log("listening on port " + port)
})