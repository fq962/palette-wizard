import { ColorPalette } from "@/types/color-palette";

const PALETTE_COLOR_KEY = "palettes";
const UNIQUE_PALETTE_COLOR_KEY = "unique-palette";

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

export const getUniqueColorPaletteToLocalStorage = (): ColorPalette | null => {
  const palette = localStorage.getItem(UNIQUE_PALETTE_COLOR_KEY);

  if (palette) {
    return JSON.parse(palette);
  }

  return null;
};

export const setUniqueColorPaletteToLocalStorage = (palette: ColorPalette) => {
  localStorage.setItem(UNIQUE_PALETTE_COLOR_KEY, JSON.stringify(palette));
};

export const removeUniqueColorPaletteFromLocalStorage = () => {
  localStorage.removeItem(UNIQUE_PALETTE_COLOR_KEY);
};
