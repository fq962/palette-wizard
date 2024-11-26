import { ColorPalette } from "@/types/color-palette";
import { getColorPaletteFromLocalStorage } from "@/utils/features/color-palette-ls";
// import { GenerateColorPalette } from "@/utils/features/GenerateColorPalette";
import { useEffect, useState } from "react";

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

  return (
    <article className="flex flex-col gap-2">
      <search className="flex gap-2 h-12">
        <div className="flex flex-col gap-2 w-full relative">
          <label className="input-group w-full shadow-flat transition-all duration-150 ease-in-out bg-gray-100 has-[:focus]:bg-white">
            <span className="input-group-text">
              <span className="icon-[tabler--search] text-base-content/80 size-6"></span>
            </span>
            <input
              type="search"
              className="input input-lg grow focus:placeholder:opacity-25 transition-all duration-150 ease-in-out disabled:text-black/25 font-sf-display"
              placeholder="Search"
              onFocus={() => setIsTyping(true)}
              onBlur={() => setTimeout(() => setIsTyping(false), 100)} // Delay
              onKeyUp={(e) => {
                if (e.key === "Enter")
                  handleSearch((e.target as HTMLInputElement).value);
              }}
              disabled={loading}
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
                  recentPalettes.slice(0, 3).map((palette, idx) => (
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
        {/* <div className="tooltip">
          <button
            className="tooltip-toggle btn btn-square btn-primary size-12 shadow-flat"
            // TODO! Remove this onClick event, it's only for demonstration purposes
            onClick={() => GenerateColorPalette({ baseColor: "#a35a00" })}
            aria-label="Reload"
          >
            <span className="icon-[tabler--reload]"></span>
          </button>
          <span
            className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
            role="tooltip"
          >
            <span className="tooltip-body">Reload</span>
          </span>
        </div> */}
      </search>
      {loading ? (
        <small className="font-sf-display opacity-75">
          Generating color palettes... 🎨✨
        </small>
      ) : (
        <small className="font-sf-display opacity-75">
          Meet Pallete Wizard, the AI-powered tool that turns your ideas into
          stunning color palettes.
          <br />
          🎨✨ Copy your favorite shades or seamlessly add them to your Tailwind
          project. Colors that inspire, creativity unleashed!
        </small>
      )}
    </article>
  );
};
