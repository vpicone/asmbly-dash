import WebSocket, { WebSocketServer } from "ws";
import { nanoid } from "nanoid";

const PORT = process.env.PORT || 8080;

const wss = new WebSocketServer({ port: PORT, path: "/ws/" });

wss.on("connection", function connection(ws) {
  console.log(
    `New connection (${Array.from(wss.clients).length} clients total)`
  );
  ws.id = nanoid();
  ws.send(
    JSON.stringify({
      data: {
        action: "connection",
        uid: ws.id,
      },
    })
  );
  ws.on("message", function incoming(message) {
    const { data } = JSON.parse(message);
    switch (data.action) {
      case "chat":
        const { to } = data.payload;
        wss.clients.forEach((client) => {
          if (client.id === to && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
      case "endRequest":
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
      case "request":
        // use requestId if provided (assistor is leaving, sending request for original requestor)
        data.payload.requestId = data.payload.requestId || ws.id;

        // This person already abandoned the requestor, don't request from them again
        const { excludeId } = data.payload;

        console.log({ excludeId });
        wss.clients.forEach((client) => {
          if (
            client !== ws &&
            client.id !== excludeId &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
      case "assist":
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ data }));
          }
        });
        break;
    }
  });
});

console.log(`WS server now listening on port ${PORT} 🚀`);
