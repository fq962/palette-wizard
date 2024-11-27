import { GenerateColorPalette } from "@/utils/features/GenerateColorPalette";
import { useState } from "react";

interface SinglePaletteCardProps {
  color: string;
}

export const SinglePaletteCard = ({ color }: SinglePaletteCardProps) => {
  const [copiedCardIndex, setCopiedCardIndex] = useState<number | null>(null);

  const handleCopyClick = (color: string, index: number) => {
    setCopiedCardIndex(index); // Registrar el card copiado
    copyToClipboard(color); // Copiar al portapapeles
    setTimeout(() => {
      setCopiedCardIndex(null); // Regresar al estado inicial después de 1.5 segundos
    }, 1000);
  };

  const copyToClipboard = (colorToCopy: string) => {
    navigator.clipboard.writeText(colorToCopy);
  };

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
            className="aspect-square group relative rounded-lg shadow-sm flex items-center justify-center h-14 w-20 transition-all duration-500"
            style={{ backgroundColor: color }}
          >
            {/* Texto del color */}
            <span className="text-xs font-mono text-gray-800 px-2 py-1 rounded opacity-80 transition-transform duration-500 group-hover:translate-y-[-10px]">
              {color}
            </span>

            {/* Ícono de copiar */}
            {copiedCardIndex !== Number(index) && (
              <span
                onClick={() => handleCopyClick(color, Number(index))}
                className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[10px] bottom-3 transition-all duration-500 text-gray-700 icon-[tabler--copy] absolute"
              ></span>
            )}

            {/* Texto "Copied" */}
            {copiedCardIndex === Number(index) && (
              <span className="opacity-80 font-bold translate-y-[-20px] -rotate-6 text-base-content/80 absolute bottom-2 transition-opacity duration-500 animate-chibolita-exit">
                Copied!
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
