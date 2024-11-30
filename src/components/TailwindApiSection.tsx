import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import { useState } from "react";

interface TailwindApiSectionProps {
  colors: Record<number, string>;
}

export const TailwindApiSection = ({ colors }: TailwindApiSectionProps) => {
  const [tailwindVersion, setTailwindVersion] = useState(3);
  const { copyToClipboard } = useCopyToClipboard();

  const formatTailwindTemplateV3 = (colors: Record<number, string>): string => {
    // Form of the JSON object for Tailwind CSS v3
    return (
      `{\n  "colors": {\n    "brand": {\n` +
      Object.entries(colors)
        .map(([key, value]) => `      ${key}: "${value}"`)
        .join(",\n") +
      `\n    }\n  }\n}`
    );
  };

  const formatTailwindTemplateV4 = (colors: Record<number, string>): string => {
    // Form of the JSON object for Tailwind CSS v4
    const themeTemplate = Object.entries(colors)
      .map(([key, value]) => `  --color-brand-${key}: ${value.toLowerCase()};`)
      .join("\n");

    return `@theme {\n${themeTemplate}\n}`;
  };

  const handleSwitchChange = () => {
    setTailwindVersion(tailwindVersion === 3 ? 4 : 3);
  };

  const formattedColors =
    tailwindVersion === 3
      ? formatTailwindTemplateV3(colors)
      : formatTailwindTemplateV4(colors);

  return (
    <section className="w-full py-15">
      <div className="container ">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              API for Tailwind CSS
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Palette Creator</h2>
              <p className="text-gray-500">
                For developers, create and customize your color palette template
                or theme with ease. Copy the generated colors and use them
                directly in your projects.
              </p>
              <p className="text-gray-500">
                Copy and paste your base colors, then generate new ones inspired
                by your palette to explore endless possibilities. Let your
                imagination flow as you experiment with shades, tones, and
                combinations to bring your designs to life.
              </p>
              <p className="text-gray-500">
                This tool is perfect for crafting unique styles that elevate
                your projects and add a creative edge to your interfaces!
              </p>
            </div>
          </div>

          {/* Right Column - Code Preview */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col items-start justify-center border-b p-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Tailwind CSS Version:
                </span>
                <label className="form-control flex items-center gap-1">
                  <span className="label cursor-pointer flex-col items-start">
                    <span className="label-text text-base text-gray-500">
                      v3
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    className="switch"
                    onClick={() => handleSwitchChange()}
                  />
                  <span className="label cursor-pointer flex-col items-start">
                    <span className="label-text text-base text-gray-500">
                      v4
                    </span>
                  </span>
                </label>
              </div>
              <div className="space-y-1.5">
                <p className="text-md text-gray-500">
                  Paste this into your{" "}
                  <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-bold">
                    `tailwind.config.js`
                  </code>
                  {""}
                  file
                </p>
              </div>
            </div>
            <div className="mockup-code bg-base-200/40 rounded-box relative pb-0 before:content-none overflow-hidden">
              <pre
                id="clipboard-source-code"
                className="horizontal-scrollbar text-sm"
              >
                <code>{formattedColors}</code>
              </pre>
              <button
                type="button"
                onClick={() =>
                  copyToClipboard({
                    textToCopy: formattedColors,
                    isGeneralText: true,
                  })
                }
                className="copy-clipboard tooltip absolute end-2 top-2 [--is-toggle-tooltip:false]"
                aria-label="Copy text to clipboard"
                data-clipboard-target="#clipboard-source-code"
                data-clipboard-action="copy"
                data-clipboard-success-text="Copied!"
              >
                <span className="toolttip-toggle btn btn-square btn-primary">
                  <span className="copy-clipboard-default icon-[tabler--clipboard] size-5 transition"></span>
                  <span className="copy-clipboard-success icon-[tabler--clipboard-check] hidden size-5"></span>
                </span>
                <span
                  className="tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible"
                  role="tooltip"
                >
                  <span className="tooltip-body copy-clipboard-success-text">
                    Copy
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
