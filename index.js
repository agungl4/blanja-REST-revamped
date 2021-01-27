require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const app = express();
const port = 8000
const http = require('http')
const socketio = require("socket.io")
const server = http.createServer(app)
const mainRouter = require('./src/routes/index')
const cors = require('cors')
const io = socketio(server).sockets
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const io = require("socket.io").listen(server);
// listen port
// app.listen(port, () => {
//     console.log(`server running in port ${port}`);
// })

app.use(express.static("public"));
// memperbolehkan access dari semua origin
app.use(cors());
// tambah logger
app.use(logger("dev"))

// body-parser untuk x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

// parser untuk raw json
app.use(express.json())

app.use('/', mainRouter)

// io.on("connection", socket => {
//     console.log("a user connected :D");
//     socket.on("chat message", msg => {
//         console.log(msg);
//         io.emit("chat message", msg);
//     });
// });

io.on("connection", (socket) => {
    const id = socket.handshake.query.user_id;
    console.log("a user connected ...",id, socket.id);
    socket.join(id);
    socket.on("chat message", (msg, id_recipient) => {
      console.log(msg.sender);
      console.log(id_recipient);
      console.log(id)
      console.log(msg)
      io.to(id_recipient).to(id).emit("chat message", msg);
    });
  });

server.listen(port, () => console.log("server running on port:" + port));

module.exports = app