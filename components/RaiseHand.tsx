import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useWebSocket from "react-use-websocket";
import styles from "./RaiseHand.module.css";

export const RaiseHand: React.FC<{ tool: string }> = ({ tool }) => {
  const [toastId, setToastId] = useState("");
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    "wss://api.asmbly.space/ws/"
  );

  useEffect(() => {
    if (lastJsonMessage?.data) {
      switch (lastJsonMessage.data.action) {
        case "request":
          toast(
            (t) => (
              <>
                <div
                  style={{
                    marginRight: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Help has been requested at the{" "}
                  {lastJsonMessage.data.payload.tool}
                </div>
                <div className={styles.toastActions}>
                  <button
                    className={styles.toastButton}
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Dismiss
                  </button>
                  <button
                    className={`${styles.toastButton} ${styles.helpButton}`}
                    onClick={() => {
                      offerHelp(lastJsonMessage.data.payload.requestId);
                      toast.success(
                        `Thank you! Rendezvous at the ${lastJsonMessage.data.payload.tool} station.`,
                        { id: t.id, icon: "👏" }
                      );
                    }}
                  >
                    Help
                  </button>
                </div>
              </>
            ),
            { duration: 5000, style: { maxWidth: "800px" } }
          );
          break;
        case "assist":
          toast.success("Help is on the way!", {
            id: toastId,
            icon: "🙏",
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

  const isRequesting = toastId !== "";

  return (
    <div className={styles.wrapper}>
      <div className={styles.controlBar}>
        {isRequesting ? (
          <>
            <button
              className={styles.actionButton}
              onClick={() => {
                toast.success("Request resolved!", { id: toastId });
                setToastId("");
              }}
            >
              Resolve
            </button>
            <button
              className={styles.actionButton}
              onClick={() => {
                toast("Request for help canceled", { id: toastId });
                setToastId("");
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              id="request-help"
              className={styles.raiseHandButton}
              onClick={requestHelp}
            >
              <HighFive />
            </button>
            <label htmlFor="request-help">Request help</label>
          </>
        )}
      </div>
      <Toaster />
    </div>
  );
};

const HighFive = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    height="48"
    width="48"
  >
    <path
      fill="var(--text)"
      d="M31.36 26h-.72v-8.618a5.617 5.617 0 0 0-4.334-5.487.36.36 0 0 1-.063-.679 3.062 3.062 0 0 0 1.817-2.795c0-1.688-1.372-3.061-3.06-3.061s-3.06 1.373-3.06 3.061c0 1.207.713 2.304 1.817 2.795a.36.36 0 0 1-.264.669c-2.979-1.021-4.527-2.321-5.668-3.48-.1.475-.395.967-.879 1.471l-.444.458c1.539 1.576 3.753 3.822 3.753 3.822a.357.357 0 0 1 .104.253V26h-.719V14.557c-.453-.46-2.299-2.333-3.64-3.707-1.341 1.374-3.187 3.247-3.64 3.707V26h-.72V14.409c0-.095.037-.186.104-.253 0 0 3.373-3.42 4.685-4.781.487-.506.729-.963.716-1.36-.008-.269-.139-.521-.388-.75-.254-.233-.782-.719-1.9.465l-.181.192c-1.201 1.278-2.563 2.726-6.171 3.962a.36.36 0 0 1-.264-.669A3.062 3.062 0 0 0 10.06 8.42C10.061 6.733 8.688 5.36 7 5.36S3.939 6.733 3.939 8.42c0 1.207.714 2.304 1.819 2.795a.36.36 0 0 1-.063.679 5.62 5.62 0 0 0-4.335 5.488V26H.64v-8.618a6.332 6.332 0 0 1 4.088-5.942A3.784 3.784 0 0 1 3.22 8.42c0-2.084 1.696-3.78 3.78-3.78s3.78 1.696 3.78 3.78a3.77 3.77 0 0 1-.579 2.008c2.04-.967 3.007-1.997 3.95-3l.182-.193c1.066-1.128 2.047-1.296 2.91-.501.099.09.186.185.262.284l.22.234c.959 1.023 2.019 2.154 4.062 3.154a3.76 3.76 0 0 1-.567-1.986c0-2.084 1.696-3.78 3.78-3.78s3.78 1.696 3.78 3.78a3.783 3.783 0 0 1-1.508 3.019 6.334 6.334 0 0 1 4.088 5.942V26z"
    />
  </svg>
);
