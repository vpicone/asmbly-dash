import { useRef, useEffect } from "react";
import { tools } from "../lib/tools";
import styles from "../styles/QRCodes.module.css";
import QRCode from "qrcode";

const Code: React.FC<{ id: string }> = ({ id }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      `https://asmbly-dash.vercel.app/tools/${id}#report`
    );
  }, [id]);

  return <canvas ref={canvasRef} />;
};

const QRCodesPage = () => {
  return (
    <div className={styles.container}>
      {tools.map(({ name, id }) => {
        return (
          <div key={id}>
            <Code id={id} />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QRCodesPage;
