import { ColorPalette } from "@/types/color-palette";
import { PaletteCard } from "./UI/PaletteCard";

interface PaletteListProps {
  palette: ColorPalette;
  onSelectColor: (color: string) => void; // Nuevo callback para manejar la selección
}

export const PaletteList = ({
  palette: { colorPalette, summary },
  onSelectColor,
}: PaletteListProps) => (
  <main className="flex flex-col gap-2">
    <header>
      <h2 className="text-lg font-sf-display opacity-75">{summary}</h2>
    </header>
    <div className="grid grid-cols-10 gap-0 lg:gap-4 xl:gap-6">
      {colorPalette.map(({ colorHex, colorName, textColor }, idx) => (
        <PaletteCard
          className="col-span-10 lg:col-span-5 xl:col-span-2 h-52 rounded-none md:rounded-md"
          key={idx}
          color={colorHex}
          name={colorName}
          textColor={textColor}
          onSelectColor={onSelectColor}
        />
      ))}
    </div>
  </main>
);
