import { ColorPalette } from "@/types/color-palette";
import RecentSearches from "./RecentSearches";
import { useEffect, useRef, useState } from "react";
import { useRandomPlaceholder } from "@/hooks/use-random-placeholder";
import { useLoadingMessages } from "@/hooks/use-loading-messages";
import { LOADING_MESSAGES } from "@/constants/loading-messages";
import { getColorPaletteFromLocalStorage } from "@/utils/features/color-palette-ls";
import { PLACEHOLDERS } from "@/constants/placeholders";

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
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholder = useRandomPlaceholder(PLACEHOLDERS);
  const loadingMessage = useLoadingMessages(
    loading,
    LOADING_MESSAGES,
    "Generating color palettes... 🎨✨"
  );

  useEffect(() => {
    const palettes = getColorPaletteFromLocalStorage();
    if (palettes) setRecentPalettes(palettes);
  }, [loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <article className="flex flex-col gap-2">
      <div className="flex gap-2 h-12">
        <div className="flex flex-col gap-2 w-full relative">
          <label className="input-group w-full border-0 transition-all duration-150 ease-in-out bg-gray-100 focus:bg-white">
            <span className="input-group-text">
              <span className="icon-[tabler--search] text-base-content/50 size-5"></span>
            </span>
            <input
              ref={inputRef}
              type="search"
              className="input input-lg grow focus:placeholder:opacity-65 transition-all duration-150 ease-in-out disabled:text-black/25 font-sf-display text-sm"
              placeholder={placeholder.toLowerCase()}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setTimeout(() => setIsTyping(false), 100)}
              onKeyUp={(e) => {
                if (e.key === "Enter")
                  handleSearch((e.target as HTMLInputElement).value);
              }}
              disabled={loading}
              maxLength={125}
            />
          </label>
          <RecentSearches
            recentPalettes={recentPalettes}
            isTyping={isTyping}
            handleChangeColorPalette={handleChangeColorPalette}
          />
        </div>
      </div>
      {loading ? (
        <small className="font-sf-display opacity-75 transition-all duration-500 ease-in-out transform animate-slide-up">
          {loadingMessage}
        </small>
      ) : (
        <small className="font-sf-display opacity-75">
          Meet Palette Wizard, the AI-powered tool that turns your ideas into
          stunning color palettes.
          <br />
          🎨✨ Copy your favorite shades or seamlessly add them to your Tailwind
          project. Colors that inspire, creativity unleashed!
        </small>
      )}
    </article>
  );
};
