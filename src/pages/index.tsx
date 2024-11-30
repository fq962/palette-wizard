// Home.tsx
import { motion } from "motion/react";
import { Hero } from "@/components/layout/Hero";
import { PaletteList } from "@/components/PaletteList";
import { SearchTheme } from "@/components/Search";
import { Title } from "@/components/Title";
import { SinglePaletteCard } from "@/components/UI/SinglePaletteCard";
import { useColorPalette } from "@/hooks/use-color-palette";
import { useSelectedColor } from "@/hooks/use-selected-color";
import TailwindApiSection from "@/components/TealwindApiSection";

export default function Home() {
  const { colorPalette, setColorPalette, fetchingPalette, handleSearch } =
    useColorPalette();

  const { selectedColor, toggleSelectedColor } = useSelectedColor();

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
          handleChangeColorPalette={setColorPalette}
          loading={fetchingPalette}
        />
        {colorPalette && (
          <PaletteList
            palette={colorPalette}
            onSelectColor={toggleSelectedColor}
          />
        )}
        {selectedColor && <SinglePaletteCard color={selectedColor} />}
        <TailwindApiSection />
      </Hero>
    </motion.div>
  );
}
