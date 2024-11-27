import { useEffect, useState } from "react";

// Custom Hook para manejar los mensajes de carga
export const useLoadingMessages = (
  loading: boolean,
  messages: string[],
  defaultMessage: string
) => {
  const [loadingMessage, setLoadingMessage] = useState(defaultMessage);

  useEffect(() => {
    if (loading) {
      let index = 0;
      const interval = setInterval(() => {
        setLoadingMessage(messages[index]);
        index = (index + 1) % messages.length;
      }, 2000);

      return () => clearInterval(interval);
    } else {
      setLoadingMessage(defaultMessage);
    }
  }, [loading, messages, defaultMessage]);

  return loadingMessage;
};
