import Collab from "./Collab";
import CreditsAndLinks from "./CreditsAndLinks";
import GitHubRepo from "./GitHubRepo";

export default function Footer() {
  return (
    <footer className="flex flex-col xl:flex-row justify-between w-dvw px-6 py-2 gap-6 items-center">
      <Collab></Collab>
      <CreditsAndLinks></CreditsAndLinks>
      <GitHubRepo></GitHubRepo>
    </footer>
  );
}
