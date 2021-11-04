import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8090 });

wss.on("connection", function connection(ws) {
  console.log(
    `New connection (${Array.from(wss.clients).length} clients total)`
  );
  ws.on("message", function incoming(messageString) {
    const message = JSON.parse(messageString);
    if (message.data.action === "request") {
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(message));
        }
      });
    }
  });
});

console.log(`WS server now listening on port 8090 🚀`);
