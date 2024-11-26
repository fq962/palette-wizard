import { ColorPalette } from "@/types/color-palette";
import { PaletteCard } from "./UI/PaletteCard";

interface PaletteListProps {
  palette: ColorPalette;
}

export const PaletteList = ({
  palette: { colorPalette, summary },
}: PaletteListProps) => (
  <main className="flex flex-col gap-2">
    <header>
      <h2 className="text-lg font-sf-display opacity-75">{summary}</h2>
    </header>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {colorPalette.map(({ colorHex, colorName, textColor }, idx) => (
        <PaletteCard
          key={idx}
          color={colorHex}
          name={colorName}
          textColor={textColor}
        />
      ))}
    </div>
  </main>
);
