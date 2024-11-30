// useColorPalette.ts
import { useState, useEffect } from "react";
import { ColorPalette } from "@/types/color-palette";
import { getPaletteByQuery } from "@/services/get-palette-by-query";
import {
  addColorPaletteToLocalStorage,
  getColorPaletteFromLocalStorage,
  getUniqueColorPaletteToLocalStorage,
  removeUniqueColorPaletteFromLocalStorage,
} from "@/utils/features/color-palette-ls";

export const useColorPalette = () => {
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);
  const [fetchingPalette, setFetchingPalette] = useState(false);

  const handleSearch = async (query: string) => {
    if (fetchingPalette) return;

    setFetchingPalette(true);
    try {
      const paletteColor = await getPaletteByQuery(query);

      if (paletteColor.success) {
        setColorPalette(paletteColor.response);
      } else {
        console.error(paletteColor.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPalette(false);
    }
  };

  useEffect(() => {
    if (colorPalette) {
      addColorPaletteToLocalStorage(colorPalette);
    }
  }, [colorPalette]);

  useEffect(() => {
    const palettes = getColorPaletteFromLocalStorage();
    const uniquePalette = getUniqueColorPaletteToLocalStorage();

    console.log({ uniquePalette });

    if (uniquePalette) {
      setColorPalette(uniquePalette);
      setTimeout(removeUniqueColorPaletteFromLocalStorage, 1000);
    } else if (palettes && palettes.length > 0) {
      setColorPalette(palettes[0]);
    }
  }, []);

  return {
    colorPalette,
    setColorPalette,
    fetchingPalette,
    handleSearch,
  };
};
