import { ColorPalette } from "@/types/color-palette";

// Componente para mostrar las búsquedas recientes
const RecentSearches = ({
  recentPalettes,
  isTyping,
  handleChangeColorPalette,
}: {
  recentPalettes: ColorPalette[];
  isTyping: boolean;
  handleChangeColorPalette: (palette: ColorPalette) => void;
}) => {
  if (recentPalettes.length === 0) return null;

  return (
    <div
      className={`absolute top-14 left-0 w-full bg-white rounded-md p-2 z-50 border shadow-flat transition-all ${
        isTyping
          ? "animate-chibolita-enter opacity-95"
          : "animate-chibolita-exit opacity-0"
      }`}
    >
      <ul className="flex flex-col gap-6 xl:gap-2">
        <li>
          <h5 className="opacity-75 font-sf-display-bold">Recent searches</h5>
        </li>
        {recentPalettes.slice(0, 5).map((palette, idx) => (
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
      </ul>
    </div>
  );
};

export default RecentSearches;
