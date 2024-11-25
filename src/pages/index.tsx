import { Hero } from "@/components/layout/Hero";
import { PaletteList } from "@/components/PaletteList";
import { SearchTheme } from "@/components/Search";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <Hero>
      <Title />
      <SearchTheme />
      <PaletteList />
    </Hero>
  );
}
