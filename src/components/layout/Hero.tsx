import { PropsWithChildren } from "react";
import Head from "next/head";

export const Hero = ({ children }: PropsWithChildren) => (
  <main className="mx-auto max-w-screen-lg pt-12 flex flex-col gap-12 px-4 mb-25 xl:mb-0">
    <Head>
      <title>
        Palette Wizard - AI-powered tool that turns your ideas into stunning
        color palettes
      </title>
      <meta
        name="description"
        content="Palette Wizard is an AI-powered tool to create stunning color palettes. Copy your favorite shades or seamlessly add them to your Tailwind project. Unleash your creativity!"
      ></meta>
      <meta
        name="keywords"
        content="Palette Wizard, color palettes, AI color tool, Tailwind CSS, color inspiration, creative colors, AI design tools"
      ></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="twitter:title"
        content="Palette Wizard - AI-Powered Color Palette Generator"
      ></meta>
      <meta
        name="twitter:description"
        content="Unleash your creativity with Palette Wizard. Copy or use color palettes in your Tailwind projects seamlessly."
      ></meta>
    </Head>
    {children}
  </main>
);
