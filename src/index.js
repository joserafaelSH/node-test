import { WebSocketServer } from "ws";
import express from "express";

const wss = new WebSocketServer({ port: 8080 });
// Creating connection using websocket
wss.on("connection", (ws) => {
  console.log("new client connected");
  // sending message to client
  ws.send("Welcome, you are connected!");
  //on message from client
  ws.on("message", (data) => {
    console.log(`Client has sent us: ${data}`);
    ws.send(`You have sent: ${data}`);
  });
  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    console.log("the client has connected");
  });
  // handling client connection error
  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});
console.log("The WebSocket server is running on port 8080");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("The HTTP server is running on port 3000");
});
