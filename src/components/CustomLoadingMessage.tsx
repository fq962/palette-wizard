import { useEffect, useState } from "react";
import { LOADING_MESSAGES } from "@/constants/loading-messages";

const defaultMessage = "Generating color palettes... 🎨✨";
const intervalSeconds = 1.5; // seconds

export default function CustomLoadingMessage() {
  const [loadingMessage, setLoadingMessage] = useState(defaultMessage);
  const [, setLastIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        setLoadingMessage(
          LOADING_MESSAGES[nextIndex % LOADING_MESSAGES.length]
        );
        console.log("Hola");

        return nextIndex;
      });
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <small className="font-sf-display opacity-75 animate-slide-up">
      {loadingMessage}
    </small>
  );
}
