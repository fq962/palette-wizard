import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import { motion } from "motion/react";
import { useState } from "react";

interface PaletteCardProps {
  color: string;
  name: string;
  textColor: string;
  onSelectColor: (color: string) => void; // Nuevo callback para manejar el clic
  className?: string;
}

export const PaletteCard = ({
  color,
  name,
  textColor,
  onSelectColor,
  className,
}: PaletteCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { copyToClipboard } = useCopyToClipboard();

  const handleCopyClick = () => {
    setIsCopied(true); // Mostrar "Copied"
    copyToClipboard({ textToCopy: color, isGeneralText: false }); // Copiar al portapapeles
    setTimeout(() => {
      setIsCopied(false); // Volver al ícono después de 1.5 segundos
    }, 800);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      // Animate when this value changes:
      animate={{ scale: 1 }}
      // Fade in when the element enters the viewport:
      whileInView={{ opacity: 1 }}
      // Fade out when the element leaves the viewport:
      exit={{ opacity: 0 }}
      // Animate the component when its layout changes:
      layout
      className={`card group relative overflow-hidden shadow-flat ${className}`}
      onClick={() => onSelectColor(color)} // Llamar al callback al hacer clic
      style={{ backgroundColor: color }}
    >
      <div className="card-body flex flex-col items-center justify-center h-full relative transition-all duration-150">
        <h5
          className="card-title mb-2.5 opacity-80 group-hover:translate-y-[-10px] transition-transform duration-150 font-sf-display"
          style={{ color: textColor }}
        >
          {color}
        </h5>
        <p
          className="opacity-80 group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-150 font-sf-display"
          style={{ color: textColor }}
        >
          {name}
        </p>
        <span
          className={`${
            isCopied ? "opacity-0" : "opacity-0 group-hover:opacity-80"
          } group-hover:translate-y-[-20px] icon-[tabler--copy] text-base-content/80 size-6 transition-all duration-150 absolute bottom-8 cursor-pointer`}
          onClick={handleCopyClick}
          style={{ color: textColor }}
        ></span>
        {isCopied && (
          <span
            className="opacity-80 font-bold translate-y-[-20px] -rotate-6 text-base-content/80 absolute bottom-8 transition-opacity duration-150 animate-chibolita-exit"
            style={{ color: textColor }}
          >
            copied!
          </span>
        )}
      </div>
    </motion.div>
  );
};
