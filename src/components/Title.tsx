export const Title = () => (
  <div className="flex items-center justify-center">
    <span className="flex flex-col relative group">
      <h4 className="text-4xl font-sf-display-bold opacity-75 absolute group-hover:scale-105 group-hover:-translate-x-1.5 transition-transform duration-150 ease-in">
        <span>pale</span>
        {/* Esta T, no se muestra, solo es por un error mierda raro de TW */}
        <span className="ml-2 -translate-y-32 rotate-[12deg] hidden">
          t
        </span>
        <span className="ml-2 -translate-y-1.5 rotate-[12deg] inline-block">
          t
        </span>
        <span className="ml-2 -translate-y-1.5 rotate-[-12deg] inline-block">
          t
        </span>
        <span className="ml-2">e</span>
      </h4>
      <h2 className="text-8xl font-sf-display-bold mt-3 ml-2 group-hover:scale-105 transition-transform duration-150 ease-in">
        wizard
      </h2>
    </span>
  </div>
);
