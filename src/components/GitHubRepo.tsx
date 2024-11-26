export default function GitHubRepo() {
  return (
    <article className="p-7">
      <a
        href="https://github.com/fq962/palette-wizard"
        target="_blank"
        className="flex items-center gap-2 font-sf-display hover:bg-black/15 p-1 rounded-md transition-colors duration-150 ease-in-out cursor-pointer"
      >
        <span className="icon-[tabler--brand-github]"></span>
        <pre className="text-xs">v0.5</pre>
      </a>
    </article>
  );
}
