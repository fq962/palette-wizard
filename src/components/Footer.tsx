import Collab from "./Collab";
import CreditsAndLinks from "./CreditsAndLinks";
import GitHubRepo from "./GitHubRepo";

export default function Footer() {
  return (
    <footer className="flex flex-col xl:flex-row justify-between w-dvw px-6 py-2 gap-6 items-center">
      <span className="flex gap-2 items-end font-sf-display">
        made with ❤️ by <Collab></Collab>
      </span>
      <CreditsAndLinks></CreditsAndLinks>
      <GitHubRepo></GitHubRepo>
    </footer>
  );
}
