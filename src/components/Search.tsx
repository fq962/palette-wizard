import { ColorPalette } from "@/types/color-palette";
import { getColorPaletteFromLocalStorage } from "@/utils/features/color-palette-ls";
// import { GenerateColorPalette } from "@/utils/features/GenerateColorPalette";
import { useEffect, useRef, useState } from "react";

interface SearchThemeProps {
  handleSearch: (query: string) => void;
  handleChangeColorPalette: (palette: ColorPalette) => void;
  loading: boolean;
}

export const SearchTheme = ({
  handleSearch,
  handleChangeColorPalette,
  loading,
}: SearchThemeProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const [recentPalettes, setRecentPalettes] = useState<ColorPalette[]>([]);
  const [placeholder, setPlaceholder] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const placeholders = [
      "Search for 'Ocean waves' or 'Retro vibes'",
      "Explore 'Autumn tones' or 'Spring bloom'",
      "Find palettes for 'Website UI' or 'Interior decor'",
      "Look up 'Forest greens' or 'Mountain mist'",
      "Try 'Calm blues' or 'Energetic reds'",
      "Search for 'Japanese zen' or 'Tropical vibes'",
      "Type 'Christmas cheer' or 'Halloween spooky'",
      "Look for 'Wedding whites' or 'Birthday fun'",
      "Discover palettes inspired by 'Desert sunsets'",
      "Start with 'Soft pink' or 'Deep navy'",
      "Search for 'Vintage tones' or 'Futuristic neon'",
      "Explore 'Golden hour' or 'Lunar glow'",
      "Find 'Candy shop' or 'Stormy skies'",
      "Type 'Peach sorbet' or 'Velvet night'",
      "Look up 'Rainbow magic' or 'Chocolate delight'",
    ];

    // Seleccionar un placeholder aleatorio
    const randomPlaceholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];
    setPlaceholder(randomPlaceholder);
  }, []); // Ejecuta al montar el componente

  useEffect(() => {
    if (!loading) {
      setLoadingMessage("Generating color palettes... 🎨✨");
      return;
    }
    const messages = [
      "Stealing Van Gogh's palette... 🎨",
      "Recreating the colors of the rainbow... 🌈",
      "Mixing paints like Picasso... 🖌️",
      "Drawing inspiration from the stars... ✨",
      "Finding hues that spark joy... 🌟",
      "Generating magic shades... 🪄",
      "Exploring deep blues and vivid reds... 🔵🔴",
      "Designing the perfect gradient... 🌄",
      "Unleashing your inner artist... 👩‍🎨",
      "Picking colors from a dream... 💤",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLoadingMessage(messages[index]);
      index = (index + 1) % messages.length; // Ciclo infinito
    }, 2000);

    return () => clearInterval(interval); // Limpieza al desmontar
  }, [loading]);

  useEffect(() => {
    const paletts = getColorPaletteFromLocalStorage();
    if (paletts) setRecentPalettes(paletts);
  }, []);

  useEffect(() => {
    if (!loading) {
      const paletts = getColorPaletteFromLocalStorage();
      if (paletts) setRecentPalettes(paletts);
    }

    if (loading) {
      setIsTyping(false);
    }
  }, [loading]);

  useEffect(() => {
    inputElement.current?.focus();
  }, []);

  return (
    <article className="flex flex-col gap-2">
      <search className="flex gap-2 h-12">
        <div className="flex flex-col gap-2 w-full relative">
          <label className="input-group w-full border-0 transition-all duration-150 ease-in-out bg-gray-100 has-[:focus]:bg-white">
            <span className="input-group-text">
              <span className="icon-[tabler--search] text-base-content/50 size-5"></span>
            </span>
            <input
              ref={inputElement}
              autoFocus
              type="search"
              className="input input-lg grow focus:placeholder:opacity-65 transition-all duration-150 ease-in-out disabled:text-black/25 font-sf-display text-sm"
              placeholder={placeholder.toLowerCase()}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setTimeout(() => setIsTyping(false), 100)} // Delay
              onKeyUp={(e) => {
                if (e.key === "Enter")
                  handleSearch((e.target as HTMLInputElement).value);
              }}
              disabled={loading}
              maxLength={125}
            />
          </label>
          {/* Lista de las últimas búsquedas */}
          {recentPalettes.length > 0 && (
            <div
              className={`absolute top-14 left-0 w-full bg-white rounded-md p-2 z-50 border shadow-flat
                transition-all ${
                  isTyping
                    ? "animate-chibolita-enter"
                    : "animate-chibolita-exit"
                }`}
            >
              {/* Lista de las últimas búsquedas */}
              <ul className="flex flex-col gap-6 xl:gap-2">
                <li>
                  <h5 className="opacity-75 font-sf-display-bold">
                    Recent searches
                  </h5>
                </li>
                {
                  // Maximo 3 busquedas
                  recentPalettes.slice(0, 5).map((palette, idx) => (
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
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </search>
      {loading ? (
        <small
          className="font-sf-display opacity-75 transition-all duration-500 ease-in-out transform animate-slide-up"
          key={loadingMessage}
        >
          {loadingMessage || "Generating color palettes... 🎨✨"}
        </small>
      ) : (
        <small className="font-sf-display opacity-75">
          Meet Palete Wizard, the AI-powered tool that turns your ideas into
          stunning color palettes.
          <br />
          🎨✨ Copy your favorite shades or seamlessly add them to your Tailwind
          project. Colors that inspire, creativity unleashed!
        </small>
      )}
    </article>
  );
};
