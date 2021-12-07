import React from "react";
import styles from "./ChatBox.module.css";

export const ChatBox: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.messageList}>
        <li className={styles.me}>Hell there! this is a message from me</li>
        <li>Hell there! this is a response from them</li>
        <li>This is another response</li>
        <li className={styles.me}>A short one from me</li>
        <li className={styles.me}>Then a long one me</li>
        <li className={styles.me}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          assumenda incidunt magnam perspiciatis ipsum, iure corrupti quaerat
          tempora nihil quidem impedit est reprehenderit ducimus hic consectetur
          ea placeat itaque cum!
        </li>
        <li className={styles.me}>Hell there! this is a message from me</li>
        <li>Hell there! this is a response from them</li>
        <li>This is another response</li>
        <li className={styles.me}>A short one from me</li>
        <li className={styles.me}>Then a long one me</li>
        <li className={styles.me}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          assumenda incidunt magnam perspiciatis ipsum, iure corrupti quaerat
          tempora nihil quidem impedit est reprehenderit ducimus hic consectetur
          ea placeat itaque cum!
        </li>
      </ul>
    </div>
  );
};
