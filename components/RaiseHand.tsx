import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import useWebSocket from "react-use-websocket";

export const RaiseHand: React.FC<{ tool: string }> = ({ tool }) => {
  const { sendJsonMessage, lastJsonMessage, lastMessage, readyState } =
    useWebSocket("ws://localhost:8090");

  useEffect(() => {
    if (lastJsonMessage?.data.action === "request") {
      toast(
        `Help has been requested at the ${lastJsonMessage.data.payload.tool}`
      );
    }
  }, [lastJsonMessage]);

  const requestHelp = () => {
    sendJsonMessage({
      data: {
        payload: {
          tool,
        },
        action: "request",
      },
    });
    toast("Your hand has been raised!");
  };

  return (
    <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
      <button onClick={requestHelp}>Request help for {tool}</button>
      <Toaster />
    </div>
  );
};
