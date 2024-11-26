import { Hero } from "@/components/layout/Hero";
import { PaletteList } from "@/components/PaletteList";
import { SearchTheme } from "@/components/Search";
import { Title } from "@/components/Title";
import { getPaletteByQuery } from "@/services/get-palette-by-query";
import { ColorPalette } from "@/types/color-palette";
import {
  addColorPaletteToLocalStorage,
  getColorPaletteFromLocalStorage,
} from "@/utils/features/color-palette-ls";
import { useEffect, useState } from "react";

export default function Home() {
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);

  const handleSearch = async (query: string) => {
    try {
      const paletteColor = await getPaletteByQuery(query);

      if (paletteColor.success) setColorPalette(paletteColor.response);
      if (!paletteColor.success) console.error(paletteColor.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Guardar la paleta de colores en el localStorage
    if (!colorPalette) return;
    addColorPaletteToLocalStorage(colorPalette);
  }, [colorPalette]);

  useEffect(() => {
    // Obtener la paleta de colores del localStorage
    const palettes = getColorPaletteFromLocalStorage();
    if (palettes) setColorPalette(palettes[0]);
  }, []);

  return (
    <Hero>
      <Title />
      <SearchTheme handleSearch={handleSearch} />
      {colorPalette && <PaletteList palette={colorPalette} />}
    </Hero>
  );
}
