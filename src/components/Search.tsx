export const SearchTheme = () => (
  <article className="flex flex-col gap-2">
    <search className="flex gap-2 h-12">
      <label className="input-group w-full shadow-flat transition-all duration-150 ease-in-out">
        <span className="input-group-text">
          <span className="icon-[tabler--search] text-base-content/80 size-6"></span>
        </span>
        <input
          type="search"
          className="input input-lg grow focus:placeholder:opacity-25 transition-all duration-150 ease-in-out"
          placeholder="Search"
        />
      </label>
      <div className="tooltip">
        <button
          className="tooltip-toggle btn btn-square btn-primary size-12 shadow-flat"
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
      </div>
    </search>
    <small className="font-sf-display opacity-75">
      Meet Pallete Wizard, the AI-powered tool that turns your ideas into
      stunning color palettes.
      <br />
      🎨✨ Copy your favorite shades or seamlessly add them to your Tailwind
      project. Colors that inspire, creativity unleashed!
    </small>
  </article>
);
