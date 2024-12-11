import Collab from "./Collab";
import CreditsAndLinks from "./CreditsAndLinks";
import GitHubRepo from "./GitHubRepo";

export default function Footer() {
  return (
    <footer className="flex flex-col xl:flex-row justify-between w-dvw px-6 py-2 gap-6 items-center">
      <span className="flex gap-2 items-end font-sf-display w-3/12">
        made with ❤️ by <Collab></Collab>
      </span>
      <CreditsAndLinks className="w-6/12 flex justify-center"></CreditsAndLinks>
      <GitHubRepo className="w-3/12 flex justify-end"></GitHubRepo>
    </footer>
  );
}
