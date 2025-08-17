// backend/server.js
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Temporary in-memory document (No MongoDB)
let documentData = "";

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Load document
  socket.emit("load-document", documentData);

  // Receive changes from a user and broadcast to others
  socket.on("send-changes", (delta) => {
    socket.broadcast.emit("receive-changes", delta);
    documentData = delta; // update memory data
  });

  // Save document (here just logs, no DB)
  socket.on("save-document", (data) => {
    documentData = data;
    console.log("Document saved:", data);
  });
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

server.listen(3001, () => console.log("Backend running on port 3001"));