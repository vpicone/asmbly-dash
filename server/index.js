import WebSocket, { WebSocketServer } from "ws";
import { nanoid } from "nanoid";

const PORT = process.env.PORT || 8090;

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", function connection(ws) {
  console.log(
    `New connection (${Array.from(wss.clients).length} clients total)`
  );
  ws.id = nanoid();
  ws.on("message", function incoming(message) {
    const { data } = JSON.parse(message);
    switch (data.action) {
      case "request":
        data.payload.requestId = ws.id;
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
      case "assist":
        wss.clients.forEach((client) => {
          if (
            client.id === data.payload.requestId &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
    }
  });
});

console.log(`WS server now listening on port ${PORT} 🚀`);
