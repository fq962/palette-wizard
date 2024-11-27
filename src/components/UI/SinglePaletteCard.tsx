import { GenerateColorPalette } from "@/utils/features/GenerateColorPalette";

interface SinglePaletteCardProps {
  color: string;
}

export const SinglePaletteCard = ({ color }: SinglePaletteCardProps) => {
  const palette = GenerateColorPalette({
    baseColor: color,
  }); // Generar paleta basada en el color recibido

  const colors: Record<number, string> = palette ? palette.colors.brand : {};

  return (
    <div className="w-full pt-8">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-10 gap-6">
        {Object.entries(colors).map(([index, color]) => (
          <div
            key={index}
            className="aspect-square rounded-lg shadow-sm flex items-center justify-center h-14 w-20"
            style={{ backgroundColor: color }}
          >
            <span className="text-xs font-mono text-gray-800 px-2 py-1 rounded">
              {color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
