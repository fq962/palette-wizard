import { ColorPalette } from "@/types/color-palette";

const PALETTE_COLOR_KEY = "palettes";

export const addColorPaletteToLocalStorage = (palette: ColorPalette) => {
  const palettes = getColorPaletteFromLocalStorage() || [];

  const isPaletteExist = palettes.some((p) => p.summary === palette.summary);

  if (isPaletteExist) return;

  palettes.unshift(palette);
  localStorage.setItem(PALETTE_COLOR_KEY, JSON.stringify(palettes));
};

export const getColorPaletteFromLocalStorage = (): ColorPalette[] | null => {
  const palettes = localStorage.getItem(PALETTE_COLOR_KEY);

  if (palettes) {
    return JSON.parse(palettes);
  }

  return null;
};
