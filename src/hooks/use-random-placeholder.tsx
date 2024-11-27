import { useEffect, useState } from "react";

// Custom Hook para manejar el placeholder aleatorio
export const useRandomPlaceholder = (placeholders: string[]) => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const randomPlaceholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];
    setPlaceholder(randomPlaceholder);
  }, [placeholders]);

  return placeholder;
};
