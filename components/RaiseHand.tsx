import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useWebSocket from "react-use-websocket";

export const RaiseHand: React.FC<{ tool: string }> = ({ tool }) => {
  const [toastId, setToastId] = useState("");
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    "wss://api.asmbly.space/ws"
  );

  useEffect(() => {
    if (lastJsonMessage?.data) {
      switch (lastJsonMessage.data.action) {
        case "request":
          toast(
            (t) => (
              <span>
                Help has been requested at the{" "}
                {lastJsonMessage.data.payload.tool}
                <button
                  onClick={() => {
                    offerHelp(lastJsonMessage.data.payload.requestId);
                    toast.success(
                      `Thank you! Rendezvous at the ${lastJsonMessage.data.payload.tool} station.`,
                      { id: t.id }
                    );
                  }}
                >
                  Help
                </button>
                <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
              </span>
            ),
            { duration: 5000 }
          );
          break;
        case "assist":
          toast.success("Help is on the way!", {
            id: toastId,
          });
          setToastId("");
      }
    }
  }, [lastJsonMessage]);

  const offerHelp = (requestId: string) => {
    sendJsonMessage({
      data: {
        payload: {
          requestId,
        },
        action: "assist",
      },
    });
  };

  const requestHelp = () => {
    sendJsonMessage({
      data: {
        payload: {
          tool,
        },
        action: "request",
      },
    });
    setToastId(toast.loading("Your hand has been raised!"));
  };

  return (
    <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
      <button onClick={requestHelp}>Request help for {tool}</button>
      <button onClick={() => {}}>success</button>
      <button
        onClick={() => {
          toast("Request for help canceled", { id: toastId });
          setToastId("");
        }}
      >
        dismiss
      </button>
      <Toaster />
    </div>
  );
};
