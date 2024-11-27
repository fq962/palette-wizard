import { Hero } from "@/components/layout/Hero";
import { PaletteList } from "@/components/PaletteList";
import { SearchTheme } from "@/components/Search";
import { Title } from "@/components/Title";
import { SinglePaletteCard } from "@/components/UI/SinglePaletteCard";
import { getPaletteByQuery } from "@/services/get-palette-by-query";
import { ColorPalette } from "@/types/color-palette";
import {
  addColorPaletteToLocalStorage,
  getColorPaletteFromLocalStorage,
} from "@/utils/features/color-palette-ls";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);
  const [fetchingPalette, setFetchingPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    if (fetchingPalette) return;

    setFetchingPalette(true);
    try {
      const paletteColor = await getPaletteByQuery(query);

      if (paletteColor.success) setColorPalette(paletteColor.response);
      if (!paletteColor.success) console.error(paletteColor.message);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPalette(false);
    }
  };

  const toggleSinglePaletteCard = (color: string | null) => {
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
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
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <Title />
        <SearchTheme
          handleSearch={handleSearch}
          handleChangeColorPalette={(palette) => {
            setColorPalette(palette);
          }}
          loading={fetchingPalette}
        />
        {colorPalette && (
          <PaletteList
            palette={colorPalette}
            onSelectColor={toggleSinglePaletteCard}
          />
        )}
        {selectedColor && <SinglePaletteCard color={selectedColor} />}
      </Hero>
    </motion.div>
  );
}
