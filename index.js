require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const app = express();
const port = 8000
const cors = require('cors')
const mainRouter = require('./src/routes/index')
const http = require('http')
const socketio = require("socket.io")
const server = http.createServer(app)
const io = socketio(server).sockets

global.io = io

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

// io.on("connection", (socket) => {
//   const id = socket.handshake.query.user_id;
//   console.log("a user connected ...", id, socket.id);
//   socket.join(id);
//   socket.on("chat message", (msg, id_recipient) => {
//     console.log(msg)
//     io.to(id_recipient).to(id).emit("chat message", msg);
//   });
// });

io.on('connection', (socket) => {
  const id = socket.handshake.query.user_id
  console.log("a user connected ...", id, socket.id)
  socket.join(id);
  socket.on('chat message', (msg, id_recipient) => {
    console.log(`sender ${msg.sender}`)
    console.log(`recipient ${id_recipient}`)
    console.log(`handshake id ${id}`)
    console.log(msg)
    io.to(id_recipient).to(id).emit("chat message", msg);
  })
  socket.on('fromBuyer', msgEvent => {
    socket.emit('fromBuyer', msgEvent);
  });
  socket.on('fromSeller', msgEvent => {
    socket.emit('fromSeller', msgEvent);
  })
})

server.listen(port, () => console.log("server running on port:" + port));

module.exports = app