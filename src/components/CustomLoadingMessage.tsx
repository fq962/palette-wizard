import { useEffect, useState } from "react";
import { LOADING_MESSAGES } from "@/constants/loading-messages";

const defaultMessage = "Generating color palettes... 🎨✨";
const intervalSeconds = 1.5; // seconds

export default function CustomLoadingMessage() {
  const [state, setState] = useState({
    message: defaultMessage,
    isFading: false,
    index: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => ({
        ...prevState,
        isFading: true, // Inicia la animación de desvanecimiento
      }));

      setTimeout(() => {
        setState((prevState) => ({
          message:
            LOADING_MESSAGES[(prevState.index + 1) % LOADING_MESSAGES.length],
          isFading: false, // Termina la animación al cambiar el mensaje
          index: prevState.index + 1,
        }));
      }, 300); // Sincronizado con la duración de la animación
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <small
      className={`font-sf-display animate-slide-up transition-opacity duration-300 ${
        state.isFading ? "opacity-50" : "opacity-90"
      }`}
    >
      {state.message}
    </small>
  );
}
