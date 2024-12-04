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
  const [lockedColors, setLockedColors] = useState<string[]>([]); // Estado para colores bloqueados
  const [fetchingPalette, setFetchingPalette] = useState(false);

  const handleSearch = async (query: string) => {
    if (fetchingPalette) return;

    setFetchingPalette(true);
    try {
      const paletteColor = await getPaletteByQuery(query);

      if (paletteColor.success) {
        const updatedPalette = integrateLockedColors(
          paletteColor.response,
          lockedColors
        );
        setColorPalette(updatedPalette);
      } else {
        console.error(paletteColor.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPalette(false);
    }
  };

  const toggleLockColor = (color: string) => {
    setLockedColors((prev) =>
      prev.includes(color)
        ? prev.filter((lockedColor) => lockedColor !== color)
        : [...prev, color]
    );
  };

  const integrateLockedColors = (
    newPalette: ColorPalette,
    lockedColors: string[]
  ): ColorPalette => {
    if (!newPalette.colorPalette) return newPalette;

    // Crear una nueva paleta integrando los colores bloqueados
    const updatedPaletteColors = newPalette.colorPalette.map(
      (colorData, idx) => {
        const lockedColor = lockedColors[idx];
        return lockedColor
          ? {
              colorHex: lockedColor,
              colorName: "Locked", // O cualquier nombre adecuado
              textColor: "#000000", // Texto negro o ajustado según sea necesario
            }
          : colorData;
      }
    );

    return {
      ...newPalette,
      colorPalette: updatedPaletteColors,
    };
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
    toggleLockColor,
  };
};
