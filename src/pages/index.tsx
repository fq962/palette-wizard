import { Hero } from "@/components/layout/Hero";
import { PaletteCard } from "@/components/layout/PaletteCard";
import { SearchTheme } from "@/components/Search";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <Hero>
      <Title></Title>
      <SearchTheme></SearchTheme>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <PaletteCard></PaletteCard>
        <PaletteCard></PaletteCard>
        <PaletteCard></PaletteCard>
        <PaletteCard></PaletteCard>
        <PaletteCard></PaletteCard>
      </div>
    </Hero>
  );
}
