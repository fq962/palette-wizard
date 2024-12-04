import { getVersion } from "@/utils/get-pkg-version";

export default function GitHubRepo(
  { className }: { className?: string } = { className: "" }
) {
  const version = getVersion();
  return (
    <a
      href="https://github.com/fq962/palette-wizard"
      target="_blank"
      className={`flex items-center gap-2 font-sf-display hover:scale-105 p-1 rounded-md transition-all duration-150 ease-in-out cursor-pointer ${className}`}
    >
      <span className="icon-[tabler--brand-github]"></span>
      <pre className="text-xs">v{version}</pre>
    </a>
  );
}
