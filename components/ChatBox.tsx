import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ChatBox.module.css";

export type ChatMessage = {
  to: string;
  from: string;
  message: string;
};

type Props = {
  messages: ChatMessage[];
  myUniqueId: string;
  sendChatMessage: ({ message }: { message: string }) => void;
};

export const ChatBox: React.FC<Props> = ({
  messages,
  myUniqueId,
  sendChatMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.scrollIntoView();
    }
  }, [messages]);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      sendChatMessage({ message: inputValue });
      setInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageList}>
        {messages.map(({ from, message }, i) => {
          return (
            <span
              key={`${message}-${i}`}
              className={from === myUniqueId ? styles.me : styles.them}
            >
              {message}
            </span>
          );
        })}
        <div ref={anchorRef} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          onKeyDown={onKeyDown}
          ref={inputRef}
          autoFocus
          value={inputValue}
          placeholder="Aa"
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
          type="text"
        />
        <button
          disabled={inputValue.length === 0}
          onClick={() => {
            sendChatMessage({ message: inputValue });
            setInputValue("");
          }}
          className={styles.send}
        >
          Send
        </button>
      </div>
    </div>
  );
};
