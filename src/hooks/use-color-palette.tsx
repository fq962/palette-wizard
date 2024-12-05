// useColorPalette.ts
import { useState, useEffect } from "react";
import { ColorPalette, ColorPaletteEntry } from "@/types/color-palette";
import { getPaletteByQuery } from "@/services/get-palette-by-query";
import {
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
        const mergedPalette = mergeColorPalette(
          paletteColor.response.colorPalette
        );

        localStorage.setItem("colorsLocked", JSON.stringify(mergedPalette));

        setColorPalette({
          ...paletteColor.response,
          colorPalette: mergedPalette, // Usar la nueva paleta generada
        });
      } else {
        console.error(paletteColor.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPalette(false);
    }
  };

  const mergeColorPalette = (newColorPalette: ColorPaletteEntry[]) => {
    const localStoragePalette: ColorPaletteEntry[] = JSON.parse(
      localStorage.getItem("colorsLocked") || "[]"
    );

    // Mantener los colores bloqueados
    const lockedColors = localStoragePalette.filter((color) => color.isLocked);

    // Reemplazar colores desbloqueados por los del JSON recibido
    const updatedColors = localStoragePalette.map((color, index) => {
      if (color.isLocked) {
        // Si está bloqueado, se conserva
        return color;
      }
      // Si no está bloqueado, se toma del recibido, manteniendo el orden
      return newColorPalette[index];
    });

    // Asegurarse de que los colores bloqueados están en su posición original
    lockedColors.forEach((lockedColor) => {
      const index = localStoragePalette.findIndex(
        (color) => color.colorHex === lockedColor.colorHex
      );
      updatedColors[index] = lockedColor;
    });

    return updatedColors.slice(0, localStoragePalette.length);
  };

  useEffect(() => {
    const palettes = getColorPaletteFromLocalStorage();
    const uniquePalette = getUniqueColorPaletteToLocalStorage();

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
