import { PaletteCard } from "./UI/PaletteCard";

export const PaletteList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    <PaletteCard></PaletteCard>
    <PaletteCard></PaletteCard>
    <PaletteCard></PaletteCard>
    <PaletteCard></PaletteCard>
    <PaletteCard></PaletteCard>
  </div>
);
