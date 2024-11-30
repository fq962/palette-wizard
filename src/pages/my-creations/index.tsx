import { useRouter } from "next/router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { Hero } from "@/components/layout/Hero";
import { Title } from "@/components/Title";
import { ColorPalette } from "@/types/color-palette";
import {
  getColorPaletteFromLocalStorage,
  setUniqueColorPaletteToLocalStorage,
} from "@/utils/features/color-palette-ls";

export default function MyCreations() {
  const router = useRouter();
  const [recentPalettes, setRecentPalettes] = useState<ColorPalette[]>([]);

  useEffect(() => {
    const palettes = getColorPaletteFromLocalStorage();
    if (palettes) setRecentPalettes(palettes);
  }, []);

  const handleChangeColorPalette = (palette: ColorPalette) => {
    setUniqueColorPaletteToLocalStorage(palette);
    // Redireccionar a /
    router.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <Title />
        <main className="flex flex-col font-sf-display mb-6">
          {recentPalettes.length ? (
            <ul className="flex flex-col gap-6 xl:gap-2">
              <li>
                <h5 className="opacity-75 font-sf-display-bold">
                  All recent palettes
                </h5>
              </li>
              {recentPalettes.map((palette, idx) => (
                <li
                  key={idx}
                  className="flex flex-col xl:flex-row gap-2 justify-between p-1 rounded-md cursor-pointer font-sf-display opacity-75 hover:opacity-100 transition-colors duration-150 ease-in-out hover:bg-gray-200"
                  onClick={() => handleChangeColorPalette(palette)}
                >
                  {palette.summary}
                  <span className="flex justify-between items-center gap-2">
                    <span className="flex gap-2 items-center">
                      {palette.colorPalette.map((color, idx) => (
                        <span
                          key={idx}
                          className="size-3 rounded-full"
                          style={{ backgroundColor: color.colorHex }}
                        ></span>
                      ))}
                    </span>
                    <span className="icon-[tabler--arrow-right] ml-3"></span>
                  </span>
                </li>
              ))}
              <li className="mt-12">
                <h5 className="opacity-75 font-sf-display-bold">
                  There are {recentPalettes.length} palettes saved
                </h5>
              </li>
            </ul>
          ) : (
            <h5 className="opacity-75 font-sf-display-bold">
              No palettes saved yet
            </h5>
          )}
        </main>
      </Hero>
    </motion.div>
  );
}
