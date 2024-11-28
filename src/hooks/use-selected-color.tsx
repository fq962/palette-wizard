// useSelectedColor.ts
import { useState } from "react";

export const useSelectedColor = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const toggleSelectedColor = (color: string | null) => {
    if (color) setSelectedColor(color);
  };

  return {
    selectedColor,
    toggleSelectedColor,
  };
};
